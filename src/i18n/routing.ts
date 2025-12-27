import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	locales: ['en', 'kk', 'ru'],
	defaultLocale: 'en',
	localeDetection: true,
	localeCookie: { name: 'NEXT_LOCALE' },
})
