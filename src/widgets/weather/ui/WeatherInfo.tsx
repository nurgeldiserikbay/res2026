import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

import { WeatherRow } from './WeatherRow'

export function WeatherInfo() {
	const t = useTranslations()

	const weatherRows = [
		{
			id: 1,
			title: t('pages.useful.weather.spring'),
			months: t('pages.useful.weather.springMonths'),
			text: t('pages.useful.weather.springText'),
			minus: t('pages.useful.weather.springMinus'),
			plus: t('pages.useful.weather.springPlus'),
			minusText: t('pages.useful.weather.springMinusText'),
			plusText: t('pages.useful.weather.springPlusText'),
			image1: '/imgs/weather/spring-1.png',
			image2: '/imgs/weather/spring-2.png',
			reverse: false,
		},
		{
			id: 2,
			title: t('pages.useful.weather.summer'),
			months: t('pages.useful.weather.summerMonths'),
			text: t('pages.useful.weather.summerText'),
			minus: t('pages.useful.weather.summerMinus'),
			plus: t('pages.useful.weather.summerPlus'),
			minusText: t('pages.useful.weather.summerMinusText'),
			plusText: t('pages.useful.weather.summerPlusText'),
			image1: '/imgs/weather/summer-1.png',
			image2: '/imgs/weather/summer-2.png',
			reverse: true,
		},
		{
			id: 3,
			title: t('pages.useful.weather.autumn'),
			months: t('pages.useful.weather.autumnMonths'),
			text: t('pages.useful.weather.autumnText'),
			minus: t('pages.useful.weather.autumnMinus'),
			plus: t('pages.useful.weather.autumnPlus'),
			minusText: t('pages.useful.weather.autumnMinusText'),
			plusText: t('pages.useful.weather.autumnPlusText'),
			image1: '/imgs/weather/autumn-1.png',
			image2: '/imgs/weather/autumn-2.png',
			reverse: false,
		},
		{
			id: 4,
			title: t('pages.useful.weather.winter'),
			months: t('pages.useful.weather.winterMonths'),
			text: t('pages.useful.weather.winterText'),
			minus: t('pages.useful.weather.winterMinus'),
			plus: t('pages.useful.weather.winterPlus'),
			minusText: t('pages.useful.weather.winterMinusText'),
			plusText: t('pages.useful.weather.winterPlusText'),
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
