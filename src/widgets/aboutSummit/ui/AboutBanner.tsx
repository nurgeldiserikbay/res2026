import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function AboutBanner() {
	const t = useTranslations()

	return (
		<section className="bg-primary-dark pt-[268px] pb-[168px]">
			<Container className="flex items-start justify-between gap-[30px]">
				<div className="max-w-[655px] grow">
					<div className="font-regular text-text mb-[62px] text-[24px] leading-[1.2]">{t('titles.aboutSummit')}</div>
				</div>
			</Container>
		</section>
	)
}
