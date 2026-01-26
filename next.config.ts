import createNextIntlPlugin from 'next-intl/plugin'

import type { NextConfig } from 'next'

const isDev = process.env.NEXT_PUBLIC_GIT_BRANCH === 'develop'

const nextConfig: NextConfig = {
	reactCompiler: true,
	output: 'standalone',
	images: isDev
		? {
				remotePatterns: [
					{ protocol: 'https', hostname: '**' },
					{ protocol: 'http', hostname: '**' },
				],
			}
		: {
				remotePatterns: [
					{ protocol: 'https', hostname: 'https://res2026.kz/' },
					{ protocol: 'https', hostname: 'visitastana.kz' },
				],
			},
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
