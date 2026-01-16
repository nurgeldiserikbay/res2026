import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const messages = (await import(`../../../../../../messages/${locale}.json`)).default

	return generateMetadataUtil({
		locale,
		path: '/about/region/kyrgyzstan',
		pageMeta: {
			title: messages.pages?.regions?.kazakhstan?.title || 'Kyrgyzstan',
		},
	})
}

export default function KyrgyzstanLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
