'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'

export function BannerSlides({ images }: { images: { id: number; image: string; description: string; title?: string }[] }) {
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="relative flex w-full flex-col gap-[30px] md:block">
					<div className="relative w-full after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-1 after:h-full after:w-full after:rounded-[12px] after:bg-linear-to-r after:from-black/70 after:to-transparent">
						<Swiper
							modules={[Navigation]}
							slidesPerView={1}
							spaceBetween={30}
							className="h-[305px] w-full overflow-visible rounded-[12px] md:h-[500px] 2xl:h-[888px]"
							navigation={{
								nextEl: '#banner-slides-swiper-button-next',
								prevEl: '#banner-slides-swiper-button-prev',
							}}
							onSwiper={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
								updateShowNavigation(swiper, images.length)
								setActiveIndex(swiper.activeIndex)
							}}
							onSlideChange={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
								setActiveIndex(swiper.activeIndex)
							}}
						>
							{images.map((slide) => (
								<SwiperSlide
									key={slide.id}
									className="relative h-[287px] overflow-hidden rounded-[12px] md:h-[888px]"
								>
									<Image
										src={slide.image}
										alt={slide.description}
										width={1800}
										height={888}
										quality={75}
										loading="lazy"
										className="block h-full w-full rounded-[12px] object-cover"
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="relative bottom-0 left-0 z-5 flex flex-col items-start justify-end md:absolute md:px-[25px] md:py-[25px] lg:px-[50px] lg:py-[50px]">
						<div className="pointer-events-none">
							{images?.length > 0 && images[activeIndex]?.title && (
								<div className="">
									<h3 className="text-[24px] leading-normal font-bold text-text md:text-[40px] md:text-white 2xl:text-[48px]">
										{images[activeIndex].title}
									</h3>
								</div>
							)}
						</div>
						<div
							className={`mt-[30px] flex items-center justify-start gap-[20px] md:mt-[46px] ${!showNavigation ? 'hidden' : ''}`}
							aria-hidden={!showNavigation}
						>
							<div className="flex items-center justify-start gap-[10px]">
								<div id="banner-slides-swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="pointer-events-none box-border h-[45px] w-[82px] cursor-default rounded-[8px]! p-[8px]! text-muted"
										>
											<IconArrowHead className="rotate-180 transform text-muted" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[82px] rounded-[8px]! p-[8px]!"
										>
											<IconArrowHead className="rotate-180 transform" />
										</ButtonDefault>
									)}
								</div>

								<div id="banner-slides-swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="pointer-events-none box-border h-[45px] w-[82px] cursor-default rounded-[8px]! p-[8px]! text-muted"
										>
											<IconArrowHead className="text-muted" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[82px] rounded-[8px]! p-[8px]!"
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
				</div>
			</Container>
		</section>
	)
}
