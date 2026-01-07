'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AbountEtc() {
	const t = useTranslations()

	const EtcRef = useRef<HTMLDivElement>(null)
	const LeftContentRef = useRef<HTMLDivElement>(null)
	const LogoRef = useRef<HTMLDivElement>(null)
	const InitiativesTitleRef = useRef<HTMLHeadingElement>(null)
	const InitiativesGridRef = useRef<HTMLDivElement>(null)

	useAnimBg(EtcRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/about-etc-banner.png',
	})

	useAnimSlide(LeftContentRef, { x: -90, delay: 0.2 })
	useAnimSlide(LogoRef, { x: 90, delay: 0.3 })
	useAnimSlide(InitiativesTitleRef, { y: 50, delay: 0.4 })

	// Анимация для списка документов
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
							trigger: EtcRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: EtcRef },
	)

	// Анимация для карточек инициатив
	useGSAP(
		() => {
			if (!InitiativesGridRef.current) return

			const initiativeCards = InitiativesGridRef.current.querySelectorAll('div > div')
			initiativeCards.forEach((card, index) => {
				gsap.fromTo(
					card,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.6 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: EtcRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: EtcRef },
	)

	return (
		<>
			<section
				id="etc"
				className="relative mt-[50px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]"
			>
				<Container>
					<div
						ref={EtcRef}
						data-animated-banner
						className="relative rounded-[12px] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px]"
					>
						<div className="relative z-1 mb-[30px] flex flex-col items-start justify-between gap-[30px] sm:mb-[30px] lg:flex-row lg:gap-[60px]">
							<div
								ref={LeftContentRef}
								className="w-full translate-x-[-90px] opacity-0 lg:w-auto"
							>
								<h3 className="mb-[10px] text-[24px] leading-normal font-bold text-white sm:text-[28px] md:text-[32px]">
									{t('pages.etc.strategicVisionTitle')}
								</h3>
								<p className="mb-[20px] text-[14px] leading-normal font-normal text-white sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-[16px]">
									{t('pages.etc.strategicVisionIntro')}
								</p>
								<ul>
									<li className="mb-[8px] flex items-center justify-start gap-[10px] text-[13px] text-white sm:mb-[10px] sm:text-[14px] md:text-[16px]">
										<span className="bg-muted-light flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
											1
										</span>
										{t('pages.etc.strategicDocuments.0')}
									</li>
									<li className="mb-[8px] flex items-center justify-start gap-[10px] text-[13px] text-white sm:mb-[10px] sm:text-[14px] md:text-[16px]">
										<span className="bg-muted-light flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
											2
										</span>
										{t('pages.etc.strategicDocuments.1')}
									</li>
									<li className="mb-[8px] flex items-center justify-start gap-[10px] text-[13px] text-white sm:mb-[10px] sm:text-[14px] md:text-[16px]">
										<span className="bg-muted-light flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
											3
										</span>
										{t('pages.etc.strategicDocuments.2')}
									</li>
									<li className="mb-[8px] flex items-center justify-start gap-[10px] text-[13px] text-white sm:mb-[10px] sm:text-[14px] md:text-[16px]">
										<span className="bg-muted-light flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
											4
										</span>
										{t('pages.etc.strategicDocuments.3')}
									</li>
									<li className="flex items-center justify-start gap-[10px] text-[13px] text-white sm:text-[14px] md:text-[16px]">
										<span className="bg-muted-light flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
											5
										</span>
										{t('pages.etc.strategicDocuments.4')}
									</li>
								</ul>
							</div>

							<div
								ref={LogoRef}
								className="hidden w-full max-w-[200px] translate-x-[90px] opacity-0 lg:block"
							>
								<Image
									src="/imgs/logotype.svg"
									alt="About Logotype"
									width={298}
									height={261}
									className="block h-auto w-full max-w-[200px] lg:max-w-[298px]"
								/>
							</div>
						</div>

						<div className="relative z-1 text-white">
							<h3
								ref={InitiativesTitleRef}
								className="mb-[20px] translate-y-[50px] text-[24px] leading-normal font-bold text-white opacity-0 sm:mb-[25px] sm:text-[28px] md:mb-[30px] md:text-[32px]"
							>
								{t('pages.etc.nationalInitiativesTitle')}
							</h3>

							<div
								ref={InitiativesGridRef}
								className="grid grid-cols-1 items-start gap-[30px] sm:grid-cols-2 sm:gap-[40px] md:gap-[50px] lg:grid-cols-4"
							>
								<div className="translate-y-[50px] opacity-0">
									<h5 className="mb-[10px] text-left text-[18px] leading-normal font-bold text-white sm:text-[19px] md:text-[20px]">
										{t('pages.etc.tazaKazakhstanTitle')}
									</h5>
									<p className="text-[13px] leading-normal sm:text-[14px] md:text-[16px]">{t('pages.etc.tazaKazakhstanText')}</p>
								</div>
								<div className="translate-y-[50px] opacity-0">
									<h5 className="mb-[10px] text-left text-[18px] leading-normal font-bold text-white sm:text-[19px] md:text-[20px]">
										{t('pages.etc.twoBillionTreesTitle')}
									</h5>
									<p className="text-[13px] leading-normal sm:text-[14px] md:text-[16px]">{t('pages.etc.twoBillionTreesText')}</p>
								</div>
								<div className="translate-y-[50px] opacity-0">
									<h5 className="mb-[10px] text-left text-[18px] leading-normal font-bold text-white sm:text-[19px] md:text-[20px]">
										{t('pages.etc.biodiversityFundTitle')}
									</h5>
									<p className="text-[13px] leading-normal sm:text-[14px] md:text-[16px]">{t('pages.etc.biodiversityFundText')}</p>
								</div>
								<div className="translate-y-[50px] opacity-0">
									<strong className="text-[18px] leading-normal sm:text-[19px] md:text-[20px]">
										{t('pages.etc.unRegionalCenterTitle')}
									</strong>
									<span className="block text-[13px] leading-normal sm:text-[14px] md:text-[16px]">
										{t('pages.etc.unRegionalCenterText')}
									</span>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
