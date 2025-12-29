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

	return (
		<section className="bg-white py-[100px]">
			<Container className="flex items-start justify-between gap-[30px]">
				<div className="max-w-[655px] grow">
					<div
						ref={AboutSummitRef}
						className="font-regular text-text mb-[62px] -translate-x-90 text-[24px] leading-[1.2] opacity-0"
					>
						{t(`titles.aboutSummit`)}
					</div>

					<div className="flex items-start justify-between gap-[5px]">
						<Image
							ref={AboutSummitImg1Ref}
							src="/imgs/about-img-1.png"
							alt="About Summit"
							width={351}
							height={571}
							className="block max-w-[351px] translate-y-90 rounded-[12px] opacity-0"
						/>
						<div className="flex flex-col items-center justify-between">
							<Image
								ref={AboutSummitImg2Ref}
								src="/imgs/about-img-2.png"
								alt="About Summit 2"
								width={299}
								height={238}
								className="mb-[56px] block max-w-[299px] translate-y-[120px] rounded-[12px] opacity-0"
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
								<div className="mb-[15px] max-w-[170px]">\\{t('titles.strategicPartner')}</div>
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
				</div>

				<div className="flex max-w-[1025px] grow flex-col justify-start">
					<div
						ref={AboutSummitTitleRef}
						className="font-regular mb-[70px] max-w-[940px] translate-x-90 self-end text-[48px] leading-[1.2] opacity-0"
					>
						{t.rich('pages.aboutSummit.title', {
							primary: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
							secondary: (chunks) => <span className="text-secondary font-bold">{chunks}</span>,
						})}
					</div>

					<div className="seld-start relative max-w-[721px]">
						<p
							ref={AboutSummitText1Ref}
							className="font-regular text-text mb-[60px] translate-y-90 text-left text-[24px] leading-normal opacity-0"
						>
							{t(`pages.aboutSummit.text1`)}
						</p>
						<p
							ref={AboutSummitText2Ref}
							className="font-regular text-text mb-[60px] translate-y-90 text-left text-[16px] leading-normal opacity-0"
						>
							{t(`pages.aboutSummit.text2`)}
						</p>
						<ButtonDefault
							ref={AboutSummitButtonRef as React.RefObject<HTMLButtonElement>}
							className="translate-y-90 opacity-0"
						>
							{t('labels.more')}
						</ButtonDefault>
						<Image
							ref={AboutSummitMapRef}
							className="absolute top-0 left-full block min-h-[435px] min-w-[1014px] translate-x-90 opacity-0"
							src="/imgs/kz-map.svg"
							alt="KZ Map"
							width={1014}
							height={435}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
