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
	{
		title: 'Партнеры',
		list: [
			{
				id: 4,
				image: '/imgs/partner-5.png',
				title: 'Partner 5',
				link: '/partner-5',
				width: 250,
				height: 122,
			},
			{
				id: 5,
				image: '/imgs/partner-6.png',
				title: 'Partner 6',
				link: '/partner-6',
				width: 250,
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
		<div className="flex items-start justify-between gap-[30px]">
			<div className="shrink-0">
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
			</div>
			<Image
				src="/imgs/partner-banner.png"
				alt="Partners list"
				width={447}
				height={720}
				className="hidden md:block"
			/>
		</div>
	)
}
