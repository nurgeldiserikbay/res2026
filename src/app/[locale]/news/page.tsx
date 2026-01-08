import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { NewsList } from '@/entities/news/components/NewsList'
import { newsListQuery } from '@/entities/news/news.queries'
import { getQueryClient } from '@/shared/lib/query/get-query-client'
import { Container } from '@/shared/ui/container/container'
import { NewsBanner } from '@/widgets/news/ui/NewsBanner'
import { NewsTabLinks } from '@/widgets/news/ui/NewsTabLinks'

export default async function Page() {
	const queryClient = getQueryClient()

	// Prefetch данных на сервере
	await queryClient.prefetchQuery(newsListQuery())

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

					{/* <div className="mt-[30px] flex items-center justify-center xl:mt-[50px]">
						<MainPagination totalPages={10} />
					</div> */}
				</Container>
			</section>
		</>
	)
}
