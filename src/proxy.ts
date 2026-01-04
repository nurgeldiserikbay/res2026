import createMiddleware from 'next-intl/middleware'

import type { Locale } from '@/shared/config/i18n'

import { routing } from './i18n/routing'

import type { NextRequest } from 'next/server'

const handleI18n = createMiddleware(routing)

const USER_LOCALE_COOKIE = 'USER_LOCALE'

// Set с корректной типизацией
const SUPPORTED = new Set<Locale>(routing.locales)

export default function proxy(request: NextRequest) {
	const cookieValue = request.cookies.get(USER_LOCALE_COOKIE)?.value

	// Приводим строку к Locale безопасно
	const userLocale: Locale | undefined = SUPPORTED.has(cookieValue as Locale) ? (cookieValue as Locale) : undefined

	if (userLocale) {
		const response = handleI18n(request)
		response.cookies.set('NEXT_LOCALE', userLocale, { sameSite: 'lax' })
		return response
	}

	return handleI18n(request)
}

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
