'use client'

import { Accordion } from '@/shared/ui/accordion/Accordion'

import { FaqBlockData } from '../types'

export function Faq({ data }: { data: FaqBlockData }) {
	return (
		<div className="w-full">
			{data.items.map((item) => (
				<Accordion
					key={item.id}
					title={item.question}
				>
					{item.answer}
				</Accordion>
			))}
		</div>
	)
}
