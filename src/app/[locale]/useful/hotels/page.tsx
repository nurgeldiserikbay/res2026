'use client'

import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { HotelItem } from '@/entities/hotel/HotelItem'
import { getHotels } from '@/entities/hotel/mocks'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { HotelsTabs } from '@/widgets/hotels/ui/HotelsTabs'

const ITEMS_PER_PAGE = 12

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as 'ru' | 'kk' | 'en'
	const searchParams = useSearchParams()

	// Получаем параметры из URL
	const ratingFilter = searchParams.get('type') ? Number(searchParams.get('type')) : null
	const currentPage = Number(searchParams.get('page') || '1')

	// Получаем все отели
	const allHotels = getHotels(locale)

	// Фильтруем по рейтингу
	const filteredHotels = useMemo(() => {
		if (!ratingFilter) {
			return allHotels
		}
		return allHotels.filter((hotel) => hotel.rating === ratingFilter)
	}, [allHotels, ratingFilter])

	// Применяем пагинацию
	const paginatedHotels = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
		const endIndex = startIndex + ITEMS_PER_PAGE
		return filteredHotels.slice(startIndex, endIndex)
	}, [filteredHotels, currentPage])

	// Вычисляем общее количество страниц
	const totalPages = useMemo(() => {
		return Math.ceil(filteredHotels.length / ITEMS_PER_PAGE)
	}, [filteredHotels.length])

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
						{paginatedHotels.map((hotel) => (
							<HotelItem
								key={hotel.id}
								{...hotel}
							/>
						))}
					</div>

					{totalPages > 1 && (
						<div className="mt-[30px] flex items-center justify-center xl:mt-[60px]">
							<MainPagination totalPages={totalPages} />
						</div>
					)}
				</Container>
			</section>
		</>
	)
}
