'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Link } from '@/i18n/navigation'
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
	useAnimSlide(FooterText2Ref, { y: 50, delay: 0.5 })
	const FooterContactsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterContactsRef, { y: 50, delay: 0.6 })
	const FooterSocialRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterSocialRef, { y: 50, delay: 0.7 })
	const FooterNavBottomRef = useRef<HTMLDivElement>(null)
	useAnimSlide(FooterNavBottomRef, { y: 50, delay: 0.8 })
	const FooterCopyrightRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(FooterCopyrightRef, { y: 50, delay: 0.9 })

	return (
		<footer className="bg-horizontal-lines relative z-1 bg-white pt-[100px] pb-[82px]">
			<Container className="flex items-stretch justify-between">
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
				<div className="max-w-[1019px] grow">
					<div className="mb-[112px] flex max-w-[923px] items-start justify-between">
						<div
							ref={FooterLogoRef}
							className="translate-y-[50px] opacity-0"
						>
							<FooterLogo />
						</div>

						<div
							ref={FooterNavTopRef}
							className="translate-y-[50px] opacity-0"
						>
							<FooterNavTop />
						</div>
					</div>

					<div className="flex items-stretch justify-between">
						<div className="max-w-[247px]">
							<div
								ref={FooterText1Ref}
								className="text-text mb-[30px] translate-y-[50px] text-[14px] leading-normal font-normal opacity-0"
							>
								{t(`pages.footer.text`)}
							</div>
							<div
								ref={FooterText2Ref}
								className="text-text translate-y-[50px] text-[32px] leading-[1.2] font-bold opacity-0"
							>
								{t(`pages.footer.text1`)}
							</div>
						</div>

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

							<div
								ref={FooterSocialRef}
								className="translate-y-[50px] opacity-0"
							>
								<FooterSocial />
							</div>
						</div>

						<div className="flex max-w-[367px] grow flex-col items-start justify-between">
							<div
								ref={FooterNavBottomRef}
								className="translate-y-[50px] opacity-0"
							>
								<FooterNavBottom />
							</div>

							<p
								ref={FooterCopyrightRef}
								className="text-text w-full translate-y-[50px] text-right text-[11px] leading-[1.2] font-light opacity-0"
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
