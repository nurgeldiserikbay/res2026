'use client'

import { useTranslations } from 'next-intl'

import { PageBanner } from '@/shared/ui/banner'
import { ProgrammsPage } from '@/widgets/programms/ui/ProgrammsPage'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<PageBanner
				title={t('titles.programs')}
				breadcrumbs={[{ label: t('titles.programs'), href: '/programs' }]}
			/>

			<ProgrammsPage />
		</>
	)
}
