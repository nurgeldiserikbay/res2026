import Image from 'next/image'

import { Container } from '@/shared/ui/container/container'

export function GlobalEvents({
	title,
	subtitle,
	logo1,
	logo2,
	events,
}: {
	title: string
	subtitle: string
	logo1: { src: string; width: number; height: number; alt: string }
	logo2: { src: string; width: number; height: number; alt: string }
	events: { id: number; title: string; subtitle: string; text: string }[]
}) {
	return (
		<section className="bg-white pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px]">
			<Container>
				<div className="mb-[35px] flex flex-wrap items-center justify-start gap-x-[20px] gap-y-[10px] sm:justify-between lg:mb-[50px]">
					<div>
						<h2 className="mb-[30px] text-[32px] leading-normal font-bold text-text">{title}</h2>
						<p className="text-[16px] leading-normal font-normal text-text">{subtitle}</p>
					</div>
					<div className="grid grid-cols-2 items-center gap-x-[10px]">
						<Image
							src={logo1.src}
							width={logo1.width}
							height={logo1.height}
							alt={logo1.alt}
						/>
						<Image
							src={logo2.src}
							width={logo2.width}
							height={logo2.height}
							alt={logo2.alt}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-x-[20px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] xl:grid-cols-4 2xl:gap-x-[60px]">
					{events.map((event) => (
						<div key={event.id}>
							<h3 className="mb-[10px] text-[36px] leading-normal font-bold text-[#41754F]">{event.title}</h3>
							<p className="mb-[10px] text-[20px] leading-normal font-bold text-text">{event.subtitle}</p>
							<p className="text-[16px] leading-normal font-normal text-text">{event.text}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
