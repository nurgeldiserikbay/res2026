'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { ProcessesSlider } from '@/widgets/preparation-process/ui/ProcessesSlider'

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
						? `bg-secondary min-h-[343px] pt-[176px] pb-[60px] max-[441px]:min-h-[451px] max-[441px]:pt-[284px]`
						: `bg-secondary min-h-[343px] pt-[176px]`,
				].join(``)}
			>
				<Container className="relative z-10">
					<h1
						ref={TitleRef}
						className="3xl:text-[48px] mb-[30px] translate-y-[50px] text-center text-[32px] leading-none font-bold text-white opacity-0 md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
					>
						{t('pages.preparationProcess.title')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs
							breadcrumbs={[
								{ label: t('pages.about.title'), href: '/about' },
								{ label: t('pages.preparationProcess.title'), href: '/about/preparation-process' },
							]}
						/>
					</div>
				</Container>
			</section>

			<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
				<Container className="flex flex-wrap items-center justify-between gap-x-[60px] gap-y-[30px] lg:flex-nowrap">
					<div className="max-w-[1026px]">
						<Image
							src="/imgs/preparation-process/preparation-process-2.jpeg"
							alt="Preparation Process"
							width={1600}
							height={1066}
							className="block max-w-full rounded-[12px]"
						/>
					</div>

					<div className="max-w-[721px]">
						<h4 className="text-text mb-[30px] text-justify text-[20px] leading-normal font-normal md:text-[22px] xl:mb-[60px] xl:text-[24px]">
							{t('pages.preparationProcess.subtitle')}
						</h4>
						<p className="text-text text-justify text-[16px] leading-normal font-normal">{t('pages.preparationProcess.text')}</p>
					</div>
				</Container>
			</section>

			<ProcessesSlider />
		</>
	)
}
