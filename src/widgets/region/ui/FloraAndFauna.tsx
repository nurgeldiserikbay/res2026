'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Locale } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { IconArrowHead } from '@/shared/icons/IconArrowHead'
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
				className="relative mt-[50px] translate-y-[50px] opacity-0 sm:mt-[60px] md:mt-[80px] lg:mt-[100px]"
			>
				<Container className="overflow-visible">
					<div className="relative w-full">
						<Swiper
							modules={[Navigation]}
							slidesPerView={1}
							spaceBetween={30}
							className="h-[888px] w-full overflow-visible"
							navigation={{
								nextEl: '#flora-and-fauna-swiper-button-next',
								prevEl: '#flora-and-fauna-swiper-button-prev',
							}}
							onSwiper={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
								setActiveSlide(swiper.activeIndex)
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
									className="h-[888px] overflow-hidden"
								>
									<Image
										src={slide.image}
										alt={slide.alt}
										width={slide.width}
										height={slide.height}
										className="block h-full w-full object-cover"
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="absolute bottom-0 left-0 z-1 flex flex-col items-start justify-end p-[50px]">
							<div
								ref={ButtonsRef}
								className="mb-[50px] translate-x-[-50px] opacity-0"
							>
								<div id="flora-and-fauna-swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none mb-[10px] box-border h-[45px] w-[82px] cursor-default py-[12px]"
										>
											<IconArrowHead className="text-muted rotate-180 transform" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="mb-[10px] h-[45px] w-[82px] py-[12px]"
										>
											<IconArrowHead className="rotate-180 transform" />
										</ButtonDefault>
									)}
								</div>

								<div id="flora-and-fauna-swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none box-border h-[45px] w-[82px] cursor-default py-[12px]"
										>
											<IconArrowHead className="text-muted" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[82px] py-[12px]"
										>
											<IconArrowHead />
										</ButtonDefault>
									)}
								</div>
							</div>
							<div>
								<h3
									ref={TitleRef}
									className="mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold text-white opacity-0"
								>
									{localizedTitle}
								</h3>
								<p
									ref={DescriptionRef}
									className="max-w-[860px] translate-y-[50px] text-[16px] leading-normal font-normal text-white opacity-0"
								>
									{localizedDescription}
								</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
