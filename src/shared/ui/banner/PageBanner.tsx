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

export function PageBanner({ title, breadcrumbs, bgImage = '/imgs/news-banner.png', className = '' }: PageBannerProps) {
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
	if (!appConfig.isProduction) {
		heightClass = 'pt-[178px] sm:pt-[100px]'
	} else {
		heightClass = 'pt-[100px]'
	}

	return (
		<div className={`${heightClass} bg-secondary`}>
			<section
				ref={BannerRef}
				data-animated-banner
				className={`bg-secondary flex min-h-[243px] flex-col items-center justify-center gap-[30px] pt-[51px] pb-[81px] ${className}`.trim()}
			>
				<Container className="relative z-10">
					<h1
						ref={TitleRef}
						className="3xl:text-[48px] xs:text-[32px] mb-[30px] translate-y-[50px] text-center text-[22px] leading-none font-bold text-white opacity-0 md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
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
		</div>
	)
}
