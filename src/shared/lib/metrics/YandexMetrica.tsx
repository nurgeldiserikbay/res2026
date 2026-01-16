'use client'

import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { usePathname } from '@/i18n/navigation'
import { appConfig } from '@/shared/config/app.config'

const YANDEX_METRICA_ID = 106264810

export default function YandexMetrica() {
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const isEnabled = appConfig.isProduction && YANDEX_METRICA_ID

	useEffect(() => {
		if (!isEnabled || !YANDEX_METRICA_ID) return

		const ym = (window as Window & { ym?: (id: number, method: string, url: string) => void }).ym
		if (!ym) return

		const params = searchParams.toString()
		const url = window.location.origin + pathName + (params ? '?' + params : '')

		ym(Number(YANDEX_METRICA_ID), 'hit', url)
	}, [pathName, searchParams, isEnabled])

	// Работает только на продакшене
	if (!isEnabled) {
		return null
	}

	return (
		<Script
			id="yandex-metrika"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
					
					ym(${YANDEX_METRICA_ID}, "init", {
						defer: true,
						clickmap: true,
						trackLinks: true,
						accurateTrackBounce: true,
						webvisor: true
					});
				`,
			}}
		/>
	)
}
