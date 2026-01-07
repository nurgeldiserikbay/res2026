'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function RegionTabs({ tabs }: { tabs: { id: number; title: string; href: string }[] }) {
	const [activeHash, setActiveHash] = useState<string>('')

	const TabsRef = useRef<HTMLElement>(null)
	const TabsContainerRef = useRef<HTMLDivElement>(null)
	useAnimSlide(TabsRef, { y: 50, delay: 0.1 })

	// Анимация для отдельных табов
	useGSAP(
		() => {
			if (!TabsContainerRef.current) return

			const tabLinks = TabsContainerRef.current.querySelectorAll('a')
			tabLinks.forEach((link, index) => {
				gsap.fromTo(
					link,
					{ y: 30, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
						delay: 0.2 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: TabsRef.current,
							start: 'top 80%',
							once: true,
						},
					},
				)
			})
		},
		{ scope: TabsRef },
	)

	// Set initial hash value on client mount (before paint to avoid hydration mismatch)
	useLayoutEffect(() => {
		const currentHash = window.location.hash
		if (activeHash !== currentHash) {
			setActiveHash(currentHash)
		}
		// Only run on mount to set initial hash value
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		// Обработчик изменения хеша
		const handleHashChange = () => {
			setActiveHash(window.location.hash)
		}

		window.addEventListener('hashchange', handleHashChange)

		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	return (
		<>
			<section
				ref={TabsRef}
				className="relative z-5 mb-[30px] translate-y-[50px] pt-[30px] opacity-0 sm:mb-[40px] sm:pt-[40px] md:mb-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container
					ref={TabsContainerRef as React.RefObject<HTMLDivElement>}
					className="relative z-10 flex flex-wrap items-center justify-center gap-[15px] overflow-x-auto sm:gap-[20px] md:gap-[30px]"
				>
					{tabs.map((item) => {
						const isActive = activeHash === item.href

						return (
							<Link
								key={item.id}
								href={item.href}
								className={[
									'translate-y-[30px] cursor-pointer border-b-[3px] border-solid py-[20px] text-center text-[14px] leading-none font-medium whitespace-nowrap opacity-0 transition-colors sm:py-[23px] sm:text-[15px] md:py-[26px] md:text-[16px]',
									isActive ? 'border-b-secondary text-secondary' : 'border-b-text text-text',
								].join(' ')}
							>
								{item.title}
							</Link>
						)
					})}
				</Container>
			</section>
		</>
	)
}
