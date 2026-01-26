'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Locale } from '@/shared/config/i18n'
import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'
import { localize } from '@/shared/utils/localize'

export function FloraAndFauna({
	slides,
}: {
	slides: {
		id: number
		image: string
		title: { kk: string; ru: string; en: string }
		description: { kk: string; ru: string; en: string }
		alt: string
		width: number
		height: number
	}[]
}) {
	const locale = useLocale() as Locale

	const [activeSlide, setActiveSlide] = useState(0)

	const slide = slides[activeSlide]
	const localizedTitle = localize(slide.title, locale, '')
	const localizedDescription = localize(slide.description, locale, '')

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(slides.length > 1)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const DescriptionRef = useRef<HTMLParagraphElement>(null)
	const ButtonsRef = useRef<HTMLDivElement>(null)

	useAnimSlide(SectionRef, { y: 50, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(DescriptionRef, { y: 50, delay: 0.3 })
	useAnimSlide(ButtonsRef, { x: -50, delay: 0.4 })

	// Анимация при смене слайда
	useEffect(() => {
		if (!TitleRef.current || !DescriptionRef.current) return

		gsap.fromTo(
			[TitleRef.current, DescriptionRef.current],
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'power2.out',
			},
		)
	}, [activeSlide])

	return (
		<>
			<section
				ref={SectionRef}
				id="flora-and-fauna"
				className="relative translate-y-[50px] pt-[50px] opacity-0 sm:pt-[60px] md:pt-[80px] lg:pt-[100px]"
			>
				<Container className="overflow-visible">
					<div className="relative flex w-full flex-col gap-[30px] md:block">
						<div className="relative order-2 w-full after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-1 after:h-full after:w-full after:rounded-[12px] after:bg-linear-to-r after:from-black/70 after:to-transparent">
							<Swiper
								modules={[Navigation]}
								slidesPerView={1}
								spaceBetween={30}
								className="h-[287px] w-full overflow-visible rounded-[12px] md:h-[888px]"
								navigation={{
									nextEl: '#flora-and-fauna-swiper-button-next',
									prevEl: '#flora-and-fauna-swiper-button-prev',
								}}
								onSwiper={(swiper) => {
									setIsBeginning(swiper.isBeginning)
									setIsEnd(swiper.isEnd)
									setActiveSlide(swiper.activeIndex)
									updateShowNavigation(swiper, slides.length)
								}}
								onSlideChange={(swiper) => {
									setIsBeginning(swiper.isBeginning)
									setIsEnd(swiper.isEnd)
									setActiveSlide(swiper.activeIndex)
								}}
							>
								{slides.map((slide) => (
									<SwiperSlide
										key={slide.id}
										className="h-[287px] overflow-hidden rounded-[12px] md:h-[888px]"
									>
										<Image
											src={slide.image}
											alt={slide.alt}
											width={slide.width}
											height={slide.height}
											quality={100}
											loading="lazy"
											className="block h-full w-full rounded-[12px] object-cover"
										/>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="static bottom-0 left-0 z-2 order-1 flex flex-col items-start justify-end md:absolute md:px-[25px] md:py-[25px] lg:px-[50px] lg:py-[50px]">
							<div>
								<h3
									ref={TitleRef}
									className="mb-[30px] translate-y-[50px] text-[24px] leading-[1.2] font-bold text-text opacity-0 xs:text-[32px] md:text-white"
								>
									{localizedTitle}
								</h3>
								<p
									ref={DescriptionRef}
									className="max-w-[860px] translate-y-[50px] text-justify text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0 md:text-white"
								>
									{localizedDescription}
								</p>
							</div>
							<div
								ref={ButtonsRef}
								className={`mt-[50px] flex translate-x-[-50px] gap-[10px] opacity-0 ${!showNavigation ? 'hidden' : ''}`}
								aria-hidden={!showNavigation}
							>
								<div id="flora-and-fauna-swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											aria-label="Previous slide"
											aria-disabled="true"
											className="pointer-events-none mb-[10px] box-border h-[45px] w-[82px] cursor-default py-[12px] text-muted"
										>
											<IconArrowHead
												className="rotate-180 transform text-muted"
												aria-hidden="true"
											/>
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											aria-label="Previous slide"
											className="mb-[10px] h-[45px] w-[82px] py-[12px]"
										>
											<IconArrowHead
												className="rotate-180 transform"
												aria-hidden="true"
											/>
										</ButtonDefault>
									)}
								</div>

								<div id="flora-and-fauna-swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											aria-label="Next slide"
											aria-disabled="true"
											className="pointer-events-none box-border h-[45px] w-[82px] cursor-default py-[12px] text-muted"
										>
											<IconArrowHead
												className="text-muted"
												aria-hidden="true"
											/>
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											aria-label="Next slide"
											className="h-[45px] w-[82px] py-[12px]"
										>
											<IconArrowHead aria-hidden="true" />
										</ButtonDefault>
									)}
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
