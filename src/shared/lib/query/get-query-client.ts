import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

import { queryClientConfig } from './query-client-config'

// Создаем queryClient для сервера с кешированием через React cache
// React cache гарантирует, что для одного запроса будет один queryClient
export const getQueryClient = cache(() => {
	return new QueryClient(queryClientConfig)
})
