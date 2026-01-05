import localFont from 'next/font/local'
import { headers } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'

import { appConfig } from '@/shared/config/app.config'
import type { Locale } from '@/shared/config/i18n'
import { GSAPProvider } from '@/shared/lib/gsap/provider'
import { Footer } from '@/widgets/footer/ui/Footer'
import { Header } from '@/widgets/header/ui/Header'

import type { Metadata } from 'next'

import './globals.css'

const HelveticaNeue = localFont({
	variable: '--font-helvetica',
	display: 'swap',
	src: [
		{
			path: '../../../public/fonts/HelveticaNeue-Thin.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-ThinItalic.woff2',
			weight: '200',
			style: 'italic',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/HelveticaNeue-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
	],
})

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params
	const messages = (await import(`../../../messages/${locale}.json`)).default

	const meta = messages.meta as {
		title: string
		description?: string
		siteName?: string
		ogImageAlt?: string
		ogImageTitle?: string
	}

	const headersList = await headers()
	const protocol = headersList.get('x-forwarded-proto') || 'https'
	const host = headersList.get('host') || 'localhost:3000'
	const baseUrl = `${protocol}://${host}`
	const canonicalUrl = `${baseUrl}/${locale}`

	const ogImageUrl = `${baseUrl}/imgs/logotype.svg`

	return {
		title: meta.title,
		description: meta.description || meta.title,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title: meta.title,
			description: meta.description || meta.title,
			siteName: meta.siteName || meta.title,
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: meta.ogImageAlt || meta.title,
					type: 'image/svg+xml',
				},
			],
			locale: locale,
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: meta.title,
			description: meta.description || meta.title,
			images: [ogImageUrl],
		},
		robots: {
			index: appConfig.isProduction,
			follow: appConfig.isProduction,
			googleBot: {
				index: appConfig.isProduction,
				follow: appConfig.isProduction,
			},
		},
	}
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: Locale }>
}>) {
	const { locale } = await params

	return (
		<html lang={locale}>
			<body className={`${HelveticaNeue.className}`}>
				<NextIntlClientProvider>
					<GSAPProvider />
					{/* <div id="smooth-wrapper">
						<div id="smooth-content"> */}
					<Header />
					<main>{children}</main>
					<Footer />
					{/* </div>
					</div> */}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
