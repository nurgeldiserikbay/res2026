'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useRef } from 'react'

import { AttractionItem } from '@/entities/attractions/AttractionItem'
import { getAttractions } from '@/entities/attractions/mocks'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'

const ITEMS_PER_PAGE = 12

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as 'ru' | 'kk' | 'en'
	const searchParams = useSearchParams()

	const SectionRef = useRef<HTMLElement>(null)
	const GridRef = useRef<HTMLDivElement>(null)

	// Получаем параметр страницы из URL
	const currentPage = Number(searchParams.get('page') || '1')

	// Получаем все достопримечательности
	const allAttractions = getAttractions(locale)

	// Применяем пагинацию
	const paginatedAttractions = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
		const endIndex = startIndex + ITEMS_PER_PAGE
		return allAttractions.slice(startIndex, endIndex)
	}, [allAttractions, currentPage])

	// Вычисляем общее количество страниц
	const totalPages = useMemo(() => {
		return Math.ceil(allAttractions.length / ITEMS_PER_PAGE)
	}, [allAttractions.length])

	useGSAP(
		() => {
			if (!GridRef.current) return

			const items = GridRef.current.querySelectorAll('a')
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
		{ dependencies: [paginatedAttractions], scope: SectionRef },
	)

	return (
		<>
			<PageBanner
				title={t('pages.useful.attractions.title')}
				breadcrumbs={[{ label: t('pages.useful.attractions.title'), href: '/useful/attractions' }]}
			/>

			<section
				ref={SectionRef}
				className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container>
					<div
						ref={GridRef}
						className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:gap-[60px]"
					>
						{paginatedAttractions.map((attraction) => (
							<AttractionItem
								key={attraction.id}
								{...attraction}
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
