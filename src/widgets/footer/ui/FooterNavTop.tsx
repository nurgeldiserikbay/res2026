'use client'

import { useTranslations } from 'next-intl'

import { footerNav } from '@/entities/nav/model/nav'
import { Link, usePathname } from '@/i18n/navigation'

import { FooterNavBottom } from './FooterNavBottom'

export function FooterNavTop() {
	const t = useTranslations('nav')
	const pathname = usePathname()

	return (
		<nav className="3xl:gap-x-[60px] grid w-full grid-cols-2 justify-between gap-x-[25px] gap-y-[36px] lg:flex lg:flex-nowrap 2xl:gap-x-[40px]">
			{footerNav
				.filter((item) => item.main)
				.map((item) => {
					return (
						<div
							key={item.key}
							className="sm:max-w-unset"
						>
							{item.children ? (
								<>
									<p className="text-text 3xl:whitespace-nowrap mb-[30px] text-[14px] leading-none font-bold">{t(item.key)}</p>
									<ul className="flex flex-col gap-[20px]">
										{item.children?.map((child) => (
											<li
												key={child.key}
												className="block"
											>
												<Link
													href={child.href ?? '/'}
													aria-current={pathname === child.href ? 'page' : undefined}
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
								</>
							) : (
								<Link
									href={item.href ?? '/'}
									aria-current={pathname === item.href ? 'page' : undefined}
									className={[
										'text-text hover:text-muted block text-[14px] leading-none transition-colors',
										pathname === item.href ? 'text-muted' : '',
										item.main ? 'mb-[30px] font-bold' : 'mb-[20px]',
									].join(' ')}
								>
									{t(item.key)}
								</Link>
							)}
						</div>
					)
				})}

			<FooterNavBottom />
		</nav>
	)
}
