import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function InfoInsideAttraction() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="grid grid-cols-1 gap-x-[60px] gap-y-[30px] lg:grid-cols-2">
				<div className="flex flex-col items-start justify-start">
					<h2 className="text-text 3xl:text-[48px] mb-[30px] align-top text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:mb-[60px] 2xl:text-[30px]">
						{t('pages.useful.baiterek.insideMonumentTitle')}
					</h2>
					<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:mb-[60px] 2xl:text-[24px]">
						{t('pages.useful.baiterek.insideMonumentSubtitle')}
					</p>
					<p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">
						{t('pages.useful.baiterek.insideMonumentText')}
					</p>
				</div>
				<Image
					src="/imgs/baiterek/baiterek-4.png"
					alt="Astana Culture and Traditions"
					width={870}
					height={696}
				/>
			</Container>
		</section>
	)
}
