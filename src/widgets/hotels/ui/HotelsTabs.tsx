'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Link } from '@/i18n/navigation'
import { IconStar } from '@/shared/icons/IconStar'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'

export function HotelsTabs() {
	const t = useTranslations()
	const searchParams = useSearchParams()

	const TabsRef = useRef<HTMLElement>(null)
	useAnimSlide(TabsRef, { y: 50, delay: 0.1 })

	const hotelsTabs = [
		{
			id: 1,
			count: 5,
		},
		{
			id: 2,
			count: 4,
		},
		{
			id: 3,
			count: 3,
		},
	]

	const buildHref = (type: number | null) => {
		const params = new URLSearchParams(searchParams.toString())
		if (type === null) {
			params.delete('type')
		} else {
			params.set('type', String(type))
		}
		params.delete('page')
		return `/useful/hotels?${params.toString()}`
	}

	return (
		<nav
			ref={TabsRef}
			aria-label={t('titles.news')}
			className="mb-[60px] flex translate-y-[50px] flex-col items-center justify-center gap-[20px] opacity-0 xs:flex-row xs:gap-[41.5px] md:flex-row xl:gap-[60px]"
		>
			{hotelsTabs.map((tab) => {
				const currentType = searchParams.get('type')
				const isActive = tab.count === null ? !currentType : currentType === String(tab.count)

				return (
					<Link
						key={tab.id}
						href={buildHref(tab.count)}
						role="tab"
						aria-selected={isActive}
						aria-controls={`hotels-tabpanel-${tab.id}`}
						id={`hotels-tab-${tab.id}`}
						className={[
							'flex flex-col items-center gap-[10px] xs:flex-row',
							'cursor-pointer text-[14px] leading-none font-bold transition-all duration-300 ease-out md:text-[16px]',
							isActive ? `text-[#41754F]` : `text-[#E0EAB8]`,
						].join(` `)}
					>
						<span className="mt-[8px] block text-inherit">{tab.count}</span>
						<div className="flex items-center gap-[5px] md:gap-[10px]">
							{new Array(tab.count).fill(0).map((_, index) => (
								<IconStar
									key={index}
									className={[
										`h-[16px] w-[16px] transition-all duration-300 ease-out md:h-[20px] md:w-[20px] lg:h-[24px] lg:w-[24px] xl:h-[28px] xl:w-[28px] 2xl:h-[32px] 2xl:w-[32px]`,
										isActive ? `text-[#41754F]` : `text-[#E0EAB8]`,
									].join(` `)}
									color="currentColor"
								/>
							))}
						</div>
					</Link>
				)
			})}
		</nav>
	)
}
