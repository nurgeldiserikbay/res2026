import { headers } from 'next/headers'

import { appConfig } from '@/shared/config/app.config'
import type { Locale } from '@/shared/config/i18n'

import type { Metadata } from 'next'

interface MetaData {
	title?: string
	description?: string
	keywords?: string
	siteName?: string
	ogImageAlt?: string
	ogImageTitle?: string
}

interface GenerateMetadataOptions {
	locale: Locale
	path?: string
	pageMeta?: MetaData
	serverData?: {
		title?: string
		description?: string
		image?: string
		keywords?: string
	}
}

/**
 * Улучшает распределение ключевых слов в description
 */
function enhanceDescriptionWithKeywords(description: string, keywords?: string): string {
	if (!keywords) return description

	const mainKeywords = keywords
		.split(',')
		.slice(0, 2)
		.map((k) => k.trim())
		.filter(Boolean)
	if (mainKeywords.length === 0) return description

	const hasKeywords = mainKeywords.some((keyword) => description.toLowerCase().includes(keyword.toLowerCase()))
	if (hasKeywords) return description

	const keywordToAdd = mainKeywords[0]
	if (description.length + keywordToAdd.length < 155) {
		return `${description}. ${keywordToAdd}`
	}

	return description
}

/**
 * Обрабатывает URL изображения для Open Graph
 */
function processImageUrl(image: string | undefined, baseUrl: string): string {
	if (!image) return `${baseUrl}/imgs/logotype.svg`

	if (image.startsWith('http://') || image.startsWith('https://')) {
		return image
	}

	return image.startsWith('/') ? `${baseUrl}${image}` : `${baseUrl}/${image}`
}

export async function generateMetadata({ locale, path = '', pageMeta, serverData }: GenerateMetadataOptions): Promise<Metadata> {
	const messages = (await import(`../../../../messages/${locale}.json`)).default

	const generalMeta = messages.meta as MetaData

	// Определяем базовые метаданные
	const specificTitle = pageMeta?.title || serverData?.title
	let title = specificTitle || generalMeta.title || ''
	const keywords = pageMeta?.keywords || serverData?.keywords || generalMeta.keywords

	// Если есть специфичный title, добавляем общий через |
	if (specificTitle && generalMeta.title && specificTitle !== generalMeta.title) {
		title = `${specificTitle} | ${generalMeta.title}`
	}

	// Определяем description с fallback значениями
	const baseDescription = pageMeta?.description || serverData?.description || generalMeta.description || generalMeta.title || title
	const description = enhanceDescriptionWithKeywords(baseDescription, keywords)

	const headersList = await headers()
	const protocol = headersList.get('x-forwarded-proto') || 'https'
	const host = headersList.get('host') || 'localhost:3000'
	const baseUrl = `${protocol}://${host}`
	const canonicalUrl = `${baseUrl}/${locale}${path}`

	const ogImageUrl = processImageUrl(serverData?.image, baseUrl)
	const ogLogoUrl = `${baseUrl}/imgs/logotype.svg`
	const hasCustomImage = !!serverData?.image

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				'ru-RU': `${baseUrl}/ru${path}`,
				'kk-KZ': `${baseUrl}/kk${path}`,
				'en-US': `${baseUrl}/en${path}`,
				'x-default': `${baseUrl}/en${path}`,
			},
		},
		openGraph: {
			title,
			description,
			siteName: pageMeta?.siteName || generalMeta.siteName || generalMeta.title,
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: pageMeta?.ogImageAlt || serverData?.title || generalMeta.ogImageAlt || title,
					type: hasCustomImage ? 'image/jpeg' : 'image/svg+xml',
				},
			],
			locale: locale,
			type: 'website',
			url: canonicalUrl,
		},
		other: {
			'og:logo': ogLogoUrl,
			...(keywords && { keywords }),
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImageUrl],
		},
		robots: {
			index: appConfig.isProduction,
			follow: appConfig.isProduction,
			googleBot: {
				index: appConfig.isProduction,
				follow: appConfig.isProduction,
			},
		},
		verification: {
			yandex: '2bb323cdb7d3be6c',
			google: 'UOHou_6fwLEwrcTJd907ZbDLUWGOF9OunQ6LqSU',
		},
	}
}
