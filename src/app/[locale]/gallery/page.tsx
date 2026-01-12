'use client'

import { useLocale, useTranslations } from 'next-intl'

import { Locale } from '@/shared/config/i18n'
import { PageBanner } from '@/shared/ui/banner'
import { GallerySection } from '@/widgets/gallery-section/GallerySection'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale()

	return (
		<>
			<PageBanner
				title={t('titles.gallery')}
				breadcrumbs={[{ label: t('titles.gallery'), href: '/gallery' }]}
			/>

			<GallerySection locale={locale as Locale} />
		</>
	)
}
