'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMemo, useRef } from 'react'

import { Container } from '@/shared/ui/container/container'

import { PartnerItem, PartnersSlide } from './PartnersSlide'

type PartnerGroup = {
	title: string
	list: PartnerItem[]
}

const partnersArray: PartnerGroup[] = [
	{
		title: 'titles.organizators',
		list: [
			{
				id: 1,
				image: '/imgs/logo/unep.svg',
				title: 'ЮНЕП',
			},
			{
				id: 2,
				image: '/imgs/logo/irena.svg',
				title: 'irena',
			},
			{
				id: 3,
				image: '/imgs/logo/iea.svg',
				title: 'iea',
			},
			{
				id: 4,
				image: '/imgs/logo/oecd.svg',
				title: 'oecd',
			},
		],
	},
	{
		title: 'titles.ecoSystemPartners',
		list: [
			{
				id: 0,
				image: '/imgs/logo/logo-8.svg',
				title: 'Organizer 8',
			},
			{
				id: 1,
				image: '/imgs/logo/proon.svg',
				title: 'proon',
			},
			{
				id: 2,
				image: '/imgs/logo/unicef.svg',
				title: 'unicef',
			},
			{
				id: 3,
				image: '/imgs/logo/unfpa.svg',
				title: 'unfpa',
			},
			{
				id: 4,
				image: '/imgs/logo/unesco.svg',
				title: 'unesco',
			},
			{
				id: 5,
				image: '/imgs/logo/unhabitat.svg',
				title: 'unhabitat',
			},
			{
				id: 6,
				image: '/imgs/logo/unido.svg',
				title: 'unido',
			},
			{
				id: 7,
				image: '/imgs/logo/fao.svg',
				title: 'fao',
			},
			{
				id: 8,
				image: '/imgs/logo/vmo.svg',
				title: 'vmo',
			},
			{
				id: 9,
				image: '/imgs/logo/mom.svg',
				title: 'mom',
			},
			{
				id: 10,
				image: '/imgs/logo/who.svg',
				title: 'who',
			},
			{
				id: 11,
				image: '/imgs/logo/cbd.svg',
				title: 'cbd',
			},
			{
				id: 12,
				image: '/imgs/logo/unccd.svg',
				title: 'unccd',
			},
			{
				id: 13,
				image: '/imgs/logo/wbg.svg',
				title: 'wbg',
			},
			{
				id: 14,
				image: '/imgs/logo/adb.svg',
				title: 'adb',
			},
			{
				id: 15,
				image: '/imgs/logo/ebrr.svg',
				title: 'ebrr',
			},
			{
				id: 16,
				image: '/imgs/logo/iwmi.svg',
				title: 'iwmi',
			},
			{
				id: 17,
				image: '/imgs/logo/carec.svg',
				title: 'carec',
			},
			{
				id: 18,
				image: '/imgs/logo/giz.svg',
				title: 'giz',
			},
			{
				id: 19,
				image: '/imgs/logo/SWITCH-Asia.svg',
				title: 'switch-asia',
			},
			{
				id: 20,
				image: '/imgs/logo/gcnca.svg',
				title: 'gcnca',
			},
			{
				id: 23,
				image: '/imgs/logo/nbsab.svg',
				title: 'nbsab',
			},
		],
	},
	{
		title: 'titles.mediaPartners',
		list: [
			{
				id: 0,
				image: '/imgs/logo/logo-8.svg',
				title: 'Organizer 8',
			},
			{
				id: 1,
				image: '/imgs/logo/proon.svg',
				title: 'proon',
			},
			{
				id: 2,
				image: '/imgs/logo/unicef.svg',
				title: 'unicef',
			},
			{
				id: 3,
				image: '/imgs/logo/unfpa.svg',
				title: 'unfpa',
			},
			{
				id: 4,
				image: '/imgs/logo/unesco.svg',
				title: 'unesco',
			},
			{
				id: 5,
				image: '/imgs/logo/unhabitat.svg',
				title: 'unhabitat',
			},
		],
	},
]

export function PartnersBlock() {
	// Вычисляем задержки для каждого партнера
	const delays = useMemo(() => {
		let counter = 0
		return partnersArray.map((partner) =>
			partner.list.map(() => {
				const delay = counter * 0.02
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
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				{partnersArray.map((partner, groupIndex) => (
					<div
						key={groupIndex}
						ref={swiperRef}
						className="mb-[30px] last:mb-0 xl:mb-[50px] 2xl:mb-[70px]"
					>
						<PartnersSlide
							key={partner.title}
							images={partner.list}
							title={partner.title}
							id={groupIndex}
							delays={delays[groupIndex]}
						/>
					</div>
				))}
			</Container>
		</section>
	)
}
