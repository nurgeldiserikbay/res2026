import { useLocale, useTranslations } from 'next-intl'

import { HotelItem } from '@/entities/hotel/HotelItem'
import { getHotels } from '@/entities/hotel/mocks'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { HotelsTabs } from '@/widgets/hotels/ui/HotelsTabs'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as 'ru' | 'kk' | 'en'
	const hotels = getHotels(locale)

	return (
		<>
			<PageBanner
				title={t('pages.useful.hotels.title')}
				breadcrumbs={[{ label: t('pages.useful.hotels.title'), href: '/useful/hotels' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<HotelsTabs />

					<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[60px]">
						{hotels.map((hotel) => (
							<HotelItem
								key={hotel.id}
								{...hotel}
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
