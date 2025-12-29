'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

export function useAnimSlide(
	element?: React.RefObject<HTMLElement | null>,
	{ duration = 1, y = -90, x = 0, delay = 0 }: { duration?: number; y?: number; x?: number; delay?: number } = {},
) {
	const pathname = usePathname()

	useGSAP(
		() => {
			if (!element?.current) return

			gsap.fromTo(
				element.current,
				{
					y,
					x,
					opacity: 0,
				},
				{
					y: 0,
					x: 0,
					opacity: 1,
					duration,
					delay,
					ease: 'circ.out',
					scrollTrigger: {
						trigger: element.current,
						start: 'top 80%',
					},
				},
			)
		},
		{
			dependencies: [pathname],
			revertOnUpdate: true,
		},
	)
}
