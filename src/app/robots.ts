import { appConfig } from '@/shared/config/app.config'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	if (!appConfig.isProduction) {
		return {
			rules: {
				userAgent: '*',
				disallow: '/',
			},
		}
	}

	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
	}
}
