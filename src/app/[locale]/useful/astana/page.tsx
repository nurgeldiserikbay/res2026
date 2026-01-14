import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { CityHistory } from '@/widgets/useful-astana/ui/CityHistory'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<HeroBanner
				title={t(`pages.useful.astana.title`)}
				bgImage="/imgs/astana-banner.png"
				breadcrumbs={[{ label: t(`pages.useful.astana.pageTitle`), href: '/useful/astana' }]}
				subtitle={t(`pages.useful.astana.subtitle`)}
			/>

			<CityHistory />
		</>
	)
}
