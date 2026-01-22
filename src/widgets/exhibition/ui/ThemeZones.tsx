import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

import { Locale } from '@/shared/config/i18n'
import { Container } from '@/shared/ui/container/container'

import { getThemeZones } from './mocks'

export function ThemeZones() {
	const t = useTranslations()
	const locale = useLocale()
	const themeZones = getThemeZones(locale as Locale)

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<h2 className="mb-[30px] text-[32px] leading-[1.2] font-bold text-text xl:text-[36px] 2xl:text-[38px] 3xl:text-[48px]">
					{t('pages.exhibition.themeZones.title')}
				</h2>
				<p className="mb-[60px] max-w-[662px] text-[16px] leading-normal font-normal whitespace-pre-line text-[#41754F] md:text-[18px] xl:text-[24px]">
					{t('pages.exhibition.themeZones.text')}
				</p>
				<div className="grid grid-cols-1 gap-x-[10px] gap-y-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{themeZones.map((themeZone) => (
						<div
							key={themeZone.id}
							className={[`group relative h-[484px] w-full cursor-pointer overflow-hidden rounded-[12px] xs:h-[584px]`].join(' ')}
							aria-label={themeZone.title}
						>
							<Image
								src={themeZone.image}
								alt={themeZone.title}
								width={443}
								height={584}
								className="transform-origin-center h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
							/>
							{/* <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-linear-to-b from-[#000000]/20 to-[#02493F] opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover:opacity-100"></div> */}
							<div className="absolute right-0 bottom-0 left-0 z-10 p-[30px] pb-[51px] text-center">
								{/* <button className="xs:mb-[60px] mb-[30px] inline-block cursor-pointer">
									<IconArrowLeft className="text-white" />
								</button> */}
								<h3
									className="w-full overflow-hidden text-center text-[20px] leading-normal font-bold text-white"
									dangerouslySetInnerHTML={{ __html: themeZone.title }}
								></h3>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
