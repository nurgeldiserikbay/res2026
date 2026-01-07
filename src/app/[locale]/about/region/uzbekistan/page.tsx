import { AbountEtc } from '@/widgets/region/ui/AbountEtc'
import AboutRegion from '@/widgets/region/ui/AboutRegion'
import { AboutRegionBanner } from '@/widgets/region/ui/AboutRegionBanner'
import { Climate } from '@/widgets/region/ui/Climate'
import { FloraAndFauna } from '@/widgets/region/ui/FloraAndFauna'
import { RegionTabs } from '@/widgets/region/ui/RegionTabs'

export default function Page() {
	return (
		<>
			<AboutRegionBanner />

			<RegionTabs />

			<AboutRegion />

			<Climate />

			<FloraAndFauna />

			<AbountEtc />
		</>
	)
}
