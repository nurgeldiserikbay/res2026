'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { NewsItem } from '@/entities/news/NewsItem'

import { newsItems } from '../mocks'

export function NewsTab() {
	const t = useTranslations()
	const [activeTab, setActiveTab] = useState(1)

	const newsTabs = [
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
	]

	return (
		<div>
			<div className="mb-[50px] flex gap-[30px]">
				{newsTabs.map((tab) => {
					return (
						<button
							key={tab.id}
							className={[
								'box-border cursor-pointer border-b border-solid py-[26px] text-[16px] leading-none font-medium transition-all duration-300 ease-out',
								activeTab === tab.id ? `border-b-secondary text-secondary` : `border-b-text text-text`,
							].join(` `)}
							onClick={() => setActiveTab(tab.id)}
						>
							{tab.title}
						</button>
					)
				})}
			</div>

			<div className="grid grid-cols-4 gap-[60px]">
				{newsItems.map((item, index) => {
					return (
						<NewsItem
							key={index}
							{...item}
						/>
					)
				})}
			</div>
		</div>
	)
}
