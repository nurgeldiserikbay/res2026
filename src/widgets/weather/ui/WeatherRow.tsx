'use client'

import Image from 'next/image'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'

export function WeatherRow({
	title,
	months,
	text,
	minus,
	plus,
	minusText,
	plusText,
	image1,
	image2,
	className,
	reverse,
}: {
	title: string
	months: string
	text: string
	minus: string
	plus: string
	minusText: string
	plusText: string
	image1: string
	image2: string
	className?: string
	reverse?: boolean
}) {
	const ImagesRef = useRef<HTMLDivElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const MonthsRef = useRef<HTMLDivElement>(null)
	const TextRef = useRef<HTMLParagraphElement>(null)
	const StatsRef = useRef<HTMLDivElement>(null)

	useAnimSlide(ImagesRef, { x: reverse ? 90 : -90, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(MonthsRef, { y: 50, delay: 0.3 })
	useAnimSlide(TextRef, { y: 50, delay: 0.4 })
	useAnimSlide(StatsRef, { y: 50, delay: 0.5 })

	return (
		<div className={[`grid grid-cols-1 gap-x-[30px] gap-y-[30px] lg:grid-cols-2 lg:gap-x-[60px]`, className].join(' ')}>
			<div
				ref={ImagesRef}
				className={`flex flex-row items-stretch justify-center gap-[8px] opacity-0 ${reverse ? 'translate-x-[90px] flex-row-reverse lg:order-2' : 'order-1 translate-x-[-90px] flex-row'}`}
			>
				<Image
					src={image1}
					alt={title}
					width={561}
					height={372}
					className="block w-[64%] rounded-[12px] object-cover"
				/>
				<Image
					src={image2}
					alt={title}
					width={300}
					height={372}
					className="block w-[34.48%] rounded-[12px] object-cover"
				/>
			</div>

			<div className={`${reverse ? 'order-1' : 'order-2'}`}>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-[24px] leading-normal font-bold text-text opacity-0 lg:text-[28px] 2xl:text-[32px]"
				>
					{title}
				</h2>

				<div
					ref={MonthsRef}
					className="mb-[10px] flex translate-y-[50px] flex-row items-center justify-start gap-[10px] text-[16px] leading-normal font-normal text-text opacity-0"
				>
					<Image
						src="/imgs/sun.svg"
						alt="Sun"
						width={25}
						height={25}
						className="block h-[25px] w-[25px]"
					/>
					<span>{months}</span>
				</div>

				<p
					ref={TextRef}
					className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0"
				>
					{text}
				</p>

				<div
					ref={StatsRef}
					className="grid translate-y-[50px] grid-cols-1 items-stretch gap-[10px] bg-white opacity-0 sm:grid-cols-2"
				>
					<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
						<h3 className="text-[32px] leading-normal font-bold whitespace-nowrap text-secondary xs:text-[36px] lg:text-[40px] 2xl:text-[64px]">
							{plus}
						</h3>
						<div className="text-[16px] leading-normal font-normal text-secondary">{plusText}</div>
					</div>
					<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
						<h3 className="text-[32px] leading-normal font-bold whitespace-nowrap text-secondary xs:text-[36px] lg:text-[40px] 2xl:text-[64px]">
							{minus}
						</h3>
						<div className="text-[16px] leading-normal font-normal text-secondary">{minusText}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
