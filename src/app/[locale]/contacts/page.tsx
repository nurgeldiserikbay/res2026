'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { appConfig } from '@/shared/config/app.config'
import { IconGlobal } from '@/shared/icons/IconGlobal'
import { IconMail } from '@/shared/icons/IconMail'
import { IconPhone } from '@/shared/icons/IconPhone'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { FooterSocial } from '@/widgets/footer/ui/FooterSocial'

type SectionProps = {
	t: ReturnType<typeof useTranslations>
}

function OrganizersSection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const contactsRef = useRef<HTMLDivElement>(null)
	const socialRef = useRef<HTMLDivElement>(null)
	const mapRef = useRef<HTMLDivElement>(null)

	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(contactsRef, { y: 50, delay: 0.2 })
	useAnimSlide(socialRef, { y: 50, delay: 0.25 })
	useAnimSlide(mapRef, { y: 50, delay: 0.3 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-none font-bold opacity-0 lg:text-[28px] xl:text-[32px]"
			>
				{t(`titles.organizers`)}
			</h2>
			<div className="flex flex-wrap items-start justify-between gap-x-[40px] gap-y-5 lg:flex-nowrap">
				<div
					ref={contactsRef}
					className="translate-y-[50px] opacity-0"
				>
					<Link
						href="mailto:info@res2026.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconMail className="text-secondary block transition-colors" />
						<span>info@res2026.kz</span>
					</Link>
					<Link
						href="tel:+77080268866"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> +7 708 026 88 66</span>
					</Link>
					<Link
						href="www.res2026.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>www.res2026.kz</span>
					</Link>
				</div>
				{!appConfig.isProduction && (
					<div
						ref={socialRef}
						className="w-full max-w-[156px] translate-y-[50px] opacity-0"
					>
						<FooterSocial />
					</div>
				)}
				<div
					ref={mapRef}
					className="aspect-[1.5] max-w-[1316px] grow translate-y-[50px] opacity-0 lg:aspect-[3.6]"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8727574198415!2d71.40879307696517!3d51.09235574093826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585ad0a5c0621%3A0x42c14eac2e46fcd3!2sCongress%20Centre%20Astana!5e0!3m2!1sen!2skz!4v1767711978084!5m2!1sen!2skz"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="h-full w-full rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)]"
					></iframe>
				</div>
			</div>
		</>
	)
}

function MeprSection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const subtitleRef = useRef<HTMLHeadingElement>(null)
	const contactsRef = useRef<HTMLDivElement>(null)
	const block2Ref = useRef<HTMLDivElement>(null)
	const block3Ref = useRef<HTMLDivElement>(null)
	const block4Ref = useRef<HTMLDivElement>(null)

	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(subtitleRef, { y: 50, delay: 0.15 })
	useAnimSlide(contactsRef, { y: 50, delay: 0.2 })
	useAnimSlide(block2Ref, { y: 50, delay: 0.25 })
	useAnimSlide(block3Ref, { y: 50, delay: 0.3 })
	useAnimSlide(block4Ref, { y: 50, delay: 0.35 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-none font-bold opacity-0 lg:text-[28px] xl:text-[32px]"
			>
				{t(`pages.contacts.mepr`)}
			</h2>
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
	delay: number
}

function ContactPersonCard({ title, name, email, phone, delay }: ContactPersonCardProps) {
	const ref = useRef<HTMLDivElement>(null)
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
				href={`tel:${phone}`}
				target="_blank"
				className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
			>
				<IconPhone className="text-secondary block transition-colors" />
				<span> {phone}</span>
			</Link>
		</div>
	)
}

function ContactPersonsSection({ t }: SectionProps) {
	const titleRef2 = useRef<HTMLHeadingElement>(null)
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
						title={t(`labels.pressSecretary`)}
						name={t(`titles.partnershipAndSponsorshipName`)}
						phone="+7 701 208 1811"
						email="office@caclimate.fund"
						delay={0.3}
					/>
				</div>
			</div>
		</>
	)
}

function OrganizationQuestionsSection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const subtitleRef = useRef<HTMLHeadingElement>(null)
	const block1Ref = useRef<HTMLDivElement>(null)

	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(subtitleRef, { y: 50, delay: 0.15 })
	useAnimSlide(block1Ref, { y: 50, delay: 0.2 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-none font-bold opacity-0 lg:text-[28px] xl:text-[32px]"
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
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className="bg-secondary xs:h-[343px] xs:pt-[176px] h-[451px] pt-[284px]"
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
						<OrganizersSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<OrganizationQuestionsSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<ContactPersonsSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<MeprSection t={t} />
					</div>
				</Container>
			</section>
		</>
	)
}
