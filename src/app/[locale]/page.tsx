import Image from 'next/image'
import { useTranslations } from 'next-intl'

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

	return (
		<>
			<section className="h-100vh bg-primary-dark min-h-[945px] bg-[url('/imgs/home-banner-bg.png')] bg-cover bg-center bg-no-repeat pt-[157px]">
				<Container className="flex flex-col items-center justify-center">
					<h1 className="mb-[50px] max-w-[790px] text-center text-[128px] leading-[0.85] font-bold text-white">
						<span className="text-muted-light">Regional</span> <br /> Environment <br /> Summit 2026
					</h1>
					<div className="mb-[49px] flex w-full max-w-[1279px] items-center justify-between gap-[20px]">
						<div className="max-w-[483px] text-left text-[40px] leading-[1.2] font-normal text-white">
							{'Shared Vision For Resilient Future in Central Asia'}
						</div>
						<div>
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
							<div className="text-[24px] leading-[1.2] font-light text-white">апреля</div>
						</div>
						<div className="font-regular text-left text-[16px] leading-[1.2] text-white">
							<div className="mb-[15px] max-w-[183px]">\\{t('titles.strategicPartner')}</div>
							<Image
								src="/imgs/un.svg"
								width={159}
								height={49}
								alt="UN Environment"
								className="block"
							/>
						</div>
						<div className="font-regular text-left text-[16px] leading-[1.2] text-white">
							<div className="mb-[15px] max-w-[183px]">\\{t('titles.strategicPartner')}</div>
							<Image
								src="/imgs/cnn.svg"
								width={101}
								height={48}
								alt="CNN"
								className="block"
							/>
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
						<h2 className="text-text text-[48px] leading-none font-bold">{t('titles.news')}</h2>

						<ButtonDefault>{t('labels.allNews')}</ButtonDefault>
					</div>

					<NewsTab />
				</Container>
			</section>

			<section className="bg-horizontal-lines bg-white pb-[100px]">
				<Container className="flex items-start justify-between">
					<div className="max-w-[402px] grow">
						<h2 className="text-text mb-[70px] max-w-[376px] text-[48px] leading-none font-bold">{t('titles.partners')}</h2>
						<p className="text-text mb-[30px] text-[24px] leading-normal font-bold">{t(`pages.partners.text`)}</p>
						<p className="text-text mb-[70px] text-[16px] leading-normal font-normal">{t(`pages.partners.text1`)}</p>

						<Image
							src="/imgs/partners-banner.png"
							alt="Partners"
							width={402}
							height={191}
							className="block"
						/>
					</div>

					<div className="max-w-[1180px] grow">
						<PartnersList />
					</div>
				</Container>
			</section>

			<section className="bg-horizontal-lines bg-white">
				<Container>
					<div className="relative rounded-[17px] bg-[url('/imgs/connection-banner.png')] bg-cover bg-center bg-no-repeat px-[36px] pt-[58px] pb-[84px]">
						<div className="max-w-[1196px]">
							<p className="font-regular mb-[55px] text-left text-[40px] leading-[1.3] text-white">{t(`pages.connectionBanner.text`)}</p>
							<ButtonTree>{t('commands.join')}</ButtonTree>
						</div>
						<Image
							src="/imgs/connection.png"
							alt="Connection"
							width={811}
							height={414}
							className="absolute top-0 right-0 bottom-0 block h-[full] w-auto"
						/>
					</div>
				</Container>
			</section>
		</>
	)
}
