'use client'

import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutKazBanner() {
	const BannerRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)

	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/region-banner.png',
	})

	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className="mt-[100px] h-[795px] bg-[url('/imgs/region-banner.png')] bg-cover bg-center"
			>
				<Container className="flex h-full items-center justify-center text-center">
					<h1
						ref={TitleRef}
						className="translate-y-[50px] text-[128px] leading-none font-bold text-white opacity-0"
					>
						Kazakhstan
					</h1>
				</Container>
			</section>
		</>
	)
}
