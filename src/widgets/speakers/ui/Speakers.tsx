'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Speaker } from '@/entities/speaker/Speaker'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { SpekerControl } from './SpekerControl'

export function Speakers() {
	const t = useTranslations()

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	// Refs for animations
	const sectionRef = useRef<HTMLElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const textWithButtonsRef = useRef<HTMLDivElement>(null)
	const swiperRef = useRef<HTMLDivElement>(null)

	// Animation for background banner
	useAnimBg(sectionRef, {
		fromSize: '140%',
		toSize: '100%',
		fromPosition: 'left center',
		toPosition: 'left center',
		duration: 1.2,
		bgImage: '/imgs/map-bg.svg',
	})

	useAnimSlide(titleRef, { x: 90, y: 0, delay: 0.1 })
	useAnimSlide(textWithButtonsRef, { x: 0, y: 90, delay: 0.2 })

	// Animation for swiper slides - right to left one by one
	useGSAP(
		() => {
			if (!swiperRef.current) return

			const slides = swiperRef.current.querySelectorAll('.swiper-slide')
			slides.forEach((slide, index) => {
				gsap.fromTo(
					slide,
					{ x: 90, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 1,
						delay: 0.3 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: swiperRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ dependencies: [], revertOnUpdate: true },
	)

	return (
		<section
			ref={sectionRef}
			data-animated-banner
			className="bg-secondary relative overflow-hidden pt-[110px] pb-[57px] after:pointer-events-none after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-0 after:bg-[url('/imgs/points.png')] after:bg-cover after:bg-left after:bg-no-repeat md:pt-[120px] md:pb-[85px] lg:pb-[100px] 2xl:pt-[134px] 2xl:pb-[120px]"
		>
			<Container className="flex flex-wrap items-start justify-between gap-x-[30px] gap-y-[12px] lg:flex-nowrap">
				<div className="flex flex-col items-end justify-start lg:max-w-[578px]">
					<h2
						ref={titleRef}
						className="text-text 3xl:text-[96px] mb-[30px] w-full translate-x-[90px] text-[32px] leading-none font-bold opacity-0 md:mb-[40px] md:text-[48px] lg:mb-[50px] lg:text-[58px] 2xl:mb-[66px] 2xl:text-[72px]"
					>
						{t('titles.speakers')}
					</h2>

					<div
						ref={textWithButtonsRef}
						className="translate-y-[90px] opacity-0 lg:max-w-[402px]"
					>
						<h4 className="text-text mb-[30px] text-left text-[20px] leading-normal font-bold md:text-[22px] xl:text-[24px]">
							{t('pages.speakers.text')}
						</h4>
						<p className="text-text mb-[30px] text-[16px] leading-normal">{t('pages.speakers.text1')}</p>

						<SpekerControl
							isBeginning={isBeginning}
							isEnd={isEnd}
							className="hidden lg:flex"
						/>
					</div>
				</div>

				<div
					ref={swiperRef}
					className="w-full max-w-[1135px]"
				>
					<Swiper
						modules={[Navigation]}
						slidesPerView={1}
						className="w-full overflow-visible"
						navigation={{
							nextEl: '#swiper-button-next',
							prevEl: '#swiper-button-prev',
						}}
						breakpoints={{
							// when window width is >= 320px
							320: {
								slidesPerView: 1.2,
								spaceBetween: 10,
							},
							// when window width is >= 480px
							480: {
								slidesPerView: 2.2,
								spaceBetween: 30,
							},
							// when window width is >= 640px
							1020: {
								slidesPerView: 2.4,
								spaceBetween: 60,
							},
						}}
						onSwiper={(swiper) => {
							setIsBeginning(swiper.isBeginning)
							setIsEnd(swiper.isEnd)
						}}
						onSlideChange={(swiper) => {
							setIsBeginning(swiper.isBeginning)
							setIsEnd(swiper.isEnd)
						}}
					>
						{new Array(10).fill(0).map((_, index) => (
							<SwiperSlide
								key={index}
								className="translate-x-[90px] opacity-0"
							>
								<Speaker
									name="Lok Sabha"
									description="(Лок Сабха) от правящего Национального -декомакрвтического альянса"
									image="/imgs/speaker.png"
									tag="Спикер"
									title="Член новоизбранный нижней палаты Индии"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<SpekerControl
					className="mt-[48px] flex lg:hidden"
					isBeginning={isBeginning}
					isEnd={isEnd}
				/>
			</Container>
		</section>
	)
}
