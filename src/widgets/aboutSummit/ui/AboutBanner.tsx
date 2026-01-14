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
				className={[
					!appConfig.isProduction ? `bg-primary-dark relative pt-[100px] max-[441px]:pt-[178px]` : `bg-primary-dark pt-[100px]`,
				].join(``)}
			>
				<div
					ref={BannerRef}
					data-animated-banner
					className="xs:pt-[184px] relative box-border min-h-[795px] bg-linear-to-b from-[#41754F] to-[#02493F] bg-cover bg-center pt-[154px] pb-[50px] sm:min-h-[700px] sm:pt-[140px] md:min-h-[800px] md:pt-[150px] lg:min-h-[900px] lg:pt-[200px] xl:min-h-[1000px] xl:pt-[250px] 2xl:min-h-[1160px] 2xl:pt-[304px]"
				>
					<Image
						ref={MapRef}
						src="/imgs/about-page-map.svg"
						alt="About Summit Logo"
						width={1039}
						height={681}
						className="xs:w-[580px] absolute top-[30px] left-0 block w-[470px] max-w-none opacity-0 md:w-[640px] lg:w-[780px] xl:w-[980px] 2xl:w-[1080px]"
					/>

					{/* className="max-[762px]:min-w-[120vw] max-[480px]:min-w-[130vw] max-[400px]:min-w-[500px] sm:top-[-140px] md:top-[23px] md:w-full md:max-w-[1039px] lg:top-[23px]" */}
					<Container className="relative z-10 flex min-h-full flex-col items-start justify-between gap-[191px] sm:gap-[30px] lg:flex-row lg:items-start lg:gap-[40px] xl:gap-[60px]">
						<div className="w-full max-w-[580px] lg:mt-[23px] xl:max-w-[680px]">
							<h1
								ref={TitleRef}
								className="xs:mb-[30px] xs:text-[48px] 3xl:text-[128px] mb-[20px] w-full translate-y-[-90px] text-left text-[36px] leading-none font-bold text-white opacity-0 sm:mb-[40px] sm:text-[48px] md:mb-[50px] md:text-[56px] lg:mb-[55px] lg:text-[72px] xl:mb-[60px] xl:text-[96px] 2xl:text-[112px]"
							>
								{t('pages.about.title')}
							</h1>
							<p
								ref={SubtitleRef}
								className="text-text xs:text-[16px] xs:max-w-[346px] w-full max-w-[286px] translate-y-[90px] text-justify text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:mb-[50px] sm:text-[16px] md:mb-[80px] lg:mb-[120px] lg:max-w-[456px] xl:mb-[150px] xl:max-w-full 2xl:mb-[181px]"
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

						<div className="mx-auto sm:mx-0 sm:self-end lg:self-center 2xl:self-start">
							<div
								ref={DateBlockRef}
								className="xs:text-[32px] xs:mb-[20px] 3xl:text-[88px] xs:ml-[160px] mb-[30px] ml-[60px] w-full max-w-[685px] translate-y-[50px] text-left text-[24px] leading-[0.96] font-bold text-white opacity-0 sm:ml-0 sm:text-[24px] md:text-[36px] lg:text-[54px] xl:text-[82px] 2xl:text-[84px]"
							>
								<div className="text-muted-light block">{t(`titles.Regional`)}</div> <div className="block">{t(`titles.Ecological`)}</div>{' '}
								<div className="block">{t(`titles.Summit2026`)}</div>
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
