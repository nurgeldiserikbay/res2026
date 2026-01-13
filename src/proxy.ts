import createMiddleware from 'next-intl/middleware'

import { defaultLocale, type Locale } from '@/shared/config/i18n'

import { routing } from './i18n/routing'

import type { NextRequest } from 'next/server'

const handleI18n = createMiddleware(routing)

const USER_LOCALE_COOKIE = 'USER_LOCALE'

// Set с корректной типизацией
const SUPPORTED = new Set<Locale>(routing.locales)

export default function proxy(request: NextRequest) {
	const userLocaleCookie = request.cookies.get(USER_LOCALE_COOKIE)?.value
	const nextLocaleCookie = request.cookies.get('NEXT_LOCALE')?.value

	// Приводим строку к Locale безопасно
	const userLocale: Locale | undefined = SUPPORTED.has(userLocaleCookie as Locale) ? (userLocaleCookie as Locale) : undefined
	const nextLocale: Locale | undefined = SUPPORTED.has(nextLocaleCookie as Locale) ? (nextLocaleCookie as Locale) : undefined

	// Приоритет: USER_LOCALE > NEXT_LOCALE > defaultLocale
	const preferredLocale = userLocale || nextLocale || defaultLocale

	const response = handleI18n(request)

	// Синхронизируем cookie для надежности
	if (preferredLocale) {
		// Если есть USER_LOCALE, используем его и синхронизируем NEXT_LOCALE
		if (userLocale) {
			response.cookies.set('NEXT_LOCALE', userLocale, { sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365 }) // 1 год
			response.cookies.set(USER_LOCALE_COOKIE, userLocale, { sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365 }) // 1 год
		} else if (nextLocale) {
			// Если есть только NEXT_LOCALE, синхронизируем USER_LOCALE для будущих запросов
			response.cookies.set(USER_LOCALE_COOKIE, nextLocale, { sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365 }) // 1 год
		} else {
			// Если нет ни одного cookie, устанавливаем дефолтный язык
			response.cookies.set('NEXT_LOCALE', preferredLocale, { sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365 }) // 1 год
			response.cookies.set(USER_LOCALE_COOKIE, preferredLocale, { sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365 }) // 1 год
		}
	}

	return response
}

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
