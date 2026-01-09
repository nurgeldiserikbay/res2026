'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

function isElementInViewport(element: HTMLElement, threshold: number = 0.1): boolean {
	const rect = element.getBoundingClientRect()
	const windowHeight = window.innerHeight || document.documentElement.clientHeight
	const windowWidth = window.innerWidth || document.documentElement.clientWidth

	// Проверяем, пересекается ли элемент с видимой областью
	const isInViewport = rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0

	if (!isInViewport) return false

	// Вычисляем видимую часть элемента
	const visibleTop = Math.max(0, rect.top)
	const visibleBottom = Math.min(windowHeight, rect.bottom)
	const visibleHeight = Math.max(0, visibleBottom - visibleTop)
	const elementHeight = rect.height

	// Элемент считается видимым, если видна хотя бы часть (по threshold) или верх элемента выше 90% viewport
	return visibleHeight >= elementHeight * threshold || rect.top < windowHeight * 0.9
}

export function useAnimSlide(
	element?: React.RefObject<HTMLElement | null>,
	{
		duration = 1,
		y = -90,
		x = 0,
		delay = 0,
		start = 'top bottom',
		immediate = false,
	}: { duration?: number; y?: number; x?: number; delay?: number; start?: string; immediate?: boolean } = {},
) {
	const pathname = usePathname()

	useGSAP(
		() => {
			if (!element?.current) return

			const el = element.current

			// Используем requestAnimationFrame для проверки после рендера
			requestAnimationFrame(() => {
				const shouldAnimateImmediately = immediate || isElementInViewport(el)

				const animationConfig: gsap.TweenVars = {
					y: 0,
					x: 0,
					opacity: 1,
					duration,
					delay,
					ease: 'circ.out',
				}

				// Если элемент уже виден или требуется немедленная анимация, не используем ScrollTrigger
				if (shouldAnimateImmediately) {
					gsap.fromTo(
						el,
						{
							y,
							x,
							opacity: 0,
						},
						animationConfig,
					)
				} else {
					// Используем ScrollTrigger для элементов, которые появятся при скролле
					animationConfig.scrollTrigger = {
						trigger: el,
						start,
						once: true,
						// Обновляем при изменении размера окна
						refreshPriority: -1,
					}
					gsap.fromTo(
						el,
						{
							y,
							x,
							opacity: 0,
						},
						animationConfig,
					)
				}
			})
		},
		{
			dependencies: [pathname],
			revertOnUpdate: true,
		},
	)
}
