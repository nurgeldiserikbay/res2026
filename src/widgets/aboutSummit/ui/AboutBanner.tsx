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
				className="bg-primary-dark min-h-[895px] pt-[296px] pb-[196px]"
			>
				<Container className="relative z-10 flex flex-col items-start justify-center">
					<h1
						ref={TitleRef}
						className="mb-[60px] w-full translate-y-[-90px] text-left text-[128px] leading-none font-bold text-white opacity-0"
					>
						{t('pages.about.title')}
					</h1>
					<p
						ref={SubtitleRef}
						className="w-full max-w-[1027px] translate-y-[90px] text-[24px] leading-normal font-normal whitespace-pre-line text-white opacity-0"
					>
						{t('pages.about.aboutText1')}
					</p>
				</Container>
			</section>
		</>
	)
}
