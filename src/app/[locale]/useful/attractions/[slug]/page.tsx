import { getAttractionBySlug } from '@/entities/attractions/mocks'
import type { Locale } from '@/shared/config/i18n'
import { HeroBanner } from '@/shared/ui/banner'
import { AboutAttraction } from '@/widgets/attractions/ui/AboutAttraction'
import { AttractionSlides } from '@/widgets/attractions/ui/AttractionSlides'
import { InfoInsideAttraction } from '@/widgets/attractions/ui/InfoInsideAttraction'

interface PageProps {
	params: Promise<{ slug: string; locale: Locale }>
}

export default async function Page({ params }: PageProps) {
	const { slug, locale } = await params
	const attraction = getAttractionBySlug(slug)

	if (!attraction) {
		return null
	}

	const title = attraction.title[locale]
	const subtitle = attraction.subtitle?.[locale]
	const bannerImage = attraction.bannerImage || attraction.image
	const aboutTitle = attraction.aboutTitle?.[locale]
	const aboutText = attraction.aboutText?.[locale]
	const aboutStats = attraction.aboutStats
		? {
				title1: attraction.aboutStats.title1?.[locale],
				text1: attraction.aboutStats.text1?.[locale],
				title2: attraction.aboutStats.title2?.[locale],
				text2: attraction.aboutStats.text2?.[locale],
			}
		: undefined
	const insideTitle = attraction.insideTitle?.[locale]
	const insideSubtitle = attraction.insideSubtitle?.[locale]
	const insideText = attraction.insideText?.[locale]

	return (
		<>
			<HeroBanner
				title={title}
				bgImage={bannerImage}
				breadcrumbs={[{ label: title, href: `/useful/attractions/${slug}` }]}
				showOverlay={true}
				subtitle={subtitle}
			/>

			<AboutAttraction
				aboutTitle={aboutTitle}
				aboutText={aboutText}
				aboutStats={aboutStats}
				aboutImages={attraction.aboutImages}
			/>

			<InfoInsideAttraction
				insideTitle={insideTitle}
				insideSubtitle={insideSubtitle}
				insideText={insideText}
				insideImage={attraction.insideImage}
			/>

			<AttractionSlides slidesImages={attraction.slidesImages} />
		</>
	)
}
