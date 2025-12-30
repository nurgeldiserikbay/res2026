'use client'

import { useEffect } from 'react'

type UseFancyboxOptions = {
	/**
	 * root селектор, где искать элементы с data-fancybox
	 * (чтобы не биндить на весь документ)
	 */
	rootSelector?: string
	/**
	 * Fancybox group name (data-fancybox="gallery")
	 */
	group?: string
}

export function useFancybox(options: UseFancyboxOptions = {}) {
	const { rootSelector = '[data-fancybox-root]', group = 'gallery' } = options

	useEffect(() => {
		let mounted = true
		;(async () => {
			// динамический импорт только на клиенте
			const mod = await import('@fancyapps/ui/dist/fancybox/')
			const fancybox = mod.Fancybox as unknown as {
				unbind?: (root: HTMLElement) => void
				close: () => void
				bind: (root: HTMLElement, selector: string, options: Record<string, unknown>) => void
			}

			// CSS тоже можно загрузить динамически
			await import('@fancyapps/ui/dist/fancybox/fancybox.css')

			if (!mounted) return

			const root = document.querySelector(rootSelector) as HTMLElement | null
			if (!root) return

			// отцепить старые бинды (на случай перерендера/смены табов)
			try {
				if (fancybox.unbind) {
					fancybox.unbind(root)
				}
				fancybox.close()
			} catch {}

			fancybox.bind(root, `[data-fancybox="${group}"]`, {
				// минимальные настройки, можно расширить
				animated: true,
				hideScrollbar: true,
				placeFocusBack: false,
			})
		})()

		return () => {
			mounted = false
			;(async () => {
				try {
					const mod = await import('@fancyapps/ui')
					const FB = mod.Fancybox
					const root = document.querySelector(rootSelector) as HTMLElement | null
					if (root) FB.unbind(root)
					FB.close()
				} catch {}
			})()
		}
	}, [rootSelector, group])
}
