import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { NewsShortItem } from '@/entities/news/NewsShortItem'
import { Locale } from '@/shared/config/i18n'
import { Container } from '@/shared/ui/container/container'
import { localize } from '@/shared/utils/localize'
import { newsPaginItems } from '@/widgets/news/mocks'

interface PageProps {
	params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params

	return <NewsDetailContent slug={slug} />
}

function NewsDetailContent({ slug }: { slug: string }) {
	const t = useTranslations()
	const locale = useLocale() as Locale

	const newsItem = newsPaginItems.find((item) => item.slug === slug)
	const otherNews = newsPaginItems
		.filter((item) => item.type === newsItem?.type && item.slug !== slug && localize(item.content, locale) !== '')
		.slice(0, 5)

	const title = newsItem ? localize(newsItem.title, locale) : ''
	const date = newsItem ? localize(newsItem.date, locale) : ''
	const tag = newsItem ? localize(newsItem.tag, locale) : ''
	const content = newsItem ? localize(newsItem.content, locale) : ''
	const image = newsItem?.bannerImage

	return (
		<>
			<section className="bg-secondary h-[343px] bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat pt-[176px]">
				<Container>
					<h1 className="mb-[30px] text-center text-[48px] leading-none font-bold text-white">{t('titles.news')}</h1>
					<Breadcrumbs
						breadcrumbs={[
							{ label: t('titles.news'), href: '/news' },
							{ label: title || t('titles.news'), href: `/news/${slug}` },
						]}
					/>
				</Container>
			</section>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container className="flex flex-wrap items-start justify-between gap-[30px] lg:flex-nowrap lg:gap-[54px]">
					<div className={[`${otherNews.length > 0 ? 'max-w-[1332px]' : ''} grow`].join(` `)}>
						<h2 className="text-text 3xl:text-[48px] mb-[50px] max-w-[1214px] text-[32px] leading-none font-normal xl:text-[36px] 2xl:text-[44px]">
							{title}
						</h2>
						<div className="mb-[10px] text-[13px] leading-none font-light text-[#777C83]">{date}</div>
						{tag && (
							<div className="text-[13px] leading-none font-light text-[#777C83]">
								{'//'}
								{tag}
							</div>
						)}

						{image && (
							<Image
								src={image}
								alt={title}
								width={1332}
								height={613}
								className="mt-[50px] mb-[50px] block aspect-[2.17] w-full rounded-[12px] object-cover"
							/>
						)}

						{content && (
							<div
								className="news-content text-text prose prose-lg max-w-none text-[16px] leading-relaxed font-normal lg:text-[18px] 2xl:text-[20px] [&_p]:mb-[20px] [&_p:first-child>strong]:mt-0 [&_p:last-child]:mb-0 [&_p>strong]:mt-[40px] [&_p>strong]:mb-[15px] [&_p>strong]:block [&_p>strong]:text-[20px] [&_p>strong]:lg:text-[24px] [&_p>strong]:2xl:text-[28px] [&_strong]:font-bold"
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						)}
					</div>

					{otherNews.length > 0 ? (
						<div className="lg:w-[405px] lg:shrink-0">
							<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-none font-bold xl:mb-[50px] xl:text-[36px] 2xl:text-[44px]">
								{t('titles.otherNews')}
							</h2>

							<div>
								{otherNews.map((item, index) => (
									<div
										key={index}
										className="mb-[10px] w-full last:mb-0"
									>
										<NewsShortItem {...item} />
									</div>
								))}
							</div>
						</div>
					) : (
						<></>
					)}
				</Container>
			</section>
		</>
	)
}
