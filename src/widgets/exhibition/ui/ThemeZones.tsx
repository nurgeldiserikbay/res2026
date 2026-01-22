'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Locale } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { getThemeZones } from './mocks'
import { ThemeZonesSlider } from './ThemeZonesSlider'

export function ThemeZones() {
	const t = useTranslations()
	const locale = useLocale()
	const themeZones = getThemeZones(locale as Locale)

	const TitleRef = useRef<HTMLHeadingElement>(null)
	const TextRef = useRef<HTMLParagraphElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	useAnimSlide(TextRef, { y: 50, delay: 0.2 })

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[38px] 3xl:text-[48px]"
				>
					{t('pages.exhibition.themeZones.title')}
				</h2>
				<p
					ref={TextRef}
					className="mb-[60px] max-w-[662px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-[#41754F] opacity-0 md:text-[18px] xl:text-[24px]"
				>
					{t('pages.exhibition.themeZones.text')}
				</p>
				<ThemeZonesSlider themeZones={themeZones} />
			</Container>
		</section>
	)
}
