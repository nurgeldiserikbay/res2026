'use client'

import { useTranslations } from 'next-intl'
import { useMemo, useRef, useState } from 'react'

import { NewsItem } from '@/entities/news/NewsItem'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'

import { newsItems } from '../mocks'

type TabButtonProps = {
	tab: { id: number; title: string }
	activeTab: number
	onClick: (tabId: number) => void
	delay: number
}

function TabButton({ tab, activeTab, onClick, delay }: TabButtonProps) {
	const ref = useRef<HTMLButtonElement>(null)
	useAnimSlide(ref, { x: -90, y: 0, delay })

	return (
		<button
			ref={ref}
			className={[
				'box-border translate-x-[-90px] cursor-pointer border-b border-solid py-[26px] text-[16px] leading-none font-medium opacity-0 transition-all duration-300 ease-out',
				activeTab === tab.id ? `border-b-secondary text-secondary` : `border-b-text text-text`,
			].join(` `)}
			onClick={() => onClick(tab.id)}
		>
			{tab.title}
		</button>
	)
}

type NewsItemWrapperProps = {
	idx: number
	item: (typeof newsItems)[0]
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

	const newsTabs = useMemo(
		() => [
			{
				id: 1,
				title: t('labels.latestNews'),
			},
			{
				id: 2,
				title: t('labels.announcements'),
			},
			{
				id: 3,
				title: t('labels.pressReleases'),
			},
		],
		[t],
	)

	const handleTabClick = (tabId: number) => {
		setActiveTab(tabId)
	}

	return (
		<div>
			<div className="mb-[30px] flex gap-[30px] md:mb-[40px] lg:mb-[50px]">
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

			<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]">
				{newsItems.map((item, index) => (
					<NewsItemWrapper
						key={index}
						idx={index}
						item={item}
						delay={0.2 + index * 0.3}
					/>
				))}
			</div>
		</div>
	)
}
