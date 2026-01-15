import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { AboutAttraction } from '@/widgets/attractions/ui/AboutAttraction'
import { AttractionSlides } from '@/widgets/attractions/ui/AttractionSlides'
import { InfoInsideAttraction } from '@/widgets/attractions/ui/InfoInsideAttraction'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<HeroBanner
				title={t(`pages.useful.baiterek.title`)}
				bgImage="/imgs/baiterek/baiterek-banner.png"
				breadcrumbs={[{ label: t(`pages.useful.baiterek.title`), href: '/useful/baiterek' }]}
				subtitle={t(`pages.useful.baiterek.subtitle`)}
			/>

			<AboutAttraction />

			<InfoInsideAttraction />

			<AttractionSlides />
		</>
	)
}
