'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/ui/container/container'

export function VenueBanner() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const SubtitleRef = useRef<HTMLParagraphElement>(null)
	const Subtitle2Ref = useRef<HTMLParagraphElement>(null)
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)

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
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<div className={['bg-secondary', !appConfig.isProduction ? `pt-[178px] sm:pt-[100px]` : `pt-[100px]`].join(' ')}>
			<section
				ref={BannerRef}
				data-animated-banner
				className={[`flex min-h-[567px] flex-col bg-cover bg-center pt-[73px] lg:min-h-[802px] lg:pt-[83px]`].join(' ')}
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				<Container className="flex h-full grow flex-col items-center justify-center gap-[37px] pb-[140px] text-center md:gap-[57px] xl:gap-[106px] xl:pb-[200px]">
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={[{ label: t(`nav.useful.venue`), href: '/useful/venue' }]} />
					</div>
					<div>
						<h1
							ref={TitleRef}
							className="xs:text-[48px] translate-y-[50px] text-[32px] leading-none font-bold text-white opacity-0 sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]"
						>
							{t(`pages.useful.venue.title`)}
						</h1>
						<p
							ref={SubtitleRef}
							className="xs:text-[20px] mx-auto mt-[30px] max-w-[923px] translate-y-[50px] text-center text-[16px] leading-normal font-normal text-white opacity-0 lg:text-[22px] xl:text-[24px]"
						>
							{t(`pages.useful.venue.subtitle`)}
						</p>
						<p
							ref={Subtitle2Ref}
							className="mx-auto mt-[41px] max-w-[1323px] translate-y-[50px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C3]/50 bg-clip-text text-[32px] leading-normal font-normal text-transparent opacity-0 sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]"
						>
							{t(`pages.useful.venue.place`)}
						</p>
					</div>
				</Container>
			</section>
		</div>
	)
}
