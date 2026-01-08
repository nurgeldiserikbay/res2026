'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { IconQuot } from '@/shared/icons/IconQuot'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { Container } from '@/shared/ui/container/container'

export function AboutSummit() {
	const t = useTranslations()
	const router = useRouter()

	const AboutSummitRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitRef, { x: -90, y: 0, delay: 0.1 })
	const AboutSummitTitleRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitTitleRef, { x: 90, y: 0, delay: 0.1 })
	const AboutSummitButtonRef = useRef<HTMLButtonElement | null>(null)
	useAnimSlide(AboutSummitButtonRef, { y: 90, delay: 0.4 })
	const AboutSummitImg1Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg1Ref, { y: 90, delay: 0.1 })
	const AboutSummitImg2Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg2Ref, { y: 90, delay: 0.2 })
	const AboutSummitImg3Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg3Ref, { y: 90, delay: 0.3 })
	const AboutSummitImg4Ref = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitImg4Ref, { y: 90, delay: 0.4 })
	const AboutSummitQuoteRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitQuoteRef, { y: 90, delay: 0.35 })
	const AboutSummitPurposeRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitPurposeRef, { y: 90, delay: 0.45 })
	const AboutSummitMobileTitleRef = useRef<HTMLDivElement>(null)
	useAnimSlide(AboutSummitMobileTitleRef, { y: 50, delay: 0.1 })
	const AboutSummitButtonInsideRef = useRef<HTMLButtonElement | null>(null)
	useAnimSlide(AboutSummitButtonInsideRef, { y: 50, delay: 0.25 })
	const AboutSummitPresidentImgRef = useRef<HTMLImageElement>(null)
	useAnimSlide(AboutSummitPresidentImgRef, { x: -50, delay: 0.4 })

	// const [isOpen, setIsOpen] = useState(false)

	return (
		<section className="3xl:py-[100px] bg-white py-[50px] md:py-[60px] lg:py-[80px] 2xl:py-[80px]">
			<Container className="flex flex-wrap-reverse items-start justify-between gap-[20px] sm:gap-[30px] xl:flex-nowrap">
				<div className="w-full grow xl:max-w-[713px]">
					<div className="mb-[20px] flex items-start justify-between sm:mb-[32px]">
						<div
							ref={AboutSummitRef}
							className="font-regular text-text hidden -translate-x-90 text-[20px] leading-[1.2] opacity-0 sm:text-[22px] md:text-[24px] xl:block"
						>
							{t(`titles.aboutSummit`)}
						</div>
						<ButtonDefault
							ref={AboutSummitButtonRef as React.RefObject<HTMLButtonElement>}
							className="w-full translate-y-90 opacity-0 sm:w-auto"
							onClick={() => router.push('/about')}
						>
							{t('pages.about.moreAboutSummit')}
						</ButtonDefault>
					</div>
					<div className="w-full">
						<div className="relative mb-[16px] max-w-full sm:mb-[24px]">
							<Image
								ref={AboutSummitImg1Ref}
								src="/imgs/about-img-1.webp"
								alt="About Summit"
								width={351}
								height={377}
								className="block w-full translate-y-90 rounded-[12px] opacity-0"
							/>
						</div>
					</div>
				</div>

				<div className="flex w-full grow flex-col justify-start xl:max-w-[1025px]">
					<div
						ref={AboutSummitMobileTitleRef}
						className="font-regular text-text mb-[20px] block translate-y-[50px] text-[20px] leading-[1.2] opacity-0 sm:mb-[30px] sm:text-[22px] md:text-[24px] xl:hidden"
					>
						{t(`titles.aboutSummit`)}
					</div>

					<div
						ref={AboutSummitTitleRef}
						className="3xl:text-[40px] mb-[20px] translate-x-90 self-end text-[20px] leading-[1.2] font-bold whitespace-pre-line opacity-0 sm:mb-[25px] sm:text-[22px] md:mb-[31px] md:text-[28px] lg:text-[30px] xl:text-[30px] 2xl:mb-[60px] 2xl:text-[40px]"
					>
						{t.rich('pages.aboutSummit.title', {
							primary: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
							secondary: (chunks) => <span className="text-text font-bold">{chunks}</span>,
						})}
					</div>

					<div
						ref={AboutSummitQuoteRef}
						className="seld-start relative mb-[30px] translate-y-90 rounded-[12px] bg-[#FBFFE9] p-[20px] opacity-0 sm:mb-[40px] sm:p-[26px] md:mb-[54px] 2xl:pt-[65px] 2xl:pl-[97px]"
					>
						<div className="absolute top-[32px] left-[32px] hidden 2xl:block">
							<IconQuot color="#A1BB94" />
						</div>

						<div className="relative z-1 flex flex-wrap items-start justify-center gap-[20px] sm:gap-[30px] md:gap-[50px] xl:flex-nowrap">
							<Image
								ref={AboutSummitPresidentImgRef}
								src="/imgs/president-img.jpg"
								alt="About President"
								width={213}
								height={309}
								className="block w-full max-w-[150px] -translate-x-[50px] rounded-[12px] opacity-0 sm:max-w-[180px] md:max-w-[213px]"
							/>
							<div className="w-full max-w-[631px]">
								<div className="text-text mb-[10px] text-[16px] leading-normal font-bold">{t(`pages.about.presidentTextTitle`)}</div>
								<div className="font-regular relative z-1 mb-[20px] text-justify text-[14px] leading-normal whitespace-pre-line text-black sm:mb-[30px] sm:text-[16px]">
									{t('pages.about.presidentText')}
								</div>
								<div className="text-primary text-[12px] leading-normal sm:text-[14px]">{t('pages.about.presidentPosition')}</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<div
							ref={AboutSummitPurposeRef}
							className="translate-y-90 opacity-0"
						>
							<h3 className="text-text mb-[8px] text-[20px] leading-normal font-bold sm:mb-[10px] sm:text-[22px] md:text-[24px]">
								{t(`pages.about.purpose`)}
							</h3>
							<p className="font-regular text-text text-justify text-[14px] leading-normal sm:text-[16px]">{t(`pages.about.text3`)}</p>
						</div>

						{/*isOpen && (
							<div className="mt-[40px] sm:mt-[60px]">
								<h3 className="text-text mb-[8px] text-[20px] leading-normal font-bold sm:mb-[10px] sm:text-[22px] md:text-[24px]">
									{t(`pages.about.presidentInitiative`)}
								</h3>
								<p className="text-text text-[14px] leading-normal font-normal whitespace-pre-line sm:text-[16px]">
									{t(`pages.about.presidentInitiativeText`)}
								</p>
							</div>
						)*/}

						{/* <p
							ref={AboutSummitText1Ref}
							className="font-regular text-text mb-[60px] translate-y-90 text-left text-[16px] leading-normal opacity-0"
						>
							{t(`pages.aboutSummit.text1`)}
						</p> */}

						{/* <button
							onClick={() => setIsOpen(!isOpen)}
							className="text-secondary absolute bottom-0 left-0 flex cursor-pointer items-center gap-[8px] text-[12px] leading-normal font-bold sm:gap-[10px] sm:text-[14px]"
						>
							<span>{isOpen ? t('labels.hide') : t('labels.readMore')}</span>
							<IconArrowDown
								className={[
									`text-secondary block h-[16px] w-[16px] transition-transform duration-300 sm:h-[18px] sm:w-[18px]`,
									isOpen && 'rotate-180',
								].join(' ')}
							/>
						</button> */}
					</div>

					{/* <Image
						ref={AboutSummitMapRef}
						className="absolute top-[65%] left-[65%] block min-h-[435px] min-w-[1014px] translate-x-90 opacity-0"
						src="/imgs/kz-map.svg"
						alt="KZ Map"
						width={1014}
						height={435}
					/> */}
				</div>
			</Container>
		</section>
	)
}
