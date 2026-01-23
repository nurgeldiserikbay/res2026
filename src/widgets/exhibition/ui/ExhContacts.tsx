'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { IconGlobal } from '@/shared/icons/IconGlobal'
import { IconMail } from '@/shared/icons/IconMail'
import { IconPhone } from '@/shared/icons/IconPhone'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function ExhContacts() {
	const t = useTranslations()

	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px] 3xl:pt-[100px]"
		>
			<Container>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-left text-[24px] leading-normal font-bold opacity-0 md:mb-[40px] md:text-[28px] lg:mb-[50px] lg:text-[32px] 2xl:mb-[60px]"
				>
					{t('pages.exhibition.contacts.title')}
				</h2>

				<div className="flex flex-wrap items-center justify-between gap-x-[60px] gap-y-[30px] md:flex-nowrap">
					<div className="max-w-[1084px] text-justify text-[16px] leading-normal font-normal text-text xs:text-[20px] md:text-[22px] xl:text-[24px]">
						{t.rich('pages.exhibition.contacts.text', {
							primary: (chunks) => <span className="text-[#41754F]">{chunks}</span>,
						})}
					</div>

					<div className="flex w-full max-w-[562px] flex-col items-center justify-center gap-y-[10px] rounded-[12px] bg-[#F5F8EC] p-[26px]">
						<Link
							href="tel:87750266688"
							target="_blank"
							className="flex items-center justify-start gap-[10px] text-[18px] leading-normal font-medium text-text xs:text-[24px]"
						>
							<IconPhone className="block shrink-0 text-secondary transition-colors" />
							<span> {`8 (775) 026 6688`}</span>
						</Link>
						<Link
							href={'https://res2026expo.kz'}
							target="_blank"
							className="flex items-center justify-start gap-[10px] text-[18px] leading-normal font-medium text-text xs:text-[24px]"
						>
							<IconGlobal className="block shrink-0 text-secondary transition-colors" />
							<span>{'https://res2026expo.kz'}</span>
						</Link>
						<Link
							href="mailto:office@res2026expo.kz"
							target="_blank"
							className="flex items-center justify-start gap-[10px] text-[18px] leading-normal font-medium text-text xs:text-[24px]"
						>
							<IconMail className="block shrink-0 text-secondary transition-colors" />
							<span>office@res2026expo.kz</span>
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}
