'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

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
			<section className="mb-[50px] bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container className="relative z-10 flex items-center justify-center gap-[30px]">
					{MENU_ITEMS.map((item) => {
						const isActive = activeHash === item.href

						return (
							<Link
								key={item.id}
								href={item.href}
								className={[
									'cursor-pointer border-b-[3px] border-solid py-[26px] text-center text-[16px] leading-none font-medium transition-colors',
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
