'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { queryClientConfig } from '@/shared/lib/query/query-client-config'

interface QueriesProviderProps {
	children: ReactNode
}

export function QueriesProvider({ children }: QueriesProviderProps) {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig))

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{!appConfig.isProduction && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	)
}
