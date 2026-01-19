'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { Timer } from '@/widgets/timer/ui/Timer'

export function ExhibitionBanner() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const SubtitleRef = useRef<HTMLParagraphElement>(null)
	const Subtitle2Ref = useRef<HTMLParagraphElement>(null)
	const BannerDateRef = useRef<HTMLDivElement>(null)

	const bgImage = '/imgs/usefulls/venue-banner.png'

	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage,
	})
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(SubtitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(Subtitle2Ref, { y: 50, delay: 0.2 })
	useAnimSlide(BannerDateRef, { y: 180, delay: 0.25, immediate: true })

	return (
		<div className={['bg-secondary', !appConfig.isProduction ? `pt-[178px] sm:pt-[100px]` : `pt-[100px]`].join(' ')}>
			<section
				ref={BannerRef}
				data-animated-banner
				className={[
					`3xl:pt-[158px] flex min-h-[567px] flex-col bg-cover bg-center pt-[73px] pb-[65px] lg:min-h-[890px] lg:pt-[100px] xl:pt-[120px] 2xl:pt-[140px]`,
				].join(' ')}
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				<Container className="flex h-full grow flex-col items-center justify-start gap-[30px]">
					<h1
						ref={TitleRef}
						className="xs:text-[48px] translate-y-[50px] text-[32px] leading-none font-bold text-white opacity-0 sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]"
					>
						{t(`pages.exhibition.title`)}
					</h1>

					<p
						ref={SubtitleRef}
						className="xs:text-[20px] mx-auto mb-[30px] max-w-[733px] translate-y-[50px] text-center text-[16px] leading-normal font-normal text-white opacity-0 lg:text-[22px] xl:text-[32px]"
					>
						{t(`pages.exhibition.subtitle`)}
					</p>

					<div
						ref={BannerDateRef}
						className="mb-[25.5px] flex translate-y-[-180px] transform items-center justify-center gap-[30px] opacity-0"
					>
						<div
							className="xs:text-[64px] align-top text-[44px] leading-none font-bold sm:text-[72px] md:text-[80px] xl:text-[96px]"
							style={{
								background: 'linear-gradient(to bottom, #E0EAB8 0%, rgba(212, 216, 195, 0) 95%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
								color: 'transparent',
							}}
						>
							22-24
						</div>
						<div className="xs:text-[20px] text-[16px] leading-none font-light text-white md:text-[22px] xl:text-[24px]">
							<div className="opacity-40">{t('titles.april')}</div>
							<div>{t('titles.eventAddress')}</div>
						</div>
					</div>

					<Timer targetDate={new Date('2026-04-22T10:00:00')} />
				</Container>
			</section>
		</div>
	)
}
