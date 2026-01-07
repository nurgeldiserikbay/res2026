'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function Climate({
	title,
	climateText2,
	temp1Value,
	temp2Value,
	img1,
	img2,
}: {
	title: string
	climateText2: string
	temp1Value: string
	temp2Value: string
	img1: string
	img2: string
}) {
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
				className="relative mt-[50px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]"
			>
				<Container className="flex flex-col items-start justify-between gap-[30px] overflow-visible lg:flex-row lg:gap-[40px] xl:gap-[60px]">
					<div className="relative w-full whitespace-pre-line lg:max-w-[872px]">
						<h3
							ref={TitleRef}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[24px] leading-normal font-bold opacity-0 sm:mb-[25px] sm:text-[28px] md:mb-[30px] md:text-[32px]"
						>
							{title}
						</h3>
						<p
							ref={TextRef}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[14px] leading-normal opacity-0 sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-[16px]"
						>
							{climateText2}
						</p>
						<div className="relative z-1 mb-[20px] grid grid-cols-2 gap-[10px] sm:mb-[25px] md:mb-[30px]">
							<div
								ref={Temp1Ref}
								className="flex h-[140px] translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0 sm:h-[155px] md:h-[172px]"
							>
								<span className="text-secondary flex flex-col items-center gap-[10px] text-[40px] leading-normal font-bold sm:flex-row sm:gap-[20px] sm:text-[48px] md:gap-[30px] md:text-[64px]">
									<Image
										src="/imgs/snow.svg"
										alt="Snow"
										width={51}
										height={51}
										className="h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] md:h-[51px] md:w-[51px]"
									/>
									<span>{temp1Value}</span>
								</span>
								<span className="text-secondary text-[12px] leading-normal font-normal sm:text-[14px] md:text-[16px]">
									{t(`labels.winters`)}
								</span>
							</div>
							<div
								ref={Temp2Ref}
								className="flex h-[140px] translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C30000] text-center opacity-0 sm:h-[155px] md:h-[172px]"
							>
								<span className="text-secondary flex flex-col items-center gap-[10px] text-[40px] leading-normal font-bold sm:flex-row sm:gap-[20px] sm:text-[48px] md:gap-[30px] md:text-[64px]">
									<Image
										src="/imgs/sun.svg"
										alt="Sun"
										width={51}
										height={51}
										className="h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] md:h-[51px] md:w-[51px]"
									/>
									<span>{temp2Value}</span>
								</span>
								<span className="text-secondary text-[12px] leading-normal font-normal sm:text-[14px] md:text-[16px]">
									{t(`labels.summers`)}
								</span>
							</div>
						</div>
					</div>

					<div
						ref={ImagesRef}
						className="relative z-1 flex w-full flex-col items-stretch justify-between gap-[8px] lg:max-w-[870px] lg:flex-row"
					>
						<div
							ref={Image1Ref}
							className="translate-x-[90px] opacity-0 lg:translate-x-[90px]"
						>
							<Image
								src={img1}
								alt="Climate 1"
								width={560}
								height={376}
								className="h-auto w-full"
							/>
						</div>
						<div
							ref={Image2Ref}
							className="translate-x-[90px] opacity-0 lg:translate-x-[90px]"
						>
							<Image
								src={img2}
								alt="Climate 2"
								width={300}
								height={376}
								className="h-auto w-full"
							/>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
