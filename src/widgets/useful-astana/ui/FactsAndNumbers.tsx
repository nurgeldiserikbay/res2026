import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function FactsAndNumbers() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="rounded-[12px] bg-[#02493F] bg-[url('/imgs/usefulls/facts-and-numbers-bg.png')] bg-cover bg-center bg-no-repeat p-[20px] py-[57px] lg:px-[55px] lg:pt-[60px] lg:pb-[75px]">
					<h2 className="3xl:text-[48px] mx-auto mb-[60px] max-w-[302px] text-center text-[32px] leading-[1.2] font-bold text-white sm:max-w-none lg:text-left xl:text-[36px] 2xl:text-[30px]">
						{t('pages.useful.astana.factsAndNumbers.title')}
					</h2>

					<div className="grid grid-cols-1 items-start gap-y-[30px] lg:grid-cols-2 lg:items-start lg:justify-between xl:flex xl:gap-x-[30px] 2xl:gap-x-[60px]">
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="3xl:text-[96px] mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px]">
								1,4+
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px] 2xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact1')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="3xl:text-[96px] mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px]">
								50+
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact2')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="3xl:text-[96px] mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px]">
								≈ 800 км²
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact3')}
							</div>
						</div>
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="3xl:text-[96px] mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[56px] xl:text-[64px] 2xl:text-[82px]">
								3+
							</div>
							<div className="text-[20px] leading-normal font-normal text-white lg:text-[22px] xl:text-[24px]">
								{t('pages.useful.astana.factsAndNumbers.fact4')}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
