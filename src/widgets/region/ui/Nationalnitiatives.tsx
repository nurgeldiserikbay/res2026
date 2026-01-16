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

export function Nationalnitiatives({
	list,
	title,
}: {
	list: { id: number; title: string; description: string; image: string }[]
	title: string
}) {
	const [activeSlide, setActiveSlide] = useState(0)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	return (
		<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
			<Container>
				<h2 className="mb-[30px] text-left text-[24px] leading-normal font-bold md:mb-[40px] md:text-[28px] lg:mb-[50px] lg:text-[32px] 2xl:mb-[60px]">
					{title}
				</h2>

				<div className="relative w-full">
					<Swiper
						modules={[Navigation]}
						slidesPerView={1}
						className="w-full overflow-visible"
						navigation={{
							nextEl: '#national-initiatives-swiper-button-next',
							prevEl: '#national-initiatives-swiper-button-prev',
						}}
						breakpoints={{
							320: {
								slidesPerView: 1.2,
								spaceBetween: 10,
							},
							480: {
								slidesPerView: 2.2,
								spaceBetween: 30,
							},
							1020: {
								slidesPerView: 4.1,
								spaceBetween: 30,
							},
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
						{list.map((item) => (
							<SwiperSlide key={item.id}>
								<div>
									<Image
										src={item.image}
										alt={item.title}
										width={407}
										height={310}
										className="mb-[30px] aspect-407/310 w-full rounded-[12px] object-cover"
									/>
									<h3 className="text-text mb-[10px] text-[20px] leading-normal font-bold">{item.title}</h3>
									<p className="text-text text-[16px] leading-normal font-normal">{item.description}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					{list.length > 1 && (
						<div className="mt-[30px] flex items-center justify-start gap-[20px] xl:mt-[40px] 2xl:mt-[60px]">
							<div className="flex items-center justify-start gap-[10px]">
								<div id="national-initiatives-swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none box-border h-[45px] w-[82px] cursor-default p-[8px]!"
										>
											<IconArrowHead className="text-muted rotate-180 transform" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[82px] p-[8px]!"
										>
											<IconArrowHead className="rotate-180 transform" />
										</ButtonDefault>
									)}
								</div>

								<div id="national-initiatives-swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none box-border h-[45px] w-[82px] cursor-default p-[8px]!"
										>
											<IconArrowHead className="text-muted" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[82px] p-[8px]!"
										>
											<IconArrowHead />
										</ButtonDefault>
									)}
								</div>
							</div>
							<div className="text-muted-light text-[24px] leading-normal font-normal">
								<span className="text-[24px] leading-normal font-normal text-[#02493F]">{activeSlide + 1}</span>
								<span>/</span>
								<span className="font-normal] text-[16px] leading-normal">{list.length}</span>
							</div>
						</div>
					)}
				</div>
			</Container>
		</section>
	)
}
