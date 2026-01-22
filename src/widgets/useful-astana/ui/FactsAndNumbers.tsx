'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function FactsAndNumbers() {
	const t = useTranslations()

	const SectionRef = useRef<HTMLElement>(null)
	const BannerRef = useRef<HTMLDivElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const FactsGridRef = useRef<HTMLDivElement>(null)

	useAnimBg(BannerRef, {
		fromSize: '110%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/usefulls/facts-and-numbers-bg.png',
	})

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	useGSAP(
		() => {
			if (!FactsGridRef.current) return

			const factItems = FactsGridRef.current.querySelectorAll('div > div')
			factItems.forEach((item, index) => {
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
		{ scope: SectionRef },
	)

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
		>
			<Container>
				<div
					ref={BannerRef}
					data-animated-banner
					className="rounded-[12px] bg-[#02493F] bg-[url('/imgs/usefulls/facts-and-numbers-bg.png')] bg-cover bg-center bg-no-repeat p-[20px] py-[57px] lg:px-[55px] lg:pt-[60px] lg:pb-[75px]"
				>
					<h2
						ref={TitleRef}
						className="mx-auto mb-[60px] max-w-[302px] translate-y-[50px] text-center text-[32px] leading-[1.2] font-bold text-white opacity-0 sm:max-w-none lg:text-left xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
					>
						{t('pages.useful.astana.factsAndNumbers.title')}
					</h2>

					<div
						ref={FactsGridRef}
						className="grid grid-cols-1 items-start gap-y-[30px] lg:grid-cols-2 lg:items-start lg:justify-between xl:flex xl:gap-x-[30px] 2xl:gap-x-[60px]"
					>
						<div className="flex translate-y-[50px] flex-col items-center justify-start self-start text-center opacity-0">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] 3xl:text-[96px]">
								1,4+
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px] 2xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact1')}
							</div>
						</div>
						<div className="flex translate-y-[50px] flex-col items-center justify-start self-start text-center opacity-0">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] 3xl:text-[96px]">
								50+
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact2')}
							</div>
						</div>
						<div className="flex translate-y-[50px] flex-col items-center justify-start self-start text-center opacity-0">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] 3xl:text-[96px]">
								≈ 800 км²
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact3')}
							</div>
						</div>
						<div className="flex translate-y-[50px] flex-col items-center justify-start self-start text-center opacity-0">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px] 3xl:text-[96px]">
								3+
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact4')}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
