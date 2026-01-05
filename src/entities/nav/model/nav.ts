// src/widgets/header/model/nav.ts
export type NavItem = {
	key: string
	href?: `/${string}` // у группы может не быть href
	children?: NavItem[]
	main?: boolean
}

export const headerNav: readonly NavItem[] = [
	{
		key: 'about.root',
		href: '/about',
		main: true,
		children: [
			{ key: 'about.res', href: '/about' }, // RES 2026
			{ key: 'about.organizers', href: '/about/organizers' },
			{ key: 'about.coOrganizers', href: '/about/co-organizers' },
			{ key: 'about.partners', href: '/partners' },
		],
	},
	{
		key: 'about.region',
		href: '/about/region',
		main: true,
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
	},
	// { key: 'gallery', href: '/gallery', main: false },
	// { key: 'faq', href: '/faq', main: false },
	{ key: 'contacts', href: '/contacts', main: false },
] as const
