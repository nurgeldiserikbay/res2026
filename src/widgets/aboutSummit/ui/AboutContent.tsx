'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutContent() {
	const t = useTranslations()

	const AboutConnectionBannerRef = useRef<HTMLDivElement>(null)
	useAnimBg(AboutConnectionBannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/connection-banner.png',
	})
	const TextRef = useRef<HTMLDivElement>(null)
	useAnimSlide(TextRef, { y: 50, delay: 0.1 })
	const QuoteRef = useRef<HTMLDivElement>(null)
	useAnimSlide(QuoteRef, { y: 50, delay: 0.2 })
	const PresidentInfoRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PresidentInfoRef, { y: 50, delay: 0.3 })
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	useAnimSlide(Text2Ref, { y: 50, delay: 0.4 })
	const Image1Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image1Ref, { y: 50, delay: 0.5 })
	const Image2Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image2Ref, { y: 50, delay: 0.6 })
	const PurposeRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PurposeRef, { y: 50, delay: 0.7 })
	const Image3Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image3Ref, { y: 50, delay: 0.8 })
	const PresidentInitiativeTitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(PresidentInitiativeTitleRef, { y: 50, delay: 0.15 })
	const PresidentInitiativeTextRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(PresidentInitiativeTextRef, { y: 50, delay: 0.2 })
	const ConnectionTextRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(ConnectionTextRef, { y: 50, delay: 0.1 })
	const ConnectionImageRef = useRef<HTMLDivElement>(null)
	useAnimSlide(ConnectionImageRef, { x: -200, y: 0, delay: 0.2 })
	const ConnectionButtonRef = useRef<HTMLDivElement>(null)
	useAnimSlide(ConnectionButtonRef, { y: 50, delay: 0.3 })

	return (
		<>
			<section className="bg-white pt-[30px] sm:pt-[50px] md:pt-[70px] lg:pt-[100px]">
				<Container className="relative z-10 flex flex-col items-start justify-between gap-[30px] lg:flex-row lg:gap-[40px] xl:gap-[60px]">
					<div className="w-full max-w-[874px]">
						<div
							ref={TextRef}
							className="text-text mb-[122px] w-full max-w-[721px] translate-y-[50px] text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:text-[15px] md:text-[16px]"
						>
							<p className="mb-[30px] sm:mb-[40px] md:mb-[50px] lg:mb-[60px]">{t('pages.about.aboutText2')}</p>
							<p>{t('pages.about.aboutText3')}</p>
							<ul className="list-disc pb-[20px] pl-[20px] sm:pb-[25px] sm:pl-[25px]">
								<li>{t(`pages.about.aboutText31`)}</li>
								<li>{t(`pages.about.aboutText32`)}</li>
								<li>{t(`pages.about.aboutText33`)}</li>
							</ul>
							<p>{t('pages.about.aboutText34')}</p>
						</div>

						<div
							ref={Image3Ref}
							className="relative translate-y-[50px] opacity-0"
						>
							<Image
								src="/imgs/about-page-img-3.png"
								alt="About Summit"
								width={874}
								height={1070}
								className="block w-full max-w-[874px] rounded-[12px]"
							/>
						</div>
					</div>

					<div className="w-full max-w-[871px]">
						<div className="relative mb-[50px] h-[279px] w-full">
							<div className="absolute bottom-0 left-0 flex w-full max-w-[865px] flex-col items-end justify-between gap-[10px] lg:flex-row lg:gap-[5px]">
								<div className="relative w-full translate-y-0 transform lg:-translate-y-[60px]">
									<div
										ref={Image1Ref}
										className="relative translate-y-[60px] opacity-0"
									>
										<Image
											src="/imgs/about-page-img-1.png"
											alt="About President"
											width={509}
											height={662}
											className="block w-full max-w-[509px] rounded-[12px]"
										/>
										<div className="absolute bottom-0 left-0 p-[20px] sm:p-[30px] md:p-[40px] lg:p-[60px]">
											<div className="mb-[15px] max-w-[294px] text-[12px] leading-normal font-normal text-white sm:mb-[20px] sm:text-[14px] md:mb-[25px] md:text-[16px] lg:mb-[30px]">
												{t(`pages.footer.text`)}
											</div>
											<div className="max-w-[294px] text-[20px] leading-[1.2] font-bold text-white sm:text-[24px] md:text-[28px] lg:text-[32px]">
												{t(`pages.footer.text1`)}
											</div>
										</div>
									</div>
								</div>
								<div
									ref={Image2Ref}
									className="translate-y-[50px] opacity-0 lg:w-auto"
								>
									<Image
										src="/imgs/about-page-img-2.png"
										alt="About President"
										width={342}
										height={869}
										className="block max-w-[342px] rounded-[12px]"
									/>
								</div>
							</div>
						</div>

						<p className="mb-[60px]">{t('pages.about.resText2')}</p>

						<h2
							ref={PurposeRef}
							className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-[1.2] font-bold opacity-0 sm:mb-[40px] sm:text-[28px] md:mb-[50px] md:text-[32px] lg:mb-[60px] lg:text-[40px] xl:text-[48px]"
						>
							{t('pages.about.purpose')}
						</h2>
						<p
							ref={Text2Ref}
							className="text-text mb-[60px] translate-y-[50px] text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:text-[15px] md:text-[16px]"
						>
							{t('pages.about.aboutText5')}
						</p>

						<div
							ref={QuoteRef}
							className="seld-start relative w-full max-w-[859px] translate-y-[50px] rounded-[12px] bg-[#FBFFE9] p-[20px] opacity-0 sm:p-[24px] md:pt-[40px] md:pl-[50px] lg:pt-[65px] lg:pl-[86px]"
						>
							<div className="text-muted absolute top-[20px] left-[20px] hidden text-[64px] leading-none sm:text-[80px] md:block md:text-[100px] lg:text-[128px]">
								”
							</div>

							<div
								ref={PresidentInfoRef}
								className="relative z-1 flex flex-wrap items-start gap-[20px] sm:flex-nowrap sm:gap-[30px]"
							>
								<Image
									src="/imgs/president-about-img.png"
									alt="About President"
									width={213}
									height={360}
									className="block max-w-[213px]"
								/>
								<div>
									<div className="font-regular relative z-1 mb-[30px] text-[13px] leading-normal whitespace-pre-line text-black sm:mb-[40px] sm:text-[14px] md:mb-[50px] md:text-[15px]">
										{t('pages.about.presidentText')}
									</div>
									<div className="text-primary text-[12px] leading-normal sm:text-[13px] md:text-[14px]">
										{t('pages.about.presidentPosition')}
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
