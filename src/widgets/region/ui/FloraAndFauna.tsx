'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function FloraAndFauna() {
	const t = useTranslations()

	const ImageRef = useRef<HTMLDivElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const TextRef = useRef<HTMLParagraphElement>(null)

	useAnimSlide(ImageRef, { x: -90, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(TextRef, { y: 50, delay: 0.3 })

	return (
		<>
			<section
				id="flora-and-fauna"
				className="relative mt-[50px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]"
			>
				<Container className="flex flex-col items-start justify-between gap-[30px] overflow-visible lg:flex-row lg:gap-[40px] xl:gap-[60px]">
					<div
						ref={ImageRef}
						className="relative w-full translate-x-[-90px] whitespace-pre-line opacity-0 lg:max-w-[872px]"
					>
						<Image
							src="/imgs/flora-1.png"
							alt="Flora 1"
							width={870}
							height={378}
							className="block h-auto w-full"
						/>
					</div>

					<div className="relative w-full whitespace-pre-line lg:max-w-[860px] lg:pt-[90px]">
						<h3
							ref={TitleRef}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[24px] leading-normal font-bold opacity-0 sm:mb-[25px] sm:text-[28px] md:mb-[30px] md:text-[32px]"
						>
							{t('pages.region.floraAndFaunaText1')}
						</h3>
						<p
							ref={TextRef}
							className="text-text relative z-1 mb-[20px] translate-y-[50px] text-[14px] leading-normal opacity-0 sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-[16px]"
						>
							{t('pages.region.floraAndFaunaText2')}
						</p>
					</div>
				</Container>
			</section>
		</>
	)
}
