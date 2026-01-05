import { LocalizedText } from '@/shared/config/i18n'

export interface ProgramItem {
	id: string
	time: string
	title: LocalizedText | string
	description?: LocalizedText | string
	points?: (LocalizedText | string)[]
	live?: boolean
}

export interface ProgramDay {
	id: string
	date: string
	label: LocalizedText | string
	programs: ProgramItem[]
}
