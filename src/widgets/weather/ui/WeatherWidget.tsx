import { fetchAstanaWeather } from '@/entities/weather/api/openMeteo'
import { normalizeAstanaWeather } from '@/entities/weather/model/normalize'
import { Container } from '@/shared/ui/container/container'

import { WeatherWidgetView } from './WeatherWidgetView'

export async function WeatherWidget() {
	const raw = await fetchAstanaWeather()
	const data = normalizeAstanaWeather(raw)

	return (
		<section className="bg-white pt-[50px] md:pt-[67px]">
			<Container>
				<WeatherWidgetView data={data} />
			</Container>
		</section>
	)
}
