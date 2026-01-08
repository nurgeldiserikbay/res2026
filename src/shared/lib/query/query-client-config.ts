import { QueryClientConfig } from '@tanstack/react-query'

export const queryClientConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 30_000, // 30s данные считаются "свежими"
			gcTime: 5 * 60 * 1000, // 5m хранить в кеше без подписчиков
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
}
