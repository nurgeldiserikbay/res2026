// src/shared/lib/gsap/provider.tsx
'use client'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { registerGSAP } from '@/shared/lib/gsap/register'

let smoother: ScrollSmoother | null = null

export function GSAPProvider() {
	const pathname = usePathname()

	useGSAP(
		() => {
			registerGSAP()

			if (!smoother) {
				smoother = ScrollSmoother.create({
					wrapper: '#smooth-wrapper',
					content: '#smooth-content',
					smooth: 1,
					effects: true,
					normalizeScroll: true,
				})
			}
		},
		{
			dependencies: [pathname],
			revertOnUpdate: true,
		},
	)

	useEffect(() => {
		const content = document.querySelector('#smooth-content')
		if (!content) return

		const ro = new ResizeObserver(() => {
			smoother?.refresh()
		})

		ro.observe(content)
		return () => ro.disconnect()
	}, [pathname])

	return null
}
