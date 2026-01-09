'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'

export function NewsTabLinks() {
	const t = useTranslations()
	const locale = useLocale()
	const searchParams = useSearchParams()

	const newsTabs = useMemo(
		() => [
			{
				id: 1,
				type: 'latest',
				title: t('labels.latestNews'),
			},
			{
				id: 2,
				type: 'announcements',
				title: t('labels.announcements'),
			},
			{
				id: 3,
				type: 'publications',
				title: t('labels.publications'),
			},
		],
		[t],
	)

	const buildHref = (type: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('type', type)
		// При смене типа сбрасываем страницу на первую
		params.delete('page')
		return `/${locale}/news?${params.toString()}`
	}

	return (
		<nav
			role="tablist"
			aria-label={t('titles.news')}
			className="xs:gap-[30px] mb-[30px] flex items-stretch justify-center gap-[20px] xl:mb-[50px]"
		>
			{newsTabs.map((tab) => {
				const currentType = searchParams.get('type') || 'latest'
				const isActive = currentType === tab.type
				return (
					<Link
						key={tab.id}
						href={buildHref(tab.type)}
						role="tab"
						aria-selected={isActive}
						aria-controls={`news-tabpanel-${tab.id}`}
						id={`news-tab-${tab.id}`}
						className={[
							'xs:text-[16px] box-border cursor-pointer border-b border-solid py-[26px] text-center text-[12px] leading-none font-medium transition-all duration-300 ease-out',
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
