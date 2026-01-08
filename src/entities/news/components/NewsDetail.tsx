'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import { NewsShortItem } from '@/entities/news/components/NewsShortItem'
import { newsDetailBySlugQuery, newsListQuery } from '@/entities/news/news.queries'
import { NewsItem } from '@/entities/news/news.types'
import { IResponse } from '@/shared/types'
import { Locale } from '@/shared/config/i18n'
import { Container } from '@/shared/ui/container/container'
import { formatDate } from '@/shared/utils/formatDate'

interface NewsDetailProps {
	slug: string
	initialData?: IResponse<NewsItem>
}

export function NewsDetail({ slug, initialData }: NewsDetailProps) {
	const t = useTranslations()
	const locale = useLocale() as Locale

	const { data: newsData, isLoading: isLoadingNews } = useQuery({
		...newsDetailBySlugQuery(slug),
		initialData,
	})

	const { data: allNewsData } = useQuery({
		...newsListQuery(),
	})

	const newsItem = newsData?.data
	const allNews = allNewsData?.data || []

	// Получаем другие новости того же типа
	const otherNews = allNews
		.filter((item) => item.type === newsItem?.type && item.slug !== slug)
		.slice(0, 5)

	if (isLoadingNews && !initialData) {
		return (
			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="text-center text-[24px] font-light">Загрузка...</div>
				</Container>
			</section>
		)
	}

	if (!newsItem) {
		return (
			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="text-center text-[24px] font-light text-red-500">Новость не найдена</div>
				</Container>
			</section>
		)
	}

	const formattedDate = formatDate(newsItem.publication_date, locale)

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-wrap items-start justify-between gap-[30px] lg:flex-nowrap lg:gap-[54px]">
				<div className={[`${otherNews.length > 0 ? 'max-w-[1332px]' : ''} grow`].join(` `)}>
					<h2 className="text-text 3xl:text-[48px] mb-[50px] max-w-[1214px] text-[32px] leading-none font-normal xl:text-[36px] 2xl:text-[44px]">
						{newsItem.name}
					</h2>
					<div className="mb-[10px] text-[13px] leading-none font-light text-[#777C83]">{formattedDate}</div>
					{newsItem.type && (
						<div className="text-[13px] leading-none font-light text-[#777C83]">
							{'//'}
							{newsItem.type}
						</div>
					)}

					{newsItem.image && (
						<img
							src={newsItem.image}
							alt={newsItem.name}
							width={1332}
							height={613}
							className="mt-[50px] mb-[50px] block aspect-[2.17] w-full rounded-[12px] object-cover"
						/>
					)}

					{newsItem.description && (
						<div
							className="news-content text-text prose prose-lg max-w-none text-[16px] leading-relaxed font-normal lg:text-[18px] 2xl:text-[20px] [&_p]:mb-[20px] [&_p:first-child>strong]:mt-0 [&_p:last-child]:mb-0 [&_p>strong]:mt-[40px] [&_p>strong]:mb-[15px] [&_p>strong]:block [&_p>strong]:text-[20px] [&_p>strong]:lg:text-[24px] [&_p>strong]:2xl:text-[28px] [&_strong]:font-bold"
							dangerouslySetInnerHTML={{ __html: newsItem.description }}
						/>
					)}
				</div>

				{otherNews.length > 0 ? (
					<div className="lg:w-[405px] lg:shrink-0">
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-none font-bold xl:mb-[50px] xl:text-[36px] 2xl:text-[44px]">
							{t('titles.otherNews')}
						</h2>

						<div>
							{otherNews.map((item) => (
								<div
									key={item.id}
									className="mb-[10px] w-full last:mb-0"
								>
									<Link href={`/${locale}/news/${item.slug}`}>
										<NewsShortItem
											title={item.name}
											tag={item.type}
											slug={item.slug}
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
				) : null}
			</Container>
		</section>
	)
}
