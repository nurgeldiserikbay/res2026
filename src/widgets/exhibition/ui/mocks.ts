import { Locale } from '@/shared/config/i18n'

export const quots = [
	{
		id: 1,
		image: '/imgs/exhibition/quot-1.png',
		text: {
			kk: '',
			ru: '«Региональный экологический саммит 2026 является одной из ключевых международных платформ для принятия реальных решений в сфере экологии, климата и устойчивого развития, способных менять экономическую ситуацию в регионе. Для меня принципиально важно, что Казахстан сегодня является центром «зелёной» трансформации Центральной Азии, объединяя государства, бизнес и инвесторов вокруг будущего, которое формируется уже сейчас.»',
			en: '',
		},
		name: {
			kk: '',
			ru: 'Ергулан Талгатович \n Дуйсекев',
			en: '',
		},
		position: {
			kk: '',
			ru: 'Руководитель фонда «Global Nature Initiatives»',
			en: '',
		},
	},
	{
		id: 2,
		image: '/imgs/exhibition/quot-2.png',
		text: {
			kk: '',
			ru: '«Это будет масштабное мероприятие, объединяющее шесть глав государств стран Центральной Азии. Запланированы крупные панельные сессии на высоком уровне с участием представителей правительств, профильных министерств и ведущих международных партнёров. Выставка предоставит возможность странам Центральной Азии объединиться для обмена технологиями, опытом и передовыми знаниями.»',
			en: '',
		},
		name: {
			kk: '',
			ru: 'Кабдолданов Нуржан \n Кенесбаевич',
			en: '',
		},
		position: {
			kk: '',
			ru: 'Заместитель Председателя Правления АО «Жасыл Даму»',
			en: '',
		},
	},
	{
		id: 3,
		image: '/imgs/exhibition/quot-3.png',
		text: {
			kk: '',
			ru: '«Без поддержки международных организаций, финансовых институтов и компаний реализация зеленых инициатив была бы крайне трудной. Международная коллаборация и сотрудничество крайне важны для достижения климатических целей Казахстана.»',
			en: '',
		},
		name: {
			kk: '',
			ru: 'Арман Кашкинбеков',
			en: '',
		},
		position: {
			kk: '',
			ru: 'Генеральный директор Ассоциации возобновляемой энергетики Казахстана',
			en: '',
		},
	},
]

export function getQuots(locale: Locale) {
	return quots.map((quot) => ({
		...quot,
		text: quot.text[locale],
		name: quot.name[locale],
		position: quot.position[locale],
	}))
}

export const themeZones = [
	{
		id: 0,
		image: '/imgs/exhibition/theme-zone-1.png',
		title: {
			ru: 'Новая энергия',
			kk: '',
			en: '',
		},
	},
	{
		id: 1,
		image: '/imgs/exhibition/theme-zone-2.png',
		title: {
			ru: 'Вода',
			kk: '',
			en: '',
		},
	},
	{
		id: 2,
		image: '/imgs/exhibition/theme-zone-3.png',
		title: {
			ru: 'AI & Smart city',
			kk: '',
			en: '',
		},
	},
	{
		id: 3,
		image: '/imgs/exhibition/theme-zone-4.png',
		title: {
			ru: 'Управление отходами',
			kk: '',
			en: '',
		},
	},
	{
		id: 4,
		image: '/imgs/exhibition/theme-zone-5.png',
		title: {
			ru: 'Экологические технологии',
			kk: '',
			en: '',
		},
	},
	{
		id: 5,
		image: '/imgs/exhibition/theme-zone-6.png',
		title: {
			ru: 'ESG & экологичное финансирование',
			kk: '',
			en: '',
		},
	},
	{
		id: 6,
		image: '/imgs/exhibition/theme-zone-7.png',
		title: {
			ru: 'Сельское хозяйство',
			kk: '',
			en: '',
		},
	},
	{
		id: 7,
		image: '/imgs/exhibition/theme-zone-8.png',
		title: {
			ru: 'Зеленое строительство',
			kk: '',
			en: '',
		},
	},
]

export function getThemeZones(locale: Locale) {
	return themeZones.map((themeZone) => ({
		...themeZone,
		title: themeZone.title[locale],
	}))
}
