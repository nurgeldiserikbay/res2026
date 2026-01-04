'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'
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
	useAnimSlide(Image1Ref, { y: 50, delay: 0.5 })
	const Image2Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image2Ref, { y: 50, delay: 0.6 })
	const PurposeRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PurposeRef, { y: 50, delay: 0.7 })
	const Image3Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(Image3Ref, { y: 50, delay: 0.8 })

	return (
		<section className="relative bg-white pt-[100px]">
			<Container>
				<div className="flex items-start justify-between gap-[30px]">
					<div
						ref={TextRef}
						className="text-text relative mb-[60px] max-w-[858px] grow translate-y-[50px] text-[24px] leading-normal opacity-0"
					>
						{t('pages.about.text2')}

						<Image
							src="/imgs/kz-about-map.svg"
							alt="KZ About Map"
							width={1885}
							height={1112}
							className="pointer-events-none absolute top-0 left-[110%] block min-h-[1112px] min-w-[1885px] -translate-y-[268px] transform"
						/>
					</div>
				</div>

				<div className="relative z-1 mb-[15px] flex items-start justify-between gap-[30px]">
					<div className="max-w-[721px]">
						<h2 className="text-text mb-[60px] text-[48px] leading-[1.2] font-bold">{t('pages.about.presidentInitiative')}</h2>

						<p className="text-text mb-[60px] text-[16px] leading-normal font-normal whitespace-pre-line">
							{t('pages.about.presidentInitiativeText')}
						</p>

						<div
							ref={QuoteRef}
							className="relative translate-y-[50px] pt-[39px] pl-[71px] opacity-0"
						>
							<div className="text-muted absolute top-0 left-0 text-[128px] leading-none">”</div>
							<div className="font-regular mb-[50px] max-w-[493px] text-[16px] leading-normal whitespace-pre-line text-black">
								{t('pages.about.presidentText')}
							</div>

							<div
								ref={PresidentInfoRef}
								className="flex translate-y-[50px] items-center gap-[30px] opacity-0"
							>
								<Image
									src="/imgs/president.png"
									alt="About President"
									width={102}
									height={102}
									className="block max-w-[102px] rounded-full"
								/>
								<div className="text-primary max-w-[290px] text-[14px] leading-normal">{t('pages.about.presidentPosition')}</div>
							</div>
						</div>
					</div>

					<div className="flex max-w-[974px] -translate-y-[230px] transform items-end justify-between gap-[5px]">
						<div
							ref={Image1Ref}
							className="relative translate-y-[50px] opacity-0"
						>
							<Image
								src="/imgs/about-page-img-1.png"
								alt="About President"
								width={509}
								height={662}
								className="block max-w-[509px] rounded-[12px]"
							/>
							<div className="absolute bottom-0 left-0 p-[60px]">
								<div className="mb-[30px] max-w-[294px] text-[16px] leading-normal font-normal text-white">{t(`pages.footer.text`)}</div>
								<div className="max-w-[294px] text-[32px] leading-[1.2] font-bold text-white">{t(`pages.footer.text1`)}</div>
							</div>
						</div>
						<div
							ref={Image2Ref}
							className="translate-y-[50px] opacity-0"
						>
							<Image
								src="/imgs/about-page-img-2.png"
								alt="About President"
								width={460}
								height={808}
								className="block max-w-[460px] rounded-[12px]"
							/>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div
						ref={PurposeRef}
						className="max-w-[721px] translate-y-[50px] opacity-0"
					>
						<h2 className="text-text mb-[60px] text-[48px] leading-[1.2] font-bold">{t('pages.about.purpose')}</h2>
						<p className="text-text text-[16px] leading-normal font-normal">{t('pages.about.text3')}</p>
					</div>

					<div
						ref={Image3Ref}
						className="relative translate-y-[50px] opacity-0"
					>
						<div className="relative -translate-y-[230px] transform">
							<Image
								src="/imgs/about-img-3.png"
								alt="About President"
								width={865}
								height={414}
								className="block rounded-[12px]"
							/>

							<div className="absolute top-0 left-0 flex h-full w-full flex-col items-start justify-center gap-[55px] p-[36px]">
								<p className="font-regular max-w-[456px] text-left text-[24px] leading-[1.3] text-white">
									{t('pages.connectionBanner.text')}
								</p>

								<ButtonTree>{t('commands.join')}</ButtonTree>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
