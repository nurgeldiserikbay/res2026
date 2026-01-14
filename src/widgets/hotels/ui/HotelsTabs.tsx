'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { IconStar } from '@/shared/icons/IconStar'

export function HotelsTabs() {
	const t = useTranslations()
	const searchParams = useSearchParams()

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

	const buildHref = (type: number) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('type', String(type))
		params.delete('page')
		return `/useful/hotels?${params.toString()}`
	}

	return (
		<nav
			role="tablist"
			aria-label={t('titles.news')}
			className="xs:gap-[30px] mb-[30px] flex items-center justify-center gap-[20px] xl:mb-[60px] xl:gap-[60px]"
		>
			{hotelsTabs.map((tab) => {
				const currentType = searchParams.get('type') || '5'
				const isActive = currentType === String(tab.count)

				return (
					<Link
						key={tab.id}
						href={buildHref(tab.count)}
						role="tab"
						aria-selected={isActive}
						aria-controls={`hotels-tabpanel-${tab.id}`}
						id={`hotels-tab-${tab.id}`}
						className={[
							'flex items-center gap-[10px]',
							'cursor-pointer text-[16px] leading-none font-bold transition-all duration-300 ease-out',
							isActive ? `text-[#41754F]` : `text-[#E0EAB8]`,
						].join(` `)}
					>
						<span className="mt-[8px] block text-inherit">{tab.count}</span>
						<div className="flex items-center gap-[10px]">
							{new Array(tab.count).fill(0).map((_, index) => (
								<IconStar
									key={index}
									className={[`transition-all duration-300 ease-out`, isActive ? `text-[#41754F]` : `text-[#E0EAB8]`].join(` `)}
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
