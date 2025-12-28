import { useEffect, useMemo, useRef, useState } from 'react'

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
	const [lang, setLang] = useState<Locale>('ru')

	const options = useMemo(() => (['kk', 'ru', 'en'] as Locale[]).filter((l) => l !== lang), [lang])

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

	return (
		<div
			ref={ref}
			className="relative z-10 h-[58px] w-[87px]"
		>
			{/* ВНЕШНЯЯ ГРАДИЕНТ-РАМКА (она “удлиняется”) */}
			<div
				className={`absolute top-0 left-0 rounded-[8px] bg-linear-to-tr from-white/0 to-white/90 p-px transition-colors duration-200 ${open ? 'h-[174px]' : 'h-[58px]'}`}
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
						className="box-border flex h-[58px] w-full cursor-pointer items-center justify-between gap-[10px] px-[16px] text-white"
						aria-haspopup="listbox"
						aria-expanded={open}
					>
						<span className="text-[16px] leading-none">{LANG_LABEL[lang as Locale]}</span>

						{/* Chevron */}
						<span className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}>
							<IconArrowDown />
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
											setLang(l)
											setOpen(false)
										}}
										className={[
											'cursor-pointer',
											'flex h-[58px] w-full items-center px-[16px] text-white/80',
											'transition-colors duration-200',
											'hover:bg-white/5 hover:text-white',
										].join(' ')}
										role="option"
										aria-selected={false}
									>
										<span className="text-[16px] leading-none">{LANG_LABEL[l as Locale]}</span>
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
