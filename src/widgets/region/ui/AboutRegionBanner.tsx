'use client'

import { useRef } from 'react'

import { appConfig } from '@/shared/config/app.config'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AboutRegionBanner({ title, bgImage }: { title: string; bgImage: string }) {
	const BannerRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)

	useAnimBg(BannerRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: `${bgImage}`,
	})

	useAnimSlide(TitleRef, { y: 50, delay: 0.2 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className={[
					!appConfig.isProduction
						? `xs:h-[400px] xs:mt-[80px] mt-[50px] h-[380px] bg-cover bg-center sm:mt-[90px] sm:h-[500px] md:mt-[100px] md:h-[600px] lg:h-[700px] xl:h-[795px]`
						: `xs:h-[400px] xs:mt-[80px] mt-[50px] h-[300px] bg-cover bg-center sm:mt-[90px] sm:h-[500px] md:mt-[100px] md:h-[600px] lg:h-[700px] xl:h-[795px]`,
				].join(' ')}
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				<Container className="flex h-full items-center justify-center text-center">
					<h1
						ref={TitleRef}
						className="xs:text-[48px] translate-y-[50px] text-[32px] leading-none font-bold text-white opacity-0 sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] 2xl:text-[128px]"
					>
						{title}
					</h1>
				</Container>
			</section>
		</>
	)
}
