'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMemo, useRef, useState } from 'react'

import { headerNav, type NavItem } from '@/entities/nav/model/nav'
import { Link } from '@/i18n/navigation'
import { useEscape } from '@/shared/lib/hooks/useEscape'
import { useOnClickOutside } from '@/shared/lib/hooks/useOnClickOutside'

function isActive(pathname: string, href?: string) {
	if (!href) return false
	if (href === '/') return pathname === '/'
	return pathname === href || pathname.startsWith(href + '/')
}

export function HeaderNav() {
	const t = useTranslations('nav')
	const pathname = usePathname()

	return (
		<nav className="flex max-w-[937px] grow items-center justify-between gap-[10px] text-[16px] text-white">
			{headerNav.map((item) => {
				const active = isActive(pathname, item.href)

				if (item.children?.length) {
					return (
						<NavDropdown
							key={item.key}
							item={item}
							label={t(item.key)}
							active={active}
							t={t}
						/>
					)
				}

				return (
					<Link
						key={item.key}
						href={item.href ?? '/'}
						className={[
							'font-regular transition-duration-300 hover:text-muted-light text-center transition-colors',
							active ? 'text-muted-light' : '',
							'focus-visible:text-muted-light focus-visible:outline-none',
						].join(' ')}
					>
						{t(item.key)}
					</Link>
				)
			})}
		</nav>
	)
}

function NavDropdown({ item, label, active, t }: { item: NavItem; label: string; active: boolean; t: (key: string) => string }) {
	const rootRef = useRef<HTMLDivElement | null>(null)
	const [open, setOpen] = useState(false)
	const [closing, setClosing] = useState(false)
	const pathname = usePathname()

	function close() {
		if (!open) return
		setClosing(true)
		window.setTimeout(() => {
			setOpen(false)
			setClosing(false)
		}, 140)
	}

	useOnClickOutside(rootRef, () => close())
	useEscape(() => close())

	const hasChildren = !!item.children?.length

	function openNow() {
		if (!hasChildren) return
		setClosing(false)
		setOpen(true)
	}

	function onTriggerKeyDown(e: React.KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			if (open) close()
			else openNow()
		}
		if (e.key === 'ArrowDown') {
			e.preventDefault()
			openNow()
			// фокус на первый элемент можно добавить позже
		}
	}

	const dropdownStyle = useMemo(() => {
		if (!open) return undefined
		return {
			animation: closing ? 'dropdownOut 300ms ease-in' : 'dropdownIn 360ms ease-out',
		} as React.CSSProperties
	}, [open, closing])

	return (
		<div
			ref={rootRef}
			className="relative"
			onMouseEnter={openNow}
			onMouseLeave={close}
		>
			<button
				type="button"
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={() => (open ? close() : openNow())}
				onKeyDown={onTriggerKeyDown}
				className={[
					'font-regular border-none p-0 transition-colors outline-none',
					'inline-flex',
					active ? 'text-muted-light' : 'hover:text-muted-light',
					'focus-visible:text-muted-light focus-visible:outline-none',
				].join(' ')}
			>
				{label}
			</button>

			{open ? (
				<div className={['absolute top-full left-1/2 z-1 min-w-[191px] -translate-x-1/2 transform'].join(' ')}>
					<div
						role="menu"
						className={['relative', 'mt-[21px]', 'box-border rounded-[12px]'].join(' ')}
						style={dropdownStyle}
					>
						<div className="absolute bottom-[-35%] left-1/2 h-[60%] w-[130%] -translate-x-1/2 rounded-full bg-black/70 blur-[18vw]"></div>
						<div className="relative z-10 h-full w-full rounded-[12px] bg-gradient-to-b from-[#0C453B] via-[#59D7C033] to-[#0C453B] px-[22px] py-[28px]">
							{item.children?.map((c) => (
								<Link
									key={c.key}
									href={c.href ?? '/'}
									role="menuitem"
									tabIndex={0}
									className={[
										'font-regular mb-[20px] block text-[14px] last:mb-0',
										pathname === c.href ? 'text-muted-light' : 'hover:text-muted-light',
									].join(' ')}
									onClick={() => close()}
								>
									{t(c.key)}
								</Link>
							))}
						</div>
					</div>
				</div>
			) : null}
		</div>
	)
}
