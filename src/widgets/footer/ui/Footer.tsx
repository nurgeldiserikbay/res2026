'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Link } from '@/i18n/navigation'
import { appConfig } from '@/shared/config/app.config'
import { IconMail } from '@/shared/icons/IconMail'
import { IconPhone } from '@/shared/icons/IconPhone'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { FooterLogo } from './FooterLogo'
import { FooterNavBottom } from './FooterNavBottom'
import { FooterNavTop } from './FooterNavTop'
import { FooterSocial } from './FooterSocial'

export function Footer() {
	const t = useTranslations()

	const MapRef = useRef<HTMLDivElement>(null)
	useAnimSlide(MapRef, { y: 50, delay: 0.1 })
	const FooterLogoRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterLogoRef, { y: 50, delay: 0.2 })
	const FooterNavTopRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterNavTopRef, { y: 50, delay: 0.3 })
	const FooterText1Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterText1Ref, { y: 50, delay: 0.4 })
	const FooterText2Ref = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterText2Ref, { y: 50, delay: 0.5, start: 'top bottom' })
	const FooterContactsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterContactsRef, { y: 50, delay: 0.6 })
	const FooterSocialRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterSocialRef, { y: 50, delay: 0.7, start: 'top bottom' })
	const FooterNavBottomRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterNavBottomRef, { y: 50, delay: 0.8 })
	const FooterCopyrightRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(FooterCopyrightRef, { y: 50, delay: 0.9, start: 'top bottom' })

	return (
		<footer className="relative z-1 bg-white pt-[50px] pb-[38px] lg:pt-[75px] lg:pb-[58px] 2xl:pt-[100px] 2xl:pb-[82px]">
			<Container className="flex flex-col items-stretch justify-between gap-8 md:flex-row">
				<div
					ref={MapRef}
					className="aspect-[1.11] max-w-[716px] grow translate-y-[50px] opacity-0"
				>
					<iframe
						id="map_378765882"
						src="https://makemap.2gis.ru/widget?data=eJw1jsFuhDAMRP_FvUarBAiEfMBWve1tpVZ7QMRtIwUcBa-0W8S_N5DWJ8sznnkrUHKY0L0iTcjJ4wL2YwV-RgQLZxz4nhAExEQREx_6CiMFSll_kZVRn1XW2XPYP_LqcBmTj-xpLoeft9nhA6yS_7MJ-CqFzz3ur-1CfubsHylD-XngA6ZTp6ZStRZanWRfmVrf8rt3YNuu2W4CpiFeaPGlb4UwMNjilbppTNf2UvcCwi6XMK1MXWkjdWsyHdGU2docmrkphOs3Yng_rpzuuP0CbyxY3g"
						sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
						className="h-full w-full rounded-[12px]"
					></iframe>
				</div>
				<div className="max-w-[416px] grow lg:max-w-[1024px]">
					<div className="mb-[30px] flex max-w-[923px] flex-wrap items-start justify-between gap-5 lg:mb-[68px] lg:flex-nowrap">
						<div className="flex w-full items-center justify-between gap-5 lg:w-auto">
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
							className="max-w-[789px] grow translate-y-[50px] opacity-0"
						>
							<FooterNavTop />
						</div>
					</div>

					<div className="mb-[30px] flex w-full flex-wrap-reverse items-stretch justify-between gap-y-[30px] sm:flex-nowrap lg:mb-[68px]">
						<div className="flex flex-col items-start justify-between">
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
						</div>

						<div className="flex">
							<div
								ref={FooterNavBottomRef}
								className="translate-y-[50px] opacity-0"
							>
								<FooterNavBottom />
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-end justify-between gap-[60px] gap-y-[30px] sm:flex-nowrap">
						<div className="flex items-start justify-between gap-[30px] sm:max-w-[247px] md:block">
							<div
								ref={FooterText1Ref}
								className="text-text mb-0 max-w-[175px] translate-y-[50px] text-[12px] leading-normal font-normal opacity-0 sm:mb-[30px] sm:max-w-full sm:text-[14px]"
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

						<div
							ref={FooterSocialRef}
							className="hidden grow translate-y-[50px] opacity-0 lg:block"
						>
							{!appConfig.isProduction && <FooterSocial />}
						</div>

						<div className="flex max-w-[367px] grow flex-col items-start justify-between">
							<p
								ref={FooterCopyrightRef}
								className="text-text w-full translate-y-[50px] text-left text-[11px] leading-[1.2] font-light opacity-0 sm:text-right"
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
