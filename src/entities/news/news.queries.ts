import { queryOptions } from '@tanstack/react-query'

import { newsApi } from './news.api'

// Query keys для новостей
export const newsKeys = {
	all: ['news'] as const,
	lists: () => [...newsKeys.all, 'list'] as const,
	list: (filters?: { type?: string }) => [...newsKeys.lists(), filters] as const,
	details: () => [...newsKeys.all, 'detail'] as const,
	detail: (id: number) => [...newsKeys.details(), id] as const,
}

// Query options для списка новостей
export const newsListQuery = () =>
	queryOptions({
		queryKey: newsKeys.list(),
		queryFn: () => newsApi.getAll(),
		staleTime: 60 * 1000, // 1 минута
	})

// Query options для отдельной новости по ID
export const newsDetailQuery = (id: number) =>
	queryOptions({
		queryKey: newsKeys.detail(id),
		queryFn: () => newsApi.getById(id),
		staleTime: 60 * 1000, // 1 минута
	})

// Query options для отдельной новости по slug
export const newsDetailBySlugQuery = (slug: string) =>
	queryOptions({
		queryKey: [...newsKeys.all, 'slug', slug] as const,
		queryFn: () => newsApi.getBySlug(slug),
		staleTime: 60 * 1000, // 1 минута
	})
