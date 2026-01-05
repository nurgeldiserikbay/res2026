// import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

// export default getRequestConfig(async ({ requestLocale }) => {
export default getRequestConfig(async () => {
	// const locale = await requestLocale
	// const safeLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
	const safeLocale = routing.defaultLocale

	return {
		locale: safeLocale,
		messages: (await import(`../../messages/${safeLocale}.json`)).default,
	}
})
