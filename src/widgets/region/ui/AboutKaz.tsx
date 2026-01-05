'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { AboutImgs } from './AboutImgs'

export default function AboutKaz() {
	const t = useTranslations()

	const ImagesRef = useRef<HTMLDivElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const Text1Ref = useRef<HTMLParagraphElement>(null)
	const StatsRef = useRef<HTMLDivElement>(null)
	const Stat1Ref = useRef<HTMLDivElement>(null)
	const Stat2Ref = useRef<HTMLDivElement>(null)
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	const Stat3Ref = useRef<HTMLDivElement>(null)

	useAnimSlide(ImagesRef, { x: -90, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(Text1Ref, { y: 50, delay: 0.3 })
	useAnimSlide(Stat1Ref, { y: 50, delay: 0.4 })
	useAnimSlide(Stat2Ref, { y: 50, delay: 0.5 })
	useAnimSlide(Text2Ref, { y: 50, delay: 0.6 })
	useAnimSlide(Stat3Ref, { y: 50, delay: 0.7 })

	return (
		<>
			<section
				id="about"
				className="relative"
			>
				<Container className="flex items-start justify-between overflow-visible">
					<div
						ref={ImagesRef}
						className="max-w-[870px] translate-x-[-90px] opacity-0"
					>
						<AboutImgs />
					</div>
					<div className="relative max-w-[868px] whitespace-pre-line">
						<h3
							ref={TitleRef}
							className="text-text relative z-1 mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold opacity-0"
						>
							{t('pages.region.aboutKazakhstan')}
						</h3>
						<p
							ref={Text1Ref}
							className="relative z-1 mb-[30px] translate-y-[50px] opacity-0"
						>
							{t('pages.region.aboutKazakhstanText1')}
						</p>
						<div
							ref={StatsRef}
							className="relative z-1 mb-[30px] flex items-center justify-between gap-[60px]"
						>
							<div
								ref={Stat1Ref}
								className="flex h-[172px] max-w-[271px] grow translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0"
							>
								<span className="text-secondary text-[64px] leading-normal font-bold">17</span>
								<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.oblasts`)}</span>
							</div>
							<div
								ref={Stat2Ref}
								className="flex h-[172px] max-w-[537px] grow translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0"
							>
								<span className="text-secondary text-[64px] leading-normal font-bold">3</span>
								<span className="text-secondary text-[16px] leading-normal font-normal">{t(`labels.citiesOfNationalSignificance`)}</span>
							</div>
						</div>
						<p
							ref={Text2Ref}
							className="relative z-1 mb-[30px] translate-y-[50px] opacity-0"
						>
							{t('pages.region.aboutKazakhstanText2')}
						</p>
						<div
							ref={Stat3Ref}
							className="relative z-1 flex h-[172px] grow translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#ADF0BF] to-[#D4D8C30000] text-center opacity-0"
						>
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
