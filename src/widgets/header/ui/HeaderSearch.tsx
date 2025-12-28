'use client'

import { useEffect, useRef, useState } from 'react'

import { IconSearchNormal } from '@/shared/icons/IconSearchNormal'

export function HeaderSearch() {
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div
			ref={ref}
			className="relative z-1 flex items-center gap-[10px]"
		>
			{/* INPUT */}
			<div
				className={`absolute right-[34px] overflow-hidden transition-all duration-300 ${open ? 'w-[260px] opacity-100' : 'w-0 px-0 opacity-0'}`}
			>
				<div className="rounded-[8px] bg-linear-to-tr from-white/0 to-white/90 p-px">
					<div className={`h-[58px] rounded-[8px]`}>
						<input
							type="text"
							placeholder="Search"
							className={`bg-primary-dark box-border h-[58px] w-full rounded-[8px] border-none px-5 text-white transition-all duration-300 ease-out outline-none placeholder:text-white/60`}
						/>
					</div>
				</div>
			</div>

			{/* BUTTON */}
			<button
				type="button"
				aria-label="Search"
				onClick={() => setOpen((v) => !v)}
				className={`flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300`}
			>
				<IconSearchNormal className="text-white transition-colors duration-300" />
			</button>
		</div>
	)
}
