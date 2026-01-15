export type Locale = 'ru' | 'kk' | 'en'

export interface RestaurantItemMultilang {
	id: number
	slug: string
	title: {
		ru: string
		kk: string
		en: string
	}
	rating: number
	price: number
	currency: string
	image: string
	description: {
		ru: string
		kk: string
		en: string
	}
	link: string
	city: string
	address: {
		ru: string
		kk: string
		en: string
	}
	cuisine: {
		ru: string
		kk: string
		en: string
	}
	buttonText: {
		ru: string
		kk: string
		en: string
	}
}

export interface RestaurantItem {
	id: number
	slug: string
	title: string
	rating: number
	price: number
	currency: string
	image: string
	description: string
	link: string
	city: string
	address: string
	cuisine?: string
	buttonText?: string
}
