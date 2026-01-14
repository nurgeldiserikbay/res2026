'use client'

import { useTranslations } from 'next-intl'

import { NewsList } from '@/entities/news/components/NewsList'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { NewsTabLinks } from '@/widgets/news/ui/NewsTabLinks'

export function NewsPageContent() {
	const t = useTranslations()

	return (
		<>
			<PageBanner
				title={t('titles.news')}
				breadcrumbs={[{ label: t('titles.news'), href: '/news' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<NewsTabLinks />

					<NewsList />
				</Container>
			</section>
		</>
	)
}
