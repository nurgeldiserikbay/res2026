import { getTranslations } from 'next-intl/server'

import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations()

	return generateMetadataUtil({
		locale,
		path: '/about/region/tajikistan',
		pageMeta: {
			title: t('pages.regions.tajikistan.title'),
		},
	})
}

export default function TajikistanLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
