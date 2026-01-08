'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { ProgrammsPage } from '@/widgets/programms/ui/ProgrammsPage'

export default function Page() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '140%',
		toSize: '120%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/news-banner.png',
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className={[
					!appConfig.isProduction
						? `bg-secondary h-[343px] pt-[176px] max-[441px]:h-[451px] max-[441px]:pt-[284px]`
						: `bg-secondary h-[343px] pt-[176px]`,
				].join(``)}
			>
				<Container className="relative z-10">
					<h1
						ref={TitleRef}
						className="3xl:text-[48px] mb-[30px] translate-y-[50px] text-center text-[32px] leading-none font-bold text-white opacity-0 md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
					>
						{t('titles.programs')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={[{ label: t('titles.programs'), href: '/programs' }]} />
					</div>
				</Container>
			</section>

			<ProgrammsPage />
		</>
	)
}
