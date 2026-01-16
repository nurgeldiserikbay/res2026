import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { headerNav } from '@/entities/nav/model/nav'
import { Link } from '@/i18n/navigation'
import { appConfig } from '@/shared/config/app.config'
import { IconArrDown } from '@/shared/icons/IconArrDown'
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
	const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

	const toggleItem = (key: string) => {
		setExpandedItems((prev) => {
			const newSet = new Set(prev)
			if (newSet.has(key)) {
				newSet.delete(key)
			} else {
				newSet.add(key)
			}
			return newSet
		})
	}

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
		<nav className="relative block 2xl:hidden">
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

					<div className="xs:grid-cols-2 grid w-full grid-cols-1 justify-between gap-x-[40px] gap-y-[36px] max-[440px]:grid-cols-1 lg:flex lg:flex-nowrap 2xl:gap-x-[40px]">
						{headerNav
							.filter((item) => item.main)
							.map((item) => {
								const active = isActive(pathname, item.href)

								if (item.children?.length) {
									const isExpanded = expandedItems.has(item.key)
									return (
										<div
											key={item.key}
											className="xs:max-w-[180px] w-full"
										>
											<div className="max-[440px]:hidden">
												<p className="xs:mb-[30px] xs:text-[20px] text-[18px] leading-none font-bold text-white">{t(item.key)}</p>
											</div>
											<button
												type="button"
												onClick={() => toggleItem(item.key)}
												className="hidden max-[440px]:flex max-[440px]:w-full max-[440px]:items-center max-[440px]:justify-between max-[440px]:text-left max-[440px]:text-[18px] max-[440px]:leading-none max-[440px]:font-bold max-[440px]:text-white"
											>
												<span>{t(item.key)}</span>
												<IconArrDown
													size={20}
													className={['transition-transform duration-300', isExpanded ? 'rotate-180' : 'rotate-0'].join(' ')}
													aria-hidden="true"
												/>
											</button>
											<div className="max-[440px]:hidden">
												{item.children?.map((child) => {
													const childActive = isActive(pathname, child.href)
													return (
														<Link
															key={child.key}
															href={child.href ?? '/'}
															aria-current={childActive ? 'page' : undefined}
															className={[
																'font-regular transition-duration-300 hover:text-muted-light xs:mb-[20px] xs:text-[16px] break-word mb-[10px] block text-left text-[14px] text-white transition-colors last:mb-0',
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
											<div
												className={[
													`hidden max-[440px]:block`,
													'max-[440px]:overflow-hidden max-[440px]:transition-all max-[440px]:duration-300 max-[440px]:ease-in-out',
													isExpanded ? 'max-[440px]:max-h-[1000px] max-[440px]:opacity-100' : 'max-[440px]:max-h-0 max-[440px]:opacity-0',
												].join(' ')}
											>
												<div className="pt-[30px] max-[440px]:flex max-[440px]:flex-col">
													{item.children?.map((child) => {
														const childActive = isActive(pathname, child.href)
														return (
															<Link
																key={child.key}
																href={child.href ?? '/'}
																aria-current={childActive ? 'page' : undefined}
																className={[
																	'font-regular transition-duration-300 hover:text-muted-light xs:mb-[20px] xs:text-[16px] break-word mb-[10px] block text-left text-[14px] text-white transition-colors last:mb-0',
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
											</div>
										</div>
									)
								}

								return (
									<Link
										key={item.key}
										href={item.href ?? '/'}
										aria-current={active ? 'page' : undefined}
										className={[
											'font-regular transition-duration-300 hover:text-muted-light xs:text-[18px] block text-left text-[16px] leading-none font-bold text-white transition-colors',
											active ? 'text-muted-light' : '',
											'focus-visible:text-muted-light focus-visible:outline-none',
										].join(' ')}
										onClick={() => setOpen(false)}
									>
										{t(item.key)}
									</Link>
								)
							})}

						<div className="flex max-w-[789px] grow flex-col items-start justify-start gap-[20px] md:w-auto">
							{headerNav
								.filter((item) => !item.main)
								.map((item) => {
									const active = isActive(pathname, item.href)
									return (
										<Link
											key={item.key}
											href={item.href ?? '/'}
											aria-current={pathname === item.href ? 'page' : undefined}
											className={[
												'font-regular transition-duration-300 hover:text-muted-light xs:text-[18px] block text-left text-[18px] leading-none font-bold text-white transition-colors',
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
					</div>

					{!appConfig.isProduction && (
						<div className="mt-[30px]">
							<HeaderSocial />
						</div>
					)}
				</Container>
			</div>
		</nav>
	)
}
