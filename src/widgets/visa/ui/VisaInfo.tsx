'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function VisaInfo() {
	const t = useTranslations()

	const Section1Ref = useRef<HTMLElement>(null)
	const Image1Ref = useRef<HTMLImageElement>(null)
	const Title1Ref = useRef<HTMLHeadingElement>(null)
	const Text1Ref = useRef<HTMLParagraphElement>(null)
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	const ListRef = useRef<HTMLUListElement>(null)
	const Text3Ref = useRef<HTMLParagraphElement>(null)
	const Title2Ref = useRef<HTMLHeadingElement>(null)
	const ProcessingTimeRef = useRef<HTMLDivElement>(null)

	const Section2Ref = useRef<HTMLElement>(null)
	const Title3Ref = useRef<HTMLHeadingElement>(null)
	const Text4Ref = useRef<HTMLParagraphElement>(null)
	const FlagsRef = useRef<HTMLDivElement>(null)

	const Section3Ref = useRef<HTMLElement>(null)
	const Image2Ref = useRef<HTMLImageElement>(null)
	const Title4Ref = useRef<HTMLHeadingElement>(null)
	const Text5Ref = useRef<HTMLParagraphElement>(null)
	const Text6Ref = useRef<HTMLParagraphElement>(null)
	const Image3Ref = useRef<HTMLImageElement>(null)
	const Title5Ref = useRef<HTMLHeadingElement>(null)
	const Text7Ref = useRef<HTMLParagraphElement>(null)
	const Text8Ref = useRef<HTMLParagraphElement>(null)

	useAnimSlide(Image1Ref, { x: -90, delay: 0.1 })
	useAnimSlide(Title1Ref, { y: 50, delay: 0.2 })
	useAnimSlide(Text1Ref, { y: 50, delay: 0.3 })
	useAnimSlide(ListRef, { y: 50, delay: 0.4 })
	useAnimSlide(Text3Ref, { y: 50, delay: 0.5 })
	useAnimSlide(Title2Ref, { y: 50, delay: 0.6 })
	useAnimSlide(ProcessingTimeRef, { y: 50, delay: 0.7 })

	useAnimSlide(Title3Ref, { y: 50, delay: 0.1 })
	useAnimSlide(Text4Ref, { y: 50, delay: 0.2 })
	useAnimSlide(FlagsRef, { x: 50, delay: 0.3 })

	useAnimSlide(Image2Ref, { x: -90, delay: 0.1 })
	useAnimSlide(Title4Ref, { y: 50, delay: 0.2 })
	useAnimSlide(Text5Ref, { y: 50, delay: 0.3 })
	useAnimSlide(Text6Ref, { y: 50, delay: 0.4 })
	useAnimSlide(Image3Ref, { x: 90, delay: 0.1 })
	useAnimSlide(Title5Ref, { y: 50, delay: 0.2 })
	useAnimSlide(Text7Ref, { y: 50, delay: 0.3 })
	useAnimSlide(Text8Ref, { y: 50, delay: 0.4 })

	return (
		<>
			<section
				ref={Section1Ref}
				className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] lg:grid-cols-2 lg:gap-x-[60px]">
					<Image
						ref={Image1Ref}
						src="/imgs/usefulls/visa-1.png"
						alt="Visa Info"
						width={870}
						height={705}
						className="block w-full translate-x-[-90px] rounded-[12px] opacity-0"
					/>

					<div>
						<h2
							ref={Title1Ref}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.visa.infoTitle')}
						</h2>
						<p
							ref={Text1Ref}
							className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0"
						>
							{t('pages.useful.visa.infoText1')}
						</p>
						<p
							ref={Text2Ref}
							className="translate-y-[50px] text-[16px] leading-normal font-medium whitespace-pre-line text-text opacity-0"
						>
							{t('pages.useful.visa.infoText2')}
						</p>
						<ul
							ref={ListRef}
							className="mb-[30px] translate-y-[50px] pl-[5px] opacity-0"
						>
							<li>1. {t('pages.useful.visa.infoText21')} </li>
							<li>2. {t('pages.useful.visa.infoText22')} </li>
							<li>3. {t('pages.useful.visa.infoText23')} </li>
						</ul>
						<p
							ref={Text3Ref}
							className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-medium whitespace-pre-line text-text opacity-0"
						>
							{t('pages.useful.visa.infoText3')}
						</p>
						<h2
							ref={Title2Ref}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:mb-[60px] xl:text-[36px] 2xl:mb-[60px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.visa.processingTimeTitle')}
						</h2>

						<div
							ref={ProcessingTimeRef}
							className="flex translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] p-[26px] text-center opacity-0"
						>
							<div className="text-[16px] leading-normal font-normal text-[#41754F]">{t('pages.useful.visa.processingTimeText1')}</div>
							<h3 className="text-[20px] leading-normal font-bold whitespace-nowrap text-[#41754F] xs:text-[24px] sm:text-[28px] md:text-[32px] xl:text-[48px]">
								{t('pages.useful.visa.processingTimeText2')}
							</h3>
							<div className="text-[16px] leading-normal font-normal text-[#41754F]">{t('pages.useful.visa.processingTimeText3')}</div>
						</div>
					</div>
				</Container>
			</section>

			<section
				ref={Section2Ref}
				className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 md:gap-x-[60px]">
					<div>
						<h2
							ref={Title3Ref}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:mb-[60px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.visa.visaFreeTitle')}
						</h2>
						<p
							ref={Text4Ref}
							className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0 md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
						>
							{t('pages.useful.visa.visaFreeText')}
						</p>
					</div>
					<div
						ref={FlagsRef}
						className="flex translate-x-[50px] items-center justify-center opacity-0"
					>
						<div className="flex flex-wrap items-center justify-center gap-[22px]">
							{new Array(8).fill(0).map((_, index) => (
								<Image
									key={index}
									src={`/imgs/flags/flag-${index + 1}.svg`}
									alt="Visa Free"
									width={89}
									height={89}
									className="block rounded-[12px]"
								/>
							))}
						</div>
					</div>
				</Container>
			</section>

			<section
				ref={Section3Ref}
				className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 md:gap-x-[60px]">
					<div>
						<Image
							ref={Image2Ref}
							src="/imgs/usefulls/visa-2.png"
							alt="Visa Info"
							width={870}
							height={344}
							className="mb-[30px] block w-full translate-x-[-90px] rounded-[12px] opacity-0 md:mb-[45px] xl:mb-[72px]"
						/>
						<h2
							ref={Title4Ref}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.visa.visaJoinTitle')}
						</h2>
						<p
							ref={Text5Ref}
							className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0 md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
						>
							{t('pages.useful.visa.visaJoinText1')}
						</p>
						<p
							ref={Text6Ref}
							className="translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0"
						>
							{t('pages.useful.visa.visaJoinText2')}
						</p>
					</div>
					<div>
						<Image
							ref={Image3Ref}
							src="/imgs/usefulls/visa-3.png"
							alt="Visa Info"
							width={870}
							height={344}
							className="mb-[30px] block w-full translate-x-[90px] rounded-[12px] opacity-0 md:mb-[45px] xl:mb-[72px]"
						/>
						<h2
							ref={Title5Ref}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.visa.eVisaTitle')}
						</h2>
						<p
							ref={Text7Ref}
							className="mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0 md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
						>
							{t('pages.useful.visa.eVisaText1')}
						</p>
						<p
							ref={Text8Ref}
							className="translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0"
						>
							{t('pages.useful.visa.eVisaText2')}
						</p>
					</div>
				</Container>
			</section>
		</>
	)
}
