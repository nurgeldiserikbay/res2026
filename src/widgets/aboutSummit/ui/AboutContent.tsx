'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutContent() {
	const t = useTranslations()

	const TextRef = useRef<HTMLDivElement>(null)
	useAnimSlide(TextRef, { y: 50, delay: 0.1 })
	const QuoteRef = useRef<HTMLDivElement>(null)
	useAnimSlide(QuoteRef, { y: 50, delay: 0.2 })
	const PresidentInfoRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PresidentInfoRef, { y: 50, delay: 0.3 })
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	useAnimSlide(Text2Ref, { y: 50, delay: 0.4 })
	const Image1Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image1Ref, { y: 60, delay: 0.5 })
	const Image2Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image2Ref, { y: 50, delay: 0.6 })
	const PurposeRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PurposeRef, { y: 50, delay: 0.7 })
	const Image3Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image3Ref, { y: 50, delay: 0.8 })
	const ResText2Ref = useRef<HTMLParagraphElement>(null)
	useAnimSlide(ResText2Ref, { y: 50, delay: 0.35 })

	return (
		<>
			<section
				id="about-content"
				className="bg-white pt-[30px] sm:pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container className="relative z-10 flex flex-col items-start justify-between gap-[30px] lg:flex-row lg:gap-[40px] xl:gap-[60px]">
					<div className="w-full lg:max-w-[874px]">
						<div
							ref={TextRef}
							className="text-text mb-[40px] w-full max-w-[721px] translate-y-[50px] text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:mb-[60px] sm:text-[15px] md:mb-[80px] md:text-[16px] lg:mb-[100px] xl:mb-[122px]"
						>
							<p className="mb-[20px] text-[18px] leading-normal font-normal sm:mb-[30px] md:mb-[40px] md:text-[20px] lg:mb-[50px] lg:text-[22px] xl:mb-[60px] 2xl:text-[24px]">
								{t('pages.about.aboutText2')}
							</p>
							<p>{t('pages.about.aboutText3')}</p>
							<ul className="list-disc pb-[15px] pl-[20px] sm:pb-[20px] sm:pl-[25px]">
								<li>{t(`pages.about.aboutText31`)}</li>
								<li>{t(`pages.about.aboutText32`)}</li>
								<li>{t(`pages.about.aboutText33`)}</li>
							</ul>
							<p>{t('pages.about.aboutText34')}</p>
						</div>
					</div>

					<div className="w-full lg:max-w-[871px]">
						<div className="relative mb-[30px] min-h-[200px] w-full sm:mb-[40px] sm:min-h-[250px] md:mb-[50px] md:min-h-[279px]">
							<div className="absolute bottom-0 left-0 flex w-full max-w-[865px] flex-col items-end justify-between gap-[10px] sm:gap-[15px] lg:flex-row lg:gap-[5px]">
								<div className="relative w-full grow translate-y-0 transform lg:-translate-y-[60px]">
									<div
										ref={Image1Ref}
										className="relative translate-y-[60px] opacity-0"
									>
										<Image
											src="/imgs/about-page-img-1.png"
											alt="About President"
											width={509}
											height={662}
											className="block rounded-[12px]"
										/>
										<div className="absolute bottom-0 left-0 p-[15px] sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[60px]">
											<div className="mb-[10px] max-w-[294px] text-[11px] leading-normal font-normal text-white sm:mb-[15px] sm:text-[12px] md:mb-[20px] md:text-[14px] lg:mb-[25px] lg:text-[16px] xl:mb-[30px]">
												{t(`pages.footer.text`)}
											</div>
											<div className="max-w-[294px] text-[16px] leading-[1.2] font-bold text-white sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
												{t(`pages.footer.text1`)}
											</div>
										</div>
									</div>
								</div>
								<div
									ref={Image2Ref}
									className="w-full max-w-[342px] translate-y-[50px] opacity-0"
								>
									<Image
										src="/imgs/about-page-img-2.png"
										alt="About President"
										width={342}
										height={869}
										className="block rounded-[12px]"
									/>
								</div>
							</div>
						</div>

						<p
							ref={ResText2Ref}
							className="text-text translate-y-[50px] text-[14px] leading-normal font-normal opacity-0 sm:text-[15px] md:text-[16px]"
						>
							{t('pages.about.resText2')}
						</p>
						<p className="text-text mb-[30px] text-[14px] leading-normal font-normal sm:mb-[40px] sm:text-[15px] md:mb-[50px] md:text-[16px] lg:mb-[60px]">
							{t.rich('pages.about.resText3', {
								link: (chunks) => (
									<Link
										href="/"
										className="underline"
									>
										{chunks}
									</Link>
								),
							})}
						</p>

						<div
							ref={QuoteRef}
							className="seld-start relative w-full max-w-[859px] translate-y-[50px] rounded-[12px] bg-[#FBFFE9] p-[20px] opacity-0 sm:p-[24px] md:pt-[30px] md:pl-[40px] lg:pt-[50px] lg:pl-[70px] xl:pt-[65px] xl:pl-[86px]"
						>
							<div className="text-muted absolute top-[15px] left-[15px] hidden text-[48px] leading-none sm:top-[20px] sm:left-[20px] sm:text-[64px] md:block md:text-[80px] lg:text-[100px] xl:text-[128px]">
								&quot;
							</div>

							<div
								ref={PresidentInfoRef}
								className="relative z-1 flex flex-wrap items-start gap-[15px] sm:flex-nowrap sm:gap-[20px] md:gap-[30px]"
							>
								<Image
									src="/imgs/president-about-img.png"
									alt="About President"
									width={213}
									height={360}
									className="block w-full max-w-[150px] rounded-[12px] sm:max-w-[180px] md:max-w-[213px]"
								/>
								<div className="w-full sm:flex-1">
									<div className="font-regular relative z-1 mb-[20px] text-[12px] leading-normal whitespace-pre-line text-black sm:mb-[25px] sm:text-[13px] md:mb-[30px] md:text-[14px] lg:mb-[40px] lg:text-[15px] xl:mb-[50px]">
										{t('pages.about.presidentText')}
									</div>
									<div className="text-primary text-[11px] leading-normal sm:text-[12px] md:text-[13px] lg:text-[14px]">
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
