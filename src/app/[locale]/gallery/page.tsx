'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { Locale } from '@/shared/config/i18n'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { GallerySection } from '@/widgets/gallery-section/GallerySection'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale()

	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '140%',
		toSize: '120%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				className="bg-secondary h-[343px] bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat pt-[176px]"
			>
				<Container>
					<h1
						ref={TitleRef}
						className="mb-[30px] translate-y-[50px] text-center text-[48px] leading-none font-bold text-white opacity-0"
					>
						{t('titles.gallery')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={[{ label: t('titles.gallery'), href: '/gallery' }]} />
					</div>
				</Container>
			</section>

			<GallerySection locale={locale as Locale} />
		</>
	)
}
