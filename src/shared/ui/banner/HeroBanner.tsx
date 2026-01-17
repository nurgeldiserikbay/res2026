'use client'

import { useRef } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/ui/container/container'

export interface HeroBannerProps {
	title: string
	subtitle?: string
	bgImage: string
	breadcrumbs?: { label: string; href: string }[]
	className?: string
	subtitleClassName?: string
}

export function HeroBanner({ title, subtitle, bgImage, breadcrumbs, className = '', subtitleClassName = '' }: HeroBannerProps) {
	const BannerRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const SubtitleRef = useRef<HTMLParagraphElement>(null)
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)

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
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<section
			ref={BannerRef}
			data-animated-banner
			className={[
				`flex min-h-[567px] flex-col bg-cover bg-center lg:min-h-[795px]`,
				!appConfig.isProduction ? `pt-[218px]` : `pt-[140px]`,
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Container className="flex h-full grow flex-col items-center justify-center gap-[37px] pb-[140px] text-center md:gap-[57px] xl:gap-[87px] xl:pb-[200px]">
				{breadcrumbs && breadcrumbs.length > 0 && (
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={breadcrumbs} />
					</div>
				)}
				<div>
					<h1
						ref={TitleRef}
						className="xs:text-[48px] translate-y-[50px] text-[32px] leading-none font-bold text-white opacity-0 sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]"
					>
						{title}
					</h1>
					{subtitle && (
						<p
							ref={SubtitleRef}
							className={`mx-auto mt-[30px] max-w-[830px] translate-y-[50px] text-[16px] leading-normal font-light whitespace-pre-line text-white opacity-0 sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] ${subtitleClassName}`}
						>
							{subtitle}
						</p>
					)}
				</div>
			</Container>
		</section>
	)
}
