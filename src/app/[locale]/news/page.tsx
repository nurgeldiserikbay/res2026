import { useTranslations } from 'next-intl'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { NewsItem } from '@/entities/news/NewsItem'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { newsPaginItems } from '@/widgets/news/mocks'
import { NewsTabLinks } from '@/widgets/news/ui/NewsTabLinks'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<section className="bg-secondary h-[343px] bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat pt-[176px]">
				<Container>
					<h1 className="mb-[30px] text-center text-[48px] leading-none font-bold text-white">{t('titles.news')}</h1>
					<Breadcrumbs breadcrumbs={[{ label: t('titles.news'), href: '/news' }]} />
				</Container>
			</section>

			<section className="bg-white pt-[100px]">
				<Container>
					<NewsTabLinks />

					<div className="grid grid-cols-4 gap-[60px]">
						{newsPaginItems.map((item, index) => {
							return (
								<div
									key={index}
									className={`${item.wide ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'}`}
								>
									<NewsItem {...item} />
								</div>
							)
						})}
					</div>

					<div className="mt-[50px] flex items-center justify-center">
						<MainPagination totalPages={10} />
					</div>
				</Container>
			</section>
		</>
	)
}
