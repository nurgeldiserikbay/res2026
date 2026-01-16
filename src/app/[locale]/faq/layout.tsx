import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params

	return generateMetadataUtil({
		locale,
		path: '/faq',
		pageMeta: {
			title: 'FAQ',
		},
	})
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
