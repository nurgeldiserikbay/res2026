import { Locale } from '@/shared/config/i18n'

export type GalleryItem = {
	id: string
	image: string
	alt: Record<Locale, string>
}

export type GalleryDay = {
	key: string // '2026-04-22'
	label: Record<Locale, string>
	items: GalleryItem[]
}
