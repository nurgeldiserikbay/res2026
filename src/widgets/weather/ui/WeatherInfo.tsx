import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

import { WeatherRow } from './WeatherRow'

export function WeatherInfo() {
	const t = useTranslations()

	const weatherRows = [
		{
			id: 1,
			title: t('pages.weather.spring'),
			months: t('pages.weather.springMonths'),
			text: t('pages.weather.springText'),
			minus: t('pages.weather.springMinus'),
			plus: t('pages.weather.springPlus'),
			minusText: t('pages.weather.springMinusText'),
			plusText: t('pages.weather.springPlusText'),
			image1: '/imgs/weather/spring-1.png',
			image2: '/imgs/weather/spring-2.png',
			reverse: false,
		},
		{
			id: 2,
			title: t('pages.weather.summer'),
			months: t('pages.weather.summerMonths'),
			text: t('pages.weather.summerText'),
			minus: t('pages.weather.summerMinus'),
			plus: t('pages.weather.summerPlus'),
			minusText: t('pages.weather.summerMinusText'),
			plusText: t('pages.weather.summerPlusText'),
			image1: '/imgs/weather/summer-1.png',
			image2: '/imgs/weather/summer-2.png',
			reverse: true,
		},
		{
			id: 3,
			title: t('pages.weather.autumn'),
			months: t('pages.weather.autumnMonths'),
			text: t('pages.weather.autumnText'),
			minus: t('pages.weather.autumnMinus'),
			plus: t('pages.weather.autumnPlus'),
			minusText: t('pages.weather.autumnMinusText'),
			plusText: t('pages.weather.autumnPlusText'),
			image1: '/imgs/weather/autumn-1.png',
			image2: '/imgs/weather/autumn-2.png',
			reverse: false,
		},
		{
			id: 4,
			title: t('pages.weather.winter'),
			months: t('pages.weather.winterMonths'),
			text: t('pages.weather.winterText'),
			minus: t('pages.weather.winterMinus'),
			plus: t('pages.weather.winterPlus'),
			minusText: t('pages.weather.winterMinusText'),
			plusText: t('pages.weather.winterPlusText'),
			image1: '/imgs/weather/winter-1.png',
			image2: '/imgs/weather/winter-2.png',
			reverse: true,
		},
	]

	return (
		<>
			<section className="bg-white pt-[50px] md:pt-[60px]">
				<Container>
					{weatherRows.map((weatherRow) => (
						<WeatherRow
							key={weatherRow.id}
							{...weatherRow}
							className="mb-[60px] last:mb-0"
						/>
					))}
				</Container>
			</section>
		</>
	)
}
