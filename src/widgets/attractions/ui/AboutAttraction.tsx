import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function AboutAttraction() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="3xl:items-stretch grid grid-cols-1 items-start gap-x-[60px] gap-y-[30px] lg:grid-cols-2">
				<div className="xl:flex-start flex w-full flex-col justify-between gap-[10px] md:flex-row lg:flex-col xl:flex-row">
					<Image
						src="/imgs/baiterek/baiterek-1.png"
						alt="Astana Culture and Traditions"
						width={419}
						height={537}
						className="block w-full rounded-[12px] object-cover object-center max-[768px]:min-w-full md:w-[48.16%] lg:w-full xl:w-[48.16%]"
					/>
					<div className="grid shrink-0 grid-cols-2 gap-[10px] md:flex md:w-[50.8%] md:flex-col lg:grid lg:w-full xl:flex xl:w-[50.8%]">
						<Image
							src="/imgs/baiterek/baiterek-2.png"
							alt="Astana Culture and Traditions"
							width={442}
							height={265}
						/>
						<Image
							src="/imgs/baiterek/baiterek-3.png"
							alt="Astana Culture and Traditions"
							width={442}
							height={265}
						/>
					</div>
				</div>
				<div className="w-full">
					<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
						{t('pages.useful.baiterek.aboutMonument')}
					</h2>
					<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line">
						{t('pages.useful.baiterek.aboutMonumentText')}
					</p>
					<div className="grid grid-cols-1 items-stretch gap-[10px] bg-white sm:grid-cols-2">
						<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
							<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap xl:text-[48px] 2xl:text-[64px]">
								{t('pages.useful.baiterek.aboutMonumentTitle1')}
							</h3>
							<div className="text-secondary text-[16px] leading-normal font-normal">{t('pages.useful.baiterek.aboutMonumentText1')}</div>
						</div>
						<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
							<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap xl:text-[48px] 2xl:text-[64px]">
								{t('pages.useful.baiterek.aboutMonumentTitle2')}
							</h3>
							<div className="text-secondary text-[16px] leading-normal font-normal">{t('pages.useful.baiterek.aboutMonumentText2')}</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
