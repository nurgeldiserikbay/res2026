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
				{ key: 'about.res', href: '/about' }, // RES 2026
				// { key: 'about.organizers', href: '/about/organizers' },
				// { key: 'about.coOrganizers', href: '/about/co-organizers' },
				// { key: 'about.partners', href: '/partners' },
			],
			show: true,
		},
		{
			key: 'about.region',
			href: '/about/region',
			main: true,
			children: [
				{ key: 'about.regionKazakhstan', href: '/about/region/kazakhstan' }, // Kazakhstan
				{ key: 'about.regionKyrgyzstan', href: '/about/region/kyrgyzstan' }, // Kyrgyzstan
				{ key: 'about.regionUzbekistan', href: '/about/region/uzbekistan' }, // Uzbekistan
				{ key: 'about.regionTajikistan', href: '/about/region/tajikistan' }, // Tajikistan
				{ key: 'about.regionTurkmenistan', href: '/about/region/turkmenistan' }, // Turkmenistan
			],
			show: !appConfig.isProduction,
		},
		// {
		// 	key: 'program.root',
		// 	href: '/program',
		// 	main: true,
		// 	children: [
		// 		{ key: 'program.schedule', href: '/program' },
		// 		{ key: 'program.speakers', href: '/program/speakers' },
		// 		{ key: 'program.latestNews', href: '/news' },
		// 	],
		//  show: true,
		// },
		// {
		// 	key: 'useful.root',
		// 	href: '/useful',
		// 	main: true,
		// 	children: [
		// 		{ key: 'useful.astana', href: '/useful/astana' },
		// 		{ key: 'useful.venue', href: '/useful/venue' },
		// 		{ key: 'useful.hotels', href: '/useful/hotels' },
		// 		{ key: 'useful.restaurants', href: '/useful/restaurants' },
		// 		{ key: 'useful.visa', href: '/useful/visa' },
		// 		{ key: 'useful.weather', href: '/useful/weather' },
		// 		{ key: 'useful.attractions', href: '/useful/attractions' },
		// 	],
		//  show: true,
		// },
		{
			key: 'news.root',
			href: '/news',
			main: true,
			children: [
				{ key: 'news.pressReleases', href: '/news/press-releases' },
				{ key: 'news.announcements', href: '/news/announcements' },
				{ key: 'news.latest', href: '/news' },
			],
			show: true,
		},
		// { key: 'gallery', href: '/gallery', main: false, show: true, },
		// { key: 'faq', href: '/faq', main: false, show: true, },
		{ key: 'contacts', href: '/contacts', main: true, show: true },
	] as const
).filter((item) => item?.show) as NavItem[]
