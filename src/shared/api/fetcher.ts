import { Locale } from '../config/i18n'

export type FetcherOptions<TBody = unknown> = {
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
	body?: TBody
	headers?: HeadersInit
	cache?: RequestCache
	next?: NextFetchRequestConfig
	signal?: AbortSignal
	locale?: Locale
}

export async function fetcher<TResponse, TBody = unknown>(url: string, options: FetcherOptions<TBody> = {}): Promise<TResponse> {
	const { method = 'GET', body, headers, cache = 'no-store', next, signal, locale } = options

	const baseURL = process.env.NEXT_PUBLIC_API_URL || '/'

	const res = await fetch(`${baseURL}${url}`, {
		method,
		cache,
		next,
		signal,
		headers: {
			'Content-Type': 'application/json',
			'Accept-Language': locale || 'ru',
			...headers,
		},
		body: body ? JSON.stringify(body) : undefined,
	})

	if (!res.ok) {
		const errorText = await res.text()
		throw new Error(errorText || res.statusText)
	}

	return res.json()
}
