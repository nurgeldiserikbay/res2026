'use client'

import Image from 'next/image'
import Link from 'next/link'
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
				className="block h-[122px] w-auto"
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
		],
	},
	{
		title: 'При поддержке',
		list: [
			{
				id: 0,
				image: '/imgs/partner-2.png',
				title: 'Partner 2',
				link: '/partner-1',
				width: 250,
				height: 122,
			},
			{
				id: 1,
				image: '/imgs/partner-3.png',
				title: 'Partner 3',
				link: '/partner-2',
				width: 250,
				height: 122,
			},
			{
				id: 2,
				image: '/imgs/partner-4.png',
				title: 'Partner 4',
				link: '/partner-3',
				width: 250,
				height: 122,
			},
		],
	},
	{
		title: 'Партнеры',
		list: [
			{
				id: 0,
				image: '/imgs/partner-5.png',
				title: 'Partner 5',
				link: '/partner-1',
				width: 143,
				height: 122,
			},
			{
				id: 1,
				image: '/imgs/partner-6.png',
				title: 'Partner 6',
				link: '/partner-2',
				width: 143,
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

	return (
		<div>
			{partners.map((partner, groupIndex) => (
				<div
					key={partner.title}
					className="mb-[70px] last:mb-0"
				>
					<h2 className="text-primary font-regular mb-[40px] text-[24px] leading-none">{`\\\\${partner.title}`}</h2>
					<div className="flex items-center justify-start gap-[60px]">
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
		</div>
	)
}
