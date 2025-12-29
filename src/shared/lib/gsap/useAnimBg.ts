'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type BgAnimOptions = {
	duration?: number
	delay?: number
	fromSize?: string
	toSize?: string
	fromPosition?: string
	toPosition?: string
	trigger?: HTMLElement | string
}

export function useAnimBg(
	element?: React.RefObject<HTMLElement | null>,
	{
		duration = 1.2,
		delay = 0,
		fromSize = '110%',
		toSize = '100%',
		fromPosition = 'center 60%',
		toPosition = 'center center',
		trigger = 'body',
	}: BgAnimOptions = {},
) {
	useGSAP(
		() => {
			const el = element?.current
			if (!el) return

			// начальное состояние
			gsap.set(el, {
				backgroundSize: fromSize,
				backgroundPosition: fromPosition,
			})

			// анимация
			gsap.to(el, {
				backgroundSize: toSize,
				backgroundPosition: toPosition,
				duration,
				delay,
				ease: 'power2.out',
				scrollTrigger: {
					trigger,
					start: 'top 80%',
					once: true,
				},
			})
		},
		{ scope: element },
	)
}
