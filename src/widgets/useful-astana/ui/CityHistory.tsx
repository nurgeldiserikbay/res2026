'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function CityHistory() {
	const t = useTranslations()

	const SectionRef = useRef<HTMLElement>(null)
	const ImageRef = useRef<HTMLImageElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const TextRef = useRef<HTMLDivElement>(null)
	const HistoriesGridRef = useRef<HTMLDivElement>(null)

	useAnimSlide(ImageRef, { x: -90, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(TextRef, { y: 50, delay: 0.3 })

	useGSAP(
		() => {
			if (!HistoriesGridRef.current) return

			const historyItems = HistoriesGridRef.current.querySelectorAll('div > div')
			historyItems.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.5 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: SectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: SectionRef },
	)

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
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
		>
			<Container>
				<div className="flex flex-wrap items-start justify-between gap-x-[60px] gap-y-[30px] lg:flex-nowrap">
					<Image
						ref={ImageRef}
						src="/imgs/astana-history.png"
						alt="Astana History"
						width={871}
						height={417}
						className="block w-full shrink-4 translate-x-[-90px] rounded-[12px] opacity-0 lg:w-[671px] lg:max-w-[55%] xl:w-[771px] 2xl:w-[871px]"
					/>
					<div className="w-full max-w-[860px] shrink">
						<h2
							ref={TitleRef}
							className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
						>
							{t('pages.useful.astana.historyTitle')}
						</h2>
						<div
							ref={TextRef}
							className="translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0"
						>
							{t('pages.useful.astana.historyText')}
						</div>
					</div>
				</div>

				<div
					ref={HistoriesGridRef}
					className="grid grid-cols-1 items-stretch gap-[15px] bg-white pt-[50px] sm:grid-cols-2 md:pt-[60px] lg:grid-cols-4"
				>
					{histories.map((history, index) => (
						<div
							key={index}
							className="flex translate-y-[50px] flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center opacity-0"
						>
							<h3 className="text-[32px] leading-normal font-bold whitespace-nowrap text-secondary xs:text-[40px] lg:text-[48px]">
								{history.title}
							</h3>
							<div className="text-[16px] leading-normal font-normal text-secondary">{history.text}</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
