import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { Container } from '@/shared/ui/container/container'

export function Soon() {
	const t = useTranslations()

	return (
		<section className="pt-[249px] pb-[50px] md:pb-[60px] lg:pb-[80px] 2xl:pt-[263px] 2xl:pb-[329px]">
			<Container className="flex flex-col items-center justify-center">
				<Image
					src="/imgs/blank-tree.svg"
					alt="Soon"
					width={199}
					height={116}
					className="mb-[40px] block"
				/>
				<h1 className="font-regular mb-[40px] max-w-[477px] text-center text-[32px] leading-[1.2] text-black lg:text-[36px] xl:text-[40px] 2xl:text-[48px]">
					{t('titles.soon')}
				</h1>
				<p className="text-text font-regular mb-[40px] max-w-[433px] text-center text-[16px] leading-normal whitespace-pre-line">
					{t('titles.soonText')}
				</p>
				<ButtonDefault href={'/'}>{t('commands.toMainPage')}</ButtonDefault>
			</Container>
		</section>
	)
}
