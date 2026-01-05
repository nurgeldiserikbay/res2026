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
	const PresidentInitiativeTitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(PresidentInitiativeTitleRef, { y: 50, delay: 0.15 })
	const PresidentInitiativeTextRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(PresidentInitiativeTextRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section className="bg-white pt-[100px]">
				<Container className="relative z-10 flex items-start justify-between">
					<div className="text-text max-w-[721px] text-[16px] leading-normal font-normal whitespace-pre-line">
						<p className="mb-[60px]">{t('pages.about.aboutText2')}</p>
						<p>{t('pages.about.aboutText3')}</p>
						<ul className="list-disc pb-[25px] pl-[25px]">
							<li>{t(`pages.about.aboutText31`)}</li>
							<li>{t(`pages.about.aboutText32`)}</li>
							<li>{t(`pages.about.aboutText33`)}</li>
						</ul>
						<p>{t('pages.about.aboutText34')}</p>
					</div>

					<div className="relative flex max-w-[865px] items-end justify-between gap-[5px]">
						<Image
							src="/imgs/kz-about-map.svg"
							alt="KZ About Map"
							width={1885}
							height={1112}
							className="pointer-events-none absolute top-[-268px] left-0 block min-h-[1112px] min-w-[1885px] transform"
						/>
						<div className="relative -translate-y-[60px] transform">
							<div
								ref={Image1Ref}
								className="relative translate-y-[60px] opacity-0"
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
						</div>
						<div
							ref={Image2Ref}
							className="translate-y-[50px] opacity-0"
						>
							<Image
								src="/imgs/about-page-img-2.png"
								alt="About President"
								width={342}
								height={869}
								className="block max-w-[460px] rounded-[12px]"
							/>
						</div>
					</div>
				</Container>
			</section>

			<section className="relative bg-white pt-[50px]">
				<Container className="relative z-10 flex items-start justify-between">
					<div className="-translate-y-[60px] transform">
						<Image
							src="/imgs/about-page-img-3.png"
							alt="About Summit"
							width={874}
							height={1070}
							className="block max-w-[874px] rounded-[12px]"
						/>
					</div>
					<div className="max-w-[869px]">
						<h2
							ref={PresidentInitiativeTitleRef}
							className="text-text mb-[60px] translate-y-[50px] text-[48px] leading-[1.2] font-bold opacity-0"
						>
							{t('pages.about.presidentInitiative')}
						</h2>
						<p className="mb-[60px]">{t('pages.about.aboutText4')}</p>

						<h2 className="text-text mb-[60px] text-[48px] leading-[1.2] font-bold">{t('pages.about.purpose')}</h2>
						<p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">{t('pages.about.aboutText5')}</p>
					</div>
				</Container>
			</section>
		</>
	)
}
