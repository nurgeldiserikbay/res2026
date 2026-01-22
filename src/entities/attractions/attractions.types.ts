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
	// Page fields
	subtitle?: {
		ru: string
		kk: string
		en: string
	}
	bannerImage?: string
	aboutTitle?: {
		ru: string
		kk: string
		en: string
	}
	aboutText?: {
		ru: string
		kk: string
		en: string
	}
	aboutStats?: {
		title1?: {
			ru: string
			kk: string
			en: string
		}
		text1?: {
			ru: string
			kk: string
			en: string
		}
		title2?: {
			ru: string
			kk: string
			en: string
		}
		text2?: {
			ru: string
			kk: string
			en: string
		}
	}
	aboutImages?: string[]
	insideTitle?: {
		ru: string
		kk: string
		en: string
	}
	insideSubtitle?: {
		ru: string
		kk: string
		en: string
	}
	insideText?: {
		ru: string
		kk: string
		en: string
	}
	insideImage?: string
	slidesImages?: Array<{
		id: number
		image: string
		description: string
	}>
}

export interface AttractionItem {
	id: number
	slug: string
	title: string
	image: string
}
