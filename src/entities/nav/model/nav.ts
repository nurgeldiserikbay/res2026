import { appConfig } from '@/shared/config/app.config'

// src/widgets/header/model/nav.ts
export type NavItem = {
	key: string
	href?: `/${string}` // у группы может не быть href
	children?: NavItem[]
	main?: boolean
	ready: boolean
	important?: boolean
	showHeader: boolean
	showFooter: boolean
}

const navItems: readonly NavItem[] = [
	{
		key: 'about.root',
		href: '/about',
		important: true,
		main: true,
		ready: true,
		children: [
			{ key: 'about.res', href: '/about', ready: true, showHeader: !appConfig.isProduction, showFooter: true }, // RES 2026
			{
				key: 'about.keyDirections',
				href: '/about/key-directions',
				ready: false,
				showHeader: !appConfig.isProduction,
				showFooter: true,
			},
			{
				key: 'about.preparationProcess',
				href: '/about/preparation-process',
				ready: false,
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
		important: true,
		main: true,
		ready: false,
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{
		key: 'about.region',
		href: '/about/region',
		important: true,
		main: true,
		ready: !appConfig.isProduction,
		children: [
			{
				key: 'about.regionKazakhstan',
				href: '/about/region/kazakhstan',
				ready: !appConfig.isProduction,
				showHeader: true,
				showFooter: true,
			}, // Kazakhstan
			{ key: 'about.regionKyrgyzstan', href: '/about/region/kyrgyzstan', ready: false, showHeader: true, showFooter: true }, // Kyrgyzstan
			{ key: 'about.regionTajikistan', href: '/about/region/tajikistan', ready: false, showHeader: true, showFooter: true }, // Tajikistan
			{ key: 'about.regionTurkmenistan', href: '/about/region/turkmenistan', ready: false, showHeader: true, showFooter: true }, // Turkmenistan
			{ key: 'about.regionUzbekistan', href: '/about/region/uzbekistan', ready: false, showHeader: true, showFooter: true }, // Uzbekistan
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{
		key: 'useful.root',
		href: '/useful',
		main: true,
		ready: false,
		children: [
			{ key: 'useful.astana', href: '/useful/astana', ready: false, showHeader: true, showFooter: true },
			{ key: 'useful.venue', href: '/useful/venue', ready: false, showHeader: true, showFooter: true },
			{ key: 'useful.hotels', href: '/useful/hotels', ready: false, showHeader: true, showFooter: true },
			{ key: 'useful.restaurants', href: '/useful/restaurants', ready: false, showHeader: true, showFooter: true },
			{ key: 'useful.visa', href: '/useful/visa', ready: false, showHeader: true, showFooter: true },
			{ key: 'useful.weather', href: '/useful/weather', ready: false, showHeader: true, showFooter: true },
			{ key: 'useful.attractions', href: '/useful/attractions', ready: false, showHeader: true, showFooter: true },
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{
		key: 'news.root',
		href: '/news',
		main: true,
		ready: !appConfig.isProduction,
		children: [
			{ key: 'news.latest', href: '/news', ready: !appConfig.isProduction, showHeader: true, showFooter: true },
			{ key: 'news.announcements', href: '/news/announcements', ready: !appConfig.isProduction, showHeader: true, showFooter: true },
			{ key: 'news.publications', href: '/news/publications', ready: !appConfig.isProduction, showHeader: true, showFooter: true },
		],
		showHeader: !appConfig.isProduction,
		showFooter: true,
	},
	{ key: 'gallery', href: '/gallery', main: false, ready: false, showHeader: !appConfig.isProduction, showFooter: true },
	{ key: 'faq', href: '/faq', main: false, ready: false, showHeader: !appConfig.isProduction, showFooter: true },
	{ key: 'contacts', href: '/contacts', main: false, ready: true, important: true, showHeader: true, showFooter: true },
] as const

function filterNavItems(items: readonly NavItem[], options?: { for: 'header' | 'footer' }): NavItem[] {
	return items
		.map((item) => {
			const hasChildren = Array.isArray(item.children)
			const children = hasChildren
				? (item.children as NavItem[])
						.filter((child) => {
							if (options?.for === 'header') {
								return child.showHeader !== false
							}
							if (options?.for === 'footer') {
								return child.showFooter !== false
							}
							return true
						})
						.map((child) => ({
							...child,
							href: child.ready === false && child.href ? '/soon' : child.href,
						}))
				: undefined
			const newItem: NavItem = {
				...item,
				href: item.ready === false && item.href ? '/soon' : item.href,
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
