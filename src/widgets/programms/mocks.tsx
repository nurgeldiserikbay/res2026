import { ProgramDay } from './types'

export const programSchedule: ProgramDay[] = [
	{
		id: 'day-22',
		date: '2026-04-22',
		label: {
			ru: '22 апреля',
			kk: '22 сәуір',
			en: 'April 22',
		},
		programs: [
			{
				id: 'opening',
				time: '09:00 – 10:00',
				title: {
					ru: 'Церемония открытия',
					kk: 'Ашылу салтанаты',
					en: 'Opening ceremony',
				},
				points: [
					{
						ru: 'Вступительное слово организаторов',
						kk: 'Ұйымдастырушылардың кіріспе сөзі',
						en: 'Opening remarks from organizers',
					},
					{
						ru: 'Приветствие гостей RES 2026',
						kk: 'RES 2026 қонақтарын құттықтау',
						en: 'Greeting guests of RES 2026',
					},
					{
						ru: 'Обзор ключевых программ и событий форума',
						kk: 'Форумның негізгі бағдарламалары мен оқиғаларына шолу',
						en: 'Overview of key programs and forum events',
					},
				],
				live: true,
			},
			{
				id: 'program-1',
				time: '10:30 – 12:00',
				title: {
					ru: 'Программа 1: Устойчивое развитие и зеленые технологии',
					kk: 'Бағдарлама 1: Тұрақты даму және жасыл технологиялар',
					en: 'Program 1: Sustainable development and green technologies',
				},
				points: [
					{
						ru: 'Презентации инновационных экологических технологий',
						kk: 'Инновациялық экологиялық технологиялардың презентациялары',
						en: 'Presentations of innovative environmental technologies',
					},
					{
						ru: 'Панельная дискуссия: «Как зеленые технологии меняют будущее бизнеса?»',
						kk: 'Панельдік пікірталас: «Жасыл технологиялар бизнестің болашағын қалай өзгертеді?»',
						en: 'Panel discussion: "How do green technologies change the future of business?"',
					},
				],
				live: true,
			},
			{
				id: 'program-2',
				time: '12:30 – 14:00',
				title: {
					ru: 'Программа 2: Будущее городской инфраструктуры',
					kk: 'Бағдарлама 2: Қалалық инфрақұрылымның болашағы',
					en: 'Program 2: Future of urban infrastructure',
				},
				points: [
					{
						ru: 'Доклады по вопросам умных городов и энергоэффективности',
						kk: 'Ақылды қалалар және энергия тиімділігі мәселелері бойынша баяндамалар',
						en: 'Reports on smart cities and energy efficiency',
					},
					{
						ru: 'Кейс-сессия: устойчивые города будущего',
						kk: 'Кейс-сессия: болашақтың тұрақты қалалары',
						en: 'Case session: sustainable cities of the future',
					},
				],
				live: false,
			},
			{
				id: 'break',
				time: '14:00 – 15:30',
				title: {
					ru: 'Обеденный перерыв и нетворкинг',
					kk: 'Түскі үзіліс және нетворкинг',
					en: 'Lunch break and networking',
				},
			},
			{
				id: 'program-3',
				time: '15:30 – 17:00',
				title: {
					ru: 'Программа 3: Цифровая трансформация бизнеса',
					kk: 'Бағдарлама 3: Бизнестің цифрлық трансформациясы',
					en: 'Program 3: Digital business transformation',
				},
				points: [
					{
						ru: 'Презентации цифровых решений для бизнеса',
						kk: 'Бизнес үшін цифрлық шешімдердің презентациялары',
						en: 'Presentations of digital solutions for business',
					},
					{
						ru: 'Панельная дискуссия: «Как цифровизация меняет бизнес-модели?»',
						kk: 'Панельдік пікірталас: «Цифрландыру бизнес-модельдерді қалай өзгертеді?»',
						en: 'Panel discussion: "How does digitalization change business models?"',
					},
				],
				live: true,
			},
		],
	},
	{
		id: 'day-23',
		date: '2026-04-23',
		label: {
			ru: '23 апреля',
			kk: '23 сәуір',
			en: 'April 23',
		},
		programs: [
			{
				id: 'program-4',
				time: '10:00 – 11:30',
				title: {
					ru: 'Программа 4: Искусственный интеллект и аналитика',
					kk: 'Бағдарлама 4: Жасанды интеллект және аналитика',
					en: 'Program 4: Artificial intelligence and analytics',
				},
				points: [
					{
						ru: 'Практические кейсы применения AI',
						kk: 'AI қолданудың практикалық кейстері',
						en: 'Practical cases of AI application',
					},
					{
						ru: 'Обсуждение этики и регулирования ИИ',
						kk: 'ЖИ этикасы мен реттеуін талқылау',
						en: 'Discussion of AI ethics and regulation',
					},
				],
			},
			{
				id: 'program-5',
				time: '12:00 – 13:30',
				title: {
					ru: 'Программа 5: Финтех и цифровые финансы',
					kk: 'Бағдарлама 5: Финтех және цифрлық қаржы',
					en: 'Program 5: Fintech and digital finance',
				},
				points: [
					{
						ru: 'Будущее цифровых валют',
						kk: 'Цифрлық валюталардың болашағы',
						en: 'Future of digital currencies',
					},
					{
						ru: 'Платежные системы нового поколения',
						kk: 'Жаңа буын төлем жүйелері',
						en: 'Next-generation payment systems',
					},
				],
			},
		],
	},

	{
		id: 'day-24',
		date: '2026-04-24',
		label: {
			ru: '24 апреля',
			kk: '24 сәуір',
			en: 'April 24',
		},
		programs: [
			{
				id: 'program-4',
				time: '10:00 – 11:30',
				title: {
					ru: 'Программа 4: Искусственный интеллект и аналитика',
					kk: 'Бағдарлама 4: Жасанды интеллект және аналитика',
					en: 'Program 4: Artificial intelligence and analytics',
				},
				points: [
					{
						ru: 'Практические кейсы применения AI',
						kk: 'AI қолданудың практикалық кейстері',
						en: 'Practical cases of AI application',
					},
					{
						ru: 'Обсуждение этики и регулирования ИИ',
						kk: 'ЖИ этикасы мен реттеуін талқылау',
						en: 'Discussion of AI ethics and regulation',
					},
				],
			},
			{
				id: 'program-5',
				time: '12:00 – 13:30',
				title: {
					ru: 'Программа 5: Финтех и цифровые финансы',
					kk: 'Бағдарлама 5: Финтех және цифрлық қаржы',
					en: 'Program 5: Fintech and digital finance',
				},
				points: [
					{
						ru: 'Будущее цифровых валют',
						kk: 'Цифрлық валюталардың болашағы',
						en: 'Future of digital currencies',
					},
					{
						ru: 'Платежные системы нового поколения',
						kk: 'Жаңа буын төлем жүйелері',
						en: 'Next-generation payment systems',
					},
				],
			},
		],
	},
]
