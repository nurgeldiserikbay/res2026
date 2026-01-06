'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

const MENU_ITEMS = [
	{
		id: 1,
		title: 'pages.region.about',
		href: '#about',
	},
	{
		id: 2,
		title: 'pages.region.climate',
		href: '#climate',
	},
	{
		id: 3,
		title: 'pages.region.floraAndFauna',
		href: '#flora-and-fauna',
	},
	{
		id: 4,
		title: 'pages.region.etc',
		href: '#etc',
	},
]

export function RegionTabs() {
	const t = useTranslations()
	const [activeHash, setActiveHash] = useState<string>(() => {
		if (typeof window !== 'undefined') {
			return window.location.hash
		}
		return ''
	})

	const TabsRef = useRef<HTMLElement>(null)
	useAnimSlide(TabsRef, { y: 50, delay: 0.1 })

	useEffect(() => {
		// Обработчик изменения хеша
		const handleHashChange = () => {
			if (typeof window !== 'undefined') {
				setActiveHash(window.location.hash)
			}
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
				className="relative z-5 mb-[30px] translate-y-[50px] bg-white pt-[30px] opacity-0 sm:mb-[40px] sm:pt-[40px] md:mb-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"
			>
				<Container className="relative z-10 flex flex-wrap items-center justify-center gap-[15px] overflow-x-auto sm:gap-[20px] md:gap-[30px]">
					{MENU_ITEMS.map((item) => {
						const isActive = activeHash === item.href

						return (
							<Link
								key={item.id}
								href={item.href}
								className={[
									'cursor-pointer border-b-[3px] border-solid py-[20px] text-center text-[14px] leading-none font-medium whitespace-nowrap transition-colors sm:py-[23px] sm:text-[15px] md:py-[26px] md:text-[16px]',
									isActive ? 'border-b-secondary text-secondary' : 'border-b-text text-text',
								].join(' ')}
							>
								{t(item.title)}
							</Link>
						)
					})}
				</Container>
			</section>
		</>
	)
}
