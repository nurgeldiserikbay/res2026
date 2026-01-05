'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'

type PartnerItem = {
	id: number
	image: string
	title: string
	link: string
	width: number
	height: number
}

type PartnerGroup = {
	title: string
	list: PartnerItem[]
}

function PartnerItemComponent({ item, delay }: { item: PartnerItem; delay: number }) {
	const ref = useRef<HTMLAnchorElement>(null)
	useAnimSlide(ref, { y: 50, x: 0, delay })

	return (
		<Link
			ref={ref}
			href={item.link}
			className="block translate-y-[50px] opacity-0"
		>
			<Image
				src={item.image}
				alt={item.title}
				width={item.width}
				height={item.height}
				className="block h-[85px] w-auto xl:h-[122px]"
			/>
		</Link>
	)
}

const partners: PartnerGroup[] = [
	{
		title: 'Организаторы',
		list: [
			{
				id: 0,
				image: '/imgs/partner-1.png',
				title: 'Partner 1',
				link: '/partner-1',
				width: 250,
				height: 122,
			},
			{
				id: 1,
				image: '/imgs/partner-2.png',
				title: 'Partner 2',
				link: '/partner-2',
				width: 250,
				height: 122,
			},
		],
	},
	{
		title: 'При поддержке',
		list: [
			{
				id: 2,
				image: '/imgs/partner-3.png',
				title: 'Partner 3',
				link: '/partner-3',
				width: 250,
				height: 122,
			},
			{
				id: 3,
				image: '/imgs/partner-4.png',
				title: 'Partner 4',
				link: '/partner-4',
				width: 250,
				height: 122,
			},
		],
	},
]

const partnersArray: PartnerGroup[] = [
	{
		title: 'Партнеры',
		list: [
			{
				id: 1,
				image: '/imgs/logo/logo-1.png',
				title: 'Organizer 1',
				link: '/partner-5',
				width: 167,
				height: 122,
			},
			{
				id: 3,
				image: '/imgs/logo/logo-3.png',
				title: 'Organizer 3',
				link: '/partner-7',
				width: 167,
				height: 122,
			},
			{
				id: 4,
				image: '/imgs/logo/logo-4.png',
				title: 'Organizer 4',
				link: '/partner-8',
				width: 167,
				height: 122,
			},
			{
				id: 5,
				image: '/imgs/logo/logo-5.png',
				title: 'Organizer 5',
				link: '/partner-9',
				width: 167,
				height: 122,
			},
			{
				id: 6,
				image: '/imgs/logo/logo-6.png',
				title: 'Organizer 6',
				link: '/partner-10',
				width: 167,
				height: 122,
			},
			{
				id: 7,
				image: '/imgs/logo/logo-7.png',
				title: 'Organizer 7',
				link: '/partner-11',
				width: 167,
				height: 122,
			},
			{
				id: 8,
				image: '/imgs/logo/logo-8.png',
				title: 'Organizer 8',
				link: '/partner-12',
				width: 167,
				height: 122,
			},
			{
				id: 9,
				image: '/imgs/logo/logo-9.png',
				title: 'Organizer 9',
				link: '/partner-13',
				width: 167,
				height: 122,
			},
			{
				id: 10,
				image: '/imgs/logo/logo-10.png',
				title: 'Organizer 10',
				link: '/partner-14',
				width: 167,
				height: 122,
			},
			{
				id: 11,
				image: '/imgs/logo/logo-11.png',
				title: 'Organizer 11',
				link: '/partner-15',
				width: 167,
				height: 122,
			},
			{
				id: 12,
				image: '/imgs/logo/logo-12.png',
				title: 'Organizer 12',
				link: '/partner-16',
				width: 167,
				height: 122,
			},
			{
				id: 13,
				image: '/imgs/logo/logo-13.png',
				title: 'Organizer 13',
				link: '/partner-17',
				width: 167,
				height: 122,
			},
			{
				id: 14,
				image: '/imgs/logo/logo-14.png',
				title: 'Organizer 14',
				link: '/partner-18',
				width: 167,
				height: 122,
			},
			{
				id: 15,
				image: '/imgs/logo/logo-15.png',
				title: 'Organizer 15',
				link: '/partner-19',
				width: 167,
				height: 122,
			},
			{
				id: 16,
				image: '/imgs/logo/logo-16.png',
				title: 'Organizer 16',
				link: '/partner-20',
				width: 167,
				height: 122,
			},
			{
				id: 17,
				image: '/imgs/logo/logo-17.png',
				title: 'Organizer 17',
				link: '/partner-21',
				width: 167,
				height: 122,
			},
			{
				id: 18,
				image: '/imgs/logo/logo-18.png',
				title: 'Organizer 18',
				link: '/partner-22',
				width: 167,
				height: 122,
			},
			{
				id: 19,
				image: '/imgs/logo/logo-19.png',
				title: 'Organizer 19',
				link: '/partner-23',
				width: 167,
				height: 122,
			},
			{
				id: 20,
				image: '/imgs/logo/logo-20.png',
				title: 'Organizer 20',
				link: '/partner-24',
				width: 167,
				height: 122,
			},
			{
				id: 21,
				image: '/imgs/logo/logo-21.png',
				title: 'Organizer 21',
				link: '/partner-25',
				width: 167,
				height: 122,
			},
		],
	},
]

export function PartnersList() {
	// Вычисляем задержки для каждого партнера
	const delays = useMemo(() => {
		let counter = 0
		return partners.map((partner) =>
			partner.list.map(() => {
				const delay = counter * 0.1
				counter++
				return delay
			}),
		)
	}, [])

	const swiperRef = useRef<HTMLDivElement>(null)

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

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
		<div className="flex w-full items-start justify-between gap-[30px]">
			<div className="w-full">
				{partners.map((partner, groupIndex) => (
					<div
						key={partner.title}
						className="mb-[30px] last:mb-0 xl:mb-[50px] 2xl:mb-[70px]"
					>
						<h2 className="text-primary font-regular mb-[40px] text-[24px] leading-none">{`\\\\${partner.title}`}</h2>
						<div className="xs:gap-[30px] xs:flex-row xs:items-center flex flex-col items-start justify-start gap-[10px] lg:gap-[60px]">
							{partner.list.map((item, itemIndex) => (
								<PartnerItemComponent
									key={item.id}
									item={item}
									delay={delays[groupIndex][itemIndex]}
								/>
							))}
						</div>
					</div>
				))}
				{partnersArray.map((partner, groupIndex) => (
					<div
						key={partner.title}
						className="mb-[30px] last:mb-0 xl:mb-[50px] 2xl:mb-[70px]"
					>
						<h2 className="text-primary font-regular mb-[40px] text-[24px] leading-none">{`\\\\${partner.title}`}</h2>
						<div className="w-full">
							<div
								ref={swiperRef}
								className="w-full"
							>
								<Swiper
									modules={[Navigation]}
									slidesPerView={1}
									className="w-full overflow-visible"
									navigation={{
										nextEl: '#swiper-partners-next',
										prevEl: '#swiper-partners-prev',
									}}
									breakpoints={{
										320: {
											slidesPerView: 1.2,
											spaceBetween: 10,
										},
										480: {
											slidesPerView: 2.2,
											spaceBetween: 16,
										},
										768: {
											slidesPerView: 3,
											spaceBetween: 20,
										},
										1020: {
											slidesPerView: 5,
											spaceBetween: 30,
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
									{partner.list.map((item, itemIndex) => (
										<SwiperSlide
											key={itemIndex}
											className="translate-x-[90px] opacity-0"
										>
											<PartnerItemComponent
												key={item.id}
												item={item}
												delay={delays[groupIndex][itemIndex]}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</div>

							{/* Навигация для swiper скрывается на мобильных устройствах */}
							<div className="xs:flex mt-[48px] flex hidden items-center justify-start gap-[10px]">
								<div id="swiper-partners-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default p-0!"
										>
											<IconArrowHead className="text-muted h-[20px] w-[20px] rotate-180 transform" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[36px] p-0!"
										>
											<IconArrowHead className="h-[20px] w-[20px] rotate-180 transform" />
										</ButtonDefault>
									)}
								</div>

								<div id="swiper-partners-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default p-0!"
										>
											<IconArrowHead className="text-muted h-[20px] w-[20px]" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[36px] p-0!"
										>
											<IconArrowHead className="h-[20px] w-[20px]" />
										</ButtonDefault>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
