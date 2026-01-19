'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { IconQuot } from '@/shared/icons/IconQuot'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'

export function PresidentAboutExb() {
	const t = useTranslations()

	const PresidentAboutExbRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PresidentAboutExbRef, { y: 90, delay: 0.35 })
	const PresidentAboutExbImgRef = useRef<HTMLImageElement>(null)
	useAnimSlide(PresidentAboutExbImgRef, { y: 90, delay: 0.35 })

	return (
		<div
			ref={PresidentAboutExbRef}
			className="seld-start relative mb-[30px] translate-y-90 rounded-[12px] bg-[#FBFFE9] p-[20px] opacity-0 sm:mb-[40px] sm:p-[26px] md:mb-[54px] 2xl:pt-[65px] 2xl:pl-[97px]"
		>
			<div className="absolute top-[32px] left-[32px] hidden 2xl:block">
				<IconQuot color="#A1BB94" />
			</div>

			<div className="relative z-1 flex flex-wrap items-start justify-center gap-[20px] sm:gap-[30px] md:gap-[50px] xl:flex-nowrap">
				<Image
					ref={PresidentAboutExbImgRef}
					src="/imgs/president-img-mob.png"
					alt="About President"
					width={328}
					height={240}
					className="block w-full lg:hidden"
				/>
				<Image
					ref={PresidentAboutExbImgRef}
					src="/imgs/president-img.jpg"
					alt="About President"
					width={213}
					height={309}
					className="hidden w-full max-w-[150px] -translate-x-[50px] rounded-[12px] opacity-0 sm:max-w-[180px] md:max-w-[213px] lg:block"
				/>
				<div className="w-full max-w-[631px]">
					<div className="font-regular relative z-1 mb-[20px] text-justify text-[14px] leading-normal whitespace-pre-line text-black sm:mb-[30px] sm:text-[16px]">
						{t('pages.exhibition.presidentText')}
					</div>
					<div className="text-primary xs:text-[18px] mb-[5px] text-[16px] leading-normal font-bold md:text-[20px] lg:text-[22px] xl:text-[24px]">
						{t(`pages.exhibition.presidentName`)}
					</div>
					<div className="text-primary mb-[5px] text-[16px] leading-normal font-thin sm:text-[14px]">
						{t('pages.exhibition.presidentPosition')}
					</div>
					<div className="text-primary text-justify text-[12px] leading-normal sm:text-[14px]">
						{t('pages.exhibition.presidentTextFrom')}
					</div>
				</div>
			</div>
		</div>
	)
}
