'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'

export function GlobalEvents({
	title,
	subtitle,
	logo1,
	logo2,
	events,
}: {
	title: string
	subtitle: string
	logo1: { src: string; width: number; height: number; alt: string }
	logo2: { src: string; width: number; height: number; alt: string }
	events: { id: number; title: string; subtitle: string; text: string }[]
}) {
	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const SubtitleRef = useRef<HTMLParagraphElement>(null)
	const LogosRef = useRef<HTMLDivElement>(null)
	const EventsGridRef = useRef<HTMLDivElement>(null)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	useAnimSlide(SubtitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(LogosRef, { x: 50, delay: 0.3 })

	useGSAP(
		() => {
			if (!EventsGridRef.current) return

			const eventItems = EventsGridRef.current.querySelectorAll('div > div')
			eventItems.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.4 + index * 0.1,
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

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px]"
		>
			<Container>
				<div className="mb-[35px] flex flex-wrap items-center justify-start gap-x-[20px] gap-y-[10px] sm:justify-between lg:mb-[50px]">
					<div>
						<h2
							ref={TitleRef}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold text-text opacity-0"
						>
							{title}
						</h2>
						<p
							ref={SubtitleRef}
							className="translate-y-[50px] text-[16px] leading-normal font-normal text-text opacity-0"
						>
							{subtitle}
						</p>
					</div>
					<div
						ref={LogosRef}
						className="grid translate-x-[50px] grid-cols-2 items-center gap-x-[10px] opacity-0"
					>
						<Image
							src={logo1.src}
							width={logo1.width}
							height={logo1.height}
							alt={logo1.alt}
						/>
						<Image
							src={logo2.src}
							width={logo2.width}
							height={logo2.height}
							alt={logo2.alt}
						/>
					</div>
				</div>

				<div className="relative flex w-full flex-col gap-[30px] md:block">
					<div className="relative w-full before:absolute before:top-[4.5px] before:left-0 before:z-1 before:h-px before:w-full before:bg-linear-to-r before:from-[#41754F] before:to-transparent">
						<Swiper
							modules={[Navigation]}
							slidesPerView={1}
							spaceBetween={30}
							className="w-full overflow-visible"
							navigation={{
								nextEl: '#global-events-swiper-button-next',
								prevEl: '#global-events-swiper-button-prev',
							}}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								480: {
									slidesPerView: 2.2,
									spaceBetween: 30,
								},
								1020: {
									slidesPerView: 3,
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
							{events.map((event) => (
								<SwiperSlide
									key={event.id}
									className="relative rounded-[12px]"
								>
									<div className="relative pt-[40px] before:absolute before:top-0 before:left-0 before:z-1 before:h-[10px] before:w-[10px] before:rounded-full before:bg-[#41754F]">
										<h3 className="mb-[10px] text-[36px] leading-normal font-bold text-[#41754F]">{event.title}</h3>
										<p className="mb-[10px] text-[20px] leading-normal font-bold text-text">{event.subtitle}</p>
										<p className="text-[16px] leading-normal font-normal text-text">{event.text}</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="relative z-5 mt-[50px] flex items-center justify-start">
						<div className={`flex items-center justify-start gap-[20px]`}>
							<div className="flex items-center justify-start gap-[10px]">
								<div id="global-events-swiper-button-prev">
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

								<div id="global-events-swiper-button-next">
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
