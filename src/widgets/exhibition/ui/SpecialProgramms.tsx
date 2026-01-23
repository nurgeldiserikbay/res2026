'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'

export function SpecialProgramms() {
	const t = useTranslations()

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [showNavigation, setShowNavigation] = useState(false)

	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const SwiperRef = useRef<HTMLDivElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	useGSAP(
		() => {
			if (!SwiperRef.current) return

			const slides = SwiperRef.current.querySelectorAll('.swiper-slide')
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
							trigger: SectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: SectionRef },
	)

	const list = [
		{
			id: 1,
			title: t('pages.exhibition.specialProgramms.item1'),
			description: t('pages.exhibition.specialProgramms.item1Text'),
		},
		{
			id: 2,
			title: t('pages.exhibition.specialProgramms.item2'),
			description: t('pages.exhibition.specialProgramms.item2Text'),
		},
		{
			id: 3,
			title: t('pages.exhibition.specialProgramms.item3'),
			description: t('pages.exhibition.specialProgramms.item3Text'),
		},
		{
			id: 4,
			title: t('pages.exhibition.specialProgramms.item4'),
			description: t('pages.exhibition.specialProgramms.item4Text'),
		},
		{
			id: 5,
			title: t('pages.exhibition.specialProgramms.item5'),
			description: t('pages.exhibition.specialProgramms.item5Text'),
		},
		{
			id: 6,
			title: t('pages.exhibition.specialProgramms.item6'),
			description: t('pages.exhibition.specialProgramms.item6Text'),
		},
		{
			id: 7,
			title: t('pages.exhibition.specialProgramms.item7'),
			description: t('pages.exhibition.specialProgramms.item7Text'),
		},
	]

	const updateShowNavigation = (swiper: { params: { slidesPerView?: number | string } }, count: number) => {
		const spv = typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1
		setShowNavigation(count > spv)
	}

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px] 3xl:pt-[100px]"
		>
			<Container>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-left text-[24px] leading-normal font-bold opacity-0 md:mb-[40px] md:text-[28px] lg:mb-[50px] lg:text-[32px] 2xl:mb-[60px]"
				>
					{t('pages.exhibition.specialProgramms.title')}
				</h2>

				<div
					ref={SwiperRef}
					className="relative w-full"
				>
					<div className="relative w-full">
						<Swiper
							modules={[Navigation]}
							slidesPerView={1}
							className="w-full overflow-visible"
							navigation={{
								nextEl: '#special-programms-swiper-button-next',
								prevEl: '#special-programms-swiper-button-prev',
							}}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								980: {
									slidesPerView: 2,
									spaceBetween: 30,
								},
								1020: {
									slidesPerView: 3,
									spaceBetween: 35,
								},
							}}
							onSwiper={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
								updateShowNavigation(swiper, list.length)
							}}
							onSlideChange={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
							}}
							onBreakpoint={(swiper) => updateShowNavigation(swiper, list.length)}
						>
							{list.map((item) => (
								<SwiperSlide key={item.id}>
									<div>
										<h3 className="mb-[10px] text-[20px] leading-normal font-bold text-[#41754F] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[35px]">
											{item.title}
										</h3>
										<p className="text-[16px] leading-normal font-normal text-text">{item.description}</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div
							className={`mt-[30px] flex items-center justify-start gap-[20px] xl:mt-[40px] 2xl:mt-[50px] ${!showNavigation ? 'hidden' : ''}`}
							aria-hidden={!showNavigation}
						>
							<div className="flex items-center justify-start gap-[10px]">
								<div id="special-programms-swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="pointer-events-none box-border h-[45px] w-[82px] cursor-default p-[8px]! text-muted"
										>
											<IconArrowHead className="rotate-180 transform text-muted" />
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

								<div id="special-programms-swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="pointer-events-none box-border h-[45px] w-[82px] cursor-default p-[8px]! text-muted"
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
              <span className="font-normal] text-[16px] leading-normal">{list.length}</span>
            </div> */}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
