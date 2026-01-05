'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'
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
				<Container className="relative z-10 flex items-start justify-between gap-[58px]">
					<div className="w-full max-w-[865px] grow -translate-y-[60px]">
						<Image
							src="/imgs/about-page-img-3.png"
							alt="About Summit"
							width={874}
							height={1070}
							className="block w-full max-w-[874px] rounded-[12px]"
						/>
					</div>
					<div className="w-full max-w-[859px] grow">
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

			<section className="bg-white pt-[68px]">
				<Container className="relative z-10 flex items-stretch justify-between gap-[58px]">
					<div
						ref={AboutConnectionBannerRef}
						data-animated-banner
						className="relative w-full max-w-[865px] rounded-[17px] px-[36px] pt-[108px] pr-[28px] pb-[107px] md:pr-[36px] md:pb-[107px]"
					>
						<div className="relative z-10 max-w-[456px]">
							<p className="font-regular mb-[55px] text-left text-[24px] leading-[1.3] text-white">{t(`pages.connectionBanner.text`)}</p>
							<div className=" ">
								<ButtonTree
									className={[
										'w-full before:bg-[url("/imgs/btn-mask-tree-yellow.svg")]! before:bg-blend-normal! md:w-auto md:before:bg-[url("/imgs/btn-mask-tree.svg")]! md:before:bg-blend-overlay!',
									].join(' ')}
								>
									{t('commands.join')}
								</ButtonTree>
							</div>
						</div>
						<div className="absolute right-0 bottom-0">
							<Image
								src="/imgs/about-page-img-4.png"
								alt="Connection"
								width={484}
								height={456}
								className="block h-full w-auto"
							/>
						</div>
					</div>

					<div className="seld-start w-fullmax-w-[859px] relative rounded-[12px] bg-[#FBFFE9] p-[20px] pr-[26px] md:pt-[65px] md:pl-[86px]">
						<div className="text-muted absolute top-[20px] left-[20px] hidden text-[128px] leading-none md:block">&quot;</div>
						<div className="font-regular relative z-1 mb-[50px] text-[15px] leading-normal whitespace-pre-line text-black">
							{t('pages.about.presidentText')}
						</div>

						<div className="relative z-1 flex flex-wrap items-center gap-[30px] sm:flex-nowrap">
							<Image
								src="/imgs/president.png"
								alt="About President"
								width={122}
								height={122}
								className="block max-w-[122px] rounded-full"
							/>
							<div className="text-primary max-w-[311px] text-[14px] leading-normal">{t('pages.about.presidentPosition')}</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
