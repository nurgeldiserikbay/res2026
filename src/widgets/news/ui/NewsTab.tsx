'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale, useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import { NewsItem } from '@/entities/news/components/NewsItem'
import { newsTypes } from '@/entities/news/news.consts'
import { newsListQuery } from '@/entities/news/news.queries'
import { NewsItem as NewsItemType } from '@/entities/news/news.types'
import { Locale } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { formatDate } from '@/shared/utils/formatDate'

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

// Маппинг типов новостей из API в типы компонента
const newsTypeMap: Record<NewsItemType['type'], 'latest' | 'anounce' | 'publication'> = {
	last: 'latest',
	announce: 'anounce',
	'press-release': 'publication',
}

type NewsItemWrapperProps = {
	idx: number
	item: NewsItemType
	delay: number
	locale: Locale
}

function NewsItemWrapper({ idx, item, delay, locale }: NewsItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 40 + idx * 20, delay })

	const formattedDate = formatDate(item.publication_date, locale)

	return (
		<div
			ref={ref}
			data-news-item={idx}
			className={`translate-y-[${40 + idx * 20}px] opacity-0`}
		>
			<NewsItem
				title={item.name}
				image={item.image}
				bannerImage={item.image}
				date={formattedDate}
				tag={item.type}
				slug={item.slug}
				variant="light"
				wide={false}
				type={newsTypeMap[item.type] || 'latest'}
				content={item.description}
				views={item.views}
			/>
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
			slug: 'announcements',
			title: t('labels.announcements'),
		},
		{
			id: 3,
			slug: 'publications',
			title: t('labels.publications'),
		},
	]

	const currentTab = newsTabs.find((tab) => tab.id === activeTab)
	const apiType = currentTab ? newsTypes[currentTab.slug as keyof typeof newsTypes] || 'last' : 'last'

	// React Compiler автоматически мемоизирует этот объект
	const queryParams = {
		per_page: 4,
		current_page: 1,
		type: apiType,
	}

	const { data, isLoading, error } = useQuery(newsListQuery(queryParams))

	const newsItems = data?.data || []

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
				{isLoading && <div className="col-span-full text-center text-[24px] font-light">{t('labels.loading') || 'Загрузка...'}</div>}
				{error && (
					<div className="col-span-full text-center text-[24px] font-light text-red-500">
						{t('labels.error') || 'Ошибка загрузки новостей'}
					</div>
				)}
				{!isLoading &&
					!error &&
					newsItems.length > 0 &&
					newsItems.map((item, index) => (
						<NewsItemWrapper
							key={item.id}
							idx={index}
							item={item}
							delay={0.2 + index * 0.3}
							locale={locale}
						/>
					))}
				{!isLoading && !error && newsItems.length === 0 && (
					<div className="col-span-full flex flex-col items-center justify-center py-[60px]">
						<p className="text-text text-center text-[24px] font-light">{t('labels.noContent')}</p>
					</div>
				)}
			</div>
		</div>
	)
}
