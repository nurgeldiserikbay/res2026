'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useMemo, useRef } from 'react'

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
				width={item.width}
				height={item.height}
				className="block w-full sm:w-auto xl:h-[122px]"
			/>
		</div>
	)
}

const partnersArray: PartnerGroup[] = [
	{
		title: 'titles.mainPartners',
		list: [
			{
				id: 1,
				image: '/imgs/logo/unep.svg',
				title: 'ЮНЕП',
				link: '/unep',
				width: 167,
				height: 122,
			},
			{
				id: 2,
				image: '/imgs/logo/irena.svg',
				title: 'irena',
				link: '/irena',
				width: 167,
				height: 122,
			},
			{
				id: 3,
				image: '/imgs/logo/iea.svg',
				title: 'iea',
				link: '/iea',
				width: 167,
				height: 122,
			},
			{
				id: 4,
				image: '/imgs/logo/oecd.svg',
				title: 'oecd',
				link: '/oecd',
				width: 167,
				height: 122,
			},
		],
	},
	{
		title: 'titles.partners',
		list: [
			{
				id: 1,
				image: '/imgs/logo/proon.svg',
				title: 'proon',
				link: '/proon',
				width: 167,
				height: 122,
			},
			{
				id: 2,
				image: '/imgs/logo/unicef.svg',
				title: 'unicef',
				link: '/unicef',
				width: 167,
				height: 122,
			},
			{
				id: 3,
				image: '/imgs/logo/unfpa.svg',
				title: 'unfpa',
				link: '/unfpa',
				width: 167,
				height: 122,
			},
			{
				id: 4,
				image: '/imgs/logo/unesco.svg',
				title: 'unesco',
				link: '/unesco',
				width: 167,
				height: 122,
			},
			{
				id: 5,
				image: '/imgs/logo/unhabitat.svg',
				title: 'unhabitat',
				link: '/unhabitat',
				width: 167,
				height: 122,
			},
			{
				id: 6,
				image: '/imgs/logo/unido.svg',
				title: 'unido',
				link: '/unido',
				width: 167,
				height: 122,
			},
			{
				id: 7,
				image: '/imgs/logo/fao.svg',
				title: 'fao',
				link: '/fao',
				width: 167,
				height: 122,
			},
			{
				id: 8,
				image: '/imgs/logo/vmo.svg',
				title: 'vmo',
				link: '/vmo',
				width: 167,
				height: 122,
			},
			{
				id: 9,
				image: '/imgs/logo/mom.svg',
				title: 'mom',
				link: '/mom',
				width: 167,
				height: 122,
			},
			{
				id: 10,
				image: '/imgs/logo/who.svg',
				title: 'who',
				link: '/who',
				width: 167,
				height: 122,
			},
			{
				id: 11,
				image: '/imgs/logo/cbd.svg',
				title: 'cbd',
				link: '/cbd',
				width: 167,
				height: 122,
			},
			{
				id: 12,
				image: '/imgs/logo/unccd.svg',
				title: 'unccd',
				link: '/unccd',
				width: 167,
				height: 122,
			},
			{
				id: 13,
				image: '/imgs/logo/wbg.svg',
				title: 'wbg',
				link: '/wbg',
				width: 167,
				height: 122,
			},
			{
				id: 14,
				image: '/imgs/logo/adb.svg',
				title: 'adb',
				link: '/adb',
				width: 167,
				height: 122,
			},
			{
				id: 15,
				image: '/imgs/logo/ebrr.svg',
				title: 'ebrr',
				link: '/ebrr',
				width: 167,
				height: 122,
			},
			{
				id: 16,
				image: '/imgs/logo/iwmi.svg',
				title: 'iwmi',
				link: '/iwmi',
				width: 167,
				height: 122,
			},
			{
				id: 17,
				image: '/imgs/logo/carec.svg',
				title: 'carec',
				link: '/carec',
				width: 167,
				height: 122,
			},
			{
				id: 18,
				image: '/imgs/logo/giz.svg',
				title: 'giz',
				link: '/giz',
				width: 167,
				height: 122,
			},
			{
				id: 19,
				image: '/imgs/logo/SWITCH-Asia.svg',
				title: 'switch-asia',
				link: '/switch-asia',
				width: 167,
				height: 122,
			},
			// {
			// 	id: 18,
			// 	image: '/imgs/logo/logo-3.svg',
			// 	title: 'Organizer 3',
			// 	link: '/partner-7',
			// 	width: 167,
			// 	height: 122,
			// },
			// {
			// 	id: 19,
			// 	image: '/imgs/logo/logo-8.svg',
			// 	title: 'Organizer 8',
			// 	link: '/partner-12',
			// 	width: 167,
			// 	height: 122,
			// },
			// {
			// 	id: 20,
			// 	image: '/imgs/logo/WMO.svg',
			// 	title: 'Organizer 22',
			// 	link: '/partner-25',
			// 	width: 167,
			// 	height: 122,
			// },
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
								className="grid grid-cols-2 items-start gap-x-[40px] gap-y-[20px] md:grid-cols-3 lg:grid-cols-4"
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
