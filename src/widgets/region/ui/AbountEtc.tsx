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
				className="relative mt-[100px]"
			>
				<Container>
					<div
						ref={EtcRef}
						data-animated-banner
						className="relative rounded-[12px] p-[50px]"
					>
						<div className="relative z-1 mb-[30px] flex items-start justify-between gap-[60px]">
							<div
								ref={LeftContentRef}
								className="translate-x-[-90px] opacity-0"
							>
								<h3 className="mb-[10px] text-[32px] leading-normal font-bold text-white">{t('pages.etc.strategicVisionTitle')}</h3>
								<p className="mb-[30px] text-[16px] leading-normal font-normal text-white">{t('pages.etc.strategicVisionIntro')}</p>
								<ul>
									<li className="mb-[10px] flex items-center justify-start gap-[10px] text-white">
										<span className="bg-muted-light flex h-[35px] w-[35px] items-center justify-center rounded-full text-[16px] leading-normal font-normal text-black">
											1
										</span>
										{t('pages.etc.strategicDocuments.0')}
									</li>
									<li className="mb-[10px] flex items-center justify-start gap-[10px] text-white">
										<span className="bg-muted-light flex h-[35px] w-[35px] items-center justify-center rounded-full text-[16px] leading-normal font-normal text-black">
											2
										</span>
										{t('pages.etc.strategicDocuments.1')}
									</li>
									<li className="mb-[10px] flex items-center justify-start gap-[10px] text-white">
										<span className="bg-muted-light flex h-[35px] w-[35px] items-center justify-center rounded-full text-[16px] leading-normal font-normal text-black">
											3
										</span>
										{t('pages.etc.strategicDocuments.2')}
									</li>
									<li className="mb-[10px] flex items-center justify-start gap-[10px] text-white">
										<span className="bg-muted-light flex h-[35px] w-[35px] items-center justify-center rounded-full text-[16px] leading-normal font-normal text-black">
											4
										</span>
										{t('pages.etc.strategicDocuments.3')}
									</li>
									<li className="flex items-center justify-start gap-[10px] text-white">
										<span className="bg-muted-light flex h-[35px] w-[35px] items-center justify-center rounded-full text-[16px] leading-normal font-normal text-black">
											5
										</span>
										{t('pages.etc.strategicDocuments.4')}
									</li>
								</ul>
							</div>

							<div
								ref={LogoRef}
								className="translate-x-[90px] opacity-0"
							>
								<Image
									src="/imgs/logotype.svg"
									alt="About Logotype"
									width={298}
									height={261}
									className="block"
								/>
							</div>
						</div>

						<div className="relative z-1 text-white">
							<h3
								ref={InitiativesTitleRef}
								className="mb-[10px] translate-y-[50px] text-[32px] leading-normal font-bold text-white opacity-0"
							>
								{t('pages.etc.nationalInitiativesTitle')}
							</h3>

							<div
								ref={InitiativesGridRef}
								className="grid grid-cols-4 items-start gap-[50px]"
							>
								<div className="translate-y-[50px] opacity-0">
									<h5 className="mb-[10px] text-left text-[20px] leading-normal font-bold text-white">
										{t('pages.etc.tazaKazakhstanTitle')}
									</h5>
									<p>{t('pages.etc.tazaKazakhstanText')}</p>
								</div>
								<div className="translate-y-[50px] opacity-0">
									<h5 className="mb-[10px] text-left text-[20px] leading-normal font-bold text-white">
										{t('pages.etc.twoBillionTreesTitle')}
									</h5>
									<p>{t('pages.etc.twoBillionTreesText')}</p>
								</div>
								<div className="translate-y-[50px] opacity-0">
									<h5 className="mb-[10px] text-left text-[20px] leading-normal font-bold text-white">
										{t('pages.etc.biodiversityFundTitle')}
									</h5>
									<p>{t('pages.etc.biodiversityFundText')}</p>
								</div>
								<div className="translate-y-[50px] opacity-0">
									<strong>{t('pages.etc.unRegionalCenterTitle')}</strong>
									<span>{t('pages.etc.unRegionalCenterText')}</span>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
