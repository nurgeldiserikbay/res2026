'use client'

import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function SingleNationalBanner({ title, subtitle, text }: { title: string; subtitle: string; text: string }) {
	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const BannerRef = useRef<HTMLDivElement>(null)
	const SubtitleRef = useRef<HTMLHeadingElement>(null)
	const TextRef = useRef<HTMLParagraphElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	useAnimBg(BannerRef, {
		fromSize: '110%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/trees.webp',
	})

	useAnimSlide(SubtitleRef, { y: 50, delay: 0.2 })
	useAnimSlide(TextRef, { y: 50, delay: 0.3 })

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px]"
		>
			<Container>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold text-text opacity-0 lg:mb-[50px]"
				>
					{title}
				</h2>

				<div
					ref={BannerRef}
					data-animated-banner
					className="flex min-h-[430px] flex-col items-center justify-center rounded-[12px] bg-[url(/imgs/trees.webp)] bg-cover bg-center bg-no-repeat px-[28px] py-[40px] md:min-h-[364px]"
				>
					<h5
						ref={SubtitleRef}
						className="mb-[10px] translate-y-[50px] text-center text-[36px] leading-normal font-bold text-white opacity-0"
					>
						{subtitle}
					</h5>
					<p
						ref={TextRef}
						className="mx-auto max-w-[496px] translate-y-[50px] text-center text-[16px] leading-normal font-normal text-white opacity-0"
					>
						{text}
					</p>
				</div>
			</Container>
		</section>
	)
}
