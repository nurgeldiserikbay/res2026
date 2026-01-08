'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { IconDoubleArrowDown } from '@/shared/icons/IconDoubleArrowDown'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutBanner() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLDivElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/about-page-bg.png',
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 90, delay: 0.1 })
	const SubtitleRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(SubtitleRef, { y: 90, delay: 0.2 })
	const MapRef = useRef<HTMLImageElement>(null)
	useAnimSlide(MapRef, { y: 50, delay: 0.1 })
	const DateBlockRef = useRef<HTMLDivElement>(null)
	useAnimSlide(DateBlockRef, { y: 50, delay: 0.3 })
	const ButtonRef = useRef<HTMLAnchorElement>(null)
	useAnimSlide(ButtonRef, { y: 50, delay: 0.4 })
	const ButtonMobileRef = useRef<HTMLAnchorElement>(null)
	useAnimSlide(ButtonMobileRef, { y: 50, delay: 0.4 })

	return (
		<>
			<section
				className={[!appConfig.isProduction ? `bg-primary-dark pt-[100px] max-[441px]:pt-[178px]` : `bg-primary-dark pt-[100px]`].join(``)}
			>
				<div
					ref={BannerRef}
					data-animated-banner
					className="relative box-border min-h-[795px] bg-linear-to-b from-[#41754F] to-[#02493F] bg-cover bg-center pt-[184px] pb-[50px] sm:min-h-[700px] sm:pt-[120px] md:min-h-[800px] md:pt-[150px] lg:min-h-[900px] lg:pt-[200px] xl:min-h-[1000px] xl:pt-[250px] 2xl:min-h-[1160px] 2xl:pt-[304px]"
				>
					<Image
						ref={MapRef}
						src="/imgs/about-page-map.svg"
						alt="About Summit Logo"
						width={1039}
						height={681}
						className="absolute top-[20px] left-0 block opacity-0 max-[762px]:min-w-[120vw] max-[480px]:min-w-[115vw] sm:top-[-140px] md:top-[23px] md:w-full md:max-w-[1039px] lg:top-[23px]"
					/>

					<Container className="relative z-10 flex flex-col items-start justify-between gap-[91px] sm:gap-[30px] lg:flex-row lg:items-start lg:gap-[40px] xl:gap-[60px]">
						<div className="w-full max-w-[706px] lg:mt-[43px]">
							<h1
								ref={TitleRef}
								className="xs:mb-[30px] xs:text-[48px] 3xl:text-[128px] mb-[20px] w-full translate-y-[-90px] text-left text-[36px] leading-none font-bold text-white opacity-0 sm:mb-[40px] sm:text-[48px] md:mb-[50px] md:text-[56px] lg:mb-[55px] lg:text-[72px] xl:mb-[60px] xl:text-[96px] 2xl:text-[112px]"
							>
								{t('pages.about.title')}
							</h1>
							<p
								ref={SubtitleRef}
								className="text-text w-full max-w-[286px] translate-y-[90px] text-[16px] leading-normal font-normal whitespace-pre-line opacity-0 sm:mb-[50px] sm:text-[16px] md:mb-[80px] md:max-w-full lg:mb-[120px] xl:mb-[150px] 2xl:mb-[181px]"
							>
								{t('pages.about.resText1')}
							</p>

							<Link
								href="#about-content"
								ref={ButtonRef}
								className="text-secondary hidden translate-y-[50px] items-center gap-[20px] text-[14px] leading-normal font-normal opacity-0 sm:flex sm:gap-[25px] sm:text-[15px] md:gap-[30px] md:text-[16px]"
							>
								<IconDoubleArrowDown className="text-secondary" />
								<span>{t('labels.swipeForward')}</span>
							</Link>
						</div>

						<div className="sm:mx-unset mx-auto">
							<div
								ref={DateBlockRef}
								className="xs:text-[36px] xs:mb-[20px] 3xl:text-[111px] mb-[30px] ml-[160px] w-full max-w-[685px] translate-y-[50px] text-left text-[36px] leading-[0.96] font-bold text-white opacity-0 sm:ml-0 sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[82px] 2xl:text-[98px]"
							>
								<div className="text-muted-light block">Regional</div> <div className="block">Ecological</div>{' '}
								<div className="block">Summit 2026</div>
							</div>

							<Link
								href="#about-content"
								ref={ButtonMobileRef}
								className="mx-auto flex translate-y-[50px] items-center justify-center gap-[30px] text-[14px] leading-normal font-normal text-white opacity-0 sm:hidden sm:gap-[25px] sm:text-[15px] md:gap-[30px] md:text-[16px]"
							>
								<IconDoubleArrowDown className="text-white" />
								<span>{t('labels.swipeForward')}</span>
							</Link>
						</div>
					</Container>
				</div>
			</section>
		</>
	)
}
