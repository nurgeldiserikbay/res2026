'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutBanner() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/abount-banner.png',
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
			<section
				ref={BannerRef}
				data-animated-banner
				className="bg-primary-dark min-h-[400px] pt-[120px] pb-[50px] sm:min-h-[500px] sm:pt-[150px] sm:pb-[60px] md:min-h-[600px] md:pt-[200px] md:pb-[80px] lg:min-h-[700px] lg:pt-[240px] lg:pb-[120px] xl:min-h-[800px] xl:pt-[280px] xl:pb-[160px] 2xl:min-h-[895px] 2xl:pt-[296px] 2xl:pb-[196px]"
			>
				<Container className="relative z-10 flex flex-col items-start justify-center">
					<h1
						ref={TitleRef}
						className="xs:mb-[40px] xs:text-[40px] mb-[30px] w-full translate-y-[-90px] text-left text-[32px] leading-none font-bold text-white opacity-0 sm:mb-[50px] sm:text-[56px] md:mb-[55px] md:text-[72px] lg:mb-[60px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]"
					>
						{t('pages.about.title')}
					</h1>
					<p
						ref={SubtitleRef}
						className="w-full max-w-[1027px] translate-y-[90px] text-[14px] leading-normal font-normal whitespace-pre-line text-white opacity-0 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
					>
						{t('pages.about.aboutText1')}
					</p>
				</Container>
			</section>
		</>
	)
}
