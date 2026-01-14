import { useTranslations } from 'next-intl'

import { PageBanner } from '@/shared/ui/banner'
import { VisaInfo } from '@/widgets/visa/ui/VisaInfo'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<PageBanner
				title={t('pages.visa.title')}
				breadcrumbs={[{ label: t('pages.visa.title'), href: '/useful/visa' }]}
			/>

			<VisaInfo />
		</>
	)
}
