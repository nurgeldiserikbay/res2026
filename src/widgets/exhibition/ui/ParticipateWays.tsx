import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function ParticipateWays() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="rounded-[12px] bg-[#02493F] bg-[url('/imgs/usefulls/facts-and-numbers-bg.png')] bg-cover bg-center bg-no-repeat p-[20px] py-[57px] lg:px-[55px] lg:pt-[60px] lg:pb-[73px]">
					<h2 className="mx-auto mb-[84px] max-w-[302px] text-center text-[32px] leading-[1.2] font-bold text-white sm:max-w-none lg:text-left xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]">
						{t('pages.exhibition.participateWays.title')}
					</h2>

					<div className="grid grid-cols-1 items-start gap-y-[30px] md:grid-cols-2 lg:items-start lg:justify-between xl:flex xl:gap-x-[30px] 2xl:gap-x-[60px]">
						<div className="flex flex-col items-center justify-start text-center xl:max-w-[339px]">
							<Image
								src="/imgs/exhibition/ParticipateWays-1.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item1')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center xl:max-w-[339px]">
							<Image
								src="/imgs/exhibition/ParticipateWays-2.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item2')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center xl:max-w-[339px]">
							<Image
								src="/imgs/exhibition/ParticipateWays-3.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item3')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center xl:max-w-[339px]">
							<Image
								src="/imgs/exhibition/ParticipateWays-4.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item4')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start text-center xl:max-w-[339px]">
							<Image
								src="/imgs/exhibition/ParticipateWays-5.svg"
								alt="Fact 1"
								width={79}
								height={79}
								className="mb-[10px]"
							/>
							<div className="text-[20px] leading-normal font-bold whitespace-pre-line text-white md:text-[22px] xl:text-[24px]">
								{t('pages.exhibition.participateWays.item5')}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
