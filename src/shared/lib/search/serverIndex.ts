import MiniSearch from 'minisearch'

export type Doc = { id: string; title: string; content: string; url: string; locale: string }

// Импортируем JSON файлы напрямую из папки data
import indexEn from './data/index-en.json'
import indexKk from './data/index-kk.json'
import indexRu from './data/index-ru.json'

const searchIndexes: Record<string, Doc[]> = {
	en: indexEn as Doc[],
	ru: indexRu as Doc[],
	kk: indexKk as Doc[],
}

const cache = globalThis as unknown as {
	__search?: Record<string, MiniSearch<Doc>>
}

export function getSearch(locale: string) {
	cache.__search ??= {}

	if (!cache.__search[locale]) {
		let docs: Doc[] = []

		try {
			// Получаем данные из импортированных JSON файлов
			docs = searchIndexes[locale] || []

			if (!Array.isArray(docs)) {
				console.warn(`Search index for locale "${locale}" is not an array. Using empty array.`)
				docs = []
			} else {
				console.log(`Search index loaded for locale "${locale}": ${docs.length} documents`)
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
