import Image from 'next/image'

import { Container } from '@/shared/ui/container/container'

export function WeatherWidget() {
	return (
		<section className="bg-white pt-[50px] md:pt-[67px]">
			<Container>
				<div className="relative flex items-center justify-center overflow-hidden rounded-[12px] bg-[url('/imgs/weather/weather-widget-bg.png')] bg-cover bg-center bg-no-repeat">
					<Image
						src="/imgs/weather/weather-widget.png"
						alt="Weather Widget"
						width={499}
						height={310}
						className="relative z-10"
					/>
				</div>
			</Container>
		</section>
	)
}
