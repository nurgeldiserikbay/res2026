import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function ExbFactsAndNumbers() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="rounded-[12px] bg-[#02493F] bg-[url('/imgs/usefulls/facts-and-numbers-bg.png')] bg-cover bg-center bg-no-repeat p-[20px] py-[57px] lg:px-[55px] lg:pt-[60px] lg:pb-[55px]">
					<h2 className="mx-auto mb-[65px] max-w-[302px] text-center text-[32px] leading-[1.2] font-bold text-white sm:max-w-none lg:text-left xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]">
						{t('pages.exhibition.factsAndNumbers.title')}
					</h2>
					{/* <p className="mb-[65px] text-center text-[20px] leading-none font-normal text-white lg:text-left lg:text-[22px] xl:text-[24px] 2xl:text-[24px]">
						{t('pages.exhibition.factsAndNumbers.text')}
					</p> */}

					<div className="grid grid-cols-1 items-start gap-y-[30px] md:grid-cols-2 lg:items-start lg:justify-between xl:flex xl:gap-x-[30px] 2xl:gap-x-[60px]">
						<div className="flex flex-col items-center justify-start text-center md:max-w-[339px]">
							<Image
								src="/imgs/exhibition/factsAndNumbers-1.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="mb-[10px] text-[20px] leading-normal font-bold text-white md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
								{t('pages.exhibition.factsAndNumbers.fact1Title')}
							</div>
							<div className="text-[16px] leading-normal font-normal text-white">{t('pages.exhibition.factsAndNumbers.fact1Text')}</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center md:max-w-[339px]">
							<Image
								src="/imgs/exhibition/factsAndNumbers-2.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="mb-[10px] text-[20px] leading-normal font-bold text-white md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
								{t('pages.exhibition.factsAndNumbers.fact2Title')}
							</div>
							<div className="text-[16px] leading-normal font-normal text-white">{t('pages.exhibition.factsAndNumbers.fact2Text')}</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center md:max-w-[339px]">
							<Image
								src="/imgs/exhibition/factsAndNumbers-3.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="mb-[10px] text-[20px] leading-normal font-bold text-white md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
								{t('pages.exhibition.factsAndNumbers.fact3Title')}
							</div>
							<div className="text-[16px] leading-normal font-normal text-white">{t('pages.exhibition.factsAndNumbers.fact3Text')}</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center md:max-w-[339px]">
							<Image
								src="/imgs/exhibition/factsAndNumbers-4.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="mb-[10px] text-[20px] leading-normal font-bold text-white md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
								{t('pages.exhibition.factsAndNumbers.fact4Title')}
							</div>
							<div className="text-[16px] leading-normal font-normal text-white">{t('pages.exhibition.factsAndNumbers.fact4Text')}</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
