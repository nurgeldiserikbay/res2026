import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'

export function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
	const [isBeginning, setIsBeginning] = useState(false)
	const [isEnd, setIsEnd] = useState(false)
	const [activeSlide, setActiveSlide] = useState(0)
	const [showNavigation, setShowNavigation] = useState(false)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={10}
				className="w-full overflow-visible rounded-[12px]"
				navigation={{
					nextEl: '#image-slider-swiper-button-next',
					prevEl: '#image-slider-swiper-button-prev',
				}}
				onSwiper={(swiper) => {
					setIsBeginning(swiper.isBeginning)
					setIsEnd(swiper.isEnd)
					setActiveSlide(swiper.activeIndex)
					updateShowNavigation(swiper, images.length)
				}}
				onSlideChange={(swiper) => {
					setIsBeginning(swiper.isBeginning)
					setIsEnd(swiper.isEnd)
					setActiveSlide(swiper.activeIndex)
				}}
			>
				{images.map((image, imageIndex) => (
					<SwiperSlide
						key={imageIndex}
						className="overflow-hidden rounded-[12px]"
					>
						<Image
							src={image}
							alt={alt}
							width={900}
							height={430}
							loading="lazy"
							unoptimized={true}
							quality={100}
							decoding="async"
							className="md:aspect-unset block w-full rounded-[12px]"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div
				className={`mt-[30px] flex items-center justify-start gap-[20px] ${!showNavigation ? 'hidden' : ''}`}
				aria-hidden={!showNavigation}
			>
				<div className="flex items-center justify-start gap-[10px]">
					<div id="image-slider-swiper-button-prev">
						{isBeginning ? (
							<ButtonOutlined
								icon={false}
								className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default p-[8px]!"
							>
								<IconArrowHead className="text-muted rotate-180 transform" />
							</ButtonOutlined>
						) : (
							<ButtonDefault
								icon={false}
								className="h-[45px] w-[36px] p-[8px]!"
							>
								<IconArrowHead className="rotate-180 transform" />
							</ButtonDefault>
						)}
					</div>

					<div id="image-slider-swiper-button-next">
						{isEnd ? (
							<ButtonOutlined
								icon={false}
								className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default p-[8px]!"
							>
								<IconArrowHead className="text-muted" />
							</ButtonOutlined>
						) : (
							<ButtonDefault
								icon={false}
								className="h-[45px] w-[36px] p-[8px]!"
							>
								<IconArrowHead />
							</ButtonDefault>
						)}
					</div>
				</div>
				<div className="text-muted-light text-[24px] leading-normal font-normal">
					<span className="text-[24px] leading-normal font-normal text-[#02493F]">{activeSlide + 1}</span>
					<span>/</span>
					<span className="font-normal] text-[16px] leading-normal">{images?.length}</span>
				</div>
			</div>
		</>
	)
}
