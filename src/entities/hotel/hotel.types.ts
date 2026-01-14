import { IPaginationParams } from '@/shared/types'

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
}

export interface HotelSearchParams extends IPaginationParams {
	type?: string
}
