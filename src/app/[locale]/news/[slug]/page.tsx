import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getTranslations } from 'next-intl/server'

import { NewsDetail } from '@/entities/news/components/NewsDetail'
import { newsDetailQuery, newsListQuery } from '@/entities/news/news.queries'
import { Locale } from '@/shared/config/i18n'
import { getQueryClient } from '@/shared/lib/query/get-query-client'
import { PageBanner } from '@/shared/ui/banner'

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
			<PageBanner
				title={title}
				breadcrumbs={[
					{ label: t('titles.news'), href: `/${locale}/news` },
					{ label: title, href: `/${locale}/news/${slug}` },
				]}
			/>

			<NewsDetail
				slug={slug}
				initialData={newsData}
			/>
		</HydrationBoundary>
	)
}
