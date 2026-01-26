'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { AboutImgs } from './AboutImgs'

interface AboutRegionProps {
	title: string
	text1: string
	text2: string
	stats: Array<{
		statValue: string
		statTitle: string
		statClass?: string
	}>
	stat3Value?: string
	stat3?: string
	map: string
	mapAlt: string
	mapWidth: number
	mapHeight: number
	imgs: { id: number; img: string; alt: string; width: number; height: number; quality?: number }[]
}

export default function AboutRegion({
	title,
	text1,
	text2,
	stats,
	map,
	mapAlt,
	mapWidth,
	mapHeight,
	imgs,
	stat3Value,
	stat3,
}: AboutRegionProps) {
	const SectionRef = useRef<HTMLElement>(null)
	const ImagesRef = useRef<HTMLDivElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const Text1Ref = useRef<HTMLParagraphElement>(null)
	const StatsRef = useRef<HTMLDivElement>(null)
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	const Stat3Ref = useRef<HTMLDivElement>(null)
	const MapRef = useRef<HTMLImageElement>(null)

	useAnimSlide(ImagesRef, { x: -90, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(Text1Ref, { y: 50, delay: 0.3 })
	useAnimSlide(Text2Ref, { y: 50, delay: 0.6 })
	useAnimSlide(StatsRef, { y: 50, delay: 0.4 })
	useAnimSlide(Stat3Ref, { y: 50, delay: 0.7 })

	// Анимация для карты
	useGSAP(
		() => {
			if (!MapRef.current) return

			gsap.fromTo(
				MapRef.current,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.7,
					delay: 0.2,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: SectionRef.current,
						start: 'top 80%',
						once: true,
					},
				},
			)
		},
		{ scope: SectionRef },
	)

	return (
		<>
			<section
				ref={SectionRef}
				id="about"
				className="relative pt-[20px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px]"
			>
				<Container className="flex flex-col items-start justify-between gap-[30px] overflow-visible lg:flex-row lg:gap-[40px] xl:gap-[60px]">
					<div
						ref={ImagesRef}
						className="relative z-2 w-full translate-x-[-90px] opacity-0 lg:max-w-[870px]"
					>
						<AboutImgs imgs={imgs} />
					</div>
					<div className="relative w-full whitespace-pre-line lg:max-w-[868px]">
						<h3
							ref={TitleRef}
							className="relative z-1 mb-[20px] translate-y-[50px] text-[24px] leading-normal font-bold text-text opacity-0 sm:mb-[25px] sm:text-[28px] md:mb-[30px] md:text-[32px] lg:text-[32px]"
						>
							{title}
						</h3>
						<p
							ref={Text1Ref}
							className="relative z-1 mb-[20px] translate-y-[50px] text-[14px] leading-normal text-text opacity-0 sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-justify md:text-[16px]"
						>
							{text1}
						</p>
						<div
							ref={StatsRef}
							className="relative z-1 mb-[20px] flex flex-col items-stretch justify-between gap-[15px] sm:mb-[25px] sm:flex-row sm:gap-[20px] md:mb-[30px] md:gap-[30px] lg:gap-[30px]"
						>
							{stats.map((stat, index) => (
								<div
									key={index}
									className={`flex h-[140px] w-full flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[15px] text-center ${stat.statClass}`}
								>
									<span className="text-[48px] leading-normal font-bold text-secondary sm:text-[56px] md:text-[64px]">
										{stat.statValue}
									</span>
									<span className="text-[14px] leading-normal font-normal text-secondary sm:text-[15px] md:text-[16px]">
										{stat.statTitle}
									</span>
								</div>
							))}
						</div>
						<p
							ref={Text2Ref}
							className="relative z-1 mb-[20px] translate-y-[50px] text-[14px] leading-normal text-text opacity-0 sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-justify md:text-[16px]"
						>
							{text2}
						</p>
						{stat3Value && stat3 && (
							<div
								ref={Stat3Ref}
								className="relative z-1 flex h-[140px] w-full translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#ADF0BF] to-[#D4D8C300] text-center opacity-0 sm:h-[155px] md:h-[172px]"
							>
								<span className="text-[48px] leading-normal font-bold text-secondary sm:text-[56px] md:text-[64px]">{stat3Value}</span>
								<span className="text-[14px] leading-normal font-normal text-secondary sm:text-[15px] md:text-[16px]">{stat3}</span>
							</div>
						)}
						{map && (
							<Image
								ref={MapRef}
								src={map}
								alt={mapAlt}
								width={mapWidth}
								height={mapHeight}
								className="pointer-events-none absolute top-[-620px] left-[15%] z-0 min-w-[600px] transform opacity-0 lg:top-[-480px] lg:left-[5%] lg:block lg:min-w-[1685px]"
							/>
						)}
					</div>
				</Container>
			</section>
		</>
	)
}
