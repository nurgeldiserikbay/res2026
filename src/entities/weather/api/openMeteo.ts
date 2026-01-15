import { ASTANA, WEATHER_REVALIDATE_SEC } from '@/shared/config/weather'

export async function fetchAstanaWeather() {
	const url =
		'https://api.open-meteo.com/v1/forecast' +
		`?latitude=${ASTANA.latitude}` +
		`&longitude=${ASTANA.longitude}` +
		'&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code' +
		'&hourly=temperature_2m,weather_code,precipitation_probability,wind_speed_10m' +
		'&daily=temperature_2m_max,temperature_2m_min,weather_code' +
		'&timezone=auto' +
		'&forecast_days=7'

	const res = await fetch(url, {
		next: { revalidate: WEATHER_REVALIDATE_SEC },
	})

	if (!res.ok) throw new Error(`Open-Meteo error: ${res.status}`)

	return res.json()
}
