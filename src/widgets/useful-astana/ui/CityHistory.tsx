import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function CityHistory() {
	const t = useTranslations()

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="flex flex-wrap-reverse items-start justify-between gap-[60px] md:flex-nowrap">
					<Image
						src="/imgs/astana-history.png"
						alt="Astana History"
						width={871}
						height={417}
						className="h-auto w-full max-w-[871px] shrink"
					/>
					<div className="w-full max-w-[860px] shrink-2">
						<h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
							{t('pages.programms.title')}
						</h2>
					</div>
				</div>
			</Container>
		</section>
	)
}
