import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function EventPlace() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-wrap items-start justify-center gap-x-[60px] gap-y-[30px] lg:flex-nowrap lg:items-center">
				<div className="w-full xl:w-auto">
					<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
						{t('pages.exhibition.eventPlace.title')}
					</h2>
					<p className="text-text mb-[15px] max-w-[662px] text-[16px] leading-normal font-normal whitespace-pre-line md:text-[18px] xl:text-[24px]">
						{t('pages.exhibition.eventPlace.text')}
					</p>
					<p className="text-text mb-[30px] max-w-[662px] text-[16px] leading-normal font-normal whitespace-pre-line">
						{t('pages.exhibition.eventPlace.text2')}
					</p>
					<Image
						src="/imgs/exhibition/event-place-1.png"
						alt="Event Place Map"
						width={717}
						height={236}
						className="w-full max-w-[717px]"
					/>
				</div>
				<Image
					src="/imgs/exhibition/event-place-2.png"
					alt="Event Place Map"
					width={1025}
					height={558}
					className="w-full max-w-[1025px]"
				/>
			</Container>
		</section>
	)
}
