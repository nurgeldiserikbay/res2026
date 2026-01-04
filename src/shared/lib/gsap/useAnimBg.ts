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
	bgImage?: string
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
		bgImage,
	}: BgAnimOptions = {},
) {
	useGSAP(
		() => {
			const el = element?.current
			if (!el) return

			// Вычисляем scale на основе fromSize и toSize
			const fromScale = parseFloat(fromSize) / 100
			const toScale = parseFloat(toSize) / 100

			// Устанавливаем CSS переменные для псевдоэлемента
			el.style.setProperty('--bg-scale-from', fromScale.toString())
			el.style.setProperty('--bg-scale-to', toScale.toString())
			el.style.setProperty('--bg-position-from', fromPosition)
			el.style.setProperty('--bg-position-to', toPosition)
			if (bgImage) {
				el.style.setProperty('--bg-image', `url(${bgImage})`)
			}

			// Начальное состояние псевдоэлемента через CSS переменную
			el.style.setProperty('--bg-scale', fromScale.toString())
			el.style.setProperty('--bg-position', fromPosition)

			// Анимация scale псевдоэлемента
			gsap.to(el, {
				'--bg-scale': toScale,
				'--bg-position': toPosition,
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
