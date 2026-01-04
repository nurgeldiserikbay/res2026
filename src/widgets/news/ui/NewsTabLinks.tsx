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
			href: '/news/press-releases',
			title: t('labels.pressReleases'),
		},
	]

	return (
		<div className="mb-[50px] flex items-center justify-center gap-[30px]">
			{newsTabs.map((tab) => {
				return (
					<Link
						key={tab.id}
						href={tab.href}
						className={[
							'box-border cursor-pointer border-b border-solid py-[26px] text-[16px] leading-none font-medium transition-all duration-300 ease-out',
							pathname === `/${locale}${tab.href}` ? `border-b-secondary text-secondary` : `border-b-text text-text`,
						].join(` `)}
					>
						{tab.title}
					</Link>
				)
			})}
		</div>
	)
}
