import { ASTANA } from '@/shared/config/weather'

import type { OpenMeteoResponse, WeatherWidgetData } from './types'

function findClosestHourIndex(times: string[], nowISO: string) {
	// nowISO у open-meteo обычно совпадает по часу, но на всякий случай сделаем “closest”
	const nowMs = new Date(nowISO).getTime()
	let bestIdx = 0
	let bestDiff = Infinity

	for (let i = 0; i < times.length; i++) {
		const diff = Math.abs(new Date(times[i]).getTime() - nowMs)
		if (diff < bestDiff) {
			bestDiff = diff
			bestIdx = i
		}
	}
	return bestIdx
}

export function normalizeAstanaWeather(raw: OpenMeteoResponse): WeatherWidgetData {
	const now = raw.current
	const hourlyTime: string[] = raw.hourly.time
	const hourlyTemp: number[] = raw.hourly.temperature_2m
	const hourlyCode: number[] = raw.hourly.weather_code

	const dailyTime: string[] = raw.daily.time
	const dailyMin: number[] = raw.daily.temperature_2m_min
	const dailyMax: number[] = raw.daily.temperature_2m_max
	const dailyCode: number[] = raw.daily.weather_code

	const startIdx = findClosestHourIndex(hourlyTime, now.time)
	const endIdx = Math.min(startIdx + 6, hourlyTime.length)

	// берем ближайшие 12 часов для графика
	const hourly = hourlyTime.slice(startIdx, endIdx).map((t, j) => {
		const i = startIdx + j
		return {
			timeISO: t,
			temp: hourlyTemp[i],
			code: hourlyCode[i],
		}
	})

	return {
		city: ASTANA.name,
		now: {
			temp: now.temperature_2m,
			humidity: now.relative_humidity_2m,
			wind: now.wind_speed_10m,
			code: now.weather_code,
			timeISO: now.time,
		},
		hourly,
		daily: dailyTime.map((d, i) => ({
			dateISO: d,
			min: dailyMin[i],
			max: dailyMax[i],
			code: dailyCode[i],
		})),
	}
}
