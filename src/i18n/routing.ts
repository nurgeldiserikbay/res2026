import { defineRouting } from 'next-intl/routing'

import { defaultLocale, locales } from '@/shared/config/i18n'

export const routing = defineRouting({
	locales: locales,
	defaultLocale: defaultLocale,
	localeDetection: true,
	localeCookie: { name: 'NEXT_LOCALE' },
})
