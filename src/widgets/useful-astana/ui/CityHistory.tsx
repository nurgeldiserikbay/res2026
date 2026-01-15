import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function CityHistory() {
	const t = useTranslations()

	const histories = [
		{
			title: t('pages.useful.astana.histories.title1'),
			text: t('pages.useful.astana.histories.text1'),
		},
		{
			title: t('pages.useful.astana.histories.title2'),
			text: t('pages.useful.astana.histories.text2'),
		},
		{
			title: t('pages.useful.astana.histories.title3'),
			text: t('pages.useful.astana.histories.text3'),
		},
		{
			title: t('pages.useful.astana.histories.title4'),
			text: t('pages.useful.astana.histories.text4'),
		},
	]

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="flex flex-wrap items-start justify-between gap-x-[60px] gap-y-[30px] lg:flex-nowrap">
					<Image
						src="/imgs/astana-history.png"
						alt="Astana History"
						width={871}
						height={417}
						className="block w-full shrink-4 rounded-[12px] lg:w-[671px] lg:max-w-[55%] xl:w-[771px] 2xl:w-[871px]"
					/>
					<div className="w-full max-w-[860px] shrink">
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
							{t('pages.useful.astana.historyTitle')}
						</h2>
						<div className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">
							{t('pages.useful.astana.historyText')}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 items-stretch gap-[15px] bg-white pt-[50px] sm:grid-cols-2 md:pt-[60px] lg:grid-cols-4">
					{histories.map((history, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center"
						>
							<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap lg:text-[48px]">
								{history.title}
							</h3>
							<div className="text-secondary text-[16px] leading-normal font-normal">{history.text}</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
