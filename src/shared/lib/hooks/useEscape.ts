// src/shared/lib/hooks/useEscape.ts
'use client'

import { useEffect } from 'react'

export function useEscape(onEscape: () => void) {
	useEffect(() => {
		function handler(e: KeyboardEvent) {
			if (e.key === 'Escape') onEscape()
		}
		document.addEventListener('keydown', handler)
		return () => document.removeEventListener('keydown', handler)
	}, [onEscape])
}
