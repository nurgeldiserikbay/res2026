import { queryOptions } from '@tanstack/react-query'

import { newsApi } from './news.api'
import { NewsSearchParams } from './news.types'

export const newsKeys = {
	all: ['news'] as const,
	lists: () => [...newsKeys.all, 'list'] as const,
	list: (filters?: NewsSearchParams) => [...newsKeys.lists(), filters] as const,
	details: () => [...newsKeys.all, 'detail'] as const,
	detail: (slug: string) => [...newsKeys.details(), slug] as const,
}

export const newsListQuery = (params: NewsSearchParams = { per_page: 10, current_page: 1, type: 'last' }) =>
	queryOptions({
		queryKey: newsKeys.list(params),
		queryFn: () => newsApi.getAll(params),
		staleTime: 60 * 1000,
	})

export const newsDetailQuery = (slug: string) =>
	queryOptions({
		queryKey: newsKeys.detail(slug),
		queryFn: () => newsApi.getBySlug(slug),
		staleTime: 60 * 1000,
	})
