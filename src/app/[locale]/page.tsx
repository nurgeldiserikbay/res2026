'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useRouter } from '@/i18n/navigation'
import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'
import { Container } from '@/shared/ui/container/container'
import { AboutSummit } from '@/widgets/aboutSummit/ui/AboutSummit'
import { NewsTab } from '@/widgets/news/ui/NewsTab'
import { PartnersList } from '@/widgets/partners/ui/PartnersList'
// import { Programms } from '@/widgets/programms/ui/Programms'
// import { Speakers } from '@/widgets/speakers/ui/Speakers'
import { Timer } from '@/widgets/timer/ui/Timer'

export default function Home() {
	const t = useTranslations()
	const router = useRouter()

	const BannerRef = useRef<HTMLDivElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/home-banner-bg.png',
	})
	const RegionalRef = useRef<HTMLDivElement>(null)
	useAnimSlide(RegionalRef, { y: 90, delay: 0.1, immediate: true })
	const EnvironmentRef = useRef<HTMLDivElement>(null)
	useAnimSlide(EnvironmentRef, { y: 130, delay: 0.15, immediate: true })
	const SummitRef = useRef<HTMLDivElement>(null)
	useAnimSlide(SummitRef, { y: 180, delay: 0.2, immediate: true })
	const BannerTextRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BannerTextRef, { y: 180, delay: 0.25, immediate: true })
	const BannerDateRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BannerDateRef, { y: 180, delay: 0.25, immediate: true })
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
	const PartnersImageMobileRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PartnersImageMobileRef, { y: 50, delay: 0.4 })
	const ConnectionBannerRef = useRef<HTMLDivElement>(null)
	useAnimBg(ConnectionBannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/connection-banner.png',
	})
	const ConnectionTextRef = useRef<HTMLParagraphElement>(null)
	useAnimSlide(ConnectionTextRef, { y: 50, delay: 0.1 })
	const ConnectionImageRef = useRef<HTMLDivElement>(null)
	useAnimSlide(ConnectionImageRef, { x: -200, y: 0, delay: 0.2 })
	const ConnectionButtonRef = useRef<HTMLDivElement>(null)
	useAnimSlide(ConnectionButtonRef, { y: 50, delay: 0.3 })
	console.log('process.env.NEXT_PUBLIC_GIT_BRANCH', process.env.NEXT_PUBLIC_GIT_BRANCH)
	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className="bg-primary-dark min-h-screen pt-[240px] pb-[64px] sm:pt-[132.5px]"
			>
				<Container className="relative z-10 flex flex-col items-center justify-center">
					<h1 className="xs:text-[52px] 3xl:text-[111px] mb-[30px] w-full max-w-[790px] text-center text-[38px] leading-[0.96] font-bold text-white sm:text-[82px] xl:text-[98px]">
						<div
							ref={RegionalRef}
							className="text-muted-light block translate-y-[-90px] transform opacity-0"
						>
							{t(`titles.Regional`)}
						</div>{' '}
						<div
							ref={EnvironmentRef}
							className="block translate-y-[-130px] transform opacity-0"
						>
							{t(`titles.Ecological`)}
						</div>{' '}
						<div
							ref={SummitRef}
							className="block translate-y-[-180px] transform opacity-0"
						>
							{t(`titles.Summit2026`)}
						</div>
					</h1>
					<div
						ref={BannerTextRef}
						className="3xl:text-[40px] relative z-10 mb-[20px] max-w-[467px] translate-y-[-180px] transform text-center text-[32px] leading-[1.2] font-medium text-white opacity-0 md:text-[36px] xl:text-[38px]"
					>
						{t(`titles.slogan`)}
					</div>
					<div
						ref={BannerDateRef}
						className="mb-[25.5px] flex translate-y-[-180px] transform items-center justify-center gap-[30px] opacity-0"
					>
						<div
							className="xs:text-[64px] align-top text-[44px] leading-none font-bold sm:text-[72px] md:text-[80px] xl:text-[96px]"
							style={{
								background: 'linear-gradient(to bottom, #E0EAB8 0%, rgba(212, 216, 195, 0) 95%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
								color: 'transparent',
							}}
						>
							22-24
						</div>
						<div className="xs:text-[20px] text-[16px] leading-none font-light text-white md:text-[22px] xl:text-[24px]">
							<div className="opacity-40">{t('titles.april')}</div>
							<div>{t('titles.eventAddress')}</div>
						</div>
					</div>

					<Timer targetDate={new Date('2026-04-22T10:00:00')} />
				</Container>
			</section>

			<AboutSummit />

			<section className="bg-white">
				<Container className="flex flex-wrap items-start justify-between gap-x-8 gap-y-[30px] lg:flex-nowrap">
					<div className="grow lg:max-w-[400px] xl:max-w-[560px]">
						<h2
							ref={PartnersTitleRef}
							className="text-text 3xl:text-[48px] mb-[30px] max-w-[376px] translate-x-[-90px] text-[32px] leading-none font-bold opacity-0 lg:text-[36px] xl:mb-[50px] xl:text-[40px] 2xl:mb-[70px] 2xl:text-[44px]"
						>
							{t('pages.partners.title')}
						</h2>
						<p
							ref={PartnersText1Ref}
							className="text-text mb-[30px] translate-y-[50px] text-[20px] leading-normal font-bold opacity-0 md:text-justify xl:text-[22px] 2xl:text-[24px]"
						>
							{t(`pages.partners.text`)}
						</p>
						<p
							ref={PartnersText2Ref}
							className="text-text mb-[30px] translate-y-[50px] text-[16px] leading-normal font-normal opacity-0 md:mb-[40px] md:text-justify lg:mb-[50px] 2xl:mb-[70px]"
						>
							{t(`pages.partners.text1`)}
						</p>

						<div
							ref={PartnersImageRef}
							className="hidden translate-y-[50px] opacity-0 lg:block"
						>
							<Image
								src="/imgs/partners-banner-list.png"
								alt="Partners"
								width={560}
								height={946}
								className="block"
							/>
						</div>
						<div
							ref={PartnersImageMobileRef}
							className="translate-y-[50px] opacity-0 lg:hidden"
						>
							<Image
								src="/imgs/partners-banner.png"
								alt="Partners"
								width={560}
								height={389}
								className="block"
							/>
						</div>
					</div>

					<div className="max-w-[1024px] grow">
						<PartnersList />
					</div>
				</Container>
			</section>

			{/* <Programms /> */}

			{/* <Speakers /> */}

			{!appConfig.isProduction && (
				<section className="3xl:py-[100px] bg-white py-[50px] md:py-[60px] 2xl:py-[80px]">
					<Container>
						<div className="xs:flex-nowrap mb-[30px] flex flex-wrap items-center justify-between gap-5 md:mb-[40px] lg:mb-[50px] 2xl:mb-[70px]">
							<h2
								ref={NewsTitleRef}
								className="text-text 3xl:text-[48px] translate-x-[-90px] text-[32px] leading-none font-bold opacity-0 lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
							>
								{t('titles.news')}
							</h2>

							<ButtonDefault
								ref={NewsButtonRef as React.RefObject<HTMLButtonElement>}
								className="translate-x-[90px] opacity-0"
								onClick={() => {
									router.push('/news')
								}}
							>
								{t('labels.allNews')}
							</ButtonDefault>
						</div>

						<NewsTab />
					</Container>
				</section>
			)}

			{!appConfig.isProduction && (
				<section className="bg-white">
					<Container>
						<div
							ref={ConnectionBannerRef}
							data-animated-banner
							className="relative rounded-[17px] px-[36px] pt-[58px] pr-[28px] pb-[181px] md:pr-[36px] md:pb-[84px]"
						>
							<div className="3xl:max-w-[1196px] relative z-10 max-w-full sm:max-w-[400px] xl:max-w-[700px] 2xl:max-w-[900px]">
								<p
									ref={ConnectionTextRef}
									className="font-regular 3xl:text-[40px] xs:text-[24px] mb-[55px] translate-y-[50px] text-left text-[20px] leading-[1.3] text-white opacity-0 xl:text-[28px] 2xl:text-[32px]"
								>
									{t(`pages.connectionBanner.text`)}
								</p>
								<div
									ref={ConnectionButtonRef}
									className="translate-y-[50px] opacity-0"
								>
									<ButtonTree
										className={[
											'w-full before:bg-[url("/imgs/btn-mask-tree-yellow.svg")]! before:bg-blend-normal! md:w-auto md:before:bg-[url("/imgs/btn-mask-tree.svg")]! md:before:bg-blend-overlay!',
										].join(' ')}
									>
										{t('commands.join')}
									</ButtonTree>
								</div>
							</div>
							<div
								ref={ConnectionImageRef}
								className="absolute right-0 bottom-0 translate-x-[-200px] opacity-0 sm:-bottom-[65px] md:bottom-0"
							>
								<Image
									src="/imgs/connection.png"
									alt="Connection"
									width={811}
									height={414}
									className="hidden h-[280px] w-auto sm:block lg:h-[414px]"
								/>
								<Image
									src="/imgs/connection-map.png"
									alt="Connection"
									width={279}
									height={212}
									className="block h-[212px] w-auto sm:hidden"
								/>
							</div>
						</div>
					</Container>
				</section>
			)}
		</>
	)
}
