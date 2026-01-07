import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { headerNav } from '@/entities/nav/model/nav'
import { appConfig } from '@/shared/config/app.config'
import { IconClose } from '@/shared/icons/IconClose'
import { IconMenu } from '@/shared/icons/IconMenu'
import { Container } from '@/shared/ui/container/container'

import { HeaderLogo } from './HeaderLogo'
import { isActive } from './HeaderNav'
import { HeaderSocial } from './HeaderSocial'

export function HeaderMobileNav() {
	const t = useTranslations('nav')
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const prevOverflow = document.documentElement.style.overflow
		if (open) {
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = prevOverflow || ''
		}

		return () => {
			document.documentElement.style.overflow = prevOverflow || ''
		}
	}, [open])

	return (
		<nav className="relative block lg:hidden">
			<button
				type="button"
				aria-label="Menu"
				aria-expanded={open}
				aria-controls="mobile-menu"
				className="cursor-pointer"
				onClick={() => setOpen(true)}
			>
				<IconMenu
					className="hover:text-muted-light h-[26px] w-[47px] text-white transition-colors duration-300"
					aria-hidden="true"
				/>
			</button>

			<div
				id="mobile-menu"
				role="dialog"
				aria-modal="true"
				aria-label="Navigation menu"
				className={[
					'bg-primary-dark fixed top-0 left-0 z-50 h-screen w-screen transform overflow-y-auto bg-[url("/imgs/menu-mob-bg.png")] bg-cover bg-center bg-no-repeat py-[30px] transition-transform duration-300 ease-out',
					open ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-full opacity-0',
				].join(' ')}
			>
				<Container>
					<div className="mb-[40px] flex items-center justify-between">
						<HeaderLogo />
						{!appConfig.isProduction && <HeaderSocial />}
						<button
							type="button"
							aria-label="Close menu"
							className="cursor-pointer"
							onClick={() => setOpen(false)}
						>
							<IconClose
								className="hover:text-muted-light h-[24px] w-[24px] text-white transition-colors duration-300"
								aria-hidden="true"
							/>
						</button>
					</div>

					<div className="xs:gap-x-[40px] xs:gap-y-[60px] flex flex-wrap gap-x-[60px] gap-y-[30px]">
						{headerNav.slice(0, 2).map((item) => {
							const active = isActive(pathname, item.href)

							if (item.children?.length) {
								return (
									<div
										key={item.key}
										className="xs:max-w-[180px] w-full max-w-[140px]"
									>
										<p className="xs:mb-[30px] xs:text-[20px] mb-[20px] text-[18px] leading-none font-bold text-white">{t(item.key)}</p>
										{item.children?.map((child) => {
											const childActive = isActive(pathname, child.href)
											return (
												<Link
													key={child.key}
													href={child.href ?? '/'}
													aria-current={childActive ? 'page' : undefined}
													className={[
														'font-regular transition-duration-300 hover:text-muted-light xs:mb-[20px] xs:text-[16px] mb-[10px] block text-left text-[14px] text-white transition-colors last:mb-0',
														childActive ? 'text-muted-light' : '',
														'focus-visible:text-muted-light focus-visible:outline-none',
													].join(' ')}
													onClick={() => setOpen(false)}
												>
													{t(child.key)}
												</Link>
											)
										})}
									</div>
								)
							}

							return (
								<Link
									key={item.key}
									href={item.href ?? '/'}
									aria-current={active ? 'page' : undefined}
									className={[
										'font-regular transition-duration-300 hover:text-muted-light xs:text-[16px] block text-left text-[14px] text-white transition-colors',
										active ? 'text-muted-light' : '',
										'focus-visible:text-muted-light focus-visible:outline-none',
									].join(' ')}
									onClick={() => setOpen(false)}
								>
									{t(item.key)}
								</Link>
							)
						})}
					</div>
				</Container>
			</div>
		</nav>
	)
}
