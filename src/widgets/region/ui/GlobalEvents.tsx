'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
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
				<div
					ref={EventsGridRef}
					className="grid grid-cols-1 gap-x-[20px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] xl:grid-cols-4 2xl:gap-x-[60px]"
				>
					{events.map((event) => (
						<div
							key={event.id}
							className="translate-y-[50px] opacity-0"
						>
							<h3 className="mb-[10px] text-[36px] leading-normal font-bold text-[#41754F]">{event.title}</h3>
							<p className="mb-[10px] text-[20px] leading-normal font-bold text-text">{event.subtitle}</p>
							<p className="text-[16px] leading-normal font-normal text-text">{event.text}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
