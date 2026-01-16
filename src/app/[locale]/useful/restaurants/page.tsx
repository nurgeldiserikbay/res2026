'use client'

import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getRestaurants } from '@/entities/restaurant/mocks'
import { RestaurantItem } from '@/entities/restaurant/RestaurantItem'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'

const ITEMS_PER_PAGE = 12

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as 'ru' | 'kk' | 'en'
	const searchParams = useSearchParams()

	// Получаем параметр страницы из URL
	const currentPage = Number(searchParams.get('page') || '1')

	// Получаем все рестораны
	const allRestaurants = getRestaurants(locale)

	// Применяем пагинацию
	const paginatedRestaurants = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
		const endIndex = startIndex + ITEMS_PER_PAGE
		return allRestaurants.slice(startIndex, endIndex)
	}, [allRestaurants, currentPage])

	// Вычисляем общее количество страниц
	const totalPages = useMemo(() => {
		return Math.ceil(allRestaurants.length / ITEMS_PER_PAGE)
	}, [allRestaurants.length])

	return (
		<>
			<PageBanner
				title={t('pages.useful.restaurants.title')}
				breadcrumbs={[{ label: t('pages.useful.restaurants.title'), href: '/useful/restaurants' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[60px]">
						{paginatedRestaurants.map((restaurant) => (
							<RestaurantItem
								key={restaurant.id}
								{...restaurant}
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
