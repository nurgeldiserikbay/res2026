'use client'

import { useLocale } from 'next-intl'

import { BannerSlides } from '@/shared/components/BannerSlides'
import { Locale } from '@/shared/config/i18n'

export function AstanaSlides() {
	const locale = useLocale() as Locale
	const images = [
		{
			id: 8,
			image: '/imgs/usefulls/astana-slide-9.webp',
			title: {
				ru: 'Байтерек',
				kk: 'Байтерек',
				en: 'Bayterek',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 0,
			image: '/imgs/usefulls/astana-slide-1.webp',
			title: {
				ru: 'Театр имени Розы Баглановой',
				kk: 'Роза Бағланова атындағы театр',
				en: 'Roza Baglanova Theatre',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 1,
			image: '/imgs/usefulls/astana-slide-2.webp',
			title: {
				ru: 'EXPO 2017',
				kk: 'EXPO 2017',
				en: 'EXPO 2017',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 2,
			image: '/imgs/usefulls/astana-slide-3.webp',
			title: {
				ru: 'Мост на набережной',
				kk: 'Жағалаудағы көпір',
				en: 'Bridge on the Embankment',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 3,
			image: '/imgs/usefulls/astana-slide-4.webp',
			title: {
				ru: 'Астана Опера',
				kk: 'Астана Опера',
				en: 'Astana Opera',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 4,
			image: '/imgs/usefulls/astana-slide-5.webp',
			title: {
				ru: 'Мангилик Ел',
				kk: 'Мәңгілік Ел',
				en: 'Mangilik El',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 5,
			image: '/imgs/usefulls/astana-slide-6.webp',
			title: {
				ru: 'Мост Сарыарка',
				kk: 'Сарыарқа көпірі',
				en: 'Saryarka Bridge',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 6,
			image: '/imgs/usefulls/astana-slide-7.webp',
			title: {
				ru: 'Ак Орда',
				kk: 'Ақ Орда',
				en: 'Ak Orda',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
		{
			id: 7,
			image: '/imgs/usefulls/astana-slide-8.webp',
			title: {
				ru: 'Республиканская Главная Мечеть',
				kk: 'Республикалық Бас Мешіт',
				en: 'Republican Central Mosque',
			},
			description: 'Astana is the capital of Kazakhstan',
		},
	]

	const parsedImages = images.map((image) => {
		return {
			...image,
			title: image.title[locale as Locale],
		}
	})

	return <BannerSlides images={parsedImages} />
}
