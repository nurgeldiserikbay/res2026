'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutSquare() {
	const t = useTranslations()

	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const Text1Ref = useRef<HTMLParagraphElement>(null)
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	const ImageMobileRef = useRef<HTMLImageElement>(null)
	const AboutSquareGridRef = useRef<HTMLDivElement>(null)
	const SafeTitleRef = useRef<HTMLHeadingElement>(null)
	const SafeGridRef = useRef<HTMLDivElement>(null)
	const ImageRightRef = useRef<HTMLImageElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	useAnimSlide(Text1Ref, { y: 50, delay: 0.2 })
	useAnimSlide(Text2Ref, { y: 50, delay: 0.3 })
	useAnimSlide(ImageMobileRef, { x: -50, delay: 0.4 })
	useAnimSlide(SafeTitleRef, { y: 50, delay: 0.5 })
	useAnimSlide(ImageRightRef, { x: 50, delay: 0.6 })

	useGSAP(
		() => {
			if (!AboutSquareGridRef.current) return

			const items = AboutSquareGridRef.current.querySelectorAll('div > div')
			items.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.4 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: SectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: SectionRef },
	)

	useGSAP(
		() => {
			if (!SafeGridRef.current) return

			const items = SafeGridRef.current.querySelectorAll('div > div')
			items.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.6 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: SectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: SectionRef },
	)

	const aboutSquare = [
		{
			id: 1,
			title: t('pages.useful.venue.aboutSquare.infoTitle1'),
			text: t('pages.useful.venue.aboutSquare.infoText1'),
		},
		{
			id: 2,
			title: t('pages.useful.venue.aboutSquare.infoTitle2'),
			text: t('pages.useful.venue.aboutSquare.infoText2'),
		},
	]

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
		>
			<Container className="flex flex-wrap-reverse items-start justify-between gap-x-[50px] gap-y-[30px] lg:flex-nowrap">
				<div className="w-full shrink xl:max-w-[715px]">
					<div className="mb-[30px] md:mb-[50px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[124px]">
						<h2
							ref={TitleRef}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:mb-[60px] xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.venue.aboutSquare.title')}
						</h2>

						<Image
							ref={ImageMobileRef}
							src="/imgs/usefulls/venue-banner-mob.png"
							alt="Astana Square"
							width={374}
							height={396}
							className="mb-[30px] w-full max-w-[450px] translate-x-[-50px] opacity-0 md:hidden lg:w-[671px]"
						/>

						<p
							ref={Text1Ref}
							className="mb-[30px] translate-y-[50px] text-[18px] leading-normal font-normal whitespace-pre-line text-text opacity-0 lg:mb-[60px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
						>
							{t('pages.useful.venue.aboutSquare.text1')}
						</p>
						<p
							ref={Text2Ref}
							className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0 lg:mb-[88px]"
						>
							{t('pages.useful.venue.aboutSquare.text2')}
						</p>

						<div
							ref={AboutSquareGridRef}
							className="grid grid-cols-1 items-stretch gap-x-[60px] gap-y-[30px] bg-white sm:grid-cols-2"
						>
							{aboutSquare.map((aboutSquare) => (
								<div
									key={aboutSquare.id}
									className="flex translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#ADF0BF] to-[#D4D8C300] px-[35px] pt-[26px] pb-[26px] text-center opacity-0"
								>
									<h3 className="text-[24px] leading-normal font-bold whitespace-nowrap text-secondary xs:text-[32px] lg:text-[38px]">
										{aboutSquare.title}
									</h3>
									<div className="text-[16px] leading-normal font-normal text-secondary">{aboutSquare.text}</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<h2
							ref={SafeTitleRef}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:mb-[60px] xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.venue.safeAndComfort.title')}
						</h2>

						<div
							ref={SafeGridRef}
							className="grid grid-cols-1 items-stretch gap-x-[40px] gap-y-[30px] bg-white sm:grid-cols-3"
						>
							<div className="flex translate-y-[50px] flex-col items-center justify-start text-center opacity-0">
								<Image
									src="/imgs/usefulls/safety-1.svg"
									alt="Safe and Comfort"
									width={107}
									height={107}
									className="mb-[60px]"
								/>
								<h3 className="text-[16px] leading-normal font-normal text-text lg:text-[18px] 2xl:text-[20px]">
									{t('pages.useful.venue.safeAndComfort.text1')}
								</h3>
							</div>
							<div className="flex translate-y-[50px] flex-col items-center justify-start text-center opacity-0">
								<Image
									src="/imgs/usefulls/safety-2.svg"
									alt="Safe and Comfort"
									width={107}
									height={107}
									className="mb-[60px]"
								/>
								<h3 className="text-[16px] leading-normal font-normal text-text lg:text-[18px] 2xl:text-[20px]">
									{t('pages.useful.venue.safeAndComfort.text2')}
								</h3>
							</div>
							<div className="flex translate-y-[50px] flex-col items-center justify-start text-center opacity-0">
								<Image
									src="/imgs/usefulls/safety-3.svg"
									alt="Safe and Comfort"
									width={107}
									height={107}
									className="mb-[60px]"
								/>
								<h3 className="text-[16px] leading-normal font-normal text-text lg:text-[18px] 2xl:text-[20px]">
									{t('pages.useful.venue.safeAndComfort.text3')}
								</h3>
							</div>
						</div>
					</div>
				</div>

				<Image
					ref={ImageRightRef}
					src="/imgs/usefulls/square.png"
					alt="Astana Square"
					width={1025}
					height={1085}
					className="hidden w-full shrink-4 translate-x-[50px] opacity-0 md:max-w-[37%] lg:w-[571px] lg:max-w-[30%] xl:block xl:max-w-[50%] 2xl:w-[1025px]"
				/>
			</Container>
		</section>
	)
}
