'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { ProcessesSlider } from '@/widgets/preparation-process/ui/ProcessesSlider'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<PageBanner
				title={t('pages.preparationProcess.title')}
				breadcrumbs={[
					{ label: t('pages.about.title'), href: '/about' },
					{ label: t('pages.preparationProcess.title'), href: '/about/preparation-process' },
				]}
				useMinHeight
			/>

			<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
				<Container className="flex flex-wrap items-center justify-between gap-x-[60px] gap-y-[30px] lg:flex-nowrap">
					<div className="max-w-[1026px]">
						<Image
							src="/imgs/preparation-process/preparation-process-2.jpeg"
							alt="Preparation Process"
							width={1600}
							height={1066}
							className="block max-w-full rounded-[12px]"
						/>
					</div>

					<div className="max-w-[721px]">
						<h4 className="text-text mb-[30px] text-[20px] leading-normal font-normal md:text-[22px] xl:mb-[60px] xl:text-[24px]">
							{t('pages.preparationProcess.subtitle')}
						</h4>
						<p className="text-text text-[16px] leading-normal font-normal">{t('pages.preparationProcess.text')}</p>
					</div>
				</Container>
			</section>

			<ProcessesSlider />
		</>
	)
}
