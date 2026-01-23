import { NextResponse } from "next/server"

import { getSearch } from "@/shared/lib/search/serverIndex"

const SUPPORTED_LOCALES = ["en", "ru", "kk"]
const MAX_CONTENT_LENGTH = 200 // Максимальная длина сокращенного content
const DEFAULT_PER_PAGE = 12 // Количество результатов на странице по умолчанию
const MAX_PER_PAGE = 50 // Максимальное количество результатов на странице

/**
 * Сокращает текст до указанной длины, добавляя многоточие
 */
function truncateContent(content: string, maxLength: number = MAX_CONTENT_LENGTH): string {
  if (!content || content.length <= maxLength) {
    return content
  }
  
  // Обрезаем до maxLength и добавляем многоточие
  return content.substring(0, maxLength).trim() + "..."
}

/**
 * Находит позицию первого вхождения поискового запроса в тексте
 * для более релевантного сокращения
 */
function findRelevantSnippet(content: string, query: string, maxLength: number = MAX_CONTENT_LENGTH): string {
  if (!content || content.length <= maxLength) {
    return content
  }

  const lowerContent = content.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const queryIndex = lowerContent.indexOf(lowerQuery)

  // Если запрос найден в тексте
  if (queryIndex !== -1) {
    // Начинаем с позиции запроса минус половина доступной длины
    const start = Math.max(0, queryIndex - Math.floor(maxLength / 2))
    const end = Math.min(content.length, start + maxLength)
    
    let snippet = content.substring(start, end)
    
    // Добавляем многоточие в начале, если не начало текста
    if (start > 0) {
      snippet = "..." + snippet
    }
    
    // Добавляем многоточие в конце, если не конец текста
    if (end < content.length) {
      snippet = snippet + "..."
    }
    
    return snippet
  }

  // Если запрос не найден, просто обрезаем начало
  return truncateContent(content, maxLength)
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const q = (searchParams.get("q") ?? "").trim()
    const locale = (searchParams.get("locale") ?? "en").toLowerCase()

    // Параметры пагинации
    const page = Math.max(1, Number(searchParams.get("page")) || 1)
    const perPage = Math.min(
      MAX_PER_PAGE,
      Math.max(1, Number(searchParams.get("per_page")) || DEFAULT_PER_PAGE)
    )

    // Валидация query параметра
    if (!q || q.length < 2) {
      return NextResponse.json(
        { items: [], error: "Query must be at least 2 characters long", meta: { total: 0, per_page: perPage, page: 1, totalPages: 0 } },
        { status: 400 }
      )
    }

    // Валидация locale
    if (!SUPPORTED_LOCALES.includes(locale)) {
      return NextResponse.json(
        { items: [], error: `Unsupported locale. Supported: ${SUPPORTED_LOCALES.join(", ")}`, meta: { total: 0, per_page: perPage, page: 1, totalPages: 0 } },
        { status: 400 }
      )
    }

    // Получаем поисковый индекс для локали
    const ms = getSearch(locale)

    // Выполняем поиск по title и content
    // Используем более гибкие настройки поиска
    const searchResults = ms.search(q, {
      prefix: true,
      fuzzy: 0.2,
      boost: { title: 2 }, // Увеличиваем вес совпадений в заголовке
    })

    console.log(`Search query: "${q}", locale: "${locale}", results: ${searchResults.length}`)
    
    // Отладочная информация при отсутствии результатов
    if (searchResults.length === 0) {
      console.log(`No results found for query: "${q}"`)
      console.log(`Try searching with different terms or check if documents are indexed correctly.`)
    }

    // Вычисляем пагинацию
    const total = searchResults.length
    const totalPages = Math.ceil(total / perPage)
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage

    // Получаем результаты для текущей страницы
    const paginatedResults = searchResults.slice(startIndex, endIndex)

    // Обрабатываем результаты: сокращаем content и формируем ответ
    const items = paginatedResults.map((result) => {
      const content = result.content || ""
      const truncatedContent = findRelevantSnippet(content, q, MAX_CONTENT_LENGTH)

      return {
        id: result.id,
        title: result.title || "",
        content: truncatedContent,
        url: result.url || "",
        locale: result.locale || locale,
      }
    })

    return NextResponse.json(
      {
        items,
        meta: {
          total,
          per_page: perPage,
          page,
          totalPages,
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    )
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json(
      { items: [], error: "Internal server error", meta: { total: 0, per_page: DEFAULT_PER_PAGE, page: 1, totalPages: 0 } },
      { status: 500 }
    )
  }
}
