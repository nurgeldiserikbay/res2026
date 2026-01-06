export const locales = ['en', 'kk', 'ru'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export type LocalizedText = Record<Locale, string>
