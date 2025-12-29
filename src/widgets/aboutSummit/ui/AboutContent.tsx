import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { ButtonTree } from '@/shared/ui/button/ButtonTree'
import { Container } from '@/shared/ui/container/container'

export function AboutContent() {
	const t = useTranslations()

	return (
		<section className="relative bg-white pt-[100px]">
			<Container>
				<div className="flex items-start justify-between gap-[30px]">
					<div className="text-text relative mb-[78px] max-w-[940px] grow text-[48px] leading-[1.2]">
						{t.rich('pages.about.text', {
							primary: (chunks) => <span className="text-primary font-bold">{chunks}</span>,
							secondary: (chunks) => <span className="text-secondary font-bold">{chunks}</span>,
						})}

						<Image
							src="/imgs/kz-about-map.svg"
							alt="KZ About Map"
							width={1885}
							height={1112}
							className="pointer-events-none absolute top-0 left-full block min-h-[1112px] min-w-[1885px] -translate-y-[268px] transform"
						/>
					</div>
				</div>

				<div className="relative z-1 mb-[15px] flex items-start justify-between gap-[30px]">
					<div className="max-w-[721px]">
						<div className="relative pt-[39px] pl-[71px]">
							<div className="text-muted absolute top-0 left-0 text-[128px] leading-none">”</div>
							<div className="font-regular mb-[50px] max-w-[493px] text-[16px] leading-normal whitespace-pre-line text-black">
								{t('pages.about.presidentText')}
							</div>

							<div className="flex items-center gap-[30px]">
								<Image
									src="/imgs/president.png"
									alt="About President"
									width={102}
									height={102}
									className="block max-w-[102px] rounded-full"
								/>
								<div>
									<div className="mb-[5px] text-[17px] leading-[26px] font-bold text-black">{t('pages.about.presidentName')}</div>
									<div className="text-primary text-[14px] leading-none">{t('pages.about.presidentPosition')}</div>
								</div>
							</div>
						</div>

						<p className="font-regular text-text mt-[60px] text-[24px] leading-normal">{t('pages.about.text2')}</p>
					</div>

					<div className="flex max-w-[974px] -translate-y-[130px] transform items-end justify-between gap-[5px]">
						<div className="relative">
							<Image
								src="/imgs/about-page-img-1.png"
								alt="About President"
								width={509}
								height={662}
								className="block max-w-[509px] rounded-[12px]"
							/>
							<div className="absolute bottom-0 left-0 p-[60px]">
								<div className="mb-[30px] max-w-[264px] text-[16px] leading-normal font-normal text-white">{t(`pages.footer.text`)}</div>
								<div className="max-w-[247px] text-[32px] leading-[1.2] font-bold text-white">{t(`pages.footer.text1`)}</div>
							</div>
						</div>
						<div>
							<Image
								src="/imgs/about-page-img-2.png"
								alt="About President"
								width={460}
								height={808}
								className="block max-w-[460px] rounded-[12px]"
							/>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="max-w-[721px]">
						<h2 className="text-primary mb-[60px] text-[48px] leading-[1.2] font-bold">{t('pages.about.purpose')}</h2>
						<p className="text-text text-[16px] leading-normal font-normal">{t('pages.about.text3')}</p>
					</div>

					<div className="relative">
						<Image
							src="/imgs/about-img-3.png"
							alt="About President"
							width={865}
							height={414}
							className="block rounded-[12px]"
						/>

						<div className="absolute top-0 left-0 flex h-full w-full flex-col items-start justify-center gap-[55px] p-[36px]">
							<p className="font-regular max-w-[456px] text-left text-[24px] leading-[1.3] text-white">
								{t('pages.connectionBanner.text')}
							</p>

							<ButtonTree>{t('commands.join')}</ButtonTree>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
