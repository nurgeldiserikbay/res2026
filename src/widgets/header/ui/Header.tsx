'use client'
import { useEffect, useRef, useState } from 'react'

import { usePathname } from '@/i18n/navigation'
import { appConfig } from '@/shared/config/app.config'
import { locales } from '@/shared/config/i18n'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { HeaderActions } from './HeaderActions'
import { HeaderCta } from './HeaderCta'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'

export function Header() {
	const pathname = usePathname()
	const [hidden, setHidden] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const headerContainerRef = useRef<HTMLDivElement>(null)
	useAnimSlide(headerContainerRef, { y: -90 })

	const lastYRef = useRef(0)
	const tickingRef = useRef(false)

	const excludedRoutes = ['/', ...locales.map((locale) => `/${locale}`)] // add excluded routes as needed

	const makeDark = !excludedRoutes.includes(pathname ?? '')

	useEffect(() => {
		lastYRef.current = window.scrollY

		const onScroll = () => {
			const currentY = window.scrollY

			if (!tickingRef.current) {
				tickingRef.current = true

				requestAnimationFrame(() => {
					const lastY = lastYRef.current
					const delta = currentY - lastY

					// фон при любом скролле
					setScrolled(currentY > 100)

					// небольшая "мертвая зона", чтобы не дергалось
					if (Math.abs(delta) > 6) {
						// прячем только если реально вниз и уже не в самом верху
						if (delta > 0 && currentY > 80) setHidden(true)
						// показываем при скролле вверх
						if (delta < 0) setHidden(false)
					}

					lastYRef.current = currentY
					tickingRef.current = false
				})
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header
			className={[
				'fixed top-0 right-0 left-0 z-50',
				'transition-all duration-700 ease-out',
				hidden ? '-translate-y-full' : 'translate-y-0',
			].join(' ')}
		>
			<div
				ref={headerContainerRef as React.RefObject<HTMLDivElement>}
				className={[
					'-translate-y-[90px] transform py-[30px] opacity-0 lg:py-[18px]',
					scrolled || makeDark ? 'bg-primary-dark shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur' : 'bg-transparent',
				].join(' ')}
			>
				<Container
					id="header-container"
					className="flex items-center justify-between gap-[10px]"
				>
					<HeaderLogo />

					<div className="3xl:max-w-[1656px] flex max-w-[980px] flex-1 items-center justify-end gap-[10px] xl:max-w-[1160px] xl:justify-between 2xl:max-w-[1340px]">
						<HeaderNav />
						<HeaderActions />
					</div>
				</Container>

				{!appConfig.isProduction && (
					<Container className="mt-[20px] hidden max-[441px]:block">
						<HeaderCta className="h-[58px]! w-full" />
					</Container>
				)}
			</div>
		</header>
	)
}
