import { useLocale, useTranslations } from 'next-intl'

import { getRestaurants } from '@/entities/restaurant/mocks'
import { RestaurantItem } from '@/entities/restaurant/RestaurantItem'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as 'ru' | 'kk' | 'en'
	const restaurants = getRestaurants(locale)

	return (
		<>
			<PageBanner
				title={t('pages.useful.restaurants.title')}
				breadcrumbs={[{ label: t('pages.useful.restaurants.title'), href: '/useful/restaurants' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[60px]">
						{restaurants.map((restaurant) => (
							<RestaurantItem
								key={restaurant.id}
								{...restaurant}
							/>
						))}
					</div>

					<div className="mt-[30px] flex items-center justify-center xl:mt-[60px]">
						<MainPagination totalPages={2} />
					</div>
				</Container>
			</section>
		</>
	)
}
