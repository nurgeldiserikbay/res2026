export type OpenMeteoResponse = {
	latitude: number
	longitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	current: {
		temperature_2m: number
		relative_humidity_2m: number
		wind_speed_10m: number
		weather_code: number
		time: string
	}
	hourly: {
		time: string[]
		temperature_2m: number[]
		weather_code: number[]
	}
	daily: {
		time: string[]
		temperature_2m_max: number[]
		temperature_2m_min: number[]
		weather_code: number[]
	}
}

export type WeatherWidgetData = {
	city: string
	now: {
		temp: number
		humidity: number
		wind: number
		precipProb?: number
		code: number
		timeISO: string
	}
	hourly: Array<{ timeISO: string; temp: number; code: number }>
	daily: Array<{ dateISO: string; min: number; max: number; code: number }>
}
