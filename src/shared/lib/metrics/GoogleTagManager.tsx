'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { appConfig } from '@/shared/config/app.config'

const GTM_ID = 'GTM-NT3TCT8K'

export default function GoogleTagManager() {
	const pathName = usePathname()
	const searchParams = useSearchParams()

	const isEnabled = appConfig.isProduction && GTM_ID

	// Инициализация dataLayer
	useEffect(() => {
		if (!isEnabled) return

		// Инициализируем dataLayer, если его еще нет
		if (typeof window !== 'undefined') {
			const windowWithDataLayer = window as Window & { dataLayer?: Array<Record<string, unknown>> }
			if (!windowWithDataLayer.dataLayer) {
				windowWithDataLayer.dataLayer = []
			}
		}
	}, [isEnabled])

	// Отслеживание изменений маршрута для SPA-навигации
	useEffect(() => {
		if (!isEnabled) return

		const windowWithDataLayer = window as Window & { dataLayer?: Array<Record<string, unknown>> }
		if (!windowWithDataLayer.dataLayer) return

		const params = searchParams.toString()
		const url = window.location.origin + pathName + (params ? '?' + params : '')

		windowWithDataLayer.dataLayer.push({
			event: 'page_view',
			page_path: pathName,
			page_url: url,
		})
	}, [pathName, searchParams, isEnabled])

	// Работает только на продакшене
	if (!isEnabled) {
		return null
	}

	return (
		<>
			<Script
				id="google-tag-manager"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${GTM_ID}');
					`,
				}}
			/>
			<noscript>
				<iframe
					src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
					height="0"
					width="0"
					style={{ display: 'none', visibility: 'hidden' }}
				/>
			</noscript>
		</>
	)
}
