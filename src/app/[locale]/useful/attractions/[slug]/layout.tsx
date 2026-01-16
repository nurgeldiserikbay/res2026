import { getTranslations } from 'next-intl/server'

import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: Locale }> }): Promise<Metadata> {
	const { slug, locale } = await params
	const t = await getTranslations()

	// Для страницы достопримечательности используем заголовок из переводов
	const title = slug === 'baiterek' ? t('pages.useful.baiterek.title') : t('pages.useful.attractions.title')

	return generateMetadataUtil({
		locale,
		path: `/useful/attractions/${slug}`,
		pageMeta: {
			title,
		},
	})
}

export default function AttractionSlugLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
