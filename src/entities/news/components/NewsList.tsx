'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react'

import { NewsItem } from '@/entities/news/components/NewsItem'
import { newsListQuery } from '@/entities/news/news.queries'
import { NewsItem as NewsItemType } from '@/entities/news/news.types'
import { Locale } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { IPaginationResponse } from '@/shared/types'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { Soon } from '@/shared/ui/soon/Soon'

import { newsTypes } from '../news.consts'

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
}

function NewsItemWrapper({ item, delay }: NewsItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 50, delay })

	const formattedDate = item.publication_date

	return (
		<div
			ref={ref}
			className="col-span-1 row-span-1 translate-y-[50px] opacity-0"
		>
			<NewsItem
				title={item.name}
				image={item.image}
				bannerImage={item.image}
				date={formattedDate}
				tag={''}
				slug={item.slug}
				external_link={item.external_link}
				file={item.file}
				variant={newsTypeMap[item.type] === 'publication' ? 'light' : 'dark'}
				wide={false}
				type={newsTypeMap[item.type] || 'latest'}
				content={item.description}
				views={item.views}
			/>
		</div>
	)
}

interface NewsListProps {
	initialData?: IPaginationResponse<NewsItemType>
}

export function NewsList({ initialData }: NewsListProps) {
	const locale = useLocale() as Locale
	const t = useTranslations()
	const searchParams = useSearchParams()

	const page = Number(searchParams.get('page')) || 1
	const typeParam = searchParams.get('type') || 'latest'
	const apiType = newsTypes[typeParam as keyof typeof newsTypes] || 'last'

	const queryParams = {
		per_page: 12,
		page: page,
		type: apiType,
	}

	const { data, isLoading, error } = useQuery({
		...newsListQuery(queryParams, locale as Locale),
		initialData: page === 1 && typeParam === 'latest' ? initialData : undefined,
	})

	if (isLoading && !initialData) {
		return <div className="text-center text-[24px] font-light">{t('labels.loading') || 'Загрузка...'}</div>
	}

	if (error) {
		return <div className="text-center text-[24px] font-light text-red-500">{t('labels.error') || 'Ошибка загрузки новостей'}</div>
	}

	const newsItems = data?.data || []
	const meta = data?.meta

	// Показываем пустое состояние
	if (newsItems.length === 0) {
		return (
			<Soon
				className="pt-[10px]! pb-[10px]! md:pb-[10px]! lg:pb-[10px]! 2xl:pt-[10px]! 2xl:pb-[10px]!"
				hideBtn={true}
			/>
			// <div className="flex flex-col items-center justify-center py-[60px]">
			// 	<p className="text-text text-center text-[24px] font-light">{t('titles.soon')}</p>
			// </div>
		)
	}

	// Вычисляем общее количество страниц
	const totalPages = meta ? Math.ceil(meta.total / meta.per_page) : 1

	return (
		<>
			<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]">
				{newsItems.map((item, index) => (
					<NewsItemWrapper
						key={item.id}
						item={item}
						index={index}
						delay={0.1 + index * 0.1}
					/>
				))}
			</div>

			{totalPages > 1 && (
				<div className="mt-[30px] flex items-center justify-center xl:mt-[50px]">
					<MainPagination totalPages={totalPages} />
				</div>
			)}
		</>
	)
}
