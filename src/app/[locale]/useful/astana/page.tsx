import { useTranslations } from 'next-intl'

import { HeroBanner } from '@/shared/ui/banner'
import { AstanaSlides } from '@/widgets/useful-astana/ui/AstanaSlides'
import { CityHistory } from '@/widgets/useful-astana/ui/CityHistory'
import { CitySymbols } from '@/widgets/useful-astana/ui/CitySymbols'
import { CultureAndTraditions } from '@/widgets/useful-astana/ui/CultureAndTraditions'
import { FactsAndNumbers } from '@/widgets/useful-astana/ui/FactsAndNumbers'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<HeroBanner
				title={t(`pages.useful.astana.title`)}
				bgImage="/imgs/astana-banner.png"
				breadcrumbs={[{ label: t(`pages.useful.astana.pageTitle`), href: '/useful/astana' }]}
				subtitle={t(`pages.useful.astana.subtitle`)}
				subtitleClassName="max-w-[723px]!"
			/>

			<CityHistory />

			<CitySymbols />

			<CultureAndTraditions />

			<FactsAndNumbers />

			<AstanaSlides />
		</>
	)
}
