import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { SLIDES_UZ } from '@/widgets/region/mocks'
import { AbountEtc } from '@/widgets/region/ui/AbountEtc'
import AboutRegion from '@/widgets/region/ui/AboutRegion'
import { Climate } from '@/widgets/region/ui/Climate'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'

const IMGS = [
	{
		id: 1,
		img: '/imgs/regions/uz/uz-flag.png',
		alt: 'Region Img 1',
		width: 612,
		height: 408,
	},
]

export default function Page() {
	const t = useTranslations()

	const MENU_ITEMS = [
		{
			id: 1,
			title: t(`pages.regions.uzbekistan.tabs.0`),
			href: '#about',
		},
		{
			id: 2,
			title: t(`pages.regions.uzbekistan.tabs.1`),
			href: '#climate',
		},
		{
			id: 3,
			title: t(`pages.regions.uzbekistan.tabs.2`),
			href: '#flora-and-fauna',
		},
		{
			id: 4,
			title: t(`pages.regions.uzbekistan.tabs.3`),
			href: '#etc',
		},
	]

	const aboutRegionData = {
		title: t(`pages.regions.uzbekistan.title`),
		text1: t(`pages.regions.uzbekistan.text1`),
		text2: t(`pages.regions.uzbekistan.text2`),
		stats: [
			{
				statValue: '12',
				statTitle: t(`pages.regions.uzbekistan.stat1`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300]',
			},
			{
				statValue: '1',
				statTitle: t(`pages.regions.uzbekistan.stat4`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300]',
			},
			{
				statValue: '1',
				statTitle: t(`pages.regions.uzbekistan.stat2`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300]',
			},
		],
		stat3Value: '38',
		stat3: t(`pages.regions.uzbekistan.stat3`),
		map: '',
		mapAlt: 'UZ About Map',
		mapWidth: 1885,
		mapHeight: 1112,
		imgs: IMGS,
	}

	const climateData = {
		title: t(`pages.regions.uzbekistan.climateTitle`),
		climateText2: t(`pages.regions.uzbekistan.climateText`),
		temp1Value: '-40',
		temp2Value: '+45',
		img1: '/imgs/regions/uz/climate-1.png',
		img2: '/imgs/regions/uz/climate-2.png',
	}

	const etcData = {
		strategicVisionTitle: t(`pages.regions.uzbekistan.etc.strategicVisionTitle`),
		strategicVisionIntro: t(`pages.regions.uzbekistan.etc.strategicVisionIntro`),
		strategicDocuments: [
			{
				id: 1,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.0`),
			},
			{
				id: 2,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.1`),
			},
			{
				id: 3,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.2`),
			},
			{
				id: 4,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.3`),
			},
			{
				id: 5,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.4`),
			},
			{
				id: 6,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.5`),
			},
		],
		nationalInitiativesTitle: t(`pages.regions.uzbekistan.etc.nationalInitiativesTitle`),
		nationalInitiativesIntro: [
			{
				id: 1,
				title: t(`pages.regions.uzbekistan.etc.nationalInitiativesIntro.title1`),
				description: t(`pages.regions.uzbekistan.etc.nationalInitiativesIntro.text1`),
				image: '/imgs/recycle1.png',
			},
			{
				id: 2,
				title: t(`pages.regions.uzbekistan.etc.nationalInitiativesIntro.title2`),
				description: t(`pages.regions.uzbekistan.etc.nationalInitiativesIntro.text2`),
				image: '/imgs/recycle2.png',
			},
			{
				id: 3,
				title: t(`pages.regions.uzbekistan.etc.nationalInitiativesIntro.title3`),
				description: t(`pages.regions.uzbekistan.etc.nationalInitiativesIntro.text3`),
				image: '/imgs/recycle3.png',
			},
		],
		nationalInitiatives: [
			{
				id: 1,
				title: t(`pages.regions.uzbekistan.etc.nationalInitiatives.title1`),
				description: t(`pages.regions.uzbekistan.etc.nationalInitiatives.text1`),
			},
			{
				id: 2,
				title: t(`pages.regions.uzbekistan.etc.nationalInitiatives.title2`),
				description: t(`pages.regions.uzbekistan.etc.nationalInitiatives.text2`),
			},
			{
				id: 3,
				title: t(`pages.regions.uzbekistan.etc.nationalInitiatives.title3`),
				description: t(`pages.regions.uzbekistan.etc.nationalInitiatives.text3`),
			},
			{
				id: 4,
				title: '',
				description: t.rich('pages.regions.uzbekistan.etc.nationalInitiatives.text4', {
					bold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
		],
	}

	return (
		<>
			<HeroBanner
				title={t(`pages.regions.uzbekistan.title`)}
				bgImage="/imgs/regions/uz/uzb-banner.png"
				breadcrumbs={[{ label: t(`pages.regions.uzbekistan.title`), href: '/about/region/uzbekistan' }]}
			/>

			<RegionTabs tabs={MENU_ITEMS} />

			<AboutRegion {...aboutRegionData} />

			<Climate {...climateData} />

			<FloraAndFauna slides={SLIDES_UZ} />

			<AbountEtc {...etcData} />
		</>
	)
}
