import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function Climate() {
	const t = useTranslations()

	return (
		<>
			<section
				id="climate"
				className="relative mt-[100px]"
			>
				<Container className="flex items-start justify-between overflow-visible">
					<div className="relative max-w-[872px] whitespace-pre-line">
						<h3 className="text-text relative z-1 mb-[30px] text-[32px] leading-normal font-bold">{t('pages.region.climateText1')}</h3>
						<p className="relative z-1 mb-[30px]">{t('pages.region.climateText2')}</p>
						<div className="relative z-1 mb-[30px] grid grid-cols-2 gap-[10px]">
							<div className="flex h-[172px] grow flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center">
								<span className="text-secondary flex items-center gap-[30px] text-[64px] leading-normal font-bold">
									<Image
										src="/imgs/snow.svg"
										alt="Snow"
										width={51}
										height={51}
									/>
									<span>-45</span>
								</span>
								<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.winters`)}</span>
							</div>
							<div className="flex h-[172px] grow flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center">
								<span className="text-secondary flex items-center gap-[30px] text-[64px] leading-normal font-bold">
									<Image
										src="/imgs/sun.svg"
										alt="Sun"
										width={51}
										height={51}
									/>
									<span>+40</span>
								</span>
								<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.summers`)}</span>
							</div>
						</div>
					</div>

					<div className="relative z-1 flex max-w-[870px] items-stretch justify-between gap-[8px]">
						<Image
							src="/imgs/climate-1.png"
							alt="Climate 1"
							width={560}
							height={376}
						/>
						<Image
							src="/imgs/climate-2.png"
							alt="Climate 2"
							width={300}
							height={376}
						/>
					</div>
				</Container>
			</section>
		</>
	)
}
