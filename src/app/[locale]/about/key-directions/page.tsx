'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { KeyDirection } from '@/entities/key-directions/KeyDirection'
import { keyDirections } from '@/entities/key-directions/mocks'
import { appConfig } from '@/shared/config/app.config'
import { Locale } from '@/shared/config/i18n'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { localize } from '@/shared/utils/localize'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as Locale

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

	const items = keyDirections.map((direction) => ({
		id: direction.id,
		image: direction.image,
		title: localize(direction.title, locale),
		description: localize(direction.description, locale),
		href: direction.link,
	}))

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
						{t('pages.keyDirections.title')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs
							breadcrumbs={[
								{ label: t('pages.about.title'), href: '/about' },
								{ label: t('pages.keyDirections.title'), href: '/about/key-directions' },
							]}
						/>
					</div>
				</Container>
			</section>

			<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
				<Container className="grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{items.map((direction) => (
						<KeyDirection
							key={direction.id}
							image={direction.image}
							title={direction.title}
							description={direction.description}
							href={direction.href}
						/>
					))}
				</Container>
			</section>
		</>
	)
}
