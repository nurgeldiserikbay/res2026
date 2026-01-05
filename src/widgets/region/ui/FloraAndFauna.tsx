import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function FloraAndFauna() {
	const t = useTranslations()

	return (
		<>
			<section
				id="flora-and-fauna"
				className="relative mt-[100px]"
			>
				<Container className="flex items-start justify-between overflow-visible">
					<div className="relative max-w-[872px] whitespace-pre-line">
						<Image
							src="/imgs/flora-1.png"
							alt="Flora 1"
							width={870}
							height={378}
							className="block w-full"
						/>
					</div>

					<div className="relative max-w-[860px] pt-[90px] whitespace-pre-line">
						<h3 className="text-text relative z-1 mb-[30px] text-[32px] leading-normal font-bold">
							{t('pages.region.floraAndFaunaText1')}
						</h3>
						<p className="relative z-1 mb-[30px]">{t('pages.region.floraAndFaunaText2')}</p>
					</div>
				</Container>
			</section>
		</>
	)
}
