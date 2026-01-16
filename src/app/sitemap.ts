import { navItems, type NavItem } from '@/entities/nav/model/nav'
import { locales } from '@/shared/config/i18n'

import type { MetadataRoute } from 'next'

type UrlWithPriority = {
	url: string
	priority: number
	important?: boolean
}

/**
 * Рекурсивно собирает все URL из navItems, где ready === true
 */
function collectReadyUrls(items: readonly NavItem[]): UrlWithPriority[] {
	const urls: UrlWithPriority[] = []
	const seenUrls = new Set<string>()

	for (const item of items) {
		if (item.ready && item.href) {
			// Убираем дубликаты
			if (!seenUrls.has(item.href)) {
				seenUrls.add(item.href)
				urls.push({
					url: item.href,
					priority: item.important ? 0.9 : 0.8,
					important: item.important,
				})
			}
		}

		if (item.children) {
			urls.push(...collectReadyUrls(item.children))
		}
	}

	return urls
}

// Принудительно статическая генерация sitemap только при сборке
export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = `https://res2026.kz`

	// Собираем все готовые URL из навигации
	const readyUrls = collectReadyUrls(navItems)

	// Генерируем записи для каждого URL
	const entries: MetadataRoute.Sitemap = []

	// Добавляем главную страницу для каждой локали
	for (const locale of locales) {
		const homeAlternates: Record<string, string> = {}
		for (const loc of locales) {
			homeAlternates[loc] = `${baseUrl}/${loc}`
		}

		entries.push({
			url: `${baseUrl}/${locale}`,
			alternates: {
				languages: homeAlternates,
			},
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1.0,
		})
	}

	// Добавляем остальные страницы для каждой локали
	for (const { url, priority } of readyUrls) {
		// Создаем альтернативные локали для каждого URL
		const alternates: Record<string, string> = {}

		for (const locale of locales) {
			alternates[locale] = `${baseUrl}/${locale}${url}`
		}

		// Создаем отдельную запись для каждой локали
		for (const locale of locales) {
			entries.push({
				url: `${baseUrl}/${locale}${url}`,
				alternates: {
					languages: alternates,
				},
				lastModified: new Date(),
				changeFrequency: 'weekly',
				priority,
			})
		}
	}

	return entries
}
