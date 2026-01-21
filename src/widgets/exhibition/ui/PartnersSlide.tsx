'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'

export type PartnerItem = {
	id: number
	image: string
	title: string
}

function PartnerItemComponent({ item, delay }: { item: PartnerItem; delay: number }) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 50, x: 0, delay })

	return (
		<div
			ref={ref}
			className="block translate-y-[50px] opacity-0"
		>
			<Image
				src={item.image}
				alt={item.title}
				width={167}
				height={122}
				className="block w-full sm:w-auto xl:h-[122px]"
			/>
		</div>
	)
}

export function PartnersSlide({
	images,
	title,
	id,
	delays = [],
	className,
}: {
	images: { id: number; image: string; title: string }[]
	title: string
	id: number
	delays?: number[]
	className?: string
}) {
	const t = useTranslations()
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(false)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	return (
		<div className={`relative flex w-full flex-col items-center gap-[40px] ${className}`}>
			<h5 className="text-primary font-regular text-center text-[18px] leading-normal md:text-[20px] lg:text-[22px] xl:text-[24px]">
				{t(title)}
			</h5>
			<div className="w-full">
				<Swiper
					modules={[Navigation]}
					className="w-full overflow-visible rounded-[12px] md:h-[122px] 2xl:h-[122px]"
					navigation={{
						nextEl: `#partners-swiper-button-next-${id}`,
						prevEl: `#partners-swiper-button-prev-${id}`,
					}}
					onSwiper={(swiper) => {
						setIsBeginning(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
						updateShowNavigation(swiper, images.length)
					}}
					onSlideChange={(swiper) => {
						setIsBeginning(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
					}}
					breakpoints={{
						320: {
							slidesPerView: 1.5,
							spaceBetween: 30,
						},
						440: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						560: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						780: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1020: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
						1440: {
							slidesPerView: 6,
							spaceBetween: 30,
						},
						1600: {
							slidesPerView: 7,
							spaceBetween: 30,
						},
						1920: {
							slidesPerView: 9,
							spaceBetween: 30,
						},
					}}
					centeredSlides={true}
					centeredSlidesBounds={true}
					centerInsufficientSlides={true}
				>
					{images.map((slide, index) => (
						<SwiperSlide
							key={slide.id}
							className="h-[122px] overflow-hidden rounded-[12px] md:h-[122px] 2xl:h-[122px]"
						>
							<PartnerItemComponent
								key={slide.id}
								item={slide}
								delay={delays[index] || 0.2}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{showNavigation && (
				<div className="flex w-full items-center justify-center">
					<div
						className={`flex items-center justify-start gap-[20px] ${!showNavigation ? 'hidden' : ''}`}
						aria-hidden={!showNavigation}
					>
						<div className="flex items-center justify-start gap-[10px]">
							<div id={`partners-swiper-button-prev-${id}`}>
								{isBeginning ? (
									<ButtonOutlined
										icon={false}
										className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default rounded-[8px]! p-[8px]!"
									>
										<IconArrowHead className="text-muted rotate-180 transform" />
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

							<div id={`partners-swiper-button-next-${id}`}>
								{isEnd ? (
									<ButtonOutlined
										icon={false}
										className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default rounded-[8px]! p-[8px]!"
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
						{/* <div className="text-muted-light text-[24px] leading-normal font-normal">
            <span className="text-text text-[24px] leading-normal font-normal md:text-white">{activeSlide + 1}</span>
            <span>/</span>
            <span className="font-normal] text-[16px] leading-normal">{images?.length}</span>
          </div> */}
					</div>
				</div>
			)}
		</div>
	)
}
