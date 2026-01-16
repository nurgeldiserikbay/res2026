import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { SLIDES_UZ } from '@/widgets/region/mocks'
import AboutRegion from '@/widgets/region/ui/AboutRegion'
import { Climate } from '@/widgets/region/ui/Climate'
import { EventsList } from '@/widgets/region/ui/EventsList'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { Nationalnitiatives } from '@/widgets/region/ui/Nationalnitiatives'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'
import { StrategicDocuments } from '@/widgets/region/ui/StrategicDocuments'

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
		temp1Value: '-8',
		temp2Value: '+45',
		img1: '/imgs/regions/uz/climate-1.png',
		img2: '/imgs/regions/uz/climate-2.png',
	}

	const strategicDocumentsData = {
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
			{
				id: 7,
				title: t(`pages.regions.uzbekistan.etc.strategicDocuments.6`),
			},
		],
	}

	const nationalInitiativesData = {
		title: t(`pages.regions.uzbekistan.etc.nationalInitiativesTitle`),
		list: [
			{
				id: 0,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.0.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.0.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 1,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.1.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.1.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 2,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.2.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.2.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 3,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.3.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.3.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 4,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.4.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.4.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 5,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.5.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.5.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 6,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.6.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.6.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
			{
				id: 7,
				title: t(`pages.regions.uzbekistan.nationalInitiativesData.7.title`),
				description: t(`pages.regions.uzbekistan.nationalInitiativesData.7.text`),
				image: '/imgs/regions/uz/national-initiatives-1.png',
			},
		],
	}

	const internationalEventsData = {
		title: t(`pages.regions.uzbekistan.internationalEventsTitle`),
		list: [
			{
				id: 1,
				title: t(`pages.regions.uzbekistan.internationalEventsHeld.0.title`),
				description: t(`pages.regions.uzbekistan.internationalEventsHeld.0.text`),
				image: '/imgs/regions/uz/international-events-1.png',
				width: 175,
				height: 73,
			},
			{
				id: 2,
				title: t(`pages.regions.uzbekistan.internationalEventsHeld.1.title`),
				description: t(`pages.regions.uzbekistan.internationalEventsHeld.1.text`),
				image: '/imgs/regions/uz/international-events-2.png',
				width: 87,
				height: 137,
			},
			{
				id: 3,
				title: t(`pages.regions.uzbekistan.internationalEventsHeld.2.title`),
				description: t(`pages.regions.uzbekistan.internationalEventsHeld.2.text`),
				image: '/imgs/regions/uz/international-events-3.png',
				width: 251,
				height: 64,
			},
			{
				id: 4,
				title: t(`pages.regions.uzbekistan.internationalEventsHeld.3.title`),
				description: t(`pages.regions.uzbekistan.internationalEventsHeld.3.text`),
				image: '/imgs/regions/uz/international-events-4.png',
				width: 247,
				height: 123,
			},
			{
				id: 5,
				title: t(`pages.regions.uzbekistan.internationalEventsHeld.4.title`),
				description: t(`pages.regions.uzbekistan.internationalEventsHeld.4.text`),
				image: '/imgs/regions/uz/international-events-5.png',
				width: 257.5,
				height: 183,
			},
		],
	}

	const upcomingInternationalEventsData = {
		title: t(`pages.regions.uzbekistan.upcomingInternationalTitle`),
		list: [
			{
				id: 1,
				title: t(`pages.regions.uzbekistan.upcomingInternationalEvents.0.title`),
				description: t(`pages.regions.uzbekistan.upcomingInternationalEvents.0.text`),
				image: '/imgs/regions/uz/international-events-6.jpg',
				width: 271,
				height: 114,
			},
			{
				id: 2,
				title: t(`pages.regions.uzbekistan.upcomingInternationalEvents.1.title`),
				description: t(`pages.regions.uzbekistan.upcomingInternationalEvents.1.text`),
				image: '/imgs/regions/uz/international-events-7.png',
				width: 350,
				height: 112,
			},
		],
	}

	return (
		<>
			<HeroBanner
				title={t(`pages.regions.uzbekistan.title`)}
				bgImage="/imgs/regions/uz/uzb-banner.webp"
				breadcrumbs={[{ label: t(`pages.regions.uzbekistan.title`), href: '/about/region/uzbekistan' }]}
			/>

			<RegionTabs tabs={MENU_ITEMS} />

			<AboutRegion {...aboutRegionData} />

			<Climate {...climateData} />

			<FloraAndFauna slides={SLIDES_UZ} />

			<StrategicDocuments
				strategicVisionTitle={strategicDocumentsData.strategicVisionTitle}
				strategicVisionIntro={strategicDocumentsData.strategicVisionIntro}
				strategicDocuments={strategicDocumentsData.strategicDocuments}
			/>

			<Nationalnitiatives
				list={nationalInitiativesData.list}
				title={nationalInitiativesData.title}
			/>

			<EventsList
				list={internationalEventsData.list}
				title={internationalEventsData.title}
			/>

			<EventsList
				list={upcomingInternationalEventsData.list}
				title={upcomingInternationalEventsData.title}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					780: {
						slidesPerView: 2,
						spaceBetween: 60,
					},
				}}
			/>
		</>
	)
}
