import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getTranslations } from 'next-intl/server'

import { NewsDetail } from '@/entities/news/components/NewsDetail'
import { newsDetailQuery, newsListQuery } from '@/entities/news/news.queries'
import { appConfig } from '@/shared/config/app.config'
import { Locale } from '@/shared/config/i18n'
import { getQueryClient } from '@/shared/lib/query/get-query-client'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/ui/container/container'

interface PageProps {
	params: Promise<{ slug: string; locale: string }>
}

export default async function Page({ params }: PageProps) {
	const { slug, locale } = await params
	const t = await getTranslations()
	const queryClient = getQueryClient()

	// Prefetch данных на сервере
	await Promise.all([
		queryClient.prefetchQuery(newsDetailQuery(slug, locale as Locale)),
		queryClient.prefetchQuery(newsListQuery({ per_page: 10, page: 1 }, locale as Locale)),
	])

	const newsData = queryClient.getQueryData(newsDetailQuery(slug, locale as Locale).queryKey)
	const title = newsData?.data?.name || t('titles.news')

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<section
				className={[
					`bg-secondary bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat`,
					!appConfig.isProduction ? `h-[343px] pt-[176px] max-[441px]:h-[451px] max-[441px]:pt-[284px]` : `h-[343px] pt-[176px]`,
				].join(``)}
			>
				<Container className="relative z-10">
					<h1 className="3xl:text-[48px] mb-[30px] text-center text-[32px] leading-none font-bold text-white md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]">
						{t('titles.news')}
					</h1>
					<div>
						<Breadcrumbs
							breadcrumbs={[
								{ label: t('titles.news'), href: `/${locale}/news` },
								{ label: title, href: `/${locale}/news/${slug}` },
							]}
						/>
					</div>
				</Container>
			</section>

			<NewsDetail
				slug={slug}
				initialData={newsData}
			/>
		</HydrationBoundary>
	)
}
