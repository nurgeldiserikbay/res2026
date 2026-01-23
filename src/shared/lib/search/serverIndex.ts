import { readFileSync } from 'fs'
import MiniSearch from 'minisearch'
import { join } from 'path'

export type Doc = { id: string; title: string; content: string; url: string; locale: string }

const cache = globalThis as unknown as {
	__search?: Record<string, MiniSearch<Doc>>
}

/**
 * Загружает JSON файл индекса поиска
 * Пытается загрузить из public/search/ (для production) или из src/shared/lib/search/data/ (для development)
 */
function loadSearchIndex(locale: string): Doc[] {
	const possiblePaths = [
		// Production путь (файлы копируются в public/)
		join(process.cwd(), 'public', 'search', `index-${locale}.json`),
		// Development путь (исходные файлы)
		join(process.cwd(), 'src', 'shared', 'lib', 'search', 'data', `index-${locale}.json`),
	]

	for (const filePath of possiblePaths) {
		try {
			// eslint-disable-next-line security/detect-non-literal-fs-filename
			const fileContent = readFileSync(filePath, 'utf-8')
			const data = JSON.parse(fileContent) as Doc[]

			if (!Array.isArray(data)) {
				console.warn(`Search index for locale "${locale}" at ${filePath} is not an array.`)
				continue
			}

			console.log(`Search index loaded for locale "${locale}" from ${filePath}: ${data.length} documents`)
			return data
		} catch {
			// Пробуем следующий путь, если файл не найден или произошла ошибка чтения
			continue
		}
	}

	console.warn(`Failed to load search index for locale "${locale}" from any path`)
	return []
}

export function getSearch(locale: string) {
	cache.__search ??= {}

	if (!cache.__search[locale]) {
		let docs: Doc[] = []

		try {
			// Загружаем данные из JSON файлов через fs
			docs = loadSearchIndex(locale)

			if (!Array.isArray(docs)) {
				console.warn(`Search index for locale "${locale}" is not an array. Using empty array.`)
				docs = []
			}
		} catch (error) {
			console.error(`Error loading search index for locale "${locale}":`, error)
			if (error instanceof Error) {
				console.error(`Error message: ${error.message}`)
				console.error(`Error stack: ${error.stack}`)
			}
			docs = []
		}

		const ms = new MiniSearch<Doc>({
			fields: ['title', 'content'], // Поиск по title и content
			storeFields: ['title', 'content', 'url', 'locale'], // Храним все поля для возврата
			// Настройки токенизации для лучшей работы с русским языком
			tokenize: (text) => {
				// Разбиваем текст на слова (поддерживает кириллицу, латиницу, цифры)
				// Используем более универсальную регулярку для кириллицы
				return text.toLowerCase().match(/[а-яёa-z0-9]+/gi) || []
			},
			// Настройки поиска по умолчанию
			searchOptions: {
				prefix: true,
				fuzzy: 0.2,
				boost: { title: 2 }, // Увеличиваем вес заголовка
			},
		})

		if (docs.length > 0) {
			ms.addAll(docs)
			console.log(`Search index loaded for locale "${locale}": ${docs.length} documents`)
		} else {
			console.warn(`No documents found for locale "${locale}"`)
		}

		cache.__search[locale] = ms
	}

	return cache.__search[locale]
}
