import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

import { PresidentAboutExb } from './PresidentAboutExb'

export function AboutExhibition() {
	const t = useTranslations()

	const stats = [
		{
			title: t('pages.exhibition.stats.title1'),
			text: t('pages.exhibition.stats.text1'),
		},
		{
			title: t('pages.exhibition.stats.title2'),
			text: t('pages.exhibition.stats.text2'),
		},
		{
			title: t('pages.exhibition.stats.title3'),
			text: t('pages.exhibition.stats.text3'),
		},
		{
			title: t('pages.exhibition.stats.title4'),
			text: t('pages.exhibition.stats.text4'),
		},
	]

	return (
		<section className="relative z-1 bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-wrap items-start justify-between gap-x-[60px] gap-y-[30px] overflow-visible! lg:flex-nowrap">
				<div>
					<PresidentAboutExb className="mb-[47px] lg:mb-[87px]" />

					<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
						{t('pages.exhibition.title')}
					</h2>

					<p className="text-text max-w-[810px] text-[16px] leading-normal font-normal whitespace-pre-line">{t('pages.exhibition.text')}</p>
				</div>

				<div className="relative z-1 aspect-[1.11] w-full max-w-[715px]">
					<Image
						src="/imgs/exhibition/exhibition-img.png"
						alt="Exhibition"
						width={715}
						height={834}
						className="absolute bottom-0 left-0 w-full"
					/>
				</div>
			</Container>

			<Container className="grid grid-cols-1 gap-x-[10px] gap-y-[10px] pt-[30px] sm:grid-cols-2 xl:grid-cols-4">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#9ADDB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center"
					>
						<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap lg:text-[48px]">
							{stat.title}
						</h3>
						<div className="text-secondary text-[16px] leading-normal font-normal">{stat.text}</div>
					</div>
				))}
			</Container>
		</section>
	)
}
