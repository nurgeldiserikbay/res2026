'use client'

import { BannerSlides } from '@/shared/components/BannerSlides'

interface AttractionSlidesProps {
	slidesImages?: Array<{
		id: number
		image: string
		description: string
	}>
}

export function AttractionSlides({ slidesImages }: AttractionSlidesProps) {
	if (!slidesImages || slidesImages.length === 0) {
		return null
	}

	return <BannerSlides images={slidesImages} />
}
