'use client'

import { useRef } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/ui/container/container'

export interface PageBannerProps {
	title: string
	breadcrumbs: { label: string; href: string }[]
	bgImage?: string
	useMinHeight?: boolean
	className?: string
}

export function PageBanner({
	title,
	breadcrumbs,
	bgImage = '/imgs/news-banner.png',
	useMinHeight = false,
	className = '',
}: PageBannerProps) {
	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '140%',
		toSize: '120%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage,
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	let heightClass = ''
	if (useMinHeight) {
		if (!appConfig.isProduction) {
			heightClass = 'bg-secondary min-h-[343px] pt-[176px] pb-[60px] max-[441px]:min-h-[451px] max-[441px]:pt-[230px] pb-[51px]'
		} else {
			heightClass = 'bg-secondary min-h-[343px] pt-[176px] pb-[51px]'
		}
	} else {
		if (!appConfig.isProduction) {
			heightClass = 'bg-secondary min-h-[343px] pt-[176px] max-[441px]:min-h-[451px] max-[441px]:pt-[230px] pb-[51px]'
		} else {
			heightClass = 'bg-secondary min-h-[343px] pt-[176px] pb-[51px]'
		}
	}

	return (
		<section
			ref={BannerRef}
			data-animated-banner
			className={`${heightClass} ${className}`.trim()}
		>
			<Container className="relative z-10">
				<h1
					ref={TitleRef}
					className="3xl:text-[48px] mb-[30px] translate-y-[50px] text-center text-[32px] leading-none font-bold text-white opacity-0 md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
				>
					{title}
				</h1>
				<div
					ref={BreadcrumbsRef}
					className="translate-y-[50px] opacity-0"
				>
					<Breadcrumbs breadcrumbs={breadcrumbs} />
				</div>
			</Container>
		</section>
	)
}
