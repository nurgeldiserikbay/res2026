import { Locale } from '@/shared/config/i18n'

export const quots = [
	{
		id: 1,
		image: '/imgs/exhibition/quot-1.png',
		text: {
			kk: '',
			ru: 'Региональный экологический саммит 2026 является одной из ключевых международных платформ для принятия реальных решений в сфере экологии, климата и устойчивого развития, способных менять экономическую ситуацию в регионе. Для меня принципиально важно, что Казахстан сегодня является центром «зелёной» трансформации Центральной Азии, объединяя государства, бизнес и инвесторов вокруг будущего, которое формируется уже сейчас.',
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
			ru: 'Это будет масштабное мероприятие, объединяющее шесть глав государств стран Центральной Азии. Запланированы крупные панельные сессии на высоком уровне с участием представителей правительств, профильных министерств и ведущих международных партнёров. Выставка предоставит возможность странам Центральной Азии объединиться для обмена технологиями, опытом и передовыми знаниями.',
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
			ru: 'Это будет масштабное мероприятие, объединяющее шесть глав государств стран Центральной Азии. Запланированы крупные панельные сессии на высоком уровне с участием представителей правительств, профильных министерств и ведущих международных партнёров. Выставка предоставит возможность странам Центральной Азии объединиться для обмена технологиями, опытом и передовыми знаниями.',
			en: '',
		},
		name: {
			kk: '',
			ru: 'Якупбаева Юлия \n Константиновна',
			en: '',
		},
		position: {
			kk: '',
			ru: 'Председатель совета по устойчивому развитию национальной палаты «Атамекен»',
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
			ru: 'Поддержка климатического перехода',
			kk: 'Климаттық өтуді қолдау',
			en: 'Support for the Climate Transition',
		},
	},
	{
		id: 1,
		image: '/imgs/exhibition/theme-zone-2.png',
		title: {
			ru: 'Адаптация и экономическая устойчивость к экологическим и природным рискам',
			kk: 'Экологиялық және табиғи тәуекелдерге бейімделу және экономикалық орнықтылық',
			en: 'Adaptation and Economic Resilience to Environmental and Natural Risks',
		},
	},
	{
		id: 2,
		image: '/imgs/exhibition/theme-zone-3.png',
		title: {
			ru: 'Продовольственная безопасность и экосистема региона',
			kk: 'Азық-түлік қауіпсіздігі және өңірдің экожүйесі',
			en: 'Food Security and the Regional Ecosystem',
		},
	},
	{
		id: 3,
		image: '/imgs/exhibition/theme-zone-4.png',
		title: {
			ru: 'Устойчивое управление природными ресурсами',
			kk: 'Табиғи ресурстарды тұрақты басқару',
			en: 'Sustainable Management of Natural Resources',
		},
	},
	{
		id: 4,
		image: '/imgs/exhibition/theme-zone-5.png',
		title: {
			ru: 'Борьба с загрязнением атмосферного воздуха и управление отходами',
			kk: 'Атмосфералық ауаның ластануымен күрес және қалдықтарды басқару',
			en: 'Air Pollution Control and Waste Management',
		},
	},
	{
		id: 5,
		image: '/imgs/exhibition/theme-zone-6.png',
		title: {
			ru: 'Механизмы достижения экологических амбиций',
			kk: 'Экологиялық мақсаттарға қол жеткізу тетіктері',
			en: 'Mechanisms for Achieving Environmental Ambitions',
		},
	},
	{
		id: 6,
		image: '/imgs/exhibition/theme-zone-7.png',
		title: {
			ru: 'Справедливый и инклюзивный переход',
			kk: 'Әділетті және инклюзивті көшу',
			en: 'Just and Inclusive Transition',
		},
	},
	{
		id: 7,
		image: '/imgs/exhibition/theme-zone-8.png',
		title: {
			ru: 'Экологические и цифровые компетенции',
			kk: 'Экологиялық және цифрлық құзыреттер',
			en: 'Environmental and Digital Competencies',
		},
	},
]

export function getThemeZones(locale: Locale) {
	return themeZones.map((themeZone) => ({
		...themeZone,
		title: themeZone.title[locale],
	}))
}
