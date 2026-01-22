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
				image: '/imgs/exh-logos/min_energo.webp',
				title: 'min_energo',
			},
			{
				id: 2,
				image: '/imgs/exh-logos/igtio.jpg',
				title: 'igtio',
			},
		],
	},
	{
		title: 'titles.ecoSystemPartners',
		list: [
			{
				id: 0,
				image: '/imgs/exh-logos/global_nature.webp',
				title: 'global_nature',
			},
			{
				id: 1,
				image: '/imgs/exh-logos/jasyl_damu.webp',
				title: 'jasyl_damu',
			},
			{
				id: 2,
				image: '/imgs/exh-logos/qazexpo.webp',
				title: 'qazexpo',
			},
			{
				id: 3,
				image: '/imgs/exh-logos/aua_tech.webp',
				title: 'aua_tech',
			},
			{
				id: 4,
				image: '/imgs/exh-logos/bmca.webp',
				title: 'bmca',
			},
			{
				id: 5,
				image: '/imgs/exh-logos/gpi.webp',
				title: 'gpi',
			},
			{
				id: 6,
				image: '/imgs/exh-logos/brettc.webp',
				title: 'brettc',
			},
			{
				id: 7,
				image: '/imgs/exh-logos/aswan_new_energy.webp',
				title: 'aswan_new_energy',
			},
			{
				id: 8,
				image: '/imgs/exh-logos/petrocouncil.webp',
				title: 'petrocouncil',
			},
			{
				id: 9,
				image: '/imgs/exh-logos/adam.webp',
				title: 'adam',
			},
			{
				id: 10,
				image: '/imgs/exh-logos/biosphere.webp',
				title: 'biosphere',
			},
			{
				id: 11,
				image: '/imgs/exh-logos/cebc.webp',
				title: 'cebc',
			},
			{
				id: 12,
				image: '/imgs/exh-logos/diplomatic_club.webp',
				title: 'diplomatic_club',
			},
			{
				id: 13,
				image: '/imgs/exh-logos/praktik.webp',
				title: 'praktik',
			},
			{
				id: 14,
				image: '/imgs/exh-logos/beijin_sil_road.webp',
				title: 'beijin_sil_road',
			},
			{
				id: 15,
				image: '/imgs/exh-logos/brri.webp',
				title: 'brri',
			},
			{
				id: 16,
				image: '/imgs/exh-logos/tgpro.webp',
				title: 'tgpro',
			},
			{
				id: 17,
				image: '/imgs/exh-logos/under_control.webp',
				title: 'under_control',
			},
			{
				id: 18,
				image: '/imgs/exh-logos/spaces.webp',
				title: 'spaces',
			},
		],
	},
	{
		title: 'titles.mediaPartners',
		list: [
			{
				id: 0,
				image: '/imgs/exh-logos/world_expo.webp',
				title: 'world_expo',
			},
			{
				id: 1,
				image: '/imgs/exh-logos/expomap.webp',
				title: 'expomap',
			},
			{
				id: 2,
				image: '/imgs/exh-logos/expotobi.webp',
				title: 'expotobi',
			},
			{
				id: 3,
				image: '/imgs/exh-logos/total_expo.webp',
				title: 'total_expo',
			},
			{
				id: 4,
				image: '/imgs/exh-logos/tizgin.webp',
				title: 'tizgin',
			},
			{
				id: 5,
				image: '/imgs/exh-logos/tabigat.webp',
				title: 'tabigat',
			},
			{
				id: 6,
				image: '/imgs/exh-logos/ulus_media.webp',
				title: 'ulus_media',
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
