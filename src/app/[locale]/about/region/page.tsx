import { AbountEtc } from '@/widgets/region/ui/AbountEtc'
import AboutKaz from '@/widgets/region/ui/AboutKaz'
import { AboutKazBanner } from '@/widgets/region/ui/AboutKazBanner'
import { Climate } from '@/widgets/region/ui/Climate'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'

export default function Page() {
	return (
		<>
			<AboutKazBanner />

			<RegionTabs />

			<AboutKaz />

			<Climate />

			<FloraAndFauna />

			<AbountEtc />
		</>
	)
}
