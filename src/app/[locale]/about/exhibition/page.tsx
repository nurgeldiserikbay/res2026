import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'
import { AboutContent } from '@/widgets/aboutSummit/ui/AboutContent'
import { ExhibitionBanner } from '@/widgets/exhibition/ui/ExhibitionBanner'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const messages = (await import(`../../../../../messages/${locale}.json`)).default
	const pageMeta = messages.meta?.exhibition

	return generateMetadataUtil({
		locale,
		path: '/about/exhibition',
		pageMeta: pageMeta
			? {
					title: pageMeta.title,
					description: pageMeta.description,
					keywords: pageMeta.keywords,
				}
			: undefined,
	})
}

export default function Page() {
	return (
		<>
			<ExhibitionBanner />

			<AboutContent />
		</>
	)
}
