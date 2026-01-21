'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'

export function CitySymbols() {
	const t = useTranslations()
	const [isBeginning, setIsBeginning] = useState(false)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(false)

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	const images = [
		{
			id: 0,
			title: t('pages.useful.astana.symbols.title1'),
			image: `/imgs/usefulls/astana-symbol-1.png`,
			style: `translate-y-[0px]`,
		},
		{
			id: 1,
			title: t('pages.useful.astana.symbols.title2'),
			image: `/imgs/usefulls/astana-symbol-2.png`,
			style: `translate-y-[45px] lg:translate-y-[76px]`,
		},
		{
			id: 2,
			title: t('pages.useful.astana.symbols.title3'),
			image: `/imgs/usefulls/astana-symbol-3.png`,
			style: `translate-y-[-28px] lg:translate-y-[-48px]`,
		},
		{
			id: 3,
			title: t('pages.useful.astana.symbols.title4'),
			image: `/imgs/usefulls/astana-symbol-4.png`,
			style: `translate-y-[-6px]`,
		},
		{
			id: 4,
			title: t('pages.useful.astana.symbols.title5'),
			image: `/imgs/usefulls/astana-symbol-5.png`,
			style: `translate-y-[6px]`,
		},
		{
			id: 5,
			title: t('pages.useful.astana.symbols.title6'),
			image: `/imgs/usefulls/astana-symbol-6.png`,
			style: `translate-y-0`,
		},
	]

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<h2 className="text-text 3xl:text-[48px] mb-[56px] text-[32px] leading-[1.2] font-bold xl:mb-[60px] xl:text-[36px] 2xl:text-[30px]">
					{t('pages.useful.astana.attractionsAndSymbols.title')}
				</h2>

				<div>
					<Swiper
						modules={[Navigation]}
						className="w-full overflow-visible! rounded-[12px]"
						slidesPerView={1.2}
						spaceBetween={20}
						navigation={{
							nextEl: '#city-symbols-swiper-button-next',
							prevEl: '#city-symbols-swiper-button-prev',
						}}
						breakpoints={{
							// when window width is >= 480px
							480: {
								slidesPerView: 2.2,
								spaceBetween: 20,
							},
							// when window width is >= 640px
							1020: {
								slidesPerView: 3.1,
								spaceBetween: 20,
							},
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
						onBreakpoint={(swiper) => updateShowNavigation(swiper, images.length)}
					>
						{images.map((item) => (
							<SwiperSlide key={item.id}>
								<div className={[`relative rounded-[12px]`, item.style].join(` `)}>
									<Image
										src={item.image}
										alt={item.title}
										width={900}
										height={430}
										loading="lazy"
										unoptimized={true}
										quality={100}
										decoding="async"
										className="md:aspect-unset block w-full rounded-[12px]"
									/>
									<div className="absolute bottom-0 left-0 z-10 p-[30px]">
										<h3 className="text-left text-[20px] leading-[1.2] font-bold text-white md:text-[24px] xl:text-[28px] 2xl:text-[32px]">
											{item.title}
										</h3>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div
						className={`mt-[75px] flex items-center justify-start gap-[20px] md:mt-[136px] ${!showNavigation ? 'hidden' : ''}`}
						aria-hidden={!showNavigation}
					>
						<div className="flex items-center justify-start gap-[10px]">
							<div id="city-symbols-swiper-button-prev">
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

							<div id="city-symbols-swiper-button-next">
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
						{/* <div className="text-muted-light text-[24px] leading-normal font-normal">
							<span className="text-[24px] leading-normal font-normal text-[#02493F]">{activeSlide + 1}</span>
							<span>/</span>
							<span className="font-normal] text-[16px] leading-normal">{images?.length}</span>
						</div> */}
					</div>
				</div>
			</Container>
		</section>
	)
}
