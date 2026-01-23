import MiniSearch from "minisearch"
import fs from "node:fs"
import path from "node:path"

export type Doc = { id: string; title: string; content: string; url: string; locale: string }

const cache = globalThis as unknown as {
  __search?: Record<string, MiniSearch<Doc>>
}

export function getSearch(locale: string) {
  cache.__search ??= {}

  if (!cache.__search[locale]) {
    let docs: Doc[] = []
    
    try {
      // Используем синхронную загрузку для совместимости
      const possiblePaths = [
        path.join(process.cwd(), "public", "search", `index-${locale}.json`),
        path.join(process.cwd(), "..", "public", "search", `index-${locale}.json`),
      ]

      let loaded = false
      for (const p of possiblePaths) {
        try {
          if (fs.existsSync(p)) {
            const fileContent = fs.readFileSync(p, { encoding: "utf-8" })
            docs = JSON.parse(fileContent)
            
            if (!Array.isArray(docs)) {
              console.warn(`Search index for locale "${locale}" is not an array. Using empty array.`)
              docs = []
            } else {
              console.log(`Search index loaded for locale "${locale}" from: ${p}`)
              loaded = true
              break
            }
          }
        } catch (error) {
          // Продолжаем пробовать другие пути
          continue
        }
      }

      if (!loaded) {
        console.error(`Search index file not found for locale "${locale}"`)
        console.error(`Tried paths:`, possiblePaths)
        console.error(`Current working directory: ${process.cwd()}`)
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
      fields: ["title", "content"], // Поиск по title и content
      storeFields: ["title", "content", "url", "locale"], // Храним все поля для возврата
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
