import Image from 'next/image'
import Link from 'next/link'
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
			<Container className="flex flex-wrap items-start justify-between gap-x-[60px] gap-y-[30px] overflow-visible! xl:flex-nowrap">
				<div>
					<PresidentAboutExb className="mb-[47px] lg:mb-[100px]" />

					<h2 className="mb-[30px] text-[32px] leading-[1.2] font-bold text-text xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]">
						{t('pages.exhibition.title')}
					</h2>

					<div className="flex flex-wrap items-center justify-between gap-[30px] md:flex-nowrap lg:flex-wrap 2xl:flex-nowrap">
						<Link
							href="https://res2026expo.kz/"
							target="_blank"
							className="block shrink-0"
						>
							<Image
								src="/imgs/RES_B.svg"
								alt="Logo"
								width={685}
								height={253}
								className="inline-block max-w-[210px]"
							/>
						</Link>
						<p className="max-w-[839px] text-[16px] leading-normal font-normal whitespace-pre-line text-text">
							{t('pages.exhibition.text')}
						</p>
					</div>
				</div>

				<div className="aspect-none relative z-1 w-full max-w-[715px] xl:aspect-[1.056] xl:translate-y-[-60px]">
					<Image
						src="/imgs/exhibition/exhibition-img.png"
						alt="Exhibition"
						width={715}
						height={813}
						className="bottom-0 left-0 w-full xl:absolute"
					/>
				</div>
			</Container>

			<Container className="grid grid-cols-1 gap-x-[10px] gap-y-[10px] pt-[30px] sm:grid-cols-2 xl:grid-cols-4">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#9ADDB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center"
					>
						<h3 className="text-[32px] leading-normal font-bold whitespace-nowrap text-secondary xs:text-[40px] lg:text-[48px]">
							{stat.title}
						</h3>
						<div className="text-[16px] leading-normal font-normal text-secondary">{stat.text}</div>
					</div>
				))}
			</Container>
		</section>
	)
}
