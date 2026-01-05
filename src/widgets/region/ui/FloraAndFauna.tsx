'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function FloraAndFauna() {
	const t = useTranslations()

	const ImageRef = useRef<HTMLDivElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const TextRef = useRef<HTMLParagraphElement>(null)

	useAnimSlide(ImageRef, { x: -90, delay: 0.1 })
	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(TextRef, { y: 50, delay: 0.3 })

	return (
		<>
			<section
				id="flora-and-fauna"
				className="relative mt-[100px]"
			>
				<Container className="flex items-start justify-between overflow-visible">
					<div
						ref={ImageRef}
						className="relative max-w-[872px] translate-x-[-90px] whitespace-pre-line opacity-0"
					>
						<Image
							src="/imgs/flora-1.png"
							alt="Flora 1"
							width={870}
							height={378}
							className="block w-full"
						/>
					</div>

					<div className="relative max-w-[860px] pt-[90px] whitespace-pre-line">
						<h3
							ref={TitleRef}
							className="text-text relative z-1 mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold opacity-0"
						>
							{t('pages.region.floraAndFaunaText1')}
						</h3>
						<p
							ref={TextRef}
							className="relative z-1 mb-[30px] translate-y-[50px] opacity-0"
						>
							{t('pages.region.floraAndFaunaText2')}
						</p>
					</div>
				</Container>
			</section>
		</>
	)
}
