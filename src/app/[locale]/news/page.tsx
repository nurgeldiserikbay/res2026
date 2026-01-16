import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getLocale } from 'next-intl/server'

import { newsTypes } from '@/entities/news/news.consts'
import { newsListQuery } from '@/entities/news/news.queries'
import { Locale } from '@/shared/config/i18n'
import { getQueryClient } from '@/shared/lib/query/get-query-client'
import { generateMetadata as generateMetadataUtil } from '@/shared/lib/seo/generate-metadata'

import { NewsPageContent } from './NewsPageContent'

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const messages = (await import(`../../../../messages/${locale}.json`)).default

	return generateMetadataUtil({
		locale,
		path: '/news',
		pageMeta: {
			title: messages.titles?.news || 'News',
		},
	})
}

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
		page: page,
		type: apiType,
	}

	await queryClient.prefetchQuery(newsListQuery(queryParams, locale as Locale))

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NewsPageContent />
		</HydrationBoundary>
	)
}
