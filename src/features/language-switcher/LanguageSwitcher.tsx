'use client'

import { useLocale } from 'next-intl'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useRouter, usePathname } from '@/i18n/navigation'
import type { Locale } from '@/shared/config/i18n'
import { IconArrowDown } from '@/shared/icons/IconArrowDown'

const LANG_LABEL: Record<Locale, string> = {
	kk: 'Қаз',
	ru: 'Рус',
	en: 'Eng',
}

export function LanguageSwitcher() {
	const ref = useRef<HTMLDivElement | null>(null)
	const [open, setOpen] = useState(false)
	const locale = useLocale() as Locale
	const router = useRouter()
	const pathname = usePathname()

	const options = useMemo(() => (['kk', 'ru', 'en'] as Locale[]).filter((l) => l !== locale), [locale])

	useEffect(() => {
		const onDown = (e: MouseEvent | TouchEvent) => {
			if (!ref.current) return
			if (!ref.current.contains(e.target as Node)) setOpen(false)
		}
		document.addEventListener('mousedown', onDown)
		document.addEventListener('touchstart', onDown)
		return () => {
			document.removeEventListener('mousedown', onDown)
			document.removeEventListener('touchstart', onDown)
		}
	}, [])

	useEffect(() => {
		if (!open) return

		const onScroll = () => {
			setOpen(false)
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		document.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
			document.removeEventListener('scroll', onScroll)
		}
	}, [open])

	return (
		<div
			ref={ref}
			className="relative z-10 h-[42px] w-[79px] 2xl:h-[58px] 2xl:w-[87px]"
		>
			{/* ВНЕШНЯЯ ГРАДИЕНТ-РАМКА (она “удлиняется”) */}
			<div
				className={`absolute top-0 left-0 w-full rounded-[8px] bg-linear-to-tr from-white/0 to-white/90 p-px transition-colors duration-200 ${open ? 'h-[126px] 2xl:h-[174px]' : 'h-[42px] 2xl:h-[58px]'}`}
			>
				<div
					className={[
						'bg-primary-dark relative h-full w-full rounded-[8px]',
						// высота “шапки” всегда 58
						// при open добавляем место под пункты, но это НЕ двигает родителя,
						// потому что сам дропдаун absolute ниже
					].join(' ')}
				>
					{/* КНОПКА (текущий язык) */}
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						className="box-border flex h-[42px] w-full cursor-pointer items-center justify-between gap-[10px] px-[8px] text-white 2xl:h-[58px] 2xl:px-[16px]"
						aria-haspopup="listbox"
						aria-expanded={open}
						aria-label={`Current language: ${LANG_LABEL[locale]}. Select language`}
					>
						<span className="text-[16px] leading-none">{LANG_LABEL[locale]}</span>

						{/* Chevron */}
						<span
							className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
							aria-hidden="true"
						>
							<IconArrowDown aria-hidden="true" />
						</span>
					</button>

					{/* DROPDOWN (НЕ СДВИГАЕТ РОДИТЕЛЯ) */}
					<div
						className={['transition-all duration-300', open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'].join(
							' ',
						)}
					>
						<ul role="listbox">
							{options.map((l) => (
								<li key={l}>
									<button
										type="button"
										onClick={() => {
											router.replace(pathname, { locale: l })
											setOpen(false)
										}}
										className={[
											'cursor-pointer rounded-[8px]',
											'flex h-[42px] w-full items-center px-[8px] text-white/80 2xl:h-[58px] 2xl:px-[16px]',
											'transition-colors duration-200',
											'hover:bg-white/5 hover:text-white',
										].join(' ')}
										role="option"
										aria-selected={false}
										aria-label={`Select ${LANG_LABEL[l]} language`}
									>
										<span className="text-[16px] leading-none">{LANG_LABEL[l]}</span>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
