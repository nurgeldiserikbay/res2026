import { useTranslations } from 'next-intl'

import { WeatherIcon } from '@/entities/weather/model/mapCodeToIcon'
import { WeatherWidgetData } from '@/entities/weather/model/types'

export function WeatherWidgetView({ data }: { data: WeatherWidgetData }) {
	const t = useTranslations()

	return (
		<div className="relative overflow-hidden rounded-[12px] bg-[url('/imgs/weather/weather-widget-bg.png')] bg-cover bg-center bg-no-repeat px-[24px] py-[20px]">
			<div className="mx-auto max-w-[499px]">
				<div className="relative z-10 flex items-start justify-between gap-24">
					<div>
						<div className="flex items-center gap-[10px]">
							<div className="h-[36px] w-[36px] text-[#F7B733]">
								<WeatherIcon
									code={data.now.code}
									className="h-full w-full"
								/>
							</div>
							<div className="text-[32px] leading-none font-medium text-white">
								{Math.round(data.now.temp)}
								<span className="inline-flex translate-x-[10px] -translate-y-[5px] transform items-center gap-1 text-[18px] font-light opacity-70">
									<sup>°C</sup>
									<sup>|</sup>
									<sup>°F</sup>
								</span>
							</div>
						</div>
						<div className="mt-[15px] ml-4 text-[14px] text-white opacity-60">
							<div>
								{t('labels.precipitation')}: {data.now.precipProb ?? 0}%
							</div>
							<div>
								{t('labels.humidity')}: {data.now.humidity}%
							</div>
							<div>
								{t('labels.wind')}: {Math.round(data.now.wind)} km/h
							</div>
						</div>
					</div>

					<div className="text-right text-white">
						<div className="text-[24px] font-normal">{t('labels.weather')}</div>
						<div className="mt-[5px] text-[18px] opacity-70">
							{t('labels.city')}: {data.city}
						</div>
						<div className="mt-[5px] text-[18px] opacity-70">{new Date(data.now.timeISO).toLocaleString()}</div>
					</div>
				</div>

				<div className="relative z-10 mt-[20px] flex items-center justify-between gap-[10px]">
					{data.hourly.map((h) => (
						<div
							key={h.timeISO}
							className="p-[5px] text-center"
						>
							<div className="text-[14px] text-white opacity-70">
								{new Date(h.timeISO).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
							</div>
							<div className="mt-[5px] text-[18px] font-medium text-white">{Math.round(h.temp)}°</div>
						</div>
					))}
				</div>

				<div className="relative z-10 mt-[10px] flex justify-between gap-[20px] overflow-x-auto">
					{data.daily.slice(0, 7).map((d) => (
						<div
							key={d.dateISO}
							className="p-[5px] text-center"
						>
							<div className="text-[16px] text-white">{new Date(d.dateISO).toLocaleDateString([], { weekday: 'short' })}</div>
							<div className="mx-auto h-[44px] w-[44px] text-[#F7B733]">
								<WeatherIcon
									code={d.code}
									className="h-full w-full"
								/>
							</div>
							<div className="mt-[10px] text-[14px] text-white">
								{Math.round(d.min)}° / <span className="opacity-70">{Math.round(d.max)}°</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
