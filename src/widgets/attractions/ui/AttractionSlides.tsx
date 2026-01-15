'use client'

import { BannerSlides } from '@/shared/components/BannerSlides'

export function AttractionSlides() {
	const images = [
		{
			id: 0,
			image: '/imgs/baiterek/baiterek-slides-1.png',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 1,
			image: '/imgs/baiterek/baiterek-slides-2.png',
			description: 'Astana is the capital of Kazakhstan',
		},
	]

	return <BannerSlides images={images} />
}
