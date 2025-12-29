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
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 90, delay: 0.1 })
	const SubtitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(SubtitleRef, { y: 90, delay: 0.2 })
	const DateRef = useRef<HTMLDivElement>(null)
	useAnimSlide(DateRef, { y: 50, delay: 0.3 })
	const MonthRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(MonthRef, { y: 50, delay: 0.4 })

	return (
		<section
			ref={BannerRef}
			className="bg-primary-dark min-h-[895px] bg-[url('/imgs/abount-banner.png')] bg-cover bg-center bg-no-repeat pt-[268px] pb-[168px]"
		>
			<Container className="relative z-1 flex flex-col items-center justify-center">
				<h1
					ref={TitleRef}
					className="mb-[40px] translate-y-[-90px] text-center text-[128px] leading-none font-bold text-white opacity-0"
				>
					{t('pages.about.title')}
				</h1>
				<h2
					ref={SubtitleRef}
					className="mb-[40px] translate-y-[-90px] text-center text-[48px] leading-[0.85] font-bold text-white opacity-0"
				>
					<span className="text-muted-light">Regional</span> <br /> Ecological <br /> Summit 2026
				</h2>
				<div
					ref={DateRef}
					className="translate-y-[-50px] align-top text-[96px] leading-none font-bold opacity-0"
					style={{
						background: 'linear-gradient(to bottom, #E0EAB8 0%, rgba(212, 216, 195, 0) 95%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
						color: 'transparent',
					}}
				>
					20-23
				</div>
				<p
					ref={MonthRef}
					className="translate-y-[-50px] text-[24px] leading-[1.2] font-light text-white opacity-0"
				>
					{'апреля'}
				</p>
			</Container>
		</section>
	)
}
