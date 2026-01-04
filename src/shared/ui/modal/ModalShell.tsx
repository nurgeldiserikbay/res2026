'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type ModalShellProps = {
	open: boolean
	onClose: () => void

	children?: React.ReactNode

	className?: string
	overlayClassName?: string
	panelClassName?: string

	maxWidthClassName?: string
}

export function ModalShell({
	open,
	onClose,
	children,
	className,
	overlayClassName,
	panelClassName,
	maxWidthClassName = 'max-w-[920px]',
}: ModalShellProps) {
	const panelRef = useRef<HTMLDivElement | null>(null)
	const lastActiveRef = useRef<HTMLElement | null>(null)
	const [portalContainer, setPortalContainer] = useState<HTMLBodyElement | null>(null)

	useEffect(() => {
		if (typeof document === 'undefined') return
		queueMicrotask(() => setPortalContainer(document.body as HTMLBodyElement))
	}, [])

	useEffect(() => {
		if (!open) return

		lastActiveRef.current = document.activeElement as HTMLElement | null

		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		queueMicrotask(() => panelRef.current?.focus())

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', onKeyDown)

		return () => {
			window.removeEventListener('keydown', onKeyDown)
			document.body.style.overflow = prevOverflow
			lastActiveRef.current?.focus?.()
		}
	}, [open, onClose])

	if (!open) return null
	if (typeof document === 'undefined') return null

	return createPortal(
		<div className={[`fixed inset-0 top-0 right-0 bottom-0 left-0 z-10000 box-border overflow-y-scroll`, className].join(` `)}>
			<div
				className={overlayClassName ?? 'fixed inset-0 top-0 right-0 bottom-0 left-0 bg-black/60 backdrop-blur-sm'}
				onMouseDown={(e) => {
					if (e.target === e.currentTarget) onClose()
				}}
			></div>
			<div className={['relative z-101 mx-auto w-full py-[80px]', maxWidthClassName].join(' ')}>
				<div
					ref={panelRef}
					tabIndex={-1}
					role="dialog"
					aria-modal="true"
					className={['relative z-101 mx-auto w-full', 'outline-none', panelClassName ?? ''].join(' ')}
				>
					{children}
				</div>
			</div>
		</div>,
		portalContainer ?? document.body,
	)
}
