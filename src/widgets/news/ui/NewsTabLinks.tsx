'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

export function NewsTabLinks() {
	const t = useTranslations()
	const pathname = usePathname()
	const locale = useLocale()

	const newsTabs = [
		{
			id: 1,
			href: '/news',
			title: t('labels.latestNews'),
		},
		{
			id: 2,
			href: '/news/announcements',
			title: t('labels.announcements'),
		},
		{
			id: 3,
			href: '/news/publications',
			title: t('labels.publications'),
		},
	]

	return (
		<nav
			role="tablist"
			aria-label={t('titles.news')}
			className="mb-[30px] flex items-stretch justify-center gap-[30px] xl:mb-[50px]"
		>
			{newsTabs.map((tab) => {
				const isActive = pathname === `/${locale}${tab.href}`
				return (
					<Link
						key={tab.id}
						href={tab.href}
						role="tab"
						aria-selected={isActive}
						aria-controls={`news-tabpanel-${tab.id}`}
						id={`news-tab-${tab.id}`}
						className={[
							'xs:text-[16px] box-border cursor-pointer border-b border-solid py-[26px] text-[14px] leading-none font-medium transition-all duration-300 ease-out',
							isActive ? `border-b-secondary text-secondary` : `border-b-text text-text`,
						].join(` `)}
					>
						{tab.title}
					</Link>
				)
			})}
		</nav>
	)
}
