'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { NewsItem } from '@/entities/news/NewsItem'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { newsPaginItems } from '@/widgets/news/mocks'
import { NewsTabLinks } from '@/widgets/news/ui/NewsTabLinks'

type NewsItemWrapperProps = {
	item: (typeof newsPaginItems)[0]
	index: number
	delay: number
}

function NewsItemWrapper({ item, delay }: NewsItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 50, delay })

	return (
		<div
			ref={ref}
			className={`translate-y-[50px] opacity-0 ${item.wide ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'}`}
		>
			<NewsItem {...item} />
		</div>
	)
}

export default function Page() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '140%',
		toSize: '120%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/news-banner.png',
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })
	const TabLinksRef = useRef<HTMLDivElement>(null)
	useAnimSlide(TabLinksRef, { y: 50, delay: 0.3 })
	const PaginationRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PaginationRef, { y: 50, delay: 0.4 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className="bg-secondary h-[343px] pt-[176px]"
			>
				<Container className="relative z-10">
					<h1
						ref={TitleRef}
						className="3xl:text-[48px] mb-[30px] translate-y-[50px] text-center text-[32px] leading-none font-bold text-white opacity-0 md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
					>
						{t('titles.news')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={[{ label: t('titles.news'), href: '/news' }]} />
					</div>
				</Container>
			</section>

			<section className="bg-white pt-[100px]">
				<Container>
					<div
						ref={TabLinksRef}
						className="translate-y-[50px] opacity-0"
					>
						<NewsTabLinks />
					</div>

					<div className="grid grid-cols-4 gap-[60px]">
						{newsPaginItems.map((item, index) => (
							<NewsItemWrapper
								key={index}
								item={item}
								index={index}
								delay={0.1 + index * 0.1}
							/>
						))}
					</div>

					<div
						ref={PaginationRef}
						className="mt-[50px] flex translate-y-[50px] items-center justify-center opacity-0"
					>
						<MainPagination totalPages={10} />
					</div>
				</Container>
			</section>
		</>
	)
}
