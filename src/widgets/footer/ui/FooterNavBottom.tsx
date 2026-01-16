'use client'

import { useTranslations } from 'next-intl'

import { footerNav } from '@/entities/nav/model/nav'
import { Link, usePathname } from '@/i18n/navigation'

export function FooterNavBottom() {
	const t = useTranslations('nav')
	const pathname = usePathname()

	return (
		<nav className="flex max-w-[789px] grow flex-col items-start justify-start gap-[20px] md:w-auto">
			{footerNav
				.filter((item) => !item.main)
				.map((item) => {
					return (
						<Link
							key={item.key}
							href={item.href ?? '/'}
							aria-current={pathname === item.href ? 'page' : undefined}
							className={[
								'text-text hover:text-muted block text-[12px] leading-[1.4] font-bold transition-colors',
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
