import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { Container } from '@/shared/ui/container/container'

export function AboutSummit() {
	const t = useTranslations()

	const AboutSummitRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitRef, { x: -90, y: 0, delay: 0.1 })
	const AboutSummitTitleRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitTitleRef, { x: 90, y: 0, delay: 0.1 })
	const AboutSummitText1Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitText1Ref, { y: 90, delay: 0.2 })
	const AboutSummitText2Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitText2Ref, { y: 90, delay: 0.3 })
	const AboutSummitButtonRef = useRef<HTMLButtonElement | null>(null)
	useAnimSlide(AboutSummitButtonRef, { y: 90, delay: 0.4 })
	const AboutSummitMapRef = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitMapRef, { x: 90, y: 0, delay: 0.2 })
	const AboutSummitImg1Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg1Ref, { y: 90, delay: 0.1 })
	const AboutSummitImg2Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg2Ref, { y: 90, delay: 0.2 })
	const AboutSummitImg3Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg3Ref, { y: 90, delay: 0.3 })
	const AboutSummitImg4Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg4Ref, { y: 90, delay: 0.4 })
	const AboutSummitPresidentInitiativeRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitPresidentInitiativeRef, { y: 90, delay: 0.5 })
	const AboutSummitPresidentTextRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(AboutSummitPresidentTextRef, { y: 90, delay: 0.6 })
	const AboutSummitQuoteRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitQuoteRef, { y: 90, delay: 0.35 })
	const AboutSummitPurposeRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitPurposeRef, { y: 90, delay: 0.45 })

	return (
		<section className="3xl:py-[100px] bg-white py-[50px] md:py-[60px] 2xl:py-[80px]">
			<Container className="flex flex-wrap-reverse items-start justify-between gap-[30px] xl:flex-nowrap">
				<div className="grow xl:max-w-[721px]">
					<div
						ref={AboutSummitRef}
						className="font-regular text-text mb-[62px] hidden -translate-x-90 text-[24px] leading-[1.2] opacity-0 xl:block"
					>
						{t(`titles.aboutSummit`)}
					</div>

					<div className="xs:flex-row mb-[22px] flex max-w-[655px] flex-col items-start justify-between gap-[5px]">
						<Image
							ref={AboutSummitImg1Ref}
							src="/imgs/about-img-1.png"
							alt="About Summit"
							width={351}
							height={377}
							className="ax-w-full block translate-y-90 rounded-[12px] opacity-0 sm:max-w-[351px]"
						/>
						<div className="flex flex-col items-center justify-between">
							<Image
								ref={AboutSummitImg2Ref}
								src="/imgs/about-img-2.png"
								alt="About Summit 2"
								width={299}
								height={181}
								className="mb-[24px] block max-w-full translate-y-[120px] rounded-[12px] opacity-0 sm:max-w-[299px]"
							/>
							<div
								ref={AboutSummitImg3Ref}
								className="font-regular text-secondary mb-[30px] max-w-[197px] translate-y-90 text-left text-[16px] leading-[1.2] opacity-0"
							>
								<div className="mb-[15px] max-w-[170px]">\\{t('titles.strategicPartner')}</div>
								<Image
									src="/imgs/un-color.svg"
									width={182}
									height={55}
									alt="UN Ecological"
									className="block"
								/>
							</div>
							<div
								ref={AboutSummitImg4Ref}
								className="font-regular text-secondary max-w-[197px] translate-y-90 text-left text-[16px] leading-[1.2] opacity-0"
							>
								<div className="mb-[15px] max-w-[170px]">\\{t('titles.strategicMediaPartner')}</div>
								<Image
									src="/imgs/cnn-color.svg"
									width={102}
									height={49}
									alt="CNN"
									className="block"
								/>
							</div>
						</div>
					</div>

					<div className="mb-[60px]">
						<h3
							ref={AboutSummitPresidentInitiativeRef}
							className="text-text mb-[10px] translate-y-90 text-[24px] leading-normal font-bold opacity-0"
						>
							{t(`pages.about.presidentInitiative`)}
						</h3>
						<p
							ref={AboutSummitPresidentTextRef}
							className="text-text mb-[55px] translate-y-90 text-[16px] leading-normal font-normal whitespace-pre-line opacity-0"
						>
							{t(`pages.about.presidentInitiativeText`)}
						</p>
						<ButtonDefault
							ref={AboutSummitButtonRef as React.RefObject<HTMLButtonElement>}
							className="translate-y-90 opacity-0"
						>
							{t('pages.about.moreAboutSummit')}
						</ButtonDefault>
					</div>
				</div>

				<div className="flex grow flex-col justify-start xl:max-w-[1025px]">
					<div className="font-regular text-text mb-[30px] block text-[24px] leading-[1.2] xl:hidden">{t(`titles.aboutSummit`)}</div>
					<div
						ref={AboutSummitTitleRef}
						className="font-regular 3xl:text-[48px] mb-[31px] translate-x-90 self-end text-[24px] leading-[1.2] opacity-0 md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
					>
						{t.rich('pages.aboutSummit.title', {
							primary: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
							secondary: (chunks) => <span className="text-text font-bold">{chunks}</span>,
						})}
					</div>
					<p
						ref={AboutSummitText1Ref}
						className="font-regular text-text mb-[60px] translate-y-90 text-left text-[16px] leading-normal opacity-0"
					>
						{t(`pages.aboutSummit.text1`)}
					</p>

					<div
						ref={AboutSummitQuoteRef}
						className="seld-start relative mb-[54px] translate-y-90 rounded-[12px] bg-[#FBFFE9] p-[26px] opacity-0 md:pt-[65px] md:pl-[97px]"
					>
						<div className="text-muted absolute top-[26px] left-[26px] hidden text-[128px] leading-none md:block">”</div>

						<div className="relative z-1 flex flex-wrap items-center gap-[50px] sm:flex-nowrap">
							<Image
								src="/imgs/president.png"
								alt="About President"
								width={213}
								height={309}
								className="block max-w-[213px]"
							/>
							<div className="max-w-[631px]">
								<div className="font-regular relative z-1 mb-[30px] text-[16px] leading-normal whitespace-pre-line text-black">
									{t('pages.about.presidentText')}
								</div>
								<div className="text-primary max-w-[312px] text-[14px] leading-normal">{t('pages.about.presidentPosition')}</div>
							</div>
						</div>
						<Image
							ref={AboutSummitMapRef}
							className="absolute top-[65%] left-[65%] block min-h-[435px] min-w-[1014px] translate-x-90 opacity-0"
							src="/imgs/kz-map.svg"
							alt="KZ Map"
							width={1014}
							height={435}
						/>
					</div>

					<div
						ref={AboutSummitPurposeRef}
						className="translate-y-90 opacity-0"
					>
						<h3 className="text-text mb-[10px] text-[24px] leading-normal font-bold">{t(`pages.about.purpose`)}</h3>
						<p className="font-regular text-text text-left text-[16px] leading-normal">{t(`pages.about.text3`)}</p>
					</div>
				</div>
			</Container>
		</section>
	)
}
