'use client'

import { BannerSlides } from '@/shared/components/BannerSlides'

export function AstanaSlides() {
	const images = [
		{
			id: 8,
			image: '/imgs/usefulls/astana-slide-9.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 0,
			image: '/imgs/usefulls/astana-slide-1.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 1,
			image: '/imgs/usefulls/astana-slide-2.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 2,
			image: '/imgs/usefulls/astana-slide-3.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 3,
			image: '/imgs/usefulls/astana-slide-4.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 4,
			image: '/imgs/usefulls/astana-slide-5.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 5,
			image: '/imgs/usefulls/astana-slide-6.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 6,
			image: '/imgs/usefulls/astana-slide-7.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 7,
			image: '/imgs/usefulls/astana-slide-8.webp',
			description: 'Astana is the capital of Kazakhstan',
		},
	]

	return <BannerSlides images={images} />
}
