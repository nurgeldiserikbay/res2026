'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useMemo, useRef } from 'react'

import 'swiper/css'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'

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

const partnersArray: PartnerGroup[] = [
	{
		title: 'titles.mainPartners',
		list: [
			{
				id: 9,
				image: '/imgs/logo/logo-9.svg',
				title: 'Organizer 9',
				link: '/partner-13',
				width: 167,
				height: 122,
			},
			{
				id: 19,
				image: '/imgs/logo/logo-19.svg',
				title: 'Organizer 19',
				link: '/partner-23',
				width: 167,
				height: 122,
			},
			{
				id: 18,
				image: '/imgs/logo/logo-18.svg',
				title: 'Organizer 18',
				link: '/partner-22',
				width: 167,
				height: 122,
			},
			{
				id: 17,
				image: '/imgs/logo/logo-17.svg',
				title: 'Organizer 17',
				link: '/partner-21',
				width: 167,
				height: 122,
			},
		],
	},
	{
		title: 'titles.partners',
		list: [
			{
				id: 3,
				image: '/imgs/logo/logo-3.svg',
				title: 'Organizer 3',
				link: '/partner-7',
				width: 167,
				height: 122,
			},
			{
				id: 4,
				image: '/imgs/logo/logo-4.svg',
				title: 'Organizer 4',
				link: '/partner-8',
				width: 167,
				height: 122,
			},
			{
				id: 5,
				image: '/imgs/logo/logo-5.svg',
				title: 'Organizer 5',
				link: '/partner-9',
				width: 167,
				height: 122,
			},
			{
				id: 6,
				image: '/imgs/logo/logo-6.svg',
				title: 'Organizer 6',
				link: '/partner-10',
				width: 167,
				height: 122,
			},
			{
				id: 7,
				image: '/imgs/logo/logo-7.svg',
				title: 'Organizer 7',
				link: '/partner-11',
				width: 167,
				height: 122,
			},
			{
				id: 8,
				image: '/imgs/logo/logo-8.svg',
				title: 'Organizer 8',
				link: '/partner-12',
				width: 167,
				height: 122,
			},
			{
				id: 10,
				image: '/imgs/logo/logo-10.svg',
				title: 'Organizer 10',
				link: '/partner-14',
				width: 167,
				height: 122,
			},
			{
				id: 11,
				image: '/imgs/logo/logo-11.svg',
				title: 'Organizer 11',
				link: '/partner-15',
				width: 167,
				height: 122,
			},
			{
				id: 12,
				image: '/imgs/logo/logo-12.svg',
				title: 'Organizer 12',
				link: '/partner-16',
				width: 167,
				height: 122,
			},
			{
				id: 13,
				image: '/imgs/logo/logo-13.svg',
				title: 'Organizer 13',
				link: '/partner-17',
				width: 167,
				height: 122,
			},
			{
				id: 14,
				image: '/imgs/logo/logo-14.svg',
				title: 'Organizer 14',
				link: '/partner-18',
				width: 167,
				height: 122,
			},
			{
				id: 15,
				image: '/imgs/logo/logo-15.svg',
				title: 'Organizer 15',
				link: '/partner-19',
				width: 167,
				height: 122,
			},
			{
				id: 16,
				image: '/imgs/logo/logo-16.svg',
				title: 'Organizer 16',
				link: '/partner-20',
				width: 167,
				height: 122,
			},
			{
				id: 20,
				image: '/imgs/logo/logo-20.svg',
				title: 'Organizer 20',
				link: '/partner-24',
				width: 167,
				height: 122,
			},
			{
				id: 21,
				image: '/imgs/logo/SWITCH-Asia.svg',
				title: 'Organizer 21',
				link: '/partner-25',
				width: 167,
				height: 122,
			},
		],
	},
]

export function PartnersList() {
	const t = useTranslations()
	// Вычисляем задержки для каждого партнера
	const delays = useMemo(() => {
		let counter = 0
		return partnersArray.map((partner) =>
			partner.list.map(() => {
				const delay = counter * 0.1
				counter++
				return delay
			}),
		)
	}, [])

	const swiperRef = useRef<HTMLDivElement>(null)

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
				{partnersArray.map((partner, groupIndex) => (
					<div
						key={partner.title}
						className="mb-[30px] last:mb-0 xl:mb-[50px] 2xl:mb-[70px]"
					>
						<h2 className="text-primary font-regular mb-[40px] text-[24px] leading-none">{`\\\\${t(partner.title)}`}</h2>
						<div className="w-full">
							<div
								ref={swiperRef}
								className="flex w-full flex-wrap items-center justify-start gap-x-[40px] gap-y-[20px]"
							>
								{partner.list.map((item, itemIndex) => (
									<PartnerItemComponent
										key={item.id}
										item={item}
										delay={delays[groupIndex][itemIndex]}
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
