'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function StrategicDocuments({
	strategicVisionTitle,
	strategicVisionIntro,
	strategicDocuments,
	listItemClass,
}: {
	strategicVisionTitle: string
	strategicVisionIntro: string
	strategicDocuments: { id: number; title: string | React.ReactNode }[]
	listItemClass?: string
}) {
	const StrategicVisionRef = useRef<HTMLDivElement>(null)
	const LogoRef = useRef<HTMLDivElement>(null)
	const LeftContentRef = useRef<HTMLDivElement>(null)

	useAnimSlide(LogoRef, { x: 90, delay: 0.3 })
	useAnimSlide(LeftContentRef, { x: -90, delay: 0.2 })

	useAnimBg(StrategicVisionRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/about-etc-banner.png',
	})

	useGSAP(
		() => {
			if (!LeftContentRef.current) return

			const listItems = LeftContentRef.current.querySelectorAll('li')
			listItems.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ x: -30, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.6,
						delay: 0.5 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: StrategicVisionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: StrategicVisionRef },
	)

	return (
		<section
			id="etc"
			className="relative pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px]"
		>
			<Container>
				<div
					ref={StrategicVisionRef}
					data-animated-banner
					className="relative rounded-[12px] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px]"
				>
					<div className="relative z-1 flex flex-col items-start gap-[30px] md:justify-between lg:flex-row lg:gap-[60px]">
						<div
							ref={LeftContentRef}
							className="w-full translate-x-[-90px] opacity-0 lg:w-auto"
						>
							<h3 className="mb-[10px] text-[24px] leading-normal font-bold text-white sm:text-[28px] md:text-[32px]">
								{strategicVisionTitle}
							</h3>
							<p className="mb-[20px] text-[14px] leading-normal font-normal text-white sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-justify md:text-[16px]">
								{strategicVisionIntro}
							</p>
							<ul>
								{strategicDocuments.map((document: { id: number; title: string | React.ReactNode }) => (
									<li
										key={document.id}
										className={[
											`mb-[8px] flex justify-start gap-[10px] text-[13px] text-white sm:mb-[10px] sm:text-[14px] md:text-[16px]`,
											listItemClass,
										].join(' ')}
									>
										<span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-muted-light text-justify text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
											{document.id}
										</span>
										<div className="whitespace-pre-line">{document.title}</div>
									</li>
								))}
							</ul>
						</div>

						<div
							ref={LogoRef}
							className="w-full translate-x-[90px] opacity-0 sm:max-w-[200px]"
						>
							<Image
								src="/imgs/logotype.svg"
								alt="About Logotype"
								width={298}
								height={261}
								className="block h-auto w-full sm:max-w-[200px] lg:max-w-[298px]"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
