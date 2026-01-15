import { useTranslations } from 'next-intl'

import { PageBanner } from '@/shared/ui/banner'
import { WeatherInfo } from '@/widgets/weather/ui/WeatherInfo'
import { WeatherWidget } from '@/widgets/weather/ui/WeatherWidget'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<PageBanner
				title={t('pages.weather.title')}
				breadcrumbs={[{ label: t('pages.weather.title'), href: '/useful/weather' }]}
			/>

			<WeatherWidget />

			<WeatherInfo />
		</>
	)
}
