import { IPaginationParams } from '@/shared/types'

export type Locale = 'ru' | 'kk' | 'en'

export interface HotelItemMultilang {
	id: number
	slug: string
	rating: number
	priceFrom: number
	currency: string
	image: string
	description: {
		ru: string
		kk: string
		en: string
	}
	link: string
	title: {
		ru: string
		kk: string
		en: string
	}
	city: string
	buttonText: {
		ru: string
		kk: string
		en: string
	}
}

export interface HotelItem {
	id: number
	slug: string
	rating: number
	priceFrom: number
	currency: string
	image: string
	description: string
	link: string
	title: string
	city: string
	buttonText?: string
}

export interface HotelSearchParams extends IPaginationParams {
	type?: string
}
