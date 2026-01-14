'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

// import { Link } from '@/i18n/navigation'
import { appConfig } from '@/shared/config/app.config'
// import { IconMail } from '@/shared/icons/IconMail'
// import { IconPhone } from '@/shared/icons/IconPhone'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { FooterLogo } from './FooterLogo'
import { FooterNavTop } from './FooterNavTop'
import { FooterSocial } from './FooterSocial'

export function Footer() {
	const t = useTranslations()

	const MapRef = useRef<HTMLDivElement>(null)
	useAnimSlide(MapRef, { y: 50, delay: 0.1 })
	const FooterLogoRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterLogoRef, { y: 50, delay: 0.1 })
	const FooterNavTopRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterNavTopRef, { y: 50, delay: 0.1 })
	const FooterText3Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterText3Ref, { y: 50, delay: 0.1 })
	const FooterText4Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterText4Ref, { y: 50, delay: 0.1 })
	const FooterText1Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterText1Ref, { y: 50, delay: 0.1 })
	const FooterText2Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterText2Ref, { y: 50, delay: 0.1, start: 'top bottom' })
	const FooterContactsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterContactsRef, { y: 50, delay: 0.61 })
	const FooterSocialRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterSocialRef, { y: 50, delay: 0.1, start: 'top bottom' })
	const FooterNavBottomRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterNavBottomRef, { y: 50, delay: 0.1 })
	const FooterCopyrightRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(FooterCopyrightRef, { y: 50, delay: 0.1, start: 'top bottom' })

	return (
		<footer className="relative z-1 bg-white pt-[50px] pb-[38px] lg:pt-[75px] lg:pb-[58px] 2xl:pt-[100px] 2xl:pb-[82px]">
			<Container className="3xl:gap-x-[60px] flex flex-col items-stretch justify-between gap-x-[40px] gap-y-[30px] lg:flex-row">
				<div
					ref={MapRef}
					className="grow translate-y-[50px] opacity-0 lg:max-w-[716px]"
				>
					<div className="mb-[6px] aspect-[1.8] w-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8727574198415!2d71.40879307696517!3d51.09235574093826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585ad0a5c0621%3A0x42c14eac2e46fcd3!2sCongress%20Centre%20Astana!5e0!3m2!1sen!2skz!4v1767711978084!5m2!1sen!2skz"
							title={t('pages.footer.mapTitle') || 'Location map'}
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="h-full w-full rounded-[12px]"
						></iframe>
					</div>
					<div className="grid w-full grid-cols-2 gap-[6px]">
						<Image
							src="/imgs/footer-1.png"
							alt="Footer Map 1"
							width={277}
							height={218}
							className="h-auto w-full object-cover"
						/>
						<Image
							src="/imgs/footer-2.png"
							alt="Footer Map 2"
							width={277}
							height={218}
							className="h-auto w-full object-cover"
						/>
					</div>
				</div>
				<div className="grow lg:max-w-[1180px]">
					<div className="mb-[30px] flex items-start justify-between gap-[30px] lg:hidden">
						<div
							ref={FooterText3Ref}
							className="text-text mb-0 max-w-[175px] translate-y-[50px] text-[12px] leading-normal font-normal opacity-0 sm:mb-[30px] sm:max-w-full sm:text-[14px] md:text-justify"
						>
							{t(`pages.footer.text`)}
						</div>
						<div
							ref={FooterText4Ref}
							className="text-text translate-y-[50px] text-[13px] leading-[1.2] font-bold opacity-0 sm:text-[16px]"
						>
							{t(`pages.footer.text1`)}
						</div>
					</div>
					<div className="3xl:gap-x-[60px] mb-[30px] flex flex-wrap items-start justify-between gap-x-[40px] gap-y-[30px] lg:mb-[68px] lg:flex-nowrap">
						<div className="flex w-full items-center justify-between gap-[60px] lg:w-auto">
							<div
								ref={FooterLogoRef}
								className="translate-y-[50px] opacity-0"
							>
								<FooterLogo />
							</div>

							{!appConfig.isProduction && (
								<div className="block lg:hidden">
									{' '}
									<FooterSocial />
								</div>
							)}
						</div>

						<div
							ref={FooterNavTopRef}
							className="flex w-full grow translate-y-[50px] flex-wrap gap-x-[80px] gap-y-[36px] opacity-0 lg:flex-nowrap"
						>
							<FooterNavTop />
						</div>
					</div>

					<div className="mb-[30px] flex w-full flex-wrap-reverse items-stretch justify-between gap-y-[30px] sm:flex-nowrap lg:mb-[68px] 2xl:mb-[123px]">
						{/* <div className="flex flex-col items-start justify-between">
							<div
								ref={FooterContactsRef}
								className="translate-y-[50px] opacity-0"
							>
								<Link
									href="mailto:office@res2026expo.kz"
									className="hover:text-muted mb-[20px] flex items-center gap-[10px] text-[14px] text-black transition-colors"
								>
									<IconMail className="text-primary" />
									<span>office@res2026expo.kz</span>
								</Link>
								<Link
									href="tel:+77080268866"
									className="hover:text-muted flex items-center gap-[10px] text-[14px] text-black transition-colors"
								>
									<IconPhone className="text-primary" />
									<span>+7 708 026 88 66</span>
								</Link>
							</div>
						</div> */}

						<div
							ref={FooterSocialRef}
							className="hidden translate-y-[50px] opacity-0 lg:block"
						>
							{!appConfig.isProduction && <FooterSocial />}
						</div>
					</div>

					<div className="flex flex-wrap items-end justify-between gap-[60px] gap-y-[30px] sm:flex-nowrap">
						<div className="hidden items-start justify-between gap-[30px] lg:block">
							<div
								ref={FooterText1Ref}
								className="text-text mb-0 translate-y-[50px] text-[12px] leading-normal font-normal opacity-0 sm:mb-[30px] sm:text-[14px]"
							>
								{t(`pages.footer.text`)}
							</div>
							<div
								ref={FooterText2Ref}
								className="text-text translate-y-[50px] text-[13px] leading-[1.2] font-bold opacity-0 sm:text-[16px]"
							>
								{t(`pages.footer.text1`)}
							</div>
						</div>

						<div className="flex max-w-[367px] grow flex-col items-start justify-between">
							<p
								ref={FooterCopyrightRef}
								className="text-text w-full translate-y-[50px] text-left text-[11px] leading-[1.2] font-light opacity-0 lg:text-right"
							>
								{t(`pages.footer.copyright`)}
							</p>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}
