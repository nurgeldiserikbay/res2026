export interface Image {
	id: number
	title: string
	link: string
	order: number
}

export interface IPaginationParams {
	per_page: number
	page: number
}

export interface IPaginationMeta {
	total: number
	per_page: number
	page: number
}

export interface IPaginationResponse<T> {
	data: T[]
	meta: IPaginationMeta
}

export interface IResponse<T> {
	data: T
}
