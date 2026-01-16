import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { SLIDES } from '@/widgets/region/mocks'
import { AbountEtc } from '@/widgets/region/ui/AbountEtc'
import AboutRegion from '@/widgets/region/ui/AboutRegion'
import { Climate } from '@/widgets/region/ui/Climate'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'

const IMGS = [
	{
		id: 1,
		img: '/imgs/flag.jpeg',
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
		stats: {
			stat1Value: '12',
			stat1: t(`pages.regions.uzbekistan.stat1`),
			stat2Value: '3',
			stat2: t(`pages.regions.uzbekistan.stat2`),
			stat3Value: '20',
			stat3: t(`pages.regions.uzbekistan.stat3`),
		},
		map: '/imgs/kz-about-map.svg',
		mapAlt: 'KZ About Map',
		mapWidth: 1885,
		mapHeight: 1112,
		imgs: IMGS,
	}

	const climateData = {
		title: t(`pages.regions.uzbekistan.climateTitle`),
		climateText2: t(`pages.regions.uzbekistan.climateText`),
		temp1Value: '-45',
		temp2Value: '+40',
		img1: '/imgs/climate-1.png',
		img2: '/imgs/climate-2.png',
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
				bgImage="/imgs/region-banner.png"
				breadcrumbs={[{ label: t(`pages.regions.uzbekistan.title`), href: '/about/region/uzbekistan' }]}
			/>

			<RegionTabs tabs={MENU_ITEMS} />

			<AboutRegion {...aboutRegionData} />

			<Climate {...climateData} />

			<FloraAndFauna slides={SLIDES} />

			<AbountEtc {...etcData} />
		</>
	)
}
