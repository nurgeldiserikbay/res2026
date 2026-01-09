import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getLocale } from 'next-intl/server'

import { NewsList } from '@/entities/news/components/NewsList'
import { newsTypes } from '@/entities/news/news.consts'
import { newsListQuery } from '@/entities/news/news.queries'
import { Locale } from '@/shared/config/i18n'
import { getQueryClient } from '@/shared/lib/query/get-query-client'
import { Container } from '@/shared/ui/container/container'
import { NewsBanner } from '@/widgets/news/ui/NewsBanner'
import { NewsTabLinks } from '@/widgets/news/ui/NewsTabLinks'

type PageProps = {
	searchParams: Promise<{ page?: string; type?: string }>
}

export default async function Page({ searchParams }: PageProps) {
	const params = await searchParams
	const locale = await getLocale()
	const queryClient = getQueryClient()

	const page = Number(params.page) || 1
	const typeParam = params.type || 'latest'
	const apiType = newsTypes[typeParam as keyof typeof newsTypes] || 'last'

	const queryParams = {
		per_page: 10,
		current_page: page,
		type: apiType,
	}

	await queryClient.prefetchQuery(newsListQuery(queryParams, locale as Locale))

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NewsPageContent />
		</HydrationBoundary>
	)
}

function NewsPageContent() {
	return (
		<>
			<NewsBanner />

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<NewsTabLinks />

					<NewsList />
				</Container>
			</section>
		</>
	)
}
