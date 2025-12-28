import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { Container } from '@/shared/ui/container/container'

export function AboutSummit() {
	const t = useTranslations()

	return (
		<section className="bg-white py-[100px]">
			<Container className="flex items-start justify-between gap-[30px]">
				<div className="max-w-[655px] grow">
					<div className="font-regular text-text mb-[62px] text-[24px] leading-[1.2]">{t(`titles.aboutSummit`)}</div>

					<div className="flex items-start justify-between gap-[5px]">
						<Image
							src="/imgs/about-img-1.png"
							alt="About Summit"
							width={351}
							height={571}
							className="block max-w-[351px] rounded-[12px]"
						/>
						<div className="flex flex-col items-center justify-between">
							<Image
								src="/imgs/about-img-2.png"
								alt="About Summit 2"
								width={299}
								height={238}
								className="mb-[56px] block max-w-[299px] rounded-[12px]"
							/>
							<div className="font-regular text-secondary mb-[30px] max-w-[197px] text-left text-[16px] leading-[1.2]">
								<div className="mb-[15px] max-w-[170px]">\\{t('titles.strategicPartner')}</div>
								<Image
									src="/imgs/un-color.svg"
									width={182}
									height={55}
									alt="UN Environment"
									className="block"
								/>
							</div>
							<div className="font-regular text-secondary max-w-[197px] text-left text-[16px] leading-[1.2]">
								<div className="mb-[15px] max-w-[170px]">\\{t('titles.strategicPartner')}</div>
								<Image
									src="/imgs/cnn-color.svg"
									width={102}
									height={49}
									alt="CNN"
									className="block"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="flex max-w-[1025px] grow flex-col justify-start">
					<div className="font-regular mb-[70px] max-w-[940px] self-end text-[48px] leading-[1.2]">
						{t.rich('pages.aboutSummit.title', {
							primary: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
							secondary: (chunks) => <span className="text-secondary font-bold">{chunks}</span>,
						})}
					</div>

					<div className="seld-start relative max-w-[721px]">
						<p className="font-regular text-text mb-[60px] text-left text-[24px] leading-normal">{t(`pages.aboutSummit.text1`)}</p>
						<p className="font-regular text-text mb-[60px] text-left text-[16px] leading-normal">{t(`pages.aboutSummit.text2`)}</p>
						<ButtonDefault>{t('labels.more')}</ButtonDefault>
						<Image
							src="/imgs/kz-map.svg"
							alt="KZ Map"
							width={1014}
							height={435}
							className="absolute top-0 left-full block min-h-[435px] min-w-[1014px]"
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
