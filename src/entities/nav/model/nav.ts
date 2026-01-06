import { appConfig } from '@/shared/config/app.config'

// src/widgets/header/model/nav.ts
export type NavItem = {
	key: string
	href?: `/${string}` // у группы может не быть href
	children?: NavItem[]
	main?: boolean
	show: boolean
}

export const headerNav: readonly NavItem[] = (
	[
		{
			key: 'about.root',
			href: '/about',
			main: true,
			children: [
				{ key: 'about.res', href: '/about', show: true }, // RES 2026
				{ key: 'about.preparationProcess', href: '/about/preparation-process', show: !appConfig.isProduction },
				{ key: 'about.keyDirections', href: '/about/key-directions', show: !appConfig.isProduction },
				// { key: 'about.organizers', href: '/about/organizers', show: !appConfig.isProduction },
				// { key: 'about.coOrganizers', href: '/about/co-organizers', show: !appConfig.isProduction },
				// { key: 'about.partners', href: '/partners', show: !appConfig.isProduction },
			].filter((item) => item.show),
			show: true,
		},
		{
			key: 'about.region',
			href: '/about/region',
			main: true,
			children: [
				{ key: 'about.regionKazakhstan', href: '/about/region/kazakhstan', show: true }, // Kazakhstan
				{ key: 'about.regionKyrgyzstan', href: '/about/region/kyrgyzstan', show: true }, // Kyrgyzstan
				{ key: 'about.regionUzbekistan', href: '/about/region/uzbekistan', show: true }, // Uzbekistan
				{ key: 'about.regionTajikistan', href: '/about/region/tajikistan', show: true }, // Tajikistan
				{ key: 'about.regionTurkmenistan', href: '/about/region/turkmenistan', show: true }, // Turkmenistan
			],
			show: !appConfig.isProduction,
		},
		{
			key: 'program.root',
			href: '/program',
			main: true,
			children: [
				{ key: 'program.schedule', href: '/program', show: true },
				{ key: 'program.speakers', href: '/program/speakers', show: true },
				{ key: 'program.latestNews', href: '/news', show: true },
			],
			show: !appConfig.isProduction,
		},
		{
			key: 'useful.root',
			href: '/useful',
			main: true,
			children: [
				{ key: 'useful.astana', href: '/useful/astana', show: true },
				{ key: 'useful.venue', href: '/useful/venue', show: true },
				{ key: 'useful.hotels', href: '/useful/hotels', show: true },
				{ key: 'useful.restaurants', href: '/useful/restaurants', show: true },
				{ key: 'useful.visa', href: '/useful/visa', show: true },
				{ key: 'useful.weather', href: '/useful/weather', show: true },
				{ key: 'useful.attractions', href: '/useful/attractions', show: true },
			],
			show: !appConfig.isProduction,
		},
		{
			key: 'news.root',
			href: '/news',
			main: true,
			children: [
				{ key: 'news.pressReleases', href: '/news/press-releases', show: true },
				{ key: 'news.announcements', href: '/news/announcements', show: true },
				{ key: 'news.latest', href: '/news', show: true },
			],
			show: true,
		},
		{ key: 'gallery', href: '/gallery', main: false, show: !appConfig.isProduction },
		{ key: 'faq', href: '/faq', main: false, show: !appConfig.isProduction },
		{ key: 'contacts', href: '/contacts', main: appConfig.isProduction, show: true },
	] as const
).filter((item) => item?.show) as NavItem[]
