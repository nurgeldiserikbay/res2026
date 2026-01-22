'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'

type ThemeZone = {
	id: number
	image: string
	title: string
}

export function ThemeZonesSlider({ themeZones }: { themeZones: ThemeZone[] }) {
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(false)

	const gridRef = useRef<HTMLDivElement>(null)
	const swiperRef = useRef<HTMLDivElement>(null)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	// Animation for grid items
	useGSAP(
		() => {
			if (!gridRef.current) return

			const items = gridRef.current.querySelectorAll('[data-theme-zone-item]')
			items.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.3 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: gridRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ dependencies: [themeZones], revertOnUpdate: true },
	)

	// Animation for swiper slides
	useGSAP(
		() => {
			if (!swiperRef.current) return

			const slides = swiperRef.current.querySelectorAll('.swiper-slide')
			slides.forEach((slide, index) => {
				gsap.fromTo(
					slide,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
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
		{ dependencies: [themeZones], revertOnUpdate: true },
	)

	return (
		<>
			{/* Grid для больших экранов (xl и выше) */}
			<div
				ref={gridRef}
				className="hidden grid-cols-1 gap-x-[10px] gap-y-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid xl:grid-cols-4"
			>
				{themeZones.map((themeZone) => (
					<div
						key={themeZone.id}
						data-theme-zone-item
						className={[`group relative h-[484px] w-full cursor-pointer overflow-hidden rounded-[12px] xs:h-[584px]`].join(' ')}
						aria-label={themeZone.title}
					>
						<Image
							src={themeZone.image}
							alt={themeZone.title}
							width={443}
							height={584}
							className="transform-origin-center h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
						/>
						<div className="absolute right-0 bottom-0 left-0 z-10 p-[30px] pb-[51px] text-center">
							<h3
								className="w-full overflow-hidden text-center text-[20px] leading-normal font-bold text-white"
								dangerouslySetInnerHTML={{ __html: themeZone.title }}
							></h3>
						</div>
					</div>
				))}
			</div>

			{/* Slider для меньших экранов (до xl) */}
			<div
				ref={swiperRef}
				className="xl:hidden"
			>
				<Swiper
					modules={[Navigation]}
					slidesPerView={1}
					spaceBetween={10}
					className="w-full overflow-visible rounded-[12px]"
					navigation={{
						nextEl: '#theme-zones-swiper-button-next',
						prevEl: '#theme-zones-swiper-button-prev',
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
					}}
					onSwiper={(swiper) => {
						setIsBeginning(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
						updateShowNavigation(swiper, themeZones.length)
					}}
					onSlideChange={(swiper) => {
						setIsBeginning(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
					}}
					onBreakpoint={(swiper) => updateShowNavigation(swiper, themeZones.length)}
				>
					{themeZones.map((themeZone) => (
						<SwiperSlide
							key={themeZone.id}
							className="overflow-hidden rounded-[12px]"
						>
							<div
								className={[`group relative h-[484px] w-full cursor-pointer overflow-hidden rounded-[12px] xs:h-[584px]`].join(' ')}
								aria-label={themeZone.title}
							>
								<Image
									src={themeZone.image}
									alt={themeZone.title}
									width={443}
									height={584}
									className="transform-origin-center h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
								/>
								<div className="absolute right-0 bottom-0 left-0 z-10 p-[30px] pb-[51px] text-center">
									<h3
										className="w-full overflow-hidden text-center text-[20px] leading-normal font-bold text-white"
										dangerouslySetInnerHTML={{ __html: themeZone.title }}
									></h3>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{showNavigation && (
					<div
						className={`mt-[30px] flex items-center justify-start gap-[20px] ${!showNavigation ? 'hidden' : ''}`}
						aria-hidden={!showNavigation}
					>
						<div className="flex items-center justify-start gap-[10px]">
							<div id="theme-zones-swiper-button-prev">
								{isBeginning ? (
									<ButtonOutlined
										icon={false}
										className="pointer-events-none box-border h-[45px] w-[36px] cursor-default rounded-[8px]! p-[8px]! text-muted"
									>
										<IconArrowHead className="rotate-180 transform text-muted" />
									</ButtonOutlined>
								) : (
									<ButtonDefault
										icon={false}
										className="h-[45px] w-[36px] rounded-[8px]! p-[8px]!"
									>
										<IconArrowHead className="rotate-180 transform" />
									</ButtonDefault>
								)}
							</div>

							<div id="theme-zones-swiper-button-next">
								{isEnd ? (
									<ButtonOutlined
										icon={false}
										className="pointer-events-none box-border h-[45px] w-[36px] cursor-default rounded-[8px]! p-[8px]! text-muted"
									>
										<IconArrowHead className="text-muted" />
									</ButtonOutlined>
								) : (
									<ButtonDefault
										icon={false}
										className="h-[45px] w-[36px] rounded-[8px]! p-[8px]!"
									>
										<IconArrowHead />
									</ButtonDefault>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}
