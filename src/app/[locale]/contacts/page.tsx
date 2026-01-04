'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { IconGlobal } from '@/shared/icons/IconGlobal'
import { IconMail } from '@/shared/icons/IconMail'
import { IconPhone } from '@/shared/icons/IconPhone'
import { IconPin } from '@/shared/icons/IconPin'
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
				className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
			>
				{t(`titles.organizers`)}
			</h2>
			<div className="flex items-start justify-between gap-5">
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
				<div
					ref={socialRef}
					className="w-full max-w-[156px] translate-y-[50px] opacity-0"
				>
					<FooterSocial />
				</div>
				<div
					ref={mapRef}
					className="aspect-[4.2] max-w-[716px] grow translate-y-[50px] opacity-0"
				>
					<iframe
						id="map_279913141"
						frameBorder="0"
						src="https://makemap.2gis.ru/widget?data=eJw1jkFvgzAMhf-Ld0VVEpLS5Ad02q23Spt6QMTbIgWMgiu1Q_z3Gdh8svz83vtmoBKxYHxF6pFLwgnCxwz8HBECnLHle0GoYCw0YuFNn6GjTEX0F2VO-tOIzonz6pA14tSVNHKiYT_8vA0RHxC0-p-lgq-98LnG_bVdKA0s_x0JVBpa3mAafbBa17WvnD4ob2pzE3uKEKyzy62Cvh0vNKW9b4bcMgR51cY7722j3OkoZsirvIbZ2iqnna6PjRE4ol7QjGQKNuV8_UbM79uVyx2XXxioWJ0"
						sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
						className="h-full w-full rounded-[12px]"
					></iframe>
				</div>
			</div>
		</>
	)
}

function MeprSection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const contactsRef = useRef<HTMLDivElement>(null)

	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(contactsRef, { y: 50, delay: 0.2 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
			>
				{t(`pages.contacts.mepr`)}
			</h2>
			<div className="flex items-start justify-between gap-5">
				<div
					ref={contactsRef}
					className="max-w-[545px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.meprPosition`)}</h3>
					<div className="text-text mb-[20px] text-[24px] leading-none font-normal">{t(`pages.contacts.meprName`)}</div>
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
			<div className="text-text mb-[20px] text-[24px] leading-none font-normal">{name}</div>
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
	const titleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	const titleRef2 = useRef<HTMLHeadingElement>(null)
	useAnimSlide(titleRef2, { y: 50, delay: 0.1 })

	return (
		<>
			<div className="flex items-start justify-between gap-5">
				<div>
					<h2
						ref={titleRef}
						className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
					>
						{t(`titles.contactPersons`)}
					</h2>
					<ContactPersonCard
						title={t(`titles.generalQuestions`)}
						name={t(`titles.generalQuestionsName`)}
						email="office@caclimate.fund"
						phone="+7 775 069 0703"
						delay={0.2}
					/>
				</div>
				<div>
					<h2 className="mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold text-transparent opacity-0">hidden title</h2>
					<ContactPersonCard
						title={t(`titles.registrationAndParticipation`)}
						name={t(`titles.registrationAndParticipationName`)}
						email="office@caclimate.fund"
						phone="+7 775 069 0703"
						delay={0.25}
					/>
				</div>
				<div>
					<h2
						ref={titleRef2}
						className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
					>
						{t(`titles.pressSecretary`)}
					</h2>
					<ContactPersonCard
						title={t(`titles.partnershipAndSponsorship`)}
						name={t(`titles.partnershipAndSponsorshipName`)}
						phone="+7 701 208 1811"
						delay={0.3}
					/>
				</div>
			</div>
		</>
	)
}

function OrganizationQuestionsSection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(titleRef, { y: 50, delay: 0.1 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
			>
				{t(`titles.organizationQuestions`)}
			</h2>
			<div className="flex items-start justify-between gap-5">
				<div className="max-w-[709px]">
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`titles.internationalCenterForGreenTechnology`)}</h3>
					<div className="text-text mb-[20px] text-[16px] leading-none font-normal">{t(`pages.contacts.rsvp`)}</div>
					<Link
						href={`tel:+77712886597`}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {t(`pages.contacts.botPhone`)}</span>
					</Link>
					<Link
						href={`tel:+77073197731`}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> {t(`pages.contacts.lauraPhone`)}</span>
					</Link>
					<Link
						href="https://2gis.kz/astana/firm/70000001018130088/71.43893%2C51.124309?m=71.439565%2C51.123237%2F17.41%2Fr%2F3.4"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPin className="text-secondary block transition-colors" />
						<span>{t(`pages.contacts.address`)}</span>
					</Link>
					<Link
						href="https://gov.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>gov.kz</span>
					</Link>
				</div>
				<div className="max-w-[570px]">
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.aydarName`)}</h3>
					<div className="text-text mb-[20px] text-[16px] leading-none font-normal">{t(`pages.contacts.aydarPosition`)}</div>
					<Link
						href={`tel:+77018886643`}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> +7 701 888 66 43</span>
					</Link>
					<Link
						href="https://2gis.kz/astana/firm/70000001018130088/71.43893%2C51.124309?m=71.439565%2C51.123237%2F17.41%2Fr%2F3.4"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPin className="text-secondary block transition-colors" />
						<span>{t(`pages.contacts.address`)}</span>
					</Link>
					<Link
						href="https://gov.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>gov.kz</span>
					</Link>
				</div>
				<div className="max-w-[194px]">
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`pages.contacts.communicationLine`)}</h3>
					<Link
						href={`tel:+77712886597`}
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPhone className="text-secondary block transition-colors" />
						<span> +7 771 288 65 97</span>
					</Link>
					<Link
						href={`mailto:office@res2026expo.kz`}
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

function ResponsibleMinistrySection({ t }: SectionProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	const infoRef = useRef<HTMLDivElement>(null)
	const logoRef = useRef<HTMLDivElement>(null)

	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(infoRef, { y: 50, delay: 0.2 })
	useAnimSlide(logoRef, { y: 50, delay: 0.25 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
			>
				{t(`titles.responsibleMinistry`)}
			</h2>
			<div className="flex items-start justify-between gap-5">
				<div
					ref={infoRef}
					className="max-w-[473px] translate-y-[50px] opacity-0"
				>
					<h3 className="text-text mb-[20px] text-[16px] leading-none font-bold">{t(`titles.ministryOfEnvironment`)}</h3>
					<Link
						href="https://2gis.kz/astana/firm/70000001018130088/71.43893%2C51.124309?m=71.439565%2C51.123237%2F17.41%2Fr%2F3.4"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPin className="text-secondary block transition-colors" />
						<span>{t(`pages.contacts.address`)}</span>
					</Link>
					<Link
						href="https://gov.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>gov.kz</span>
					</Link>
				</div>

				<div
					ref={logoRef}
					className="text-text flex max-w-[806px] translate-y-[50px] items-center justify-center gap-[20px] text-[24px] leading-none font-normal opacity-0"
				>
					<Image
						src="/imgs/kz-gerb.png"
						alt="Kazakhstan"
						width={64}
						height={67}
						className="block"
					/>
					<span>{t(`pages.contacts.ministryOfEnvironment`)}</span>
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

	useAnimSlide(titleRef, { y: 50, delay: 0.1 })
	useAnimSlide(linksRef, { y: 50, delay: 0.2 })
	useAnimSlide(textRef, { y: 50, delay: 0.25 })
	useAnimSlide(mapRef, { y: 50, delay: 0.3 })

	return (
		<>
			<h2
				ref={titleRef}
				className="text-text mb-[30px] translate-y-[50px] text-[32px] leading-none font-bold opacity-0"
			>
				{t(`titles.venue`)}
			</h2>
			<div className="flex items-start justify-between gap-5">
				<div
					ref={linksRef}
					className="max-w-[473px] translate-y-[50px] opacity-0"
				>
					<Link
						href="https://2gis.kz/astana/firm/70000001018130088/71.43893%2C51.124309?m=71.439565%2C51.123237%2F17.41%2Fr%2F3.4"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconPin className="text-secondary block transition-colors" />
						<span>{t(`pages.contacts.eventAddress`)}</span>
					</Link>
					<Link
						href="https://gov.kz"
						target="_blank"
						className="text-text hover:text-muted mb-[20px] flex items-center justify-start gap-[10px] text-[16px] font-normal transition-colors last:mb-0"
					>
						<IconGlobal className="text-secondary block transition-colors" />
						<span>gov.kz</span>
					</Link>
				</div>

				<div
					ref={textRef}
					className="text-text max-w-[316px] translate-y-[50px] text-[14px] leading-normal font-normal opacity-0"
				>
					{t(`pages.contacts.text`)}
				</div>

				<div
					ref={mapRef}
					className="aspect-[4.2] max-w-[716px] grow translate-y-[50px] opacity-0"
				>
					<iframe
						id="map_279913141"
						frameBorder="0"
						src="https://makemap.2gis.ru/widget?data=eJw1jkFvgzAMhf-Ld0VVEpLS5Ad02q23Spt6QMTbIgWMgiu1Q_z3Gdh8svz83vtmoBKxYHxF6pFLwgnCxwz8HBECnLHle0GoYCw0YuFNn6GjTEX0F2VO-tOIzonz6pA14tSVNHKiYT_8vA0RHxC0-p-lgq-98LnG_bVdKA0s_x0JVBpa3mAafbBa17WvnD4ob2pzE3uKEKyzy62Cvh0vNKW9b4bcMgR51cY7722j3OkoZsirvIbZ2iqnna6PjRE4ol7QjGQKNuV8_UbM79uVyx2XXxioWJ0"
						sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
						className="h-full w-full rounded-[12px]"
					></iframe>
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
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				className="bg-secondary h-[343px] bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat pt-[176px]"
			>
				<Container>
					<h1
						ref={TitleRef}
						className="mb-[30px] translate-y-[50px] text-center text-[48px] leading-none font-bold text-white opacity-0"
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

			<section className="bg-white pt-[100px]">
				<Container>
					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<OrganizersSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<MeprSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<ContactPersonsSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<ResponsibleMinistrySection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<OrganizationQuestionsSection t={t} />
					</div>

					<div className="border-b-solid mb-[40px] border-b border-b-[#D3E1F3] pb-[40px] last:mb-0">
						<VenueSection t={t} />
					</div>
				</Container>
			</section>
		</>
	)
}
