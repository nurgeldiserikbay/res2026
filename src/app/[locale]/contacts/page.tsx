'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { appConfig } from '@/shared/config/app.config'
import { IconGlobal } from '@/shared/icons/IconGlobal'
import { IconMail } from '@/shared/icons/IconMail'
import { IconPhone } from '@/shared/icons/IconPhone'
import { IconPin } from '@/shared/icons/IconPin'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import type { ReactNode } from 'react'

type SectionProps = {
	t: ReturnType<typeof useTranslations>
}

function MeprSection({ t }: SectionProps): ReactNode {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const subtitleRef = useRef<HTMLHeadingElement>(null)
	const contactsRef = useRef<HTMLDivElement>(null)
	const block2Ref = useRef<HTMLDivElement>(null)
	const block3Ref = useRef<HTMLDivElement>(null)
	const block4Ref = useRef<HTMLDivElement>(null)

	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(subtitleRef, { y: 50, delay: 0.15 })
	useAnimSlide(contactsRef, { y: 50, delay: 0.2 })
	useAnimSlide(block2Ref, { y: 50, delay: 0.25 })
	useAnimSlide(block3Ref, { y: 50, delay: 0.3 })
	useAnimSlide(block4Ref, { y: 50, delay: 0.35 })

	return (
		<>
			<div className="mb-[30px] flex items-center justify-between gap-x-[40px]">
				<h2
					ref={titleRef}
					className="text-text translate-y-[50px] text-[24px] leading-none font-bold opacity-0 lg:text-[28px] xl:text-[32px]"
				>
					{t(`pages.contacts.mepr`)}
				</h2>

				<Link
					href="https://res2026expo.kz/"
					target="_blank"
					className="block shrink-0"
				>
					<Image
						src="/imgs/footer-logo.svg"
						alt="Logo"
						width={74}
						height={65}
						className="block"
					/>
				</Link>
			</div>
			<h3
				ref={subtitleRef}
				className="text-text mb-[20px] translate-y-[50px] text-[16px] leading-none font-bold opacity-0"
			>
				{t(`pages.contacts.meprSubtitle`)}
			</h3>
			<div className="flex flex-wrap items-start justify-between gap-x-[40px] gap-y-5 lg:flex-nowrap">
				<div
					ref={contactsRef}
					className="max-w-[545px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.aydarPosition`)}</h3>
					<div className="text-text 3xl:text-[24px] mb-[20px] text-[16px] leading-none font-normal lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
						{t(`pages.contacts.aydarName`)}
					</div>
					<Link
						href="tel:+77018886643"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {`+7 701 888 6643`}</span>
					</Link>
					<Link
						href={'https://www.gov.kz/'}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPin className="text-secondary block transition-colors" />
						<span>{t(`pages.contacts.address`)}</span>
					</Link>
					<Link
						href={'https://www.gov.kz/'}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>{'gov.kz'}</span>
					</Link>
				</div>
				<div
					ref={block2Ref}
					className="max-w-[545px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.botaPosition`)}</h3>
					<div className="text-text 3xl:text-[24px] mb-[20px] text-[16px] leading-none font-normal lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
						{t(`pages.contacts.botaName`)}
					</div>
					<Link
						href="tel:+77712886597"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {`+7 771 288 6597`}</span>
					</Link>
					<Link
						href="mailto:partnership@res2026expo.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconMail className="text-secondary block transition-colors" />
						<span>partnership@res2026expo.kz</span>
					</Link>
				</div>
				<div
					ref={block3Ref}
					className="max-w-[545px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.anelPosition`)}</h3>
					<div className="text-text 3xl:text-[24px] mb-[20px] text-[16px] leading-none font-normal lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
						{t(`pages.contacts.anelName`)}
					</div>
					<Link
						href="tel:+77074131677"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {`+7 707 413 1677`}</span>
					</Link>
					<Link
						href="mailto:sales@res2026expo.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconMail className="text-secondary block transition-colors" />
						<span>sales@res2026expo.kz</span>
					</Link>
				</div>
				<div
					ref={block4Ref}
					className="max-w-[545px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.communicationLine`)}</h3>
					<Link
						href="tel:+77712886597"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {`+7771 288 6597`}</span>
					</Link>
					<Link
						href="mailto:office@res2026expo.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconMail className="text-secondary block transition-colors" />
						<span>office@res2026expo.kz</span>
					</Link>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.officialWebsite`)}</h3>
					<Link
						href={'https://res2026expo.kz/'}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>{'https://res2026expo.kz'}</span>
					</Link>
				</div>
			</div>
		</>
	)
}

type ContactPersonCardProps = {
	title: string
	name: string
	email?: string
	phone: string
	web?: string
	delay: number
}

function ContactPersonCard({ title, name, email, phone, web, delay }: ContactPersonCardProps) {
	const ref = useRef<HTMLDivElement>(null)
	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(ref, { y: 50, delay })

	return (
		<div
			ref={ref}
			className="max-w-[374px] translate-y-[50px] opacity-0"
		>
			<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{title}</h3>
			<div className="text-text 3xl:text-[24px] mb-[20px] text-[16px] leading-none font-normal lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
				{name}
			</div>
			{email && (
				<Link
					href={`mailto:${email}`}
					target="_blank"
					className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
				>
					<IconMail className="text-secondary block transition-colors" />
					<span>{email}</span>
				</Link>
			)}
			<Link
				href={`tel:${phone.replace(/\s/g, '')}`}
				target="_blank"
				className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
			>
				<IconPhone className="text-secondary block transition-colors" />
				<span> {phone}</span>
			</Link>
			{web && (
				<Link
					href={web}
					target="_blank"
					className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
				>
					<IconGlobal className="text-secondary block transition-colors" />
					<span>{web}</span>
				</Link>
			)}
		</div>
	)
}

function ContactPersonsSection({ t }: SectionProps): ReactNode {
	const titleRef2 = useRef<HTMLHeadingElement>(null)
	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(titleRef2, { y: 50, delay: 0.1 })

	return (
		<>
			<div className="flex flex-wrap items-start justify-between gap-x-[40px] gap-y-5 lg:flex-nowrap">
				<div>
					<h2
						ref={titleRef2}
						className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-none font-bold opacity-0 lg:text-[28px] xl:text-[32px]"
					>
						{t(`titles.contactPersons`)}
					</h2>
					<ContactPersonCard
						title={t(`labels.chief`)}
						name={t(`titles.partnershipAndSponsorshipName`)}
						phone="+7 708 345 7971"
						email="office@caclimate.fund"
						web="https://caclimate.fund/"
						delay={0.3}
					/>
				</div>
			</div>
		</>
	)
}

function OrganizationQuestionsSection({ t }: SectionProps): ReactNode {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const subtitleRef = useRef<HTMLHeadingElement>(null)
	const block1Ref = useRef<HTMLDivElement>(null)

	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(subtitleRef, { y: 50, delay: 0.15 })
	useAnimSlide(block1Ref, { y: 50, delay: 0.2 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-none font-bold whitespace-pre-line opacity-0 lg:text-[28px] xl:text-[32px]"
			>
				{t(`titles.organizationQuestions`)}
			</h2>
			<h3
				ref={subtitleRef}
				className="text-text mb-[20px] translate-y-[50px] text-[16px] leading-none font-bold opacity-0"
			>
				{t(`titles.internationalCenterForGreenTechnology`)}
			</h3>
			<div className="flex flex-wrap items-start justify-between gap-x-[40px] gap-y-5 lg:flex-nowrap">
				<div
					ref={block1Ref}
					className="max-w-[570px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`labels.pressSecretary`)}</h3>
					<div className="text-text 3xl:text-[24px] mb-[20px] text-[16px] leading-none font-normal lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">
						{t(`pages.contacts.meprName`)}
					</div>
					<Link
						href="tel:+77015250876"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {`+7 701 525 0876`}</span>
					</Link>
				</div>
			</div>
		</>
	)
}

function VenueSection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const linksRef = useRef<HTMLDivElement>(null)
	const textRef = useRef<HTMLDivElement>(null)
	const mapRef = useRef<HTMLDivElement>(null)

	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(linksRef, { y: 50, delay: 0.2 })
	useAnimSlide(textRef, { y: 50, delay: 0.25 })
	useAnimSlide(mapRef, { y: 50, delay: 0.3 })

	return (
		<>
			<h3
				ref={titleRef}
				className="text-text mt-[60px] mb-[20px] translate-y-[50px] text-[16px] leading-none font-bold opacity-0"
			>
				{t(`titles.venue`)}
			</h3>
			<div className="flex flex-wrap items-start justify-start gap-x-[120px] gap-y-[40px] md:flex-nowrap">
				<div
					ref={linksRef}
					className="max-w-[473px] translate-y-[50px] opacity-0"
				>
					<Link
						href="https://2gis.kz/astana/firm/70000001018130088/71.43893%2C51.124309?m=71.439565%2C51.123237%2F17.41%2Fr%2F3.4"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPin className="text-secondary block shrink-0 transition-colors" />
						<span>{t(`pages.contacts.eventAddress`)}</span>
					</Link>
					<Link
						href="https://gov.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block shrink-0 transition-colors" />
						<span>gov.kz</span>
					</Link>
				</div>

				<div
					ref={textRef}
					className="text-text max-w-[816px] translate-y-[50px] text-[14px] leading-normal font-normal opacity-0"
				>
					{t(`pages.contacts.text`)}
				</div>
			</div>
		</>
	)
}

export default function Page() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '140%',
		toSize: '120%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/news-banner.png',
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	// Изменена анимация: y изменен с -90 (по умолчанию) на 50
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className={[
					!appConfig.isProduction
						? `bg-secondary h-[343px] pt-[176px] max-[441px]:h-[451px] max-[441px]:pt-[284px]`
						: `bg-secondary h-[343px] pt-[176px]`,
				].join(``)}
			>
				<Container className="relative z-10">
					<h1
						ref={TitleRef}
						className="3xl:text-[48px] mb-[30px] translate-y-[50px] text-center text-[32px] leading-none font-bold text-white opacity-0 md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
					>
						{t('titles.contacts')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={[{ label: t('titles.contacts'), href: '/contacts' }]} />
					</div>
				</Container>
			</section>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<OrganizationQuestionsSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<ContactPersonsSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<MeprSection t={t} />
						<VenueSection t={t} />
					</div>
				</Container>
			</section>
		</>
	)
}
