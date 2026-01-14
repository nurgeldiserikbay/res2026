import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function CultureAndTraditions() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-col items-start justify-between gap-x-[60px] gap-y-[30px] md:flex-row">
				<div className="w-full max-w-[860px]">
					<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:mb-[60px] xl:text-[36px] 2xl:text-[30px]">
						{t('pages.useful.astana.cultureAndTraditions.title')}
					</h2>
					<p className="text-text mb-[60px] text-[18px] leading-normal font-normal whitespace-pre-line lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
						{t('pages.useful.astana.cultureAndTraditions.text1')}
					</p>
					<p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">
						{t('pages.useful.astana.cultureAndTraditions.text2')}
					</p>
				</div>
				<div className="flex w-full max-w-[871px] items-start justify-between gap-[10px]">
					<div className="flex w-[46.6%] shrink-0 flex-col gap-[10px]">
						<Image
							src="/imgs/usefulls/culture-1.png"
							alt="Astana Culture and Traditions"
							width={405}
							height={314}
						/>
						<Image
							src="/imgs/usefulls/culture-2.png"
							alt="Astana Culture and Traditions"
							width={405}
							height={423}
						/>
					</div>
					<Image
						src="/imgs/usefulls/culture-3.png"
						alt="Astana Culture and Traditions"
						width={455}
						height={737}
						className="block w-[52.2%] md:translate-y-[30px] xl:translate-y-[54px]"
					/>
				</div>
			</Container>
		</section>
	)
}
