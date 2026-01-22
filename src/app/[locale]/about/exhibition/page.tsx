import type { Locale } from '@/shared/config/i18n'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'
import { AboutExhibition } from '@/widgets/exhibition/ui/AboutExhibition'
import { EventPlace } from '@/widgets/exhibition/ui/EventPlace'
import { ExbFactsAndNumbers } from '@/widgets/exhibition/ui/ExbFactsAndNumbers'
import { ExhContacts } from '@/widgets/exhibition/ui/ExhContacts'
import { ExhibitionBanner } from '@/widgets/exhibition/ui/ExhibitionBanner'
import { ParticipateWays } from '@/widgets/exhibition/ui/ParticipateWays'
import { PartnersBlock } from '@/widgets/exhibition/ui/PartnersBlock'
import { QuotsList } from '@/widgets/exhibition/ui/QuotsList'
import { SpecialProgramms } from '@/widgets/exhibition/ui/SpecialProgramms'
import { ThemeZones } from '@/widgets/exhibition/ui/ThemeZones'

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

			<AboutExhibition />

			<QuotsList />

			<ExbFactsAndNumbers />

			<EventPlace />

			<ThemeZones />

			<ParticipateWays />

			<SpecialProgramms />

			<ExhContacts />

			<PartnersBlock />
		</>
	)
}
