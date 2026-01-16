import { Image, IPaginationParams } from '@/shared/types'

export type NewsType = 'last' | 'announce' | 'press-release'

export interface NewsItem {
	id: number
	slug: string
	type: NewsType
	views: number
	name: string
	description: string
	image: string
	publication_date: string
	external_link: string
	article_author: string
	title_seo: string
	description_seo: string
	keywords_seo: string | null
	file: string
	images: Image[]
}

export interface NewsSearchParams extends IPaginationParams {
	type?: string
}
