import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { SLIDES_TJ } from '@/widgets/region/mocks'
import AboutRegion from '@/widgets/region/ui/AboutRegion'
import { Climate } from '@/widgets/region/ui/Climate'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { GlobalEvents } from '@/widgets/region/ui/GlobalEvents'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'
import { SingleNationalBanner } from '@/widgets/region/ui/SingleNationalBanner'
import { StrategicDocuments } from '@/widgets/region/ui/StrategicDocuments'

const IMGS = [
	{
		id: 1,
		img: '/imgs/regions/tj/tj-flag.webp',
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
			title: t(`pages.regions.tajikistan.tabs.0`),
			href: '#about',
		},
		{
			id: 2,
			title: t(`pages.regions.tajikistan.tabs.1`),
			href: '#climate',
		},
		{
			id: 3,
			title: t(`pages.regions.tajikistan.tabs.2`),
			href: '#flora-and-fauna',
		},
		{
			id: 4,
			title: t(`pages.regions.tajikistan.tabs.3`),
			href: '#etc',
		},
	]

	const aboutRegionData = {
		title: t(`pages.regions.tajikistan.title1`),
		text1: t(`pages.regions.tajikistan.text1`),
		text2: '',
		stats: [
			{
				statValue: '4',
				statTitle: t(`pages.regions.tajikistan.stat1`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300]',
			},
			{
				statValue: '10',
				statTitle: t(`pages.regions.tajikistan.stat2`),
				statClass: 'bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300]',
			},
		],
		map: '',
		mapAlt: 'UZ About Map',
		mapWidth: 1885,
		mapHeight: 1112,
		imgs: IMGS,
	}

	const climateData = {
		title: t(`pages.regions.tajikistan.climateTitle`),
		climateText2: t(`pages.regions.tajikistan.climateText`),
		temp1Value: '-60',
		temp1text: t(`pages.regions.tajikistan.climateText2`),
		temp2Value: '+40',
		temp2text: t(`pages.regions.tajikistan.climateText3`),
		img1: '/imgs/regions/tj/tj-climate-1.webp',
		img2: '/imgs/regions/tj/tj-climate-2.webp',
	}

	const strategicDocumentsData = {
		strategicVisionTitle: t(`pages.regions.tajikistan.etc.strategicVisionTitle`),
		strategicVisionIntro: t(`pages.regions.tajikistan.etc.strategicVisionIntro`),
		strategicDocuments: [
			{
				id: 1,
				title: t.rich('pages.regions.tajikistan.etc.strategicDocuments.0', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 2,
				title: t.rich('pages.regions.tajikistan.etc.strategicDocuments.1', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
			{
				id: 3,
				title: t.rich('pages.regions.tajikistan.etc.strategicDocuments.2', {
					sbold: (chunks) => <span className="font-bold">{chunks}</span>,
				}),
			},
		],
	}

	const globalEventsHeldData = {
		title: t(`pages.regions.tajikistan.globalTitle`),
		subtitle: t(`pages.regions.tajikistan.globalSubtitle`),
		logo1: {
			src: '/imgs/regions/tj/tj-logo-1.svg',
			width: 196,
			height: 98,
			alt: 'Global Events Logo 1',
		},
		logo2: {
			src: '/imgs/regions/tj/tj-logo-2.svg',
			width: 196,
			height: 98,
			alt: 'Global Events Logo 2',
		},
		events: [
			{
				id: 1,
				title: t(`pages.regions.tajikistan.globalEventsHeld.0.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.0.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.0.text`),
			},
			{
				id: 2,
				title: t(`pages.regions.tajikistan.globalEventsHeld.1.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.1.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.1.text`),
			},
			{
				id: 3,
				title: t(`pages.regions.tajikistan.globalEventsHeld.2.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.2.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.2.text`),
			},
			{
				id: 4,
				title: t(`pages.regions.tajikistan.globalEventsHeld.3.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.3.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.3.text`),
			},
			{
				id: 5,
				title: t(`pages.regions.tajikistan.globalEventsHeld.4.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.4.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.4.text`),
			},
			{
				id: 6,
				title: t(`pages.regions.tajikistan.globalEventsHeld.5.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.5.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.5.text`),
			},
			{
				id: 7,
				title: t(`pages.regions.tajikistan.globalEventsHeld.6.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.6.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.6.text`),
			},
			{
				id: 8,
				title: t(`pages.regions.tajikistan.globalEventsHeld.7.title`),
				subtitle: t(`pages.regions.tajikistan.globalEventsHeld.7.subtitle`),
				text: t(`pages.regions.tajikistan.globalEventsHeld.7.text`),
			},
		],
	}

	return (
		<>
			<HeroBanner
				title={t(`pages.regions.tajikistan.title`)}
				bgImage="/imgs/regions/tj/tj-banner.webp"
				breadcrumbs={[{ label: t(`pages.regions.tajikistan.title`), href: '/about/region/tajikistan' }]}
			/>

			<RegionTabs tabs={MENU_ITEMS} />

			<AboutRegion {...aboutRegionData} />

			<Climate {...climateData} />

			<FloraAndFauna slides={SLIDES_TJ} />

			<StrategicDocuments
				strategicVisionTitle={strategicDocumentsData.strategicVisionTitle}
				strategicVisionIntro={strategicDocumentsData.strategicVisionIntro}
				strategicDocuments={strategicDocumentsData.strategicDocuments}
			/>

			<GlobalEvents {...globalEventsHeldData} />

			<SingleNationalBanner
				title={t(`pages.regions.tajikistan.etc.nationalInitiativesTitle`)}
				subtitle={t(`pages.regions.tajikistan.nationalInitiativesData.0.title`)}
				text={t(`pages.regions.tajikistan.nationalInitiativesData.0.text`)}
			/>
		</>
	)
}
