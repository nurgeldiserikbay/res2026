'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'
import { Container } from '@/shared/ui/container/container'

export function AboutContent() {
	const t = useTranslations()
	const locale = useLocale()

	const TextRef = useRef<HTMLDivElement>(null)
	useAnimSlide(TextRef, { y: 50, delay: 0.1 })
	const QuoteRef = useRef<HTMLDivElement>(null)
	useAnimSlide(QuoteRef, { y: 50, delay: 0.2 })
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
	const ResText3Ref = useRef<HTMLParagraphElement>(null)
	useAnimSlide(ResText3Ref, { y: 50, delay: 0.45 })
	const PresidentImgRef = useRef<HTMLImageElement>(null)
	useAnimSlide(PresidentImgRef, { x: -50, delay: 0.35 })
	const Image1TextRef = useRef<HTMLDivElement>(null)
	useAnimSlide(Image1TextRef, { y: 30, delay: 0.65 })

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
							className="text-text w-full max-w-[721px] translate-y-[50px] text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:text-[15px] md:text-[16px]"
						>
							<p className="mb-[20px] text-[18px] leading-normal font-normal sm:mb-[30px] md:mb-[40px] md:text-justify md:text-[20px] lg:mb-[50px] lg:text-[22px] xl:mb-[60px] 2xl:text-[24px]">
								{t('pages.about.aboutText2')}
							</p>
							<p>{t('pages.about.aboutText3')}</p>
							<ul className="list-disc pb-[15px] pl-[20px] sm:pb-[20px] sm:pl-[25px] md:text-justify">
								<li>{t(`pages.about.aboutText31`)}</li>
								<li>{t(`pages.about.aboutText32`)}</li>
								<li>{t(`pages.about.aboutText33`)}</li>
							</ul>
							<p className="md:text-justify">{t('pages.about.aboutText34')}</p>
						</div>
					</div>

					<div className="w-full lg:max-w-[871px]">
						<div className="relative mb-[30px] min-h-[200px] w-full sm:mb-[40px] sm:min-h-[250px] md:mb-[50px] md:min-h-[279px]">
							<div className="relative bottom-0 left-0 flex w-full max-w-[865px] flex-col items-end justify-between gap-[10px] sm:gap-[15px] lg:absolute lg:flex-row lg:gap-[5px]">
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
										<div
											ref={Image1TextRef}
											className="absolute bottom-0 left-0 translate-y-[30px] p-[15px] opacity-0 sm:p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px] 2xl:p-[60px]"
										>
											<div className="mb-[10px] text-[11px] leading-normal font-normal text-white sm:mb-[15px] sm:text-[12px] md:mb-[20px] md:text-[14px] lg:mb-[25px] lg:text-[16px] xl:mb-[30px]">
												{t(`pages.footer.text`)}
											</div>
											<div className="max-w-[294px] text-[16px] leading-[1.2] font-bold text-white sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]">
												<div className="whitespace-nowrap">{t(`pages.footer.text2`)}</div>
												<div>{t(`pages.footer.text3`)}</div>
											</div>
										</div>
									</div>
								</div>
								<div
									ref={Image2Ref}
									className="3xl:max-w-[342px] hidden w-full max-w-[250px] translate-y-[50px] opacity-0 xl:block"
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
							className="text-text mb-[30px] translate-y-[50px] text-[14px] leading-normal font-normal whitespace-pre-line opacity-0 sm:text-[15px] md:text-justify md:text-[16px]"
						>
							{t('pages.about.resText2')}
						</p>
						<p
							ref={ResText3Ref}
							className="text-text mb-[30px] translate-y-[50px] text-justify text-[14px] leading-normal font-normal opacity-0 sm:mb-[40px] sm:text-[15px] md:mb-[50px] md:text-[16px] lg:mb-[60px]"
						>
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

						<Image
							src="/imgs/about-summit-line.png"
							alt="About President"
							width={871}
							height={163}
							className="block rounded-[12px]"
						/>
					</div>
				</Container>
			</section>

			<section
				id="about-content-read"
				className="bg-white pt-[30px] md:pt-[40px] lg:pt-[50px] 2xl:pt-[60px]"
			>
				<Container className="grid grid-cols-1 gap-x-[60px] gap-y-[30px] md:grid-cols-2">
					<div className="flex w-full flex-col items-start justify-between rounded-[17px] bg-[url('/imgs/docs-bg.png')] bg-cover bg-center px-[20px] pt-[58px] pb-[28px] md:px-[36px]">
						<div>
							<h3 className="mb-[10px] text-[24px] leading-[1.3] font-bold text-white md:text-[40px]">{t('pages.about.file1Title')}</h3>
							<p className="mb-[55px] text-[16px] leading-[1.3] font-normal text-white md:text-[24px]">{t('pages.about.file1Text')}</p>
						</div>

						<div className="flex items-start justify-start gap-[10px]">
							<Link
								href={`/docs/concept-${locale}.pdf`}
								className="block"
								target="_blank"
							>
								<ButtonTree className="w-full">
									<span>{t('commands.read')}</span>
								</ButtonTree>
							</Link>
							<Link
								href={`/docs/concept-${locale}.pdf`}
								className="block"
								download
							>
								<ButtonTree className="w-full">
									<span>{t('commands.download')}</span>
								</ButtonTree>
							</Link>
						</div>
					</div>
					<div className="flex w-full flex-col items-start justify-between rounded-[17px] bg-[url('/imgs/docs-bg.png')] bg-cover bg-center px-[20px] pt-[58px] pb-[28px] md:px-[36px]">
						<div>
							<h3 className="mb-[10px] text-[24px] leading-[1.3] font-bold text-white md:text-[40px]">{t('pages.about.file2Title')}</h3>
							<p className="mb-[55px] text-[16px] leading-[1.3] font-normal text-white md:text-[24px]">{t('pages.about.file2Text')}</p>
						</div>

						<div className="flex items-start justify-start gap-[10px]">
							<Link
								href={`/docs/brochure-${locale}.pdf`}
								className="block"
								target="_blank"
							>
								<ButtonTree className="w-full">
									<span>{t('commands.read')}</span>
								</ButtonTree>
							</Link>
							<Link
								href={`/docs/brochure-${locale}.pdf`}
								className="block"
								download
							>
								<ButtonTree className="w-full">
									<span>{t('commands.download')}</span>
								</ButtonTree>
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
