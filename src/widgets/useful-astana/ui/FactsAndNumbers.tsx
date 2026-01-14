import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function FactsAndNumbers() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="rounded-[12px] bg-[#02493F] bg-[url('/imgs/usefulls/facts-and-numbers-bg.png')] bg-cover bg-center bg-no-repeat p-[30px] lg:px-[55px] lg:pt-[60px] lg:pb-[75px]">
					<h2 className="3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold text-white xl:mb-[60px] xl:text-[36px] 2xl:text-[30px]">
						{t('pages.useful.astana.factsAndNumbers.title')}
					</h2>

					<div className="grid grid-cols-1 items-start gap-x-[60px] gap-y-[30px] md:grid-cols-2 lg:flex lg:items-start lg:justify-between">
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[76px] xl:text-[82px] 2xl:text-[96px]">
								1,4+
							</div>
							<div className="text-[24px] leading-normal font-bold text-white">{t('pages.useful.astana.factsAndNumbers.fact1')}</div>
						</div>
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[76px] xl:text-[82px] 2xl:text-[96px]">
								50+
							</div>
							<div className="text-[24px] leading-normal font-bold text-white">{t('pages.useful.astana.factsAndNumbers.fact2')}</div>
						</div>
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[76px] xl:text-[82px] 2xl:text-[96px]">
								≈ 800 км²
							</div>
							<div className="text-[24px] leading-normal font-bold text-white">{t('pages.useful.astana.factsAndNumbers.fact3')}</div>
						</div>
						<div className="flex flex-col items-center justify-start self-start text-center">
							<div className="mb-[10px] text-[64px] leading-normal font-bold text-white md:text-[72px] lg:text-[76px] xl:text-[82px] 2xl:text-[96px]">
								3+
							</div>
							<div className="text-[24px] leading-normal font-bold text-white">{t('pages.useful.astana.factsAndNumbers.fact4')}</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
