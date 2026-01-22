'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function ParticipateWays() {
	const t = useTranslations()

	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const ItemsRef = useRef<HTMLDivElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	// Animation for items
	useGSAP(
		() => {
			if (!ItemsRef.current) return

			const items = ItemsRef.current.querySelectorAll('[data-participate-item]')
			items.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.3 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: SectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ dependencies: [], revertOnUpdate: true },
	)

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
		>
			<Container>
				<div className="rounded-[12px] bg-[#02493F] bg-[url('/imgs/usefulls/facts-and-numbers-bg.png')] bg-cover bg-center bg-no-repeat p-[20px] py-[57px] lg:px-[55px] lg:pt-[60px] lg:pb-[73px]">
					<h2
						ref={TitleRef}
						className="mx-auto mb-[84px] max-w-[302px] translate-y-[50px] text-center text-[32px] leading-[1.2] font-bold text-white opacity-0 sm:max-w-none lg:text-left xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
					>
						{t('pages.exhibition.participateWays.title')}
					</h2>

					<div
						ref={ItemsRef}
						className="grid grid-cols-1 items-start gap-y-[30px] md:grid-cols-2 lg:items-start lg:justify-between xl:flex xl:gap-x-[30px] 2xl:gap-x-[60px]"
					>
						<div
							data-participate-item
							className="flex max-w-[339px] flex-col items-center justify-start text-center"
						>
							<Image
								src="/imgs/exhibition/ParticipateWays-1.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item1')}
							</div>
						</div>
						<div
							data-participate-item
							className="flex max-w-[339px] flex-col items-center justify-start text-center"
						>
							<Image
								src="/imgs/exhibition/ParticipateWays-2.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item2')}
							</div>
						</div>
						<div
							data-participate-item
							className="flex max-w-[339px] flex-col items-center justify-start text-center"
						>
							<Image
								src="/imgs/exhibition/ParticipateWays-3.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item3')}
							</div>
						</div>
						<div
							data-participate-item
							className="flex max-w-[339px] flex-col items-center justify-start text-center"
						>
							<Image
								src="/imgs/exhibition/ParticipateWays-4.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item4')}
							</div>
						</div>
						<div
							data-participate-item
							className="flex max-w-[339px] flex-col items-center justify-start text-center"
						>
							<Image
								src="/imgs/exhibition/ParticipateWays-5.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item5')}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
