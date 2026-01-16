export type Locale = 'ru' | 'kk' | 'en'

export interface AttractionItemMultilang {
	id: number
	slug: string
	title: {
		ru: string
		kk: string
		en: string
	}
	image: string
	description: {
		ru: string
		kk: string
		en: string
	}
	buttonText: {
		ru: string
		kk: string
		en: string
	}
	link: string
}

export interface AttractionItem {
	id: number
	slug: string
	title: string
	image: string
}
