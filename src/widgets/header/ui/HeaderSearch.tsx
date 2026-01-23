'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'

import { useRouter } from '@/i18n/navigation'
import { IconSearchNormal } from '@/shared/icons/IconSearchNormal'

export function HeaderSearch() {
	const [open, setOpen] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const ref = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const router = useRouter()

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	useEffect(() => {
		if (open && inputRef.current) {
			inputRef.current.focus()
		}
	}, [open])

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const query = searchValue.trim()
		if (query.length >= 2) {
			router.push(`/search?q=${encodeURIComponent(query)}`)
			setOpen(false)
			setSearchValue('')
		}
	}

	const handleSearchClick = () => {
		if (open) {
			const query = searchValue.trim()
			if (query.length >= 2) {
				router.push(`/search?q=${encodeURIComponent(query)}`)
				setOpen(false)
				setSearchValue('')
			}
		} else {
			setOpen(true)
		}
	}

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
						<form onSubmit={handleSubmit}>
							<input
								ref={inputRef}
								type="search"
								id="header-search-input"
								placeholder="Search"
								aria-label="Search"
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
								className={`bg-primary-dark box-border h-[58px] w-full rounded-[8px] border-none px-5 text-white transition-all duration-300 ease-out outline-none placeholder:text-white/60`}
							/>
						</form>
					</div>
				</div>
			</div>

			{/* BUTTON */}
			<button
				type="button"
				aria-label="Search"
				aria-expanded={open}
				aria-controls="header-search-input"
				onClick={handleSearchClick}
				className={`flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300`}
			>
				<IconSearchNormal
					className="text-white transition-colors duration-300"
					aria-hidden="true"
				/>
			</button>
		</div>
	)
}
