'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useRef } from 'react'

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

	const SectionRef = useRef<HTMLElement>(null)
	const GridRef = useRef<HTMLDivElement>(null)

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

	useGSAP(
		() => {
			if (!GridRef.current) return

			const items = GridRef.current.querySelectorAll('div > div')
			items.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.1 + index * 0.05,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: SectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ dependencies: [paginatedHotels], scope: SectionRef },
	)

	return (
		<>
			<PageBanner
				title={t('pages.useful.hotels.title')}
				breadcrumbs={[{ label: t('pages.useful.hotels.title'), href: '/useful/hotels' }]}
			/>

			<section
				ref={SectionRef}
				className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container>
					<HotelsTabs />

					<div
						ref={GridRef}
						className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[60px]"
					>
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
