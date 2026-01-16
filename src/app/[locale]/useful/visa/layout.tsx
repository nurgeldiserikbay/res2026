import { getTranslations } from 'next-intl/server'

import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations()

	return generateMetadataUtil({
		locale,
		path: '/useful/visa',
		pageMeta: {
			title: t('pages.useful.visa.title'),
		},
	})
}

export default function VisaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
