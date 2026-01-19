import { getAttractionBySlug } from '@/entities/attractions/mocks'
import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: Locale }> }): Promise<Metadata> {
	const { slug, locale } = await params
	const attraction = getAttractionBySlug(slug)

	const title = attraction?.title[locale] || 'Attraction'

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
