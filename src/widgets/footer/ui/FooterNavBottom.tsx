'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { headerNav } from '@/entities/nav/model/nav'
import { Link } from '@/i18n/navigation'

export function FooterNavBottom() {
	const t = useTranslations('nav')
	const pathname = usePathname()

	return (
		<nav className="flex max-w-[789px] grow items-start justify-start gap-[40px]">
			{headerNav
				.filter((item) => !item.main)
				.map((item) => {
					return (
						<Link
							key={item.key}
							href={item.href ?? '/'}
							className={[
								'font-regular text-text hover:text-muted block text-[12px] leading-[1.4] transition-colors',
								pathname === item.href ? 'text-muted' : '',
							].join(' ')}
						>
							{t(item.key)}
						</Link>
					)
				})}
		</nav>
	)
}
