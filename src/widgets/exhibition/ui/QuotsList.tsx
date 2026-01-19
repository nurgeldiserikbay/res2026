import { useLocale } from 'next-intl'

import { Locale } from '@/shared/config/i18n'
import { Container } from '@/shared/ui/container/container'

import { getQuots } from './mocks'
import { QuotItem } from './QuotItem'

export function QuotsList() {
	const locale = useLocale()
	const quots = getQuots(locale as Locale)

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="grid grid-cols-1 gap-x-[61px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3">
				{quots.map((quot, index) => (
					<QuotItem
						key={index}
						{...quot}
					/>
				))}
			</Container>
		</section>
	)
}
