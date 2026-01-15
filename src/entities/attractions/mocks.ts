import { AttractionItemMultilang, Locale } from './attractions.types'

export const attractionsMultilang: AttractionItemMultilang[] = [
	{
		id: 1,
		slug: 'baiterek-monument',
		title: {
			ru: 'Монумент-Бәйтерек',
			kk: 'Бәйтерек монументі',
			en: 'Baiterek Monument',
		},
		image: '/imgs/attractions/attraction-1.png',
	},
	{
		id: 2,
		slug: 'palace-of-peace-and-accord',
		title: {
			ru: 'Дворец мира и согласия',
			kk: 'Бейбітшілік пен келісім сарайы',
			en: 'Palace of Peace and Accord',
		},
		image: '/imgs/attractions/attraction-2.png',
	},
	{
		id: 3,
		slug: 'khan-shatyr',
		title: {
			ru: 'Хан Шатыр',
			kk: 'Хан Шатыр',
			en: 'Khan Shatyr',
		},
		image: '/imgs/attractions/attraction-3.png',
	},
	{
		id: 4,
		slug: 'khan-shatyr-2',
		title: {
			ru: 'Хан Шатыр',
			kk: 'Хан Шатыр',
			en: 'Khan Shatyr',
		},
		image: '/imgs/attractions/attraction-3.png',
	},
	{
		id: 5,
		slug: 'baiterek-monument-2',
		title: {
			ru: 'Монумент-Бәйтерек',
			kk: 'Бәйтерек монументі',
			en: 'Baiterek Monument',
		},
		image: '/imgs/attractions/attraction-1.png',
	},
	{
		id: 6,
		slug: 'palace-of-peace-and-accord-2',
		title: {
			ru: 'Дворец мира и согласия',
			kk: 'Бейбітшілік пен келісім сарайы',
			en: 'Palace of Peace and Accord',
		},
		image: '/imgs/attractions/attraction-2.png',
	},
]

export function getAttractions(locale: Locale = 'ru') {
	return attractionsMultilang.map((attraction) => ({
		id: attraction.id,
		slug: attraction.slug,
		title: attraction.title[locale],
		image: attraction.image,
	}))
}
