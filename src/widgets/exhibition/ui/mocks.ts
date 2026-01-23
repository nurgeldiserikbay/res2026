import { Locale } from '@/shared/config/i18n'

export const quots = [
	{
		id: 1,
		image: '/imgs/exhibition/quot-1.png',
		text: {
			kk: '«2026 жылғы Аймақтық экологиялық саммит экология, климат және тұрақты даму саласында нақты шешімдер қабылдауға мүмкіндік беретін, аймақтағы экономикалық жағдайды өзгерте алатын негізгі халықаралық платформалардың бірі болып табылады. Қазақстанның бүгін Орталық Азияның «жасыл» трансформациясының орталығы болып табылатыны мен үшін принциптік маңызды, мемлекеттерді, бизнесті және инвесторларды болашақтың айналасына біріктіреді, ол қазір қалыптасып жатыр.»',
			ru: '«Региональный экологический саммит 2026 является одной из ключевых международных платформ для принятия реальных решений в сфере экологии, климата и устойчивого развития, способных менять экономическую ситуацию в регионе. Для меня принципиально важно, что Казахстан сегодня является центром «зелёной» трансформации Центральной Азии, объединяя государства, бизнес и инвесторов вокруг будущего, которое формируется уже сейчас.»',
			en: '«The Regional Environmental Summit 2026 is one of the key international platforms for making real decisions in ecology, climate and sustainable development that can change the economic situation in the region. It is fundamentally important to me that Kazakhstan today is the center of the "green" transformation of Central Asia, uniting states, business and investors around a future that is being shaped right now.»',
		},
		name: {
			kk: 'Ерғұлан Талғатұлы \n Дүйсекеев',
			ru: 'Ергулан Талгатович \n Дуйсекев',
			en: 'Yergulan Talgatovich \n Duisekeyev',
		},
		position: {
			kk: '«Global Nature Initiatives» қорының басшысы',
			ru: 'Руководитель фонда «Global Nature Initiatives»',
			en: 'Head of «Global Nature Initiatives» Foundation',
		},
	},
	{
		id: 2,
		image: '/imgs/exhibition/quot-2.png',
		text: {
			kk: '«Бұл Орталық Азия елдерінің алты мемлекет басшысын біріктіретін ауқымды іс-шара болады. Үкімет өкілдері, мамандандырылған министрліктер және жетекші халықаралық серіктестер қатысатын жоғары деңгейдегі ірі панельдік сессиялар жоспарланған. Көрме Орталық Азия елдеріне технологиялар, тәжірибе және озық білімдерді алмасу үшін бірігу мүмкіндігін береді.»',
			ru: '«Это будет масштабное мероприятие, объединяющее шесть глав государств стран Центральной Азии. Запланированы крупные панельные сессии на высоком уровне с участием представителей правительств, профильных министерств и ведущих международных партнёров. Выставка предоставит возможность странам Центральной Азии объединиться для обмена технологиями, опытом и передовыми знаниями.»',
			en: '«This will be a large-scale event bringing together six heads of state from Central Asian countries. Major high-level panel sessions are planned with the participation of government representatives, specialized ministries and leading international partners. The exhibition will provide an opportunity for Central Asian countries to unite to exchange technologies, experience and advanced knowledge.»',
		},
		name: {
			kk: 'Қабдолданов Нұржан \n Кенесбайұлы',
			ru: 'Кабдолданов Нуржан \n Кенесбаевич',
			en: 'Kabdoldanov Nurzhan \n Kenesbayevich',
		},
		position: {
			kk: '«Жасыл Даму» АҚ Басқарма төрағасының орынбасары',
			ru: 'Заместитель Председателя Правления АО «Жасыл Даму»',
			en: 'Deputy Chairman of the Board of «Zhasyl Damu» JSC',
		},
	},
	{
		id: 3,
		image: '/imgs/exhibition/quot-3.png',
		text: {
			kk: '«Халықаралық ұйымдардың, қаржылық институттардың және компаниялардың қолдауысыз жасыл бастамаларды іске асыру өте қиын болар еді. Қазақстанның климаттық мақсаттарына қол жеткізу үшін халықаралық ынтымақтастық және серіктестік өте маңызды.»',
			ru: '«Без поддержки международных организаций, финансовых институтов и компаний реализация зеленых инициатив была бы крайне трудной. Международная коллаборация и сотрудничество крайне важны для достижения климатических целей Казахстана.»',
			en: "«Without the support of international organizations, financial institutions and companies, the implementation of green initiatives would be extremely difficult. International collaboration and cooperation are extremely important for achieving Kazakhstan's climate goals.»",
		},
		name: {
			kk: 'Арман Қашқынбеков',
			ru: 'Арман Кашкинбеков',
			en: 'Arman Kashkinbekov',
		},
		position: {
			kk: 'Қазақстан қайталанбайтын энергетика ассоциациясының бас директоры',
			ru: 'Генеральный директор Ассоциации возобновляемой энергетики Казахстана',
			en: 'General Director of the Association of Renewable Energy of Kazakhstan',
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
			kk: 'Жаңа энергия',
			en: 'New Energy',
		},
	},
	{
		id: 1,
		image: '/imgs/exhibition/theme-zone-2.png',
		title: {
			ru: 'Вода',
			kk: 'Су',
			en: 'Water',
		},
	},
	{
		id: 2,
		image: '/imgs/exhibition/theme-zone-3.png',
		title: {
			ru: 'AI & Smart city',
			kk: 'AI және Ақылды қала',
			en: 'AI & Smart City',
		},
	},
	{
		id: 3,
		image: '/imgs/exhibition/theme-zone-4.png',
		title: {
			ru: 'Управление отходами',
			kk: 'Қалдықтарды басқару',
			en: 'Waste Management',
		},
	},
	{
		id: 4,
		image: '/imgs/exhibition/theme-zone-5.png',
		title: {
			ru: 'Экологические технологии',
			kk: 'Экологиялық технологиялар',
			en: 'Environmental Technologies',
		},
	},
	{
		id: 5,
		image: '/imgs/exhibition/theme-zone-6.png',
		title: {
			ru: 'ESG & экологичное финансирование',
			kk: 'ESG және экологиялық қаржыландыру',
			en: 'ESG & Green Finance',
		},
	},
	{
		id: 6,
		image: '/imgs/exhibition/theme-zone-7.png',
		title: {
			ru: 'Сельское хозяйство',
			kk: 'Ауыл шаруашылығы',
			en: 'Agriculture',
		},
	},
	{
		id: 7,
		image: '/imgs/exhibition/theme-zone-8.png',
		title: {
			ru: 'Зеленое строительство',
			kk: 'Жасыл құрылыс',
			en: 'Green Construction',
		},
	},
]

export function getThemeZones(locale: Locale) {
	return themeZones.map((themeZone) => ({
		...themeZone,
		title: themeZone.title[locale],
	}))
}
