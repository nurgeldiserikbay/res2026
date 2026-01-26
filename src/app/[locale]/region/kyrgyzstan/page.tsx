import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { SLIDES_KG } from '@/widgets/region/mocks'
import AboutRegion from '@/widgets/region/ui/AboutRegion'
import { Climate } from '@/widgets/region/ui/Climate'
import { ColumnInitiatives } from '@/widgets/region/ui/ColumnInitiatives'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'
import { StrategicDocuments } from '@/widgets/region/ui/StrategicDocuments'

const IMGS = [
	{
		id: 1,
		img: '/imgs/regions/kg/kg-flag.jpeg',
		alt: 'Region Img 1',
		quality: 100,
		width: 612,
		height: 408,
	},
]

export default function Page() {
	const t = useTranslations()

	const MENU_ITEMS = [
		{
			id: 1,
			title: t(`pages.regions.kyrgyzstan.tabs.0`),
			href: '#about',
		},
		{
			id: 2,
			title: t(`pages.regions.kyrgyzstan.tabs.1`),
			href: '#climate',
		},
		{
			id: 3,
			title: t(`pages.regions.kyrgyzstan.tabs.2`),
			href: '#flora-and-fauna',
		},
		{
			id: 4,
			title: t(`pages.regions.kyrgyzstan.tabs.3`),
			href: '#etc',
		},
	]

	const aboutRegionData = {
		title: t(`pages.regions.kyrgyzstan.title1`),
		text1: t(`pages.regions.kyrgyzstan.text1`),
		text2: t(`pages.regions.kyrgyzstan.text2`),
		stats: [
			{
				statValue: '7',
				statTitle: t(`pages.regions.kyrgyzstan.stat1`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] sm:max-w-[271px]',
			},
			{
				statValue: '2',
				statTitle: t(`pages.regions.kyrgyzstan.stat2`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] sm:max-w-[537px]',
			},
		],
		map: '',
		mapAlt: 'UZ About Map',
		mapWidth: 1885,
		mapHeight: 1112,
		imgs: IMGS,
	}

	const climateData = {
		title: t(`pages.regions.kyrgyzstan.climateTitle`),
		climateText2: t(`pages.regions.kyrgyzstan.climateText`),
		temp1Value: '-12',
		temp2Value: '+33',
		img1: '/imgs/regions/kg/kg-climate-1.webp',
		img2: '/imgs/regions/kg/kg-climate-2.webp',
	}

	const strategicDocumentsData = {
		strategicVisionTitle: t(`pages.regions.kyrgyzstan.etc.strategicVisionTitle`),
		strategicVisionIntro: t(`pages.regions.kyrgyzstan.etc.strategicVisionIntro`),
		strategicDocuments: [
			{
				id: 1,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.0', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 2,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.1', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 3,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.2', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 4,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.3', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 5,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.4', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 6,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.5', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 7,
				title: t.rich('pages.regions.kyrgyzstan.etc.strategicDocuments.6', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
		],
	}

	const nationalInitiativesData = {
		title: t(`pages.regions.kyrgyzstan.nationalInitiativesTitle`),
		nationalInitiatives: [
			{
				id: 1,
				title: t(`pages.regions.kyrgyzstan.nationalInitiativesData.0.title`),
				description: t(`pages.regions.kyrgyzstan.nationalInitiativesData.0.text`),
			},
			{
				id: 2,
				title: t(`pages.regions.kyrgyzstan.nationalInitiativesData.1.title`),
				description: t(`pages.regions.kyrgyzstan.nationalInitiativesData.1.text`),
			},
			{
				id: 3,
				title: t(`pages.regions.kyrgyzstan.nationalInitiativesData.2.title`),
				description: t(`pages.regions.kyrgyzstan.nationalInitiativesData.2.text`),
			},
			{
				id: 4,
				title: t(`pages.regions.kyrgyzstan.nationalInitiativesData.3.title`),
				description: t(`pages.regions.kyrgyzstan.nationalInitiativesData.3.text`),
			},
			{
				id: 5,
				title: t(`pages.regions.kyrgyzstan.nationalInitiativesData.4.title`),
				description: t(`pages.regions.kyrgyzstan.nationalInitiativesData.4.text`),
			},
		],
		img: '/imgs/regions/kg/national-initiatives.webp',
	}

	return (
		<>
			<HeroBanner
				title={t(`pages.regions.kyrgyzstan.title`)}
				bgImage="/imgs/regions/kg/kg-banner.webp"
				breadcrumbs={[{ label: t(`pages.regions.kyrgyzstan.title`), href: '/region/kyrgyzstan' }]}
			/>

			<RegionTabs tabs={MENU_ITEMS} />

			<AboutRegion {...aboutRegionData} />

			<Climate {...climateData} />

			<FloraAndFauna slides={SLIDES_KG} />

			<StrategicDocuments
				strategicVisionTitle={strategicDocumentsData.strategicVisionTitle}
				strategicVisionIntro={strategicDocumentsData.strategicVisionIntro}
				strategicDocuments={strategicDocumentsData.strategicDocuments}
				listItemClass={'items-start! mb-[30px]! last:mb-0! max-w-[1159px]!'}
			/>

			<ColumnInitiatives
				title={nationalInitiativesData.title}
				items={nationalInitiativesData.nationalInitiatives}
				img={nationalInitiativesData.img}
			/>
		</>
	)
}
