'use client'

import clsx from 'clsx'
import { useLayoutEffect, useRef, useState } from 'react'

import { IconCloseCircle } from '@/shared/icons/IconCloseCircle'

interface AccordionProps {
	title: string
	children: React.ReactNode
	defaultOpen?: boolean
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
	const [open, setOpen] = useState(defaultOpen)
	const [height, setHeight] = useState(0)
	const contentRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!contentRef.current) return

		setHeight(contentRef.current.scrollHeight)
	}, [children, open])

	return (
		<div className="mb-[30px] w-full border-b border-[#D3E1F3] pb-[40px] last:mb-0">
			{/* Header */}
			<button
				onClick={() => setOpen((v) => !v)}
				className="text-text flex w-full cursor-pointer items-center justify-between text-left"
			>
				<span className="text-[20px] leading-none font-bold">{title}</span>

				<span className={clsx('transition-transform duration-300', open && 'rotate-45')}>
					<IconCloseCircle className="text-secondary" />
				</span>
			</button>

			{/* Content */}
			<div
				style={{ height: open ? height : 0 }}
				className="overflow-hidden transition-[height] duration-300 ease-out"
			>
				<div
					ref={contentRef}
					className="text-text pt-[30px] text-[16px] leading-normal font-normal"
				>
					{children}
				</div>
			</div>
		</div>
	)
}
