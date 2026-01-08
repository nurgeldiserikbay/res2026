'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { useRef } from 'react'

import { NewsItem } from '@/entities/news/components/NewsItem'
import { newsListQuery } from '@/entities/news/news.queries'
import { NewsItem as NewsItemType } from '@/entities/news/news.types'
import { Locale } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { formatDate } from '@/shared/utils/formatDate'

// Маппинг типов новостей из API в типы компонента
const newsTypeMap: Record<NewsItemType['type'], 'latest' | 'anounce' | 'publication'> = {
	last: 'latest',
	announce: 'anounce',
	'press-release': 'publication',
}

type NewsItemWrapperProps = {
	item: NewsItemType
	index: number
	delay: number
	locale: Locale
}

function NewsItemWrapper({ item, delay, locale }: NewsItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 50, delay })

	const formattedDate = formatDate(item.publication_date, locale)

	return (
		<div
			ref={ref}
			className="translate-y-[50px] opacity-0 col-span-1 row-span-1"
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

interface NewsListProps {
	initialData?: { data: NewsItemType[]; meta: { total: number; per_page: number; current_page: number } }
}

export function NewsList({ initialData }: NewsListProps) {
	const locale = useLocale() as Locale
	const { data, isLoading, error } = useQuery({
		...newsListQuery(),
		initialData,
	})

	if (isLoading && !initialData) {
		return <div className="text-center text-[24px] font-light">Загрузка...</div>
	}

	if (error) {
		return <div className="text-center text-[24px] font-light text-red-500">Ошибка загрузки новостей</div>
	}

	const newsItems = data?.data || []

	if (newsItems.length === 0) {
		return null
	}

	return (
		<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]">
			{newsItems.map((item, index) => (
				<NewsItemWrapper
					key={item.id}
					item={item}
					index={index}
					delay={0.1 + index * 0.1}
					locale={locale}
				/>
			))}
		</div>
	)
}
