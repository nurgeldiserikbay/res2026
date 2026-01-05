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
				className="relative pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px]"
			>
				<Container className="flex flex-col items-start justify-between gap-[30px] overflow-visible lg:flex-row lg:gap-[40px] xl:gap-[60px]">
					<div
						ref={ImagesRef}
						className="w-full translate-x-[-90px] opacity-0 lg:max-w-[870px]"
					>
						<AboutImgs />
					</div>
					<div className="relative w-full whitespace-pre-line lg:max-w-[868px]">
						<h3
							ref={TitleRef}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[24px] leading-normal font-bold opacity-0 sm:mb-[25px] sm:text-[28px] md:mb-[30px] md:text-[32px] lg:text-[32px]"
						>
							{t('pages.region.aboutKazakhstan')}
						</h3>
						<p
							ref={Text1Ref}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[14px] leading-normal opacity-0 sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-[16px]"
						>
							{t('pages.region.aboutKazakhstanText1')}
						</p>
						<div
							ref={StatsRef}
							className="relative z-1 mb-[20px] flex flex-col items-stretch justify-between gap-[15px] sm:mb-[25px] sm:flex-row sm:gap-[20px] md:mb-[30px] md:gap-[30px] lg:gap-[60px]"
						>
							<div
								ref={Stat1Ref}
								className="flex h-[140px] w-full translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0 sm:h-[155px] sm:max-w-[271px] md:h-[172px]"
							>
								<span className="text-secondary text-[48px] leading-normal font-bold sm:text-[56px] md:text-[64px]">17</span>
								<span className="text-secondary text-[14px] leading-normal font-normal sm:text-[15px] md:text-[16px]">
									{t(`labels.oblasts`)}
								</span>
							</div>
							<div
								ref={Stat2Ref}
								className="flex h-[140px] w-full translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0 sm:h-[155px] sm:max-w-[537px] sm:grow md:h-[172px]"
							>
								<span className="text-secondary text-[48px] leading-normal font-bold sm:text-[56px] md:text-[64px]">3</span>
								<span className="text-secondary text-[14px] leading-normal font-normal sm:text-[15px] md:text-[16px]">
									{t(`labels.citiesOfNationalSignificance`)}
								</span>
							</div>
						</div>
						<p
							ref={Text2Ref}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[14px] leading-normal opacity-0 sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-[16px]"
						>
							{t('pages.region.aboutKazakhstanText2')}
						</p>
						<div
							ref={Stat3Ref}
							className="relative z-1 flex h-[140px] w-full translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#ADF0BF] to-[#D4D8C30000] text-center opacity-0 sm:h-[155px] md:h-[172px]"
						>
							<span className="text-secondary text-[48px] leading-normal font-bold sm:text-[56px] md:text-[64px]">20</span>
							<span className="text-secondary text-[14px] leading-normal font-normal sm:text-[15px] md:text-[16px]">
								{t(`labels.population`)}
							</span>
						</div>
						<Image
							src="/imgs/kz-about-map.svg"
							alt="KZ About Map"
							width={1885}
							height={1112}
							className="pointer-events-none absolute top-[-480px] left-[5%] z-0 hidden min-h-[1112px] min-w-[1885px] transform lg:block"
						/>
					</div>
				</Container>
			</section>
		</>
	)
}
