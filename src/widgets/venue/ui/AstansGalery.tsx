'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { IconZoom } from '@/shared/icons/IconZoom'
import { useFancybox } from '@/shared/lib/fancybox/useFancybox'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function AstansGalery() {
	const t = useTranslations()

	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const GalleryRef = useRef<HTMLDivElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	useGSAP(
		() => {
			if (!GalleryRef.current) return

			const items = GalleryRef.current.querySelectorAll('a')
			items.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.3 + index * 0.05,
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

	useFancybox({
		rootSelector: '#gallery',
	})

	const gallery = [
		{
			id: 1,
			image: '/imgs/usefulls/venue-gallery-1.png',
			alt: 'Venue Gallery 1',
			width: 424,
			height: 386,
		},
		{
			id: 2,
			image: '/imgs/usefulls/venue-gallery-2.png',
			alt: 'Venue Gallery 1',
			width: 600,
			height: 386,
		},
		{
			id: 3,
			image: '/imgs/usefulls/venue-gallery-3.png',
			alt: 'Venue Gallery 1',
			width: 258,
			height: 386,
		},
		{
			id: 4,
			image: '/imgs/usefulls/venue-gallery-4.png',
			alt: 'Venue Gallery 1',
			width: 487,
			height: 386,
		},
		{
			id: 5,
			image: '/imgs/usefulls/venue-gallery-5.png',
			alt: 'Venue Gallery 1',
			width: 488,
			height: 386,
		},
		{
			id: 6,
			image: '/imgs/usefulls/venue-gallery-6.png',
			alt: 'Venue Gallery 1',
			width: 604,
			height: 386,
		},
		{
			id: 7,
			image: '/imgs/usefulls/venue-gallery-7.png',
			alt: 'Venue Gallery 1',
			width: 422,
			height: 386,
		},
		{
			id: 8,
			image: '/imgs/usefulls/venue-gallery-8.png',
			alt: 'Venue Gallery 1',
			width: 250,
			height: 386,
		},
	]

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
		>
			<Container>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-[32px] leading-[1.2] font-bold text-text opacity-0 xl:text-[36px] 2xl:text-[30px] 3xl:text-[48px]"
				>
					{t('pages.useful.venue.photogalery')}
				</h2>

				<div
					ref={GalleryRef}
					id="gallery"
					className="flex flex-wrap items-stretch gap-[10px]"
				>
					{gallery.map((item) => (
						<a
							key={item.id}
							data-fancybox="gallery"
							href={item.image}
							className={`group relative block grow translate-y-[50px] overflow-hidden rounded-[12px] opacity-0 md:h-[386px]`}
						>
							<Image
								src={item.image}
								alt={item.alt}
								width={item.width}
								height={item.height}
								className="block h-full w-full object-cover"
							/>
							<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[#2E8656]/50 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
								<IconZoom
									className="text-white"
									aria-hidden="true"
								/>
							</div>
						</a>
					))}
				</div>
			</Container>
		</section>
	)
}
