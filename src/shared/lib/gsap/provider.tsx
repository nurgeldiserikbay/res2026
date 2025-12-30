'use client'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'

import { registerGSAP } from '@/shared/lib/gsap/register'

export function GSAPProvider() {
	const pathname = usePathname()

	useGSAP(
		() => {
			registerGSAP()
		},
		{
			dependencies: [pathname],
			revertOnUpdate: true,
		},
	)

	return null
}
