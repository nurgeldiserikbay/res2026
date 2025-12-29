import { useTranslations } from 'next-intl'

import { Container } from '@/shared/ui/container/container'

export function AboutBanner() {
	const t = useTranslations()

	return (
		<section className="bg-primary-dark min-h-[895px] bg-[url('/imgs/abount-banner.png')] bg-cover bg-center bg-no-repeat pt-[268px] pb-[168px]">
			<Container className="relative z-1 flex flex-col items-center justify-center">
				<h1 className="mb-[40px] text-center text-[128px] leading-none font-bold text-white">{t('pages.about.title')}</h1>
				<h2 className="mb-[40px] text-center text-[48px] leading-[0.85] font-bold text-white">
					<span className="text-muted-light">Regional</span> <br /> Environment <br /> Summit 2026
				</h2>
				<div
					className="align-top text-[96px] leading-none font-bold"
					style={{
						background: 'linear-gradient(to bottom, #E0EAB8 0%, rgba(212, 216, 195, 0) 95%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
						color: 'transparent',
					}}
				>
					20-23
				</div>
				<p className="text-[24px] leading-[1.2] font-light text-white">{'апреля'}</p>
			</Container>
		</section>
	)
}
