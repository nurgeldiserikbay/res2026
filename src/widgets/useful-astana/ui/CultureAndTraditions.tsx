'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function CultureAndTraditions() {
	const t = useTranslations()

	const TitleRef = useRef<HTMLHeadingElement>(null)
	const Text1Ref = useRef<HTMLParagraphElement>(null)
	const Text2Ref = useRef<HTMLParagraphElement>(null)
	const ImagesLeftRef = useRef<HTMLDivElement>(null)
	const ImageRightRef = useRef<HTMLImageElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	useAnimSlide(Text1Ref, { y: 50, delay: 0.2 })
	useAnimSlide(Text2Ref, { y: 50, delay: 0.3 })
	useAnimSlide(ImagesLeftRef, { x: -50, delay: 0.4 })
	useAnimSlide(ImageRightRef, { x: 50, delay: 0.5 })

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-col items-start justify-between gap-x-[60px] gap-y-[30px] md:flex-row">
				<div className="w-full max-w-[860px]">
					<h2
						ref={TitleRef}
						className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:mb-[60px] xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
					>
						{t('pages.useful.astana.cultureAndTraditions.title')}
					</h2>
					<p
						ref={Text1Ref}
						className="mb-[60px] translate-y-[50px] text-[18px] leading-normal font-normal whitespace-pre-line text-text opacity-0 lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
					>
						{t('pages.useful.astana.cultureAndTraditions.text1')}
					</p>
					<p
						ref={Text2Ref}
						className="translate-y-[50px] text-[16px] leading-normal font-normal whitespace-pre-line text-text opacity-0"
					>
						{t('pages.useful.astana.cultureAndTraditions.text2')}
					</p>
				</div>
				<div className="flex w-full max-w-[871px] items-start justify-between gap-[10px]">
					<div
						ref={ImagesLeftRef}
						className="flex w-[46.6%] shrink-0 translate-x-[-50px] flex-col gap-[10px] opacity-0"
					>
						<Image
							src="/imgs/usefulls/culture-1.png"
							alt="Astana Culture and Traditions"
							width={405}
							height={314}
						/>
						<Image
							src="/imgs/usefulls/culture-2.png"
							alt="Astana Culture and Traditions"
							width={405}
							height={423}
						/>
					</div>
					<Image
						ref={ImageRightRef}
						src="/imgs/usefulls/culture-3.png"
						alt="Astana Culture and Traditions"
						width={455}
						height={737}
						className="block w-[52.2%] translate-x-[50px] opacity-0 md:translate-y-[30px] xl:translate-y-[54px]"
					/>
				</div>
			</Container>
		</section>
	)
}
