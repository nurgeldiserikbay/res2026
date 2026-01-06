import { appConfig } from '@/shared/config/app.config'

// src/widgets/header/model/nav.ts
export type NavItem = {
	key: string
	href?: `/${string}` // у группы может не быть href
	children?: NavItem[]
	main?: boolean
	showHeader: boolean
	showFooter: boolean
}

const navItems: readonly NavItem[] = [
	{
		key: 'about.root',
		href: '/about',
		main: true,
		children: [
			{ key: 'about.res', href: '/about', showHeader: !appConfig.isProduction, showFooter: true }, // RES 2026
			{
				key: 'about.keyDirections',
				href: '/about/key-directions',
				showHeader: !appConfig.isProduction,
				showFooter: true,
			},
			{
				key: 'about.preparationProcess',
				href: '/about/preparation-process',
				showHeader: !appConfig.isProduction,
				showFooter: true,
			},
		],
		showHeader: true,
		showFooter: true,
	},
	{
		key: 'program.root',
		href: '/program',
		main: true,
		children: [
			{ key: 'program.schedule', href: '/program', showHeader: true, showFooter: true },
			{ key: 'program.speakers', href: '/program/speakers', showHeader: true, showFooter: true },
			{ key: 'program.latestNews', href: '/news', showHeader: true, showFooter: true },
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{
		key: 'about.region',
		href: '/about/region',
		main: true,
		children: [
			{ key: 'about.regionKazakhstan', href: '/about/region/kazakhstan', showHeader: true, showFooter: true }, // Kazakhstan
			{ key: 'about.regionKyrgyzstan', href: '/about/region/kyrgyzstan', showHeader: true, showFooter: true }, // Kyrgyzstan
			{ key: 'about.regionTajikistan', href: '/about/region/tajikistan', showHeader: true, showFooter: true }, // Tajikistan
			{ key: 'about.regionTurkmenistan', href: '/about/region/turkmenistan', showHeader: true, showFooter: true }, // Turkmenistan
			{ key: 'about.regionUzbekistan', href: '/about/region/uzbekistan', showHeader: true, showFooter: true }, // Uzbekistan
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{
		key: 'useful.root',
		href: '/useful',
		main: true,
		children: [
			{ key: 'useful.astana', href: '/useful/astana', showHeader: true, showFooter: true },
			{ key: 'useful.venue', href: '/useful/venue', showHeader: true, showFooter: true },
			{ key: 'useful.hotels', href: '/useful/hotels', showHeader: true, showFooter: true },
			{ key: 'useful.restaurants', href: '/useful/restaurants', showHeader: true, showFooter: true },
			{ key: 'useful.visa', href: '/useful/visa', showHeader: true, showFooter: true },
			{ key: 'useful.weather', href: '/useful/weather', showHeader: true, showFooter: true },
			{ key: 'useful.attractions', href: '/useful/attractions', showHeader: true, showFooter: true },
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{
		key: 'news.root',
		href: '/news',
		main: true,
		children: [
			{ key: 'news.latest', href: '/news', showHeader: true, showFooter: true },
			{ key: 'news.announcements', href: '/news/announcements', showHeader: true, showFooter: true },
			{ key: 'news.pressReleases', href: '/news/press-releases', showHeader: true, showFooter: true },
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{ key: 'gallery', href: '/gallery', main: false, showHeader: !appConfig.isProduction, showFooter: true },
	{ key: 'faq', href: '/faq', main: false, showHeader: !appConfig.isProduction, showFooter: true },
	{ key: 'contacts', href: '/contacts', main: false, showHeader: true, showFooter: true },
] as const

function filterNavItems(items: readonly NavItem[], options?: { for: 'header' | 'footer' }): NavItem[] {
	return items
		.map((item) => {
			const hasChildren = Array.isArray(item.children)
			const children = hasChildren
				? (item.children as NavItem[]).filter((child) => {
						if (options?.for === 'header') {
							return child.showHeader !== false
						}
						if (options?.for === 'footer') {
							return child.showFooter !== false
						}
						return true
					})
				: undefined
			const newItem: NavItem = {
				...item,
				children: children ? children : undefined,
			}
			return newItem
		})
		.filter((item) => {
			if (options?.for === 'header') {
				return item.showHeader !== false
			}
			if (options?.for === 'footer') {
				return item.showFooter !== false
			}
			return true
		})
}

export const headerNav: readonly NavItem[] = filterNavItems(navItems, { for: 'header' }) as NavItem[]
export const footerNav: readonly NavItem[] = filterNavItems(navItems, { for: 'footer' }) as NavItem[]
