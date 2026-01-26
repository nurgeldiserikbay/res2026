'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'

import type { Swiper as SwiperType } from 'swiper'

type ThemeZone = {
	id: number
	image: string
	title: string
}

export function ThemeZonesSlider({ themeZones }: { themeZones: ThemeZone[] }) {
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(false)
	const swiperRef = useRef<SwiperType | null>(null)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	const handlePrev = () => {
		swiperRef.current?.slidePrev()
	}

	const handleNext = () => {
		swiperRef.current?.slideNext()
	}

	return (
		<>
			{/* Grid для больших экранов (xl и выше) */}
			<div className="hidden grid-cols-1 gap-x-[10px] gap-y-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid xl:grid-cols-4">
				{themeZones.map((themeZone) => (
					<div
						key={themeZone.id}
						className={[
							`group relative flex h-[484px] w-full flex-col items-center justify-center overflow-hidden rounded-[12px] bg-[url('/imgs/exhibition/theme-zone.webp')] bg-cover bg-center xs:h-[584px]`,
						].join(' ')}
						aria-label={themeZone.title}
					>
						<Image
							src={themeZone.image}
							alt={themeZone.title}
							width={443}
							height={584}
							className="transform-origin-center mx-auto mb-[80px] h-auto w-[55%] object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
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
			<div className="xl:hidden">
				<Swiper
					modules={[Navigation]}
					slidesPerView={1}
					spaceBetween={10}
					className="w-full overflow-visible rounded-[12px]"
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
						swiperRef.current = swiper
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
								className={[
									`group relative flex h-[484px] w-full flex-col items-center justify-center overflow-hidden rounded-[12px] bg-[url('/imgs/exhibition/theme-zone.webp')] bg-cover bg-center xs:h-[584px]`,
								].join(' ')}
								aria-label={themeZone.title}
							>
								<Image
									src={themeZone.image}
									alt={themeZone.title}
									width={443}
									height={584}
									className="transform-origin-center mx-auto mb-[80px] h-auto w-[65%] object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
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
							{isBeginning ? (
								<ButtonOutlined
									icon={false}
									onClick={handlePrev}
									className="pointer-events-none box-border h-[45px] w-[36px] cursor-default rounded-[8px]! p-[8px]! text-muted"
								>
									<IconArrowHead className="rotate-180 transform text-muted" />
								</ButtonOutlined>
							) : (
								<ButtonDefault
									icon={false}
									onClick={handlePrev}
									className="h-[45px] w-[36px] rounded-[8px]! p-[8px]!"
								>
									<IconArrowHead className="rotate-180 transform" />
								</ButtonDefault>
							)}

							{isEnd ? (
								<ButtonOutlined
									icon={false}
									onClick={handleNext}
									className="pointer-events-none box-border h-[45px] w-[36px] cursor-default rounded-[8px]! p-[8px]! text-muted"
								>
									<IconArrowHead className="text-muted" />
								</ButtonOutlined>
							) : (
								<ButtonDefault
									icon={false}
									onClick={handleNext}
									className="h-[45px] w-[36px] rounded-[8px]! p-[8px]!"
								>
									<IconArrowHead />
								</ButtonDefault>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	)
}
