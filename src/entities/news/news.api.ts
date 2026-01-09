import { fetcher } from '@/shared/api/fetcher'
import { IPaginationResponse, IResponse } from '@/shared/types'

import { NewsItem, NewsSearchParams } from './news.types'

export const newsApi = {
	getAll: (params: NewsSearchParams = { per_page: 10, current_page: 1 }) => {
		const searchParams = new URLSearchParams()

		if (params.per_page) {
			searchParams.set('per_page', String(params.per_page))
		}
		if (params.current_page) {
			searchParams.set('current_page', String(params.current_page))
		}
		if (params.type) {
			searchParams.set('type', params.type)
		}

		const queryString = searchParams.toString()
		const url = queryString ? `/api/v1/news?${queryString}` : '/api/v1/news'
		return fetcher<IPaginationResponse<NewsItem>>(url)
	},
	getBySlug: (slug: string) => fetcher<IResponse<NewsItem>>(`/api/v1/news/${slug}/slug`),
}
