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

export async function generateMetadata({ locale, path = '', pageMeta, serverData }: GenerateMetadataOptions): Promise<Metadata> {
	const messages = (await import(`../../../../messages/${locale}.json`)).default

	const generalMeta = messages.meta as MetaData

	// Определяем базовые метаданные
	const specificTitle = pageMeta?.title || serverData?.title
	let title = specificTitle || generalMeta.title
	let description = pageMeta?.description || serverData?.description || generalMeta.description || generalMeta.title
	const keywords = pageMeta?.keywords || serverData?.keywords || generalMeta.keywords
	const ogImage = serverData?.image

	// Если есть специфичный title, добавляем общий через |
	if (specificTitle && specificTitle !== generalMeta.title) {
		title = `${specificTitle} | ${generalMeta.title}`
	}

	// Если нет description, используем title
	if (!description) {
		description = title
	}

	const headersList = await headers()
	const protocol = headersList.get('x-forwarded-proto') || 'https'
	const host = headersList.get('host') || 'localhost:3000'
	const baseUrl = `${protocol}://${host}`
	const canonicalUrl = `${baseUrl}/${locale}${path}`

	// Обрабатываем URL изображения - если это полный URL, используем как есть, иначе добавляем baseUrl
	let ogImageUrl = `${baseUrl}/imgs/logotype.svg`
	if (ogImage) {
		if (ogImage.startsWith('http://') || ogImage.startsWith('https://')) {
			ogImageUrl = ogImage
		} else {
			ogImageUrl = ogImage.startsWith('/') ? `${baseUrl}${ogImage}` : `${baseUrl}/${ogImage}`
		}
	}
	const ogLogoUrl = `${baseUrl}/imgs/logotype.svg`

	return {
		title,
		description,
		keywords,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				ru: `${baseUrl}/ru${path}`,
				kk: `${baseUrl}/kk${path}`,
				en: `${baseUrl}/en${path}`,
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
					type: ogImage ? 'image/jpeg' : 'image/svg+xml',
				},
			],
			locale: locale,
			type: 'website',
			url: canonicalUrl,
		},
		other: {
			'og:logo': ogLogoUrl,
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
