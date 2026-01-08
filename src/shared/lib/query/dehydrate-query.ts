import { QueryClient, dehydrate } from '@tanstack/react-query'

import { getQueryClient } from './get-query-client'

export async function dehydrateQuery<T>(
	fn: (queryClient: QueryClient) => Promise<T>,
): Promise<{ data: T; dehydratedState: ReturnType<typeof dehydrate> }> {
	const queryClient = getQueryClient()
	const data = await fn(queryClient)
	const dehydratedState = dehydrate(queryClient)
	return { data, dehydratedState }
}
