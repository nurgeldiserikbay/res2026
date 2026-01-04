export interface FaqItem {
	id: string
	question: string
	answer: string
}

export interface FaqBlockData {
	title?: string
	items: FaqItem[]
}
