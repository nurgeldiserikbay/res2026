'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import { NewsItem } from '@/entities/news/NewsItem'
import { Locale } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { localize } from '@/shared/utils/localize'

import { newsPaginItems } from '../mocks'

type TabButtonProps = {
	tab: { id: number; title: string }
	activeTab: number
	onClick: (tabId: number) => void
	delay: number
}

function TabButton({ tab, activeTab, onClick, delay }: TabButtonProps) {
	const ref = useRef<HTMLButtonElement>(null)
	useAnimSlide(ref, { x: -90, y: 0, delay })
	const isActive = activeTab === tab.id

	return (
		<button
			type="button"
			ref={ref}
			role="tab"
			aria-selected={isActive}
			aria-controls={`tabpanel-${tab.id}`}
			id={`tab-${tab.id}`}
			className={[
				'xs:text-[16px] box-border translate-x-[-90px] cursor-pointer border-b border-solid py-[26px] text-[12px] leading-none font-medium break-all opacity-0 transition-all duration-300 ease-out',
				isActive ? `border-b-secondary text-secondary` : `border-b-text text-text`,
			].join(` `)}
			onClick={() => onClick(tab.id)}
		>
			{tab.title}
		</button>
	)
}

type NewsItemWrapperProps = {
	idx: number
	item: (typeof newsPaginItems)[0]
	delay: number
}

function NewsItemWrapper({ idx, item, delay }: NewsItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 40 + idx * 20, delay })

	return (
		<div
			ref={ref}
			data-news-item={idx}
			className={`translate-y-[${40 + idx * 20}px] opacity-0`}
		>
			<NewsItem {...item} />
		</div>
	)
}

export function NewsTab() {
	const t = useTranslations()
	const [activeTab, setActiveTab] = useState(1)
	const locale = useLocale() as Locale

	const newsTabs = [
		{
			id: 1,
			slug: 'latest',
			title: t('labels.latestNews'),
		},
		{
			id: 2,
			slug: 'anounce',
			title: t('labels.announcements'),
		},
		{
			id: 3,
			slug: 'publication',
			title: t('labels.publications'),
		},
	]

	const currentTab = newsTabs.find((tab) => tab.id === activeTab)

	const newsItems = newsPaginItems
		.filter((item) => item.type === currentTab?.slug && !item.wide && localize(item.content, locale) !== '')
		.slice(0, 4)

	const handleTabClick = (tabId: number) => {
		setActiveTab(tabId)
	}

	return (
		<div>
			<div
				role="tablist"
				aria-label={t('titles.news')}
				className="mb-[30px] flex gap-[30px] md:mb-[40px] lg:mb-[50px]"
			>
				{newsTabs.map((tab, index) => (
					<TabButton
						key={tab.id}
						tab={tab}
						activeTab={activeTab}
						onClick={handleTabClick}
						delay={0.1 + index * 0.1}
					/>
				))}
			</div>

			<div
				role="tabpanel"
				id={`tabpanel-${activeTab}`}
				aria-labelledby={`tab-${activeTab}`}
				className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]"
			>
				{newsItems.length > 0 ? (
					newsItems.map((item, index) => (
						<NewsItemWrapper
							key={index}
							idx={index}
							item={item}
							delay={0.2 + index * 0.3}
						/>
					))
				) : (
					<>
						<p>{t('labels.noContent')}</p>
					</>
				)}
			</div>
		</div>
	)
}
