import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getTranslations } from 'next-intl/server'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { NewsDetail } from '@/entities/news/components/NewsDetail'
import { newsDetailQuery, newsListQuery } from '@/entities/news/news.queries'
import { getQueryClient } from '@/shared/lib/query/get-query-client'
import { Container } from '@/shared/ui/container/container'

interface PageProps {
	params: Promise<{ slug: string; locale: string }>
}

export default async function Page({ params }: PageProps) {
	const { slug, locale } = await params
	const t = await getTranslations()
	const queryClient = getQueryClient()

	// Prefetch данных на сервере
	await Promise.all([queryClient.prefetchQuery(newsDetailQuery(Number(slug))), queryClient.prefetchQuery(newsListQuery())])

	const newsData = queryClient.getQueryData(newsDetailQuery(Number(slug)).queryKey)
	const title = newsData?.data?.name || t('titles.news')

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<section className="bg-secondary h-[343px] bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat pt-[176px]">
				<Container>
					<h1 className="mb-[30px] text-center text-[48px] leading-none font-bold text-white">{t('titles.news')}</h1>
					<Breadcrumbs
						breadcrumbs={[
							{ label: t('titles.news'), href: `/${locale}/news` },
							{ label: title, href: `/${locale}/news/${slug}` },
						]}
					/>
				</Container>
			</section>

			<NewsDetail
				slug={slug}
				initialData={newsData}
			/>
		</HydrationBoundary>
	)
}
