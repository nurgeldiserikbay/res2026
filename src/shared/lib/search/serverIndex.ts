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
    const p = path.join(process.cwd(), "public", "search", `index-${locale}.json`)
    
    let docs: Doc[] = []
    try {
      const fileContent = fs.readFileSync(p, { encoding: "utf-8" });
      docs = JSON.parse(fileContent)
      
      // Валидация структуры данных
      if (!Array.isArray(docs)) {
        console.warn(`Search index for locale "${locale}" is not an array. Using empty array.`)
        docs = []
      }
    } catch (error) {
      console.error(`Error loading search index for locale "${locale}":`, error)
      docs = []
    }

    const ms = new MiniSearch<Doc>({
      fields: ["title", "content"], // Поиск по title и content
      storeFields: ["title", "content", "url", "locale"], // Храним все поля для возврата
      searchOptions: { prefix: true, fuzzy: 0.2 },
    })

    if (docs.length > 0) {
      ms.addAll(docs)
    }
    
    cache.__search[locale] = ms
  }

  return cache.__search[locale]
}
