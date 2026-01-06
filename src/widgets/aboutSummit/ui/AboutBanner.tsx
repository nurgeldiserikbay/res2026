'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

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
	const DateRef = useRef<HTMLDivElement>(null)
	useAnimSlide(DateRef, { y: 50, delay: 0.3 })
	const MonthRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(MonthRef, { y: 50, delay: 0.4 })

	return (
		<>
			<section className="bg-primary-dark pt-[100px]">
				<div
					ref={BannerRef}
					data-animated-banner
					className="relative box-border h-[1160px] bg-linear-to-b from-[#41754F] to-[#02493F] bg-cover bg-center"
				>
					<Image
						src="/imgs/about-page-map.svg"
						alt="About Summit Logo"
						width={1039}
						height={1137}
						className="absolute top-[23px] left-0 block w-full max-w-[1039px]"
					/>

					<Container className="relative z-10 flex items-start justify-between pt-[304px]">
						<div className="mt-[43px] max-w-[706px]">
							<h1
								ref={TitleRef}
								className="xs:mb-[40px] xs:text-[40px] text-primary-dark mb-[30px] w-full translate-y-[-90px] text-left text-[32px] leading-none font-bold opacity-0 sm:mb-[50px] sm:text-[56px] md:mb-[55px] md:text-[72px] lg:mb-[60px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]"
							>
								{t('pages.about.title')}
							</h1>
							<p
								ref={SubtitleRef}
								className="text-text mb-[181px] w-full translate-y-[90px] text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:text-[16px]"
							>
								{t('pages.about.resText1')}
							</p>

							<button className="text-secondary flex items-center gap-[30px] text-[16px] leading-normal font-normal">
								<IconDoubleArrowDown className="text-secondary" />
								<span>{t('labels.swipeForward')}</span>
							</button>
						</div>

						<div className="xs:text-[62px] 3xl:text-[111px] mb-[30px] w-full max-w-[685px] text-left text-[48px] leading-[0.96] font-bold text-white sm:text-[82px] xl:text-[98px]">
							<div className="text-muted-light block">Regional</div> <div className="block">Ecological</div>{' '}
							<div className="block">Summit 2026</div>
						</div>
					</Container>
				</div>
			</section>
		</>
	)
}
