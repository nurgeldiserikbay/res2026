'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'
import { Container } from '@/shared/ui/container/container'
import { AboutSummit } from '@/widgets/aboutSummit/ui/AboutSummit'
import { NewsTab } from '@/widgets/news/ui/NewsTab'
import { PartnersList } from '@/widgets/partners/ui/PartnersList'
import { Programms } from '@/widgets/programms/ui/Programms'
import { Speakers } from '@/widgets/speakers/ui/Speakers'
import { Timer } from '@/widgets/timer/ui/Timer'

export default function Home() {
	const t = useTranslations()

	const BannerRef = useRef<HTMLDivElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
	})
	const RegionalRef = useRef<HTMLDivElement>(null)
	useAnimSlide(RegionalRef, { y: 90, delay: 0.1 })
	const EnvironmentRef = useRef<HTMLDivElement>(null)
	useAnimSlide(EnvironmentRef, { y: 130, delay: 0.15 })
	const SummitRef = useRef<HTMLDivElement>(null)
	useAnimSlide(SummitRef, { y: 180, delay: 0.2 })
	const BannerTextRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BannerTextRef, { y: 180, delay: 0.25 })
	const BannerDateRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BannerDateRef, { y: 180, delay: 0.3 })
	const NewsTitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(NewsTitleRef, { x: -90, y: 0, delay: 0.1 })
	const NewsButtonRef = useRef<HTMLButtonElement>(null)
	useAnimSlide(NewsButtonRef as React.RefObject<HTMLElement>, { x: 90, y: 0, delay: 0.2 })
	const PartnersTitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(PartnersTitleRef, { x: -90, y: 0, delay: 0.1 })
	const PartnersText1Ref = useRef<HTMLParagraphElement>(null)
	useAnimSlide(PartnersText1Ref, { y: 50, delay: 0.2 })
	const PartnersText2Ref = useRef<HTMLParagraphElement>(null)
	useAnimSlide(PartnersText2Ref, { y: 50, delay: 0.3 })
	const PartnersImageRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PartnersImageRef, { y: 50, delay: 0.4 })
	const ConnectionBannerRef = useRef<HTMLDivElement>(null)
	useAnimBg(ConnectionBannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
	})
	const ConnectionTextRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(ConnectionTextRef, { y: 50, delay: 0.1 })
	const ConnectionImageRef = useRef<HTMLDivElement>(null)
	useAnimSlide(ConnectionImageRef, { x: -200, y: 0, delay: 0.2 })
	const ConnectionButtonRef = useRef<HTMLDivElement>(null)
	useAnimSlide(ConnectionButtonRef, { y: 50, delay: 0.3 })

	return (
		<>
			<section
				ref={BannerRef}
				className="bg-primary-dark min-h-[945px] bg-[url('/imgs/home-banner-bg.png')] bg-cover bg-center bg-no-repeat pt-[132.5px]"
			>
				<Container className="flex flex-col items-center justify-center">
					<h1 className="mb-[30px] w-full max-w-[790px] text-center text-[111px] leading-[0.96] font-bold text-white">
						<div
							ref={RegionalRef}
							className="text-muted-light block translate-y-[-90px] transform opacity-0"
						>
							Regional
						</div>{' '}
						<div
							ref={EnvironmentRef}
							className="block translate-y-[-130px] transform opacity-0"
						>
							Ecological
						</div>{' '}
						<div
							ref={SummitRef}
							className="block translate-y-[-180px] transform opacity-0"
						>
							Summit 2026
						</div>
					</h1>
					<div
						ref={BannerTextRef}
						className="relative z-1 mb-[20px] max-w-[586px] translate-y-[-180px] transform text-center text-[40px] leading-[1.2] font-medium text-white opacity-0 before:absolute before:top-1/2 before:left-1/2 before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:text-center before:text-[47px] before:leading-[1.2] before:font-medium before:text-[#ffffff]/10 before:content-['Shared_Vision_For_Resilient_Future_in_Central_Asia']"
					>
						{'Shared Vision For Resilient Future in Central Asia'}
					</div>
					<div
						ref={BannerDateRef}
						className="mb-[25.5px] flex translate-y-[-180px] transform items-center justify-center gap-[30px] opacity-0"
					>
						<div
							className="align-top text-[96px] leading-none font-bold"
							style={{
								background: 'linear-gradient(to bottom, #E0EAB8 0%, rgba(212, 216, 195, 0) 95%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
								color: 'transparent',
							}}
						>
							20-23
						</div>
						<div className="text-[24px] leading-none font-light text-white">
							<div className="opacity-40">апреля</div>
							<div>Астана, Казахстан</div>
						</div>
					</div>

					<Timer targetDate={new Date('2026-04-20')} />
				</Container>
			</section>

			<AboutSummit />

			<Programms />

			<Speakers />

			<section className="bg-horizontal-lines bg-white py-[100px]">
				<Container>
					<div className="mb-[70px] flex items-center justify-between">
						<h2
							ref={NewsTitleRef}
							className="text-text translate-x-[-90px] text-[48px] leading-none font-bold opacity-0"
						>
							{t('titles.news')}
						</h2>

						<ButtonDefault
							ref={NewsButtonRef as React.RefObject<HTMLButtonElement>}
							className="translate-x-[90px] opacity-0"
						>
							{t('labels.allNews')}
						</ButtonDefault>
					</div>

					<NewsTab />
				</Container>
			</section>

			<section className="bg-horizontal-lines bg-white pb-[100px]">
				<Container className="flex items-start justify-between">
					<div className="max-w-[402px] grow">
						<h2
							ref={PartnersTitleRef}
							className="text-text mb-[70px] max-w-[376px] translate-x-[-90px] text-[48px] leading-none font-bold opacity-0"
						>
							{t('titles.partners')}
						</h2>
						<p
							ref={PartnersText1Ref}
							className="text-text mb-[30px] translate-y-[50px] text-[24px] leading-normal font-bold opacity-0"
						>
							{t(`pages.partners.text`)}
						</p>
						<p
							ref={PartnersText2Ref}
							className="text-text mb-[70px] translate-y-[50px] text-[16px] leading-normal font-normal opacity-0"
						>
							{t(`pages.partners.text1`)}
						</p>

						<div
							ref={PartnersImageRef}
							className="translate-y-[50px] opacity-0"
						>
							<Image
								src="/imgs/partners-banner.png"
								alt="Partners"
								width={402}
								height={191}
								className="block"
							/>
						</div>
					</div>

					<div className="max-w-[1180px] grow">
						<PartnersList />
					</div>
				</Container>
			</section>

			<section className="bg-horizontal-lines bg-white">
				<Container>
					<div
						ref={ConnectionBannerRef}
						className="relative rounded-[17px] bg-[url('/imgs/connection-banner.png')] bg-cover bg-center bg-no-repeat px-[36px] pt-[58px] pb-[84px]"
					>
						<div className="max-w-[1196px]">
							<p
								ref={ConnectionTextRef}
								className="font-regular mb-[55px] translate-y-[50px] text-left text-[40px] leading-[1.3] text-white opacity-0"
							>
								{t(`pages.connectionBanner.text`)}
							</p>
							<div
								ref={ConnectionButtonRef}
								className="translate-y-[50px] opacity-0"
							>
								<ButtonTree>{t('commands.join')}</ButtonTree>
							</div>
						</div>
						<div
							ref={ConnectionImageRef}
							className="absolute top-0 right-0 bottom-0 translate-x-[-200px] opacity-0"
						>
							<Image
								src="/imgs/connection.png"
								alt="Connection"
								width={811}
								height={414}
								className="block h-[full] w-auto"
							/>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
