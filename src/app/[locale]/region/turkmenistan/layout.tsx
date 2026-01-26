import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const messages = (await import(`../../../../../messages/${locale}.json`)).default

	return generateMetadataUtil({
		locale,
		path: '/region/turkmenistan',
		pageMeta: {
			title: messages.pages?.regions?.turkmenistan?.title || 'Turkmenistan',
		},
	})
}

export default function TurkmenistanLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
