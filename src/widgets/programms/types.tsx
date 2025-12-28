export interface ProgramItem {
	id: string
	time: string
	title: string
	description?: string
	points?: string[]
	live?: boolean
}

export interface ProgramDay {
	id: string
	date: string
	label: string
	programs: ProgramItem[]
}
