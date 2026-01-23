/**
 * Скрипт для генерации JSON файлов индекса поиска из sitemap.xml
 * 
 * Генерирует файлы в два места:
 * 1. src/shared/lib/search/data/ - основной источник (source of truth)
 * 2. public/search/ - копия для fallback в production
 * 
 * Использование:
 *   pnpm build:search
 *   или
 *   tsx scripts/build-search-from-sitemap.ts
 * 
 * Переменные окружения:
 *   SITE_URL - базовый URL сайта (по умолчанию: http://localhost:3000)
 *   SITEMAP_PATH - путь к sitemap.xml (по умолчанию: http://localhost:3000/sitemap.xml)
 */

import * as cheerio from 'cheerio'
import fs from 'node:fs/promises'
import path from 'node:path'
import { parseStringPromise } from 'xml2js'

type Locale = 'ru' | 'kk' | 'en'

type SearchDoc = {
	id: string
	locale: Locale
	url: string // pathname, например "/ru/about"
	title: string
	content: string
}

const DEFAULT_LOCALES: readonly Locale[] = ['ru', 'kk', 'en'] as const

const SITE_URL = process.env.SITE_URL ?? 'http://localhost:3000'
const SITEMAP_PATH = process.env.SITEMAP_PATH ?? 'http://localhost:3000/sitemap.xml'

function normalizeSpaces(text: string) {
	return text.replace(/\s+/g, ' ').trim()
}

function cleanTextFromHtml(html: string) {
	const $ = cheerio.load(html)

	// вырезаем всё, что обычно не надо индексировать
	$('script, style, noscript, svg').remove()

	// опционально: если хочешь убрать хедер/футер
	$('header, footer').remove()

	const text = $('body').text()
	return normalizeSpaces(text)
}

function extractTitle(html: string) {
	const $ = cheerio.load(html)
	const title = $('title').text() || $('h1').first().text() || ''
	return normalizeSpaces(title)
}

async function readSitemapUrls(): Promise<string[]> {
	let xml: string

	// Проверяем, является ли SITEMAP_PATH URL
	if (SITEMAP_PATH.startsWith('http://') || SITEMAP_PATH.startsWith('https://')) {
		console.log(`Fetching sitemap from URL: ${SITEMAP_PATH}`)
		const res = await fetch(SITEMAP_PATH, {
			headers: { 'User-Agent': 'SearchIndexer/1.0' },
		})
		if (!res.ok) {
			throw new Error(
				`Failed to fetch sitemap from URL: ${SITEMAP_PATH}\n` +
				`Status: ${res.status} ${res.statusText}`
			)
		}
		xml = await res.text()
	} else {
		// Читаем из локального файла
		const sitemapAbs = path.join(process.cwd(), SITEMAP_PATH)
		
		// Проверяем существование файла
		try {
			await fs.access(sitemapAbs)
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(
					`Sitemap file not found at: ${sitemapAbs}\n` +
					`SITEMAP_PATH=${SITEMAP_PATH}\n` +
					`Current working directory: ${process.cwd()}\n` +
					`\nOptions:\n` +
					`1. Ensure the sitemap.xml file exists at the specified path\n` +
					`2. Set SITEMAP_PATH to a URL (e.g., "http://localhost:3000/sitemap.xml")\n` +
					`3. Build Next.js first to generate sitemap.xml, or run dev server and use URL`
				)
			}
			throw new Error(
				`Sitemap file not found at: ${sitemapAbs}\n` +
				`SITEMAP_PATH=${SITEMAP_PATH}\n` +
				`Current working directory: ${process.cwd()}\n` +
				`\nOptions:\n` +
				`1. Ensure the sitemap.xml file exists at the specified path\n` +
				`2. Set SITEMAP_PATH to a URL (e.g., "http://localhost:3000/sitemap.xml")\n` +
				`3. Build Next.js first to generate sitemap.xml, or run dev server and use URL`
			)
		}
		
		console.log(`Reading sitemap from file: ${sitemapAbs}`)
		xml = await fs.readFile(sitemapAbs, 'utf-8')
	}
	
	const parsed = await parseStringPromise(xml)

	const urls: string[] =
		parsed?.urlset?.url
			?.map((u: { loc: string[] }) => u?.loc?.[0])
			.filter(Boolean) ?? []

	if (urls.length === 0) {
		throw new Error('No URLs found in sitemap. Check if sitemap format is correct.')
	}

	console.log(`Found ${urls.length} URLs in sitemap`)
	return urls
}

async function fetchHtml(url: string): Promise<string> {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'SearchIndexer/1.0' },
	})

	if (!res.ok) {
		throw new Error(`Fetch failed ${res.status} for ${url}`)
	}

	return await res.text()
}

function getLocaleFromPathname(pathname: string, locales: readonly Locale[]): Locale | null {
	const parts = pathname.split('/').filter(Boolean)
	const maybe = parts[0] as Locale | undefined
	if (maybe && locales.includes(maybe)) return maybe
	return null
}

function toLocalUrl(fullUrl: string) {
	const u = new URL(fullUrl)
	// домен берём из SITE_URL, путь — из sitemap
	return `${SITE_URL}${u.pathname}${u.search}`
}

async function main() {
	const locales = DEFAULT_LOCALES

	const urls = await readSitemapUrls()

	const docsByLocale: Record<Locale, SearchDoc[]> = {
		ru: [],
		kk: [],
		en: [],
	}

	// Отслеживаем уже обработанные ID для предотвращения дубликатов
	const seenIds = new Set<string>()

	for (const fullUrl of urls) {
		const u = new URL(fullUrl)
		const locale = getLocaleFromPathname(u.pathname, locales)

		// если у тебя английский без префикса, см. блок ниже (комментарий)
		if (!locale) continue

		const docId = `${locale}:${u.pathname}`
		
		// Skip if we've already processed this ID
		if (seenIds.has(docId)) {
			console.warn(`[skip duplicate] ${fullUrl} (ID: ${docId})`)
			continue
		}

		seenIds.add(docId)
		const localUrl = toLocalUrl(fullUrl)

		try {
			const html = await fetchHtml(localUrl)

			const title = extractTitle(html)
			const content = cleanTextFromHtml(html)

			// pathname сохраняем как url
			const url = u.pathname

			docsByLocale[locale].push({
				id: docId,
				locale,
				url,
				title,
				content,
			})

			 
			console.log(`[ok] ${localUrl}`)
		} catch (e) {
			 
			console.warn(`[skip] ${localUrl}: ${(e as Error).message}`)
		}
	}

	// Основной источник данных - src/shared/lib/search/data/
	const sourceDir = path.join(process.cwd(), 'src', 'shared', 'lib', 'search', 'data')
	await fs.mkdir(sourceDir, { recursive: true })

	// Также копируем в public/search/ для production (fallback)
	const publicDir = path.join(process.cwd(), 'public', 'search')
	await fs.mkdir(publicDir, { recursive: true })

	for (const locale of locales) {
		const sourcePath = path.join(sourceDir, `index-${locale}.json`)
		const publicPath = path.join(publicDir, `index-${locale}.json`)
		
		const jsonContent = JSON.stringify(docsByLocale[locale], null, 2)
		
		// Записываем в основной источник
		await fs.writeFile(sourcePath, jsonContent, 'utf-8')
		console.log(`[write] ${sourcePath}: ${docsByLocale[locale].length} docs`)
		
		// Копируем в public для fallback
		await fs.writeFile(publicPath, jsonContent, 'utf-8')
		console.log(`[copy] ${publicPath}: ${docsByLocale[locale].length} docs`)
	}
}

main().catch((e) => {
	console.error('\n❌ Error:', e instanceof Error ? e.message : String(e))
	if (e instanceof Error && e.stack) {
		console.error('\nStack trace:')
		console.error(e.stack)
	}
	process.exit(1)
})
