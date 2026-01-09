'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

type PaginationProps = {
	totalPages: number
	param?: string // по умолчанию page
	className?: string
	siblingCount?: number // сколько страниц показывать по бокам
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n))
}

export function MainPagination({ totalPages, param = 'page', className = '', siblingCount = 1 }: PaginationProps) {
	const router = useRouter()
	const pathname = usePathname()
	const sp = useSearchParams()

	const current = clamp(Number(sp.get(param) ?? '1') || 1, 1, Math.max(1, totalPages))

	const pages = useMemo(() => {
		const pages: number[] = []
		const start = Math.max(1, current - siblingCount)
		const end = Math.min(totalPages, current + siblingCount)

		for (let p = start; p <= end; p++) pages.push(p)

		// если страниц мало — покажем всё
		if (totalPages <= 5) {
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		}

		// можно усложнить с "..." — но для скрина достаточно 1..3
		return pages
	}, [current, siblingCount, totalPages])

	const goTo = (page: number) => {
		const next = new URLSearchParams(sp.toString())
		if (page <= 1) {
			next.delete(param)
		} else {
			next.set(param, String(page))
		}
		const queryString = next.toString()
		const url = queryString ? `${pathname}?${queryString}` : pathname
		router.push(url, { scroll: true })
	}

	const isPrevDisabled = current <= 1
	const isNextDisabled = current >= totalPages

	return (
		<nav
			className={`flex items-center gap-[10px] ${className}`}
			aria-label="Pagination"
		>
			<button
				type="button"
				onClick={() => goTo(current - 1)}
				disabled={isPrevDisabled}
				className={[
					'text-[16px] font-normal transition-all duration-300 ease-out',
					isPrevDisabled ? 'cursor-not-allowed text-[#252A42]/30' : 'hover:text-secondary cursor-pointer text-[#252A42]',
				].join(' ')}
			>
				Предыдущий
			</button>

			<div className="flex items-center gap-[14px]">
				{pages.map((p) => {
					const active = p === current
					return (
						<button
							key={p}
							type="button"
							onClick={() => goTo(p)}
							aria-current={active ? 'page' : undefined}
							className={[
								'h-[36px] min-w-[36px] cursor-pointer rounded-[12px] text-[16px] font-normal transition',
								active ? 'bg-[#2F6B3E] text-white' : 'border border-[#A8B1C2] text-[#A8B1C2] hover:border-[#2F6B3E] hover:text-[#2F6B3E]',
							].join(' ')}
						>
							{p}
						</button>
					)
				})}
			</div>

			<button
				type="button"
				onClick={() => goTo(current + 1)}
				disabled={isNextDisabled}
				className={[
					'text-[16px] font-normal transition-all duration-300 ease-out',
					isNextDisabled ? 'cursor-not-allowed text-[#252A42]/30' : 'hover:text-secondary cursor-pointer text-[#252A42]',
				].join(' ')}
			>
				Следующий
			</button>
		</nav>
	)
}
