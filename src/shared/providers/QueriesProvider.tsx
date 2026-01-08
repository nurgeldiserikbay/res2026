'use client'

import { QueryClient, QueryClientProvider, HydrationBoundary, DehydratedState } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { queryClientConfig } from '@/shared/lib/query/query-client-config'

interface QueriesProviderProps {
	children: ReactNode
	dehydratedState?: DehydratedState
}

export function QueriesProvider({ children, dehydratedState }: QueriesProviderProps) {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig))

	return (
		<QueryClientProvider client={queryClient}>
			{dehydratedState ? <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary> : children}
			{!appConfig.isProduction && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	)
}
