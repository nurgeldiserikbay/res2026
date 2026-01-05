'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function Climate() {
	const t = useTranslations()

	const TitleRef = useRef<HTMLHeadingElement>(null)
	const TextRef = useRef<HTMLParagraphElement>(null)
	const Temp1Ref = useRef<HTMLDivElement>(null)
	const Temp2Ref = useRef<HTMLDivElement>(null)
	const ImagesRef = useRef<HTMLDivElement>(null)
	const Image1Ref = useRef<HTMLDivElement>(null)
	const Image2Ref = useRef<HTMLDivElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	useAnimSlide(TextRef, { y: 50, delay: 0.2 })
	useAnimSlide(Temp1Ref, { y: 50, delay: 0.3 })
	useAnimSlide(Temp2Ref, { y: 50, delay: 0.4 })
	useAnimSlide(Image1Ref, { x: 90, delay: 0.5 })
	useAnimSlide(Image2Ref, { x: 90, delay: 0.6 })

	return (
		<>
			<section
				id="climate"
				className="relative mt-[100px]"
			>
				<Container className="flex items-start justify-between overflow-visible">
					<div className="relative max-w-[872px] whitespace-pre-line">
						<h3
							ref={TitleRef}
							className="text-text relative z-1 mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold opacity-0"
						>
							{t('pages.region.climateText1')}
						</h3>
						<p
							ref={TextRef}
							className="relative z-1 mb-[30px] translate-y-[50px] opacity-0"
						>
							{t('pages.region.climateText2')}
						</p>
						<div className="relative z-1 mb-[30px] grid grid-cols-2 gap-[10px]">
							<div
								ref={Temp1Ref}
								className="flex h-[172px] grow translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0"
							>
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
							<div
								ref={Temp2Ref}
								className="flex h-[172px] grow translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0"
							>
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

					<div
						ref={ImagesRef}
						className="relative z-1 flex max-w-[870px] items-stretch justify-between gap-[8px]"
					>
						<div
							ref={Image1Ref}
							className="translate-x-[90px] opacity-0"
						>
							<Image
								src="/imgs/climate-1.png"
								alt="Climate 1"
								width={560}
								height={376}
							/>
						</div>
						<div
							ref={Image2Ref}
							className="translate-x-[90px] opacity-0"
						>
							<Image
								src="/imgs/climate-2.png"
								alt="Climate 2"
								width={300}
								height={376}
							/>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
