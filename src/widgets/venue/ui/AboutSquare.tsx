import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function AboutSquare() {
	const t = useTranslations()

	const aboutSquare = [
		{
			id: 1,
			title: t('pages.useful.venue.aboutSquare.infoTitle1'),
			text: t('pages.useful.venue.aboutSquare.infoText1'),
		},
		{
			id: 2,
			title: t('pages.useful.venue.aboutSquare.infoTitle2'),
			text: t('pages.useful.venue.aboutSquare.infoText2'),
		},
	]

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-wrap-reverse items-start justify-between gap-x-[50px] gap-y-[30px] lg:flex-nowrap">
				<div className="w-full shrink xl:max-w-[715px]">
					<div className="mb-[30px] md:mb-[50px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[124px]">
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:mb-[60px] xl:text-[36px] 2xl:text-[30px]">
							{t('pages.useful.venue.aboutSquare.title')}
						</h2>

						<Image
							src="/imgs/usefulls/venue-banner-mob.png"
							alt="Astana Square"
							width={374}
							height={396}
							className="mb-[30px] w-full max-w-[450px] md:hidden lg:w-[671px]"
						/>

						<p className="text-text mb-[30px] text-[18px] leading-normal font-normal whitespace-pre-line lg:mb-[60px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
							{t('pages.useful.venue.aboutSquare.text1')}
						</p>
						<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line lg:mb-[88px]">
							{t('pages.useful.venue.aboutSquare.text2')}
						</p>

						<div className="grid grid-cols-1 items-stretch gap-x-[60px] gap-y-[30px] bg-white sm:grid-cols-2">
							{aboutSquare.map((aboutSquare) => (
								<div
									key={aboutSquare.id}
									className="flex flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#ADF0BF] to-[#D4D8C300] px-[35px] pt-[26px] pb-[26px] text-center"
								>
									<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap lg:text-[48px]">
										{aboutSquare.title}
									</h3>
									<div className="text-secondary text-[16px] leading-normal font-normal">{aboutSquare.text}</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:mb-[60px] xl:text-[36px] 2xl:text-[30px]">
							{t('pages.useful.venue.safeAndComfort.title')}
						</h2>

						<div className="grid grid-cols-1 items-stretch gap-x-[40px] gap-y-[30px] bg-white sm:grid-cols-3">
							<div className="flex flex-col items-center justify-start text-center">
								<Image
									src="/imgs/usefulls/safety-1.svg"
									alt="Safe and Comfort"
									width={107}
									height={107}
									className="mb-[60px]"
								/>
								<h3 className="text-text text-[16px] leading-normal font-normal whitespace-nowrap lg:text-[18px] 2xl:text-[20px]">
									{t('pages.useful.venue.safeAndComfort.text1')}
								</h3>
							</div>
							<div className="flex flex-col items-center justify-start text-center">
								<Image
									src="/imgs/usefulls/safety-2.svg"
									alt="Safe and Comfort"
									width={107}
									height={107}
									className="mb-[60px]"
								/>
								<h3 className="text-text text-[16px] leading-normal font-normal whitespace-nowrap lg:text-[18px] 2xl:text-[20px]">
									{t('pages.useful.venue.safeAndComfort.text2')}
								</h3>
							</div>
							<div className="flex flex-col items-center justify-start text-center">
								<Image
									src="/imgs/usefulls/safety-3.svg"
									alt="Safe and Comfort"
									width={107}
									height={107}
									className="mb-[60px]"
								/>
								<h3 className="text-text text-[16px] leading-normal font-normal whitespace-nowrap lg:text-[18px] 2xl:text-[20px]">
									{t('pages.useful.venue.safeAndComfort.text3')}
								</h3>
							</div>
						</div>
					</div>
				</div>

				<Image
					src="/imgs/usefulls/square.png"
					alt="Astana Square"
					width={1025}
					height={1085}
					className="hidden w-full shrink-4 md:max-w-[37%] lg:w-[571px] lg:max-w-[30%] xl:block xl:max-w-[57%] 2xl:w-[1025px]"
				/>
			</Container>
		</section>
	)
}
