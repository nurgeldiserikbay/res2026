'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Speaker } from '@/entities/speaker/Speaker'
import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'

export function Speakers() {
	const t = useTranslations()

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	// Refs for animations
	const sectionRef = useRef<HTMLElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const textWithButtonsRef = useRef<HTMLDivElement>(null)
	const swiperRef = useRef<HTMLDivElement>(null)

	// Animation for background size
	useGSAP(
		() => {
			if (!sectionRef.current) return

			// Set initial background size
			gsap.set(sectionRef.current, {
				backgroundSize: '140% 140%',
			})

			// Animate background size
			gsap.to(sectionRef.current, {
				backgroundSize: '100% 100%',
				duration: 1.2,
				delay: 0,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 80%',
					once: true,
				},
			})
		},
		{ scope: sectionRef },
	)

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
			className="bg-secondary relative bg-[url(/imgs/map-bg.svg)] bg-center bg-no-repeat pt-[134px] pb-[120px] before:pointer-events-none before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-0 before:bg-[url('/imgs/points.png')] before:bg-cover before:bg-center before:bg-no-repeat"
		>
			<Container className="flex items-start justify-between gap-[30px]">
				<div className="flex max-w-[578px] flex-col items-end justify-start">
					<h2
						ref={titleRef}
						className="text-text mb-[66px] w-full translate-x-[90px] text-[96px] leading-none font-bold opacity-0"
					>
						{t('titles.speakers')}
					</h2>

					<div
						ref={textWithButtonsRef}
						className="max-w-[402px] translate-y-[90px] opacity-0"
					>
						<h4 className="text-text mb-[30px] text-left text-[24px] leading-normal font-bold">{t('pages.speakers.text')}</h4>
						<p className="text-text mb-[30px] text-[16px] leading-normal">{t('pages.speakers.text1')}</p>

						<div className="flex w-full items-start justify-between gap-[20px]">
							<ButtonDefault>{t('labels.allSpeakers')}</ButtonDefault>

							<div>
								<div id="swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none mb-[10px] h-[45px] w-[82px] cursor-default py-[12px]"
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

								<div id="swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none mb-[10px] h-[45px] w-[82px] cursor-default py-[12px]"
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
						</div>
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
								slidesPerView: 1,
								spaceBetween: 20,
							},
							// when window width is >= 480px
							480: {
								slidesPerView: 3,
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
			</Container>
		</section>
	)
}
