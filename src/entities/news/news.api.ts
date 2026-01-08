import { fetcher } from '@/shared/api/fetcher'
import { IPaginationResponse, IResponse } from '@/shared/types'

import { NewsItem } from './news.types'

export const newsApi = {
	getAll: () => fetcher<IPaginationResponse<NewsItem>>('/api/v1/news'),

	getById: (id: number) => fetcher<IResponse<NewsItem>>(`/api/v1/news/${id}`),
}
