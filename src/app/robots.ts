import { appConfig } from '@/shared/config/app.config'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://res2026.kz'

	if (!appConfig.isProduction) {
		return {
			rules: {
				userAgent: '*',
				disallow: '/',
			},
			sitemap: `${baseUrl}/sitemap.xml`,
		}
	}

	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
