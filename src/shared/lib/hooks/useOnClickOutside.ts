// src/shared/lib/hooks/useOnClickOutside.ts
'use client'

import { useEffect } from 'react'

export function useOnClickOutside(ref: React.RefObject<HTMLElement | null>, onOutside: () => void) {
	useEffect(() => {
		function handler(e: MouseEvent | TouchEvent) {
			const el = ref.current
			if (!el) return
			if (e.target instanceof Node && !el.contains(e.target)) onOutside()
		}

		document.addEventListener('mousedown', handler)
		document.addEventListener('touchstart', handler)
		return () => {
			document.removeEventListener('mousedown', handler)
			document.removeEventListener('touchstart', handler)
		}
	}, [ref, onOutside])
}
