'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { Container } from '@/shared/ui/container/container'

export function EventPlace() {
	const t = useTranslations()

	const TitleRef = useRef<HTMLHeadingElement>(null)
	const Text1Ref = useRef<HTMLParagraphElement>(null)
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	const TimesRef = useRef<HTMLDivElement>(null)
	const MapRef = useRef<HTMLDivElement>(null)
	const ImageRef = useRef<HTMLImageElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	useAnimSlide(Text1Ref, { y: 50, delay: 0.2 })
	useAnimSlide(Text2Ref, { y: 50, delay: 0.25 })
	useAnimSlide(TimesRef, { y: 50, delay: 0.3 })
	useAnimSlide(MapRef, { y: 50, delay: 0.35 })
	useAnimSlide(ImageRef, { x: 50, delay: 0.4 })

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-wrap items-start justify-center gap-x-[60px] gap-y-[30px] lg:items-start xl:flex-nowrap">
				<div className="w-full xl:w-auto">
					<h2
						ref={TitleRef}
						className="mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
					>
						{t('pages.exhibition.eventPlace.title')}
					</h2>
					<p
						ref={Text1Ref}
						className="mb-[15px] max-w-[662px] translate-y-[50px] text-justify text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0 md:text-[18px] 2xl:mb-[30px] 2xl:text-[24px]"
					>
						{t('pages.exhibition.eventPlace.text')}
					</p>
					<p
						ref={Text2Ref}
						className="mb-[30px] max-w-[662px] translate-y-[50px] text-[16px] leading-normal font-bold whitespace-pre-line text-text opacity-0"
					>
						{t('pages.exhibition.eventPlace.text2')}
					</p>

					<div
						ref={TimesRef}
						className="mb-[30px] grid translate-y-[50px] grid-cols-1 gap-x-[30px] gap-y-[10px] opacity-0 md:grid-cols-3 2xl:gap-x-[70px]"
					>
						<div className="flex flex-col items-start justify-start gap-x-[10px] xs:flex-row sm:items-center md:block">
							<div className="mb-[5px] text-[20px] leading-normal font-normal text-text xl:text-[16px] 2xl:text-[20px]">
								{t('pages.exhibition.eventPlace.time1Title')}
							</div>
							<div className="text-[24px] leading-normal font-bold text-[#41754F] xl:text-[20px] 2xl:text-[24px]">
								{t('pages.exhibition.eventPlace.time1Text')}
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-x-[10px] xs:flex-row sm:items-center md:block">
							<div className="mb-[5px] text-[20px] leading-normal font-normal text-text xl:text-[16px] 2xl:text-[20px]">
								{t('pages.exhibition.eventPlace.time2Title')}
							</div>
							<div className="text-[24px] leading-normal font-bold text-[#41754F] xl:text-[20px] 2xl:text-[24px]">
								{t('pages.exhibition.eventPlace.time2Text')}
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-x-[10px] xs:flex-row sm:items-center md:block">
							<div className="mb-[5px] text-[20px] leading-normal font-normal text-text xl:text-[16px] 2xl:text-[20px]">
								{t('pages.exhibition.eventPlace.time3Title')}
							</div>
							<div className="text-[24px] leading-normal font-bold text-[#41754F] xl:text-[20px] 2xl:text-[24px]">
								{t('pages.exhibition.eventPlace.time3Text')}
							</div>
						</div>
					</div>
					<div
						ref={MapRef}
						className="translate-y-[50px] opacity-0"
					>
						<Link
							href="https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%92%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9+%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%C2%ABEXPO%C2%BB/@51.0927775,71.4195394,17z/data=!3m1!4b1!4m6!3m5!1s0x42458550b8aa7921:0x120438758bcbfd9a!8m2!3d51.0927742!4d71.4221143!16s%2Fg%2F11j8tllpld?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
							target="_blank"
							className="relative block min-h-[182px] xl:max-w-[717px]"
						>
							<Image
								src="/imgs/exhibition/event-place-1.png"
								alt="Event Place Map"
								width={715}
								height={182}
								className="block min-h-[182px] max-w-full min-w-full rounded-[12px] object-cover"
							/>
							<ButtonDefault className="absolute! top-1/2 left-1/2 z-5 -translate-x-1/2 -translate-y-1/2">
								{t('commands.lookAtMap')}
							</ButtonDefault>
						</Link>
					</div>
				</div>
				<Image
					ref={ImageRef}
					src="/imgs/exhibition/event-place-2.svg"
					alt="Event Place Map"
					width={1025}
					height={579}
					className="w-full translate-x-[50px] rounded-[12px] opacity-0 xl:max-w-[640px] 3xl:max-w-[1025px]"
				/>
			</Container>
		</section>
	)
}
