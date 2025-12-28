'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { headerNav } from '@/entities/nav/model/nav'
import { Link } from '@/i18n/navigation'

export function FooterNavTop() {
	const t = useTranslations('nav')
	const pathname = usePathname()

	return (
		<nav className="flex max-w-[789px] grow items-start justify-between gap-[10px]">
			{headerNav
				.filter((item) => item.main)
				.map((item) => {
					return (
						<div key={item.key}>
							<p className="text-text mb-[30px] text-[14px] leading-none font-bold">{t(item.key)}</p>
							<ul className="flex flex-col gap-[20px]">
								{item.children?.map((child) => (
									<li
										key={child.key}
										className="block"
									>
										<Link
											href={child.href ?? '/'}
											className={[
												'font-regular text-text hover:text-muted block text-[12px] leading-[1.4] transition-colors',
												pathname === child.href ? 'text-muted' : '',
											].join(' ')}
										>
											{t(child.key)}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)
				})}
		</nav>
	)
}
