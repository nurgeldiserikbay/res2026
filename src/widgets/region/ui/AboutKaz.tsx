import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

import { AboutImgs } from './AboutImgs'

export default function AboutKaz() {
	const t = useTranslations()
	return (
		<>
			<section
				id="about"
				className="relative"
			>
				<Container className="flex items-start justify-between overflow-visible">
					<div className="max-w-[870px]">
						<AboutImgs />
					</div>
					<div className="relative max-w-[868px] whitespace-pre-line">
						<h3 className="text-text relative z-1 mb-[30px] text-[32px] leading-normal font-bold">{t('pages.region.aboutKazakhstan')}</h3>
						<p className="relative z-1 mb-[30px]">{t('pages.region.aboutKazakhstanText1')}</p>
						<div className="relative z-1 mb-[30px] flex items-center justify-between gap-[60px]">
							<div className="flex h-[172px] max-w-[271px] grow flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center">
								<span className="text-secondary text-[64px] leading-normal font-bold">17</span>
								<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.oblasts`)}</span>
							</div>
							<div className="flex h-[172px] max-w-[537px] grow flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center">
								<span className="text-secondary text-[64px] leading-normal font-bold">3</span>
								<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.citiesOfNationalSignificance`)}</span>
							</div>
						</div>
						<p className="relative z-1 mb-[30px]">{t('pages.region.aboutKazakhstanText2')}</p>
						<div className="relative z-1 flex h-[172px] grow flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#ADF0BF] to-[#D4D8C30000] text-center">
							<span className="text-secondary text-[64px] leading-normal font-bold">20</span>
							<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.population`)}</span>
						</div>
						<Image
							src="/imgs/kz-about-map.svg"
							alt="KZ About Map"
							width={1885}
							height={1112}
							className="pointer-events-none absolute top-[-480px] left-[5%] z-0 block min-h-[1112px] min-w-[1885px] transform"
						/>
					</div>
				</Container>
			</section>
		</>
	)
}
