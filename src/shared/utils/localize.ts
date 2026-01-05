import { Locale, LocalizedText } from '@/shared/config/i18n'

/**
 * Преобразует объект с локализованными текстами в строку на основе текущей локали
 * @param localizedText - объект с ключами локалей (en, kk, ru) и значениями
 * @param locale - текущая локаль
 * @param fallback - значение по умолчанию, если для локали нет перевода
 * @returns строка с переводом для текущей локали
 */
export function localize(localizedText: LocalizedText | string, locale: Locale, fallback?: string): string {
	// Если это уже строка, возвращаем её как есть
	if (typeof localizedText === 'string') {
		return localizedText
	}

	// Если это объект с локалями, возвращаем значение для текущей локали
	if (localizedText && typeof localizedText === 'object') {
		return localizedText[locale] || localizedText.en || fallback || ''
	}

	return fallback || ''
}

/**
 * Преобразует массив локализованных текстов в массив строк
 * @param localizedTexts - массив объектов с локализованными текстами или строк
 * @param locale - текущая локаль
 * @returns массив строк с переводами для текущей локали
 */
export function localizeArray(localizedTexts: (LocalizedText | string)[], locale: Locale): string[] {
	return localizedTexts.map((text) => localize(text, locale))
}
