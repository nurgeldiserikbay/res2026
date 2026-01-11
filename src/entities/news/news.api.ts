import { fetcher } from '@/shared/api/fetcher'
import { Locale } from '@/shared/config/i18n'
import { IPaginationResponse, IResponse } from '@/shared/types'

import { NewsItem, NewsSearchParams } from './news.types'

export const newsApi = {
	getAll: (params: NewsSearchParams = { per_page: 10, page: 1 }, locale: Locale) => {
		const searchParams = new URLSearchParams()
		if (params.per_page) {
			searchParams.set('per_page', String(params.per_page))
		}
		if (params.page) {
			searchParams.set('page', String(params.page))
		}
		if (params.type) {
			searchParams.set('type', params.type)
		}

		const queryString = searchParams.toString()
		const url = queryString ? `/api/v1/news?${queryString}` : '/api/v1/news'
		return fetcher<IPaginationResponse<NewsItem>>(url, { locale })
	},
	getBySlug: (slug: string, locale: Locale) => fetcher<IResponse<NewsItem>>(`/api/v1/news/${slug}/slug`, { locale }),
}
