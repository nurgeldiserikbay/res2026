import { useLocale, useTranslations } from 'next-intl'

import { Locale } from '@/shared/config/i18n'
import { Container } from '@/shared/ui/container/container'

import { getThemeZones } from './mocks'
import { ThemeZonesSlider } from './ThemeZonesSlider'

export function ThemeZones() {
	const t = useTranslations()
	const locale = useLocale()
	const themeZones = getThemeZones(locale as Locale)

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<h2 className="mb-[30px] text-[32px] leading-[1.2] font-bold text-text xl:text-[36px] 2xl:text-[38px] 3xl:text-[48px]">
					{t('pages.exhibition.themeZones.title')}
				</h2>
				<p className="mb-[60px] max-w-[662px] text-[16px] leading-normal font-normal whitespace-pre-line text-[#41754F] md:text-[18px] xl:text-[24px]">
					{t('pages.exhibition.themeZones.text')}
				</p>
				<ThemeZonesSlider themeZones={themeZones} />
			</Container>
		</section>
	)
}
