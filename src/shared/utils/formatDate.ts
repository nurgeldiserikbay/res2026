import { Locale } from '@/shared/config/i18n'

const localeMap: Record<Locale, string> = {
	ru: 'ru-RU',
	kk: 'kk-KZ',
	en: 'en-US',
}

export function formatDate(dateString: string, locale: Locale): string {
	try {
		const date = new Date(dateString)
		const intlLocale = localeMap[locale] || 'ru-RU'

		return new Intl.DateTimeFormat(intlLocale, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}).format(date)
	} catch (error) {
		console.error(error)
		return ''
	}
}
