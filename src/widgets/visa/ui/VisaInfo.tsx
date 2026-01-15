import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function VisaInfo() {
	const t = useTranslations()

	return (
		<>
			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] lg:grid-cols-2 lg:gap-x-[60px]">
					<Image
						src="/imgs/usefulls/visa-1.png"
						alt="Visa Info"
						width={870}
						height={705}
						className="block w-full rounded-[12px]"
					/>

					<div>
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
							{t('pages.useful.visa.infoTitle')}
						</h2>
						<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line">
							{t('pages.useful.visa.infoText1')}
						</p>
						<p className="text-text text-[16px] leading-normal font-medium whitespace-pre-line">{t('pages.useful.visa.infoText2')}</p>
						<ul className="mb-[30px] pl-[5px]">
							<li>1. {t('pages.useful.visa.infoText21')} </li>
							<li>2. {t('pages.useful.visa.infoText22')} </li>
							<li>3. {t('pages.useful.visa.infoText23')} </li>
						</ul>
						<p className="text-text mb-[30px] text-[16px] leading-normal font-medium whitespace-pre-line">
							{t('pages.useful.visa.infoText3')}
						</p>
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:mb-[60px] xl:text-[36px] 2xl:mb-[60px] 2xl:text-[30px]">
							{t('pages.useful.visa.processingTimeTitle')}
						</h2>

						<div className="flex flex-col items-center justify-center rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] p-[26px] text-center">
							<div className="text-[16px] leading-normal font-normal text-[#41754F]">{t('pages.useful.visa.processingTimeText1')}</div>
							<h3 className="xs:text-[24px] text-[20px] leading-normal font-bold whitespace-nowrap text-[#41754F] sm:text-[28px] md:text-[32px] xl:text-[48px]">
								{t('pages.useful.visa.processingTimeText2')}
							</h3>
							<div className="text-[16px] leading-normal font-normal text-[#41754F]">{t('pages.useful.visa.processingTimeText3')}</div>
						</div>
					</div>
				</Container>
			</section>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 md:gap-x-[60px]">
					<div>
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:mb-[60px] 2xl:text-[30px]">
							{t('pages.useful.visa.visaFreeTitle')}
						</h2>
						<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
							{t('pages.useful.visa.visaFreeText')}
						</p>
					</div>
					<div className="flex items-center justify-center">
						<div className="flex flex-wrap items-center justify-center gap-[22px]">
							{new Array(8).fill(0).map((_, index) => (
								<Image
									key={index}
									src={`/imgs/flags/flag-${index + 1}.svg`}
									alt="Visa Free"
									width={89}
									height={89}
									className="block rounded-[12px]"
								/>
							))}
						</div>
					</div>
				</Container>
			</section>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 md:gap-x-[60px]">
					<div>
						<Image
							src="/imgs/usefulls/visa-2.png"
							alt="Visa Info"
							width={870}
							height={344}
							className="mb-[30px] block w-full rounded-[12px] md:mb-[45px] xl:mb-[72px]"
						/>
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
							{t('pages.useful.visa.visaJoinTitle')}
						</h2>
						<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
							{t('pages.useful.visa.visaJoinText1')}
						</p>
						<p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">{t('pages.useful.visa.visaJoinText2')}</p>
					</div>
					<div>
						<Image
							src="/imgs/usefulls/visa-3.png"
							alt="Visa Info"
							width={870}
							height={344}
							className="mb-[30px] block w-full rounded-[12px] md:mb-[45px] xl:mb-[72px]"
						/>
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
							{t('pages.useful.visa.eVisaTitle')}
						</h2>
						<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
							{t('pages.useful.visa.eVisaText1')}
						</p>
						<p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">{t('pages.useful.visa.eVisaText2')}</p>
					</div>
				</Container>
			</section>
		</>
	)
}
