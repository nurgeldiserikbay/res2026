import { useLocale, useTranslations } from 'next-intl'

import { AttractionItem } from '@/entities/attractions/AttractionItem'
import { getAttractions } from '@/entities/attractions/mocks'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as 'ru' | 'kk' | 'en'
	const attractions = getAttractions(locale)

	return (
		<>
			<PageBanner
				title={t('pages.useful.attractions.title')}
				breadcrumbs={[{ label: t('pages.useful.attractions.title'), href: '/useful/attractions' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:gap-[60px]">
						{attractions.map((attraction) => (
							<AttractionItem
								key={attraction.id}
								{...attraction}
							/>
						))}
					</div>
				</Container>
			</section>
		</>
	)
}
