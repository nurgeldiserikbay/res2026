import { Locale } from '@/shared/config/i18n'
import { localize } from '@/shared/utils/localize'

export const preparationProcessMocks = [
	{
		id: 1,
		date: {
			ru: '13 марта 2025',
			kk: '2025 13 наурыз',
			en: '13 March 2025',
		},
		items: [
			{
				id: 1,
				addessAndTime: {
					ru: 'Алматы, Казахстан, 13 марта 2025 года',
					kk: 'Алматы, Қазақстан, 2025 жылғы 13 наурыз',
					en: 'Almaty, Kazakhstan, 13 March 2025',
				},
				title: {
					ru: 'Первая консультационная встреча',
					kk: 'Бірінші консультациялық кездесу',
					en: 'First consultation meeting',
				},
				subtitle: {
					ru: 'Первая региональная консультация по подготовке к RES 2026',
					kk: 'RES 2026-ға дайындық бойынша бірінші өңірлік консультация',
					en: 'First regional consultation on preparations for RES 2026',
				},
				description: {
					ru: 'Первая региональная консультация по подготовке к РЭС 2026 при участии представителей всех стран Центральной Азии была посвящена обоснованию идеи Саммита и старту подготовки',
					kk: 'Бірінші өңірлік консультация ӨЭС 2026-ға дайындықты бастауға және Саммит идеясының негіздемесін айқындауға арналды, оған Орталық Азияның барлық елдерінің өкілдері қатысты',
					en: 'The first regional consultation on preparations for RES 2026, with representatives from all Central Asian countries, was dedicated to substantiating the Summit’s concept and launching the preparatory process.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/pervaya-regionalnaya-konsultaciya-po-podgotovke-k-regionalnomu-klimaticheskomu-sammitu-2026',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 2,
		date: {
			ru: '5 апреля 2025',
			kk: '2025 5 сәуір',
			en: '5 April 2025',
		},
		items: [
			{
				id: 2,
				addessAndTime: {
					ru: 'Самарканд, Узбекистан, 5 апреля 2025 года',
					kk: 'Самарқанд, Өзбекстан, 2025 жылғы 5 сәуір',
					en: 'Samarkand, Uzbekistan, 5 April 2025',
				},
				title: {
					ru: 'Вторая консультационная встреча',
					kk: 'Екінші консультациялық кездесу',
					en: 'Second consultation meeting',
				},
				subtitle: {
					ru: 'Самаркандский климатический форум',
					kk: 'Самарқанд климат форумы',
					en: 'Samarkand Climate Forum',
				},
				description: {
					ru: 'Вторая региональная консультация сфокусировалась на укреплении регионального экологического сотрудничества и прошла в формате диалога высокого уровня с участием глав экологических ведомств страны Центральной Азии. По итогам предложено формирование пула региональных проектов',
					kk: 'Екінші өңірлік консультация өңірлік экологиялық ынтымақтастықты нығайтуға бағытталып, Орталық Азия елдерінің экологиялық ведомстволары басшылары қатысқан жоғары деңгейдегі диалог форматында өтті; қорытындысы бойынша өңірлік жобалар пулын қалыптастыру ұсынылды',
					en: 'The second regional consultation focused on strengthening regional environmental cooperation and was held as a high-level dialogue with the participation of heads of environmental authorities of Central Asian countries; it resulted in a proposal to form a pool of regional projects.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://www.gov.kz/memleket/entities/ecogeo/press/news/details/970471?lang=ru',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 3,
		date: {
			ru: '13–15 мая 2025',
			kk: '2025 13–15 мамыр',
			en: '13–15 May 2025',
		},
		items: [
			{
				id: 3,
				addessAndTime: {
					ru: 'Ашхабад, Туркменистан, 13–15 мая 2025 года',
					kk: 'Ашхабад, Түрікменстан, 2025 жылғы 13–15 мамыр',
					en: 'Ashgabat, Turkmenistan, 13–15 May 2025',
				},
				title: {
					ru: 'Третья консультационная встреча',
					kk: 'Үшінші консультациялық кездесу',
					en: 'Third consultation meeting',
				},
				subtitle: {
					ru: 'Центрально-Азиатская Конференция по вопросам изменения климата (ЦАКИК-2025) «Достижение глобальной цели климатического финансирования через региональные и национальные действия в Центральной Азии»',
					kk: 'Климаттың өзгеруі мәселелері бойынша Орталық Азия конференциясы (ЦАКИК-2025) «Орталық Азиядағы өңірлік және ұлттық іс-қимыл арқылы климаттық қаржыландырудың жаһандық мақсатына қол жеткізу»',
					en: 'Central Asian Conference on Climate Change (CACCC-2025) “Achieving the Global Goal on Climate Finance through Regional and National Action in Central Asia”',
				},
				description: {
					ru: 'Третья консультация позволила обсудить наиболее острые климатические риски региона и подходы к механизму по реагированию на такие риски',
					kk: 'Үшінші консультация өңірдің ең өткір климаттық тәуекелдерін және мұндай тәуекелдерге ден қою тетігіне қатысты тәсілдерді талқылауға мүмкіндік берді',
					en: 'The third consultation enabled discussion of the region’s most acute climate risks and approaches to response mechanisms for such risks.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/cakik-2025-centralnaya-aziya-obedinyaet-usiliya-dlya-dostizheniya-globalnoy-celi-klimaticheskogo-finansirovaniya',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 4,
		date: {
			ru: '29–31 мая 2025',
			kk: '2025 29–31 мамыр',
			en: '29–31 May 2025',
		},
		items: [
			{
				id: 4,
				addessAndTime: {
					ru: 'Душанбе, Таджикистан, 29–31 мая 2025 года',
					kk: 'Душанбе, Тәжікстан, 2025 жылғы 29–31 мамыр',
					en: 'Dushanbe, Tajikistan, 29–31 May 2025',
				},
				title: {
					ru: 'Четвертая консультационная встреча',
					kk: 'Төртінші консультациялық кездесу',
					en: 'Fourth consultation meeting',
				},
				subtitle: {
					ru: 'Международная конференция высокого уровня по сохранению ледников 2025',
					kk: 'Мұздықтарды сақтау жөніндегі 2025 жылғы жоғары деңгейдегі халықаралық конференция',
					en: 'High-Level International Conference on Glacier Preservation 2025',
				},
				description: {
					ru: 'Четвертая консультация была направлена на интеграцию науки в повестку РЭС 2026 и климатическую политику региона в целом',
					kk: 'Төртінші консультация ғылымды ӨЭС 2026 күн тәртібіне және өңірдің климат саясатына тұтастай интеграциялауға бағытталды',
					en: 'The fourth consultation aimed to integrate science into the RES 2026 agenda and into the region’s climate policy more broadly.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/chetvertaya-regionalnaya-konsultaciya-v-ramkah-provedeniya-rks-2026',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 5,
		date: {
			ru: '16–26 июня 2025',
			kk: '2025 16–26 маусым',
			en: '16–26 June 2025',
		},
		items: [
			{
				id: 5,
				addessAndTime: {
					ru: 'Бонн, Германия, 16–26 июня 2025 года',
					kk: 'Бонн, Германия, 2025 жылғы 16–26 маусым',
					en: 'Bonn, Germany, 16–26 June 2025',
				},
				title: {
					ru: 'Пятая консультационная встреча',
					kk: 'Бесінші консультациялық кездесу',
					en: 'Fifth consultation meeting',
				},
				subtitle: {
					ru: '62-я сессия Вспомогательного органа по научным и техническим консультациям и Вспомогательного органа по осуществлению (SB62) Рамочной конвенции ООН об изменении климата',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясы шеңберіндегі ғылыми және техникалық консультациялар жөніндегі қосалқы орган мен іске асыру жөніндегі қосалқы органның 62-сессиясы (SB62)',
					en: '62nd session of the Subsidiary Body for Scientific and Technological Advice and the Subsidiary Body for Implementation (SB62) of the UN Framework Convention on Climate Change (UNFCCC)',
				},
				description: {
					ru: 'Пятая консультация была посвящена обсуждению вопросов формирования регионального пула проектов, создания сети научного сотрудничества и разработке механизмов климатического финансирования для региона Центральной Азии',
					kk: 'Бесінші консультация өңірлік жобалар пулын қалыптастыру, ғылыми ынтымақтастық желісін құру және Орталық Азия өңірі үшін климаттық қаржыландыру тетіктерін әзірлеу мәселелерін талқылауға арналды',
					en: 'The fifth consultation focused on discussing the formation of a regional project pool, the establishment of a network for scientific cooperation, and the development of climate finance mechanisms for the Central Asian region.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/proektnyy-ofis-predstavlyaet-regionalnye-klimaticheskie-iniciativy-na-klimaticheskoy-konferencii-oon-v-bonne',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 6,
		date: {
			ru: '1–2 августа 2025',
			kk: '2025 1–2 тамыз',
			en: '1–2 August 2025',
		},
		items: [
			{
				id: 6,
				addessAndTime: {
					ru: 'Актау, Казахстан, 1–2 августа 2025 года',
					kk: 'Ақтау, Қазақстан, 2025 жылғы 1–2 тамыз',
					en: 'Aktau, Kazakhstan, 1–2 August 2025',
				},
				title: {
					ru: 'Шестая консультационная встреча',
					kk: 'Алтыншы консультациялық кездесу',
					en: 'Sixth consultation meeting',
				},
				subtitle: {
					ru: 'Встреча Министров экологических ведомств стран Центральной Азии по утверждению Концепции РЭС саммита 2026',
					kk: 'Орталық Азия елдерінің экологиялық ведомстволары министрлерінің RES 2026 Саммиті тұжырымдамасын бекіту жөніндегі кездесуі',
					en: 'Meeting of Ministers of Environmental Authorities of Central Asian countries to approve the RES Summit 2026 Concept',
				},
				description: {
					ru: 'Была представлена и утверждена обновлённая Концепция Саммита, а также проект Совместной декларации глав государств Центральной Азии о региональном сотрудничестве в области экологии и устойчивого развития. Сформирован перечень из более 20 региональных инициатив',
					kk: 'Саммиттің жаңартылған тұжырымдамасы, сондай-ақ Орталық Азия мемлекеттері басшыларының экология және орнықты даму саласындағы өңірлік ынтымақтастық жөніндегі Бірлескен декларациясының жобасы ұсынылып, бекітілді; 20-дан астам өңірлік бастамадан тұратын тізбе қалыптастырылды',
					en: 'The updated Summit Concept was presented and approved, along with the draft Joint Declaration by the Heads of State of Central Asia on regional cooperation in ecology and sustainable development; a list of more than 20 regional initiatives was compiled.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://www.gov.kz/memleket/entities/ecogeo/press/news/details/1044448?lang=ru',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 7,
		date: {
			ru: '25 сентября 2025',
			kk: '2025 25 қыркүйек',
			en: '25 September 2025',
		},
		items: [
			{
				id: 7,
				addessAndTime: {
					ru: 'Нью-Йорк, США, 25 сентября 2025 года',
					kk: 'Нью-Йорк, АҚШ, 2025 жылғы 25 қыркүйек',
					en: 'New York, USA, 25 September 2025',
				},
				title: {
					ru: 'Седьмая консультационная встреча',
					kk: 'Жетінші консультациялық кездесу',
					en: 'Seventh consultation meeting',
				},
				subtitle: {
					ru: '80-я сессия Генеральной Ассамблеи Организации Объединенных Наций',
					kk: 'Біріккен Ұлттар Ұйымының Бас Ассамблеясының 80-сессиясы',
					en: '80th Session of the United Nations General Assembly',
				},
				description: {
					ru: 'Презентован проект Программы действий по реализации региональных экологических инициатив при партнерстве с Организацией Объединенных Наций на 2026-2030 годы: общее видение устойчивого будущего Центральной Азии. Программа включает ключевые региональные инициативы по формированию концепции инвестиционного портфеля по климату и экологии, по природоориентированным решениям, запуску регионального обзора результативности экологической деятельности, циркулярной экономике и др.',
					kk: 'БҰҰ-мен әріптестікте 2026–2030 жылдарға арналған өңірлік экологиялық бастамаларды іске асыру жөніндегі Іс-қимыл бағдарламасының жобасы таныстырылды: Орталық Азияның орнықты болашағына арналған ортақ пайым. Бағдарлама климат және экология бойынша инвестициялық портфель тұжырымдамасын қалыптастыру, табиғи-негізделген шешімдер, экологиялық қызмет нәтижелілігіне өңірлік шолу жүргізу, циркулярлық экономика және басқа да бастамаларды қамтиды.',
					en: 'The draft Action Programme for implementing regional environmental initiatives in partnership with the United Nations for 2026–2030 was presented as a shared vision for Central Asia’s sustainable future. The Programme includes key regional initiatives on developing the concept of an investment portfolio for climate and ecology, nature-based solutions, launching a regional environmental performance review, circular economy, and other areas.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://www.gov.kz/memleket/entities/ecogeo/press/news/details/1075377',
					title: { ru: '', kk: '', en: '' },
				},
			},
			{
				id: 8,
				addessAndTime: {
					ru: 'Нью-Йорк, США, 25 сентября 2025 года',
					kk: 'Нью-Йорк, АҚШ, 2025 жылғы 25 қыркүйек',
					en: 'New York, USA, 25 September 2025',
				},
				title: {
					ru: 'Седьмая консультационная встреча',
					kk: 'Жетінші консультациялық кездесу',
					en: 'Seventh consultation meeting',
				},
				subtitle: {
					ru: '80-я сессия Генеральной Ассамблеи Организации Объединенных Наций',
					kk: 'Біріккен Ұлттар Ұйымының Бас Ассамблеясының 80-сессиясы',
					en: '80th Session of the United Nations General Assembly',
				},
				description: {
					ru: 'Презентован проект Программы действий по реализации региональных экологических инициатив при партнерстве с Организацией Объединенных Наций на 2026-2030 годы: общее видение устойчивого будущего Центральной Азии. Программа включает ключевые региональные инициативы по формированию концепции инвестиционного портфеля по климату и экологии, по природоориентированным решениям, запуску регионального обзора результативности экологической деятельности, циркулярной экономике и др.',
					kk: 'БҰҰ-мен әріптестікте 2026–2030 жылдарға арналған өңірлік экологиялық бастамаларды іске асыру жөніндегі Іс-қимыл бағдарламасының жобасы таныстырылды: Орталық Азияның орнықты болашағына арналған ортақ пайым. Бағдарлама климат және экология бойынша инвестициялық портфель тұжырымдамасын қалыптастыру, табиғи-негізделген шешімдер, экологиялық қызмет нәтижелілігіне өңірлік шолу жүргізу, циркулярлық экономика және басқа да бастамаларды қамтиды.',
					en: 'The draft Action Programme for implementing regional environmental initiatives in partnership with the United Nations for 2026–2030 was presented as a shared vision for Central Asia’s sustainable future. The Programme includes key regional initiatives on developing the concept of an investment portfolio for climate and ecology, nature-based solutions, launching a regional environmental performance review, circular economy, and other areas.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/voprosy-podgotovki-res-2026-obsudili-na-vysokom-urovne',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 8,
		date: {
			ru: 'Ноябрь 2025',
			kk: '2025 қараша',
			en: 'November 2025',
		},
		items: [
			{
				id: 9,
				addessAndTime: {
					ru: 'Белен, Бразилия, Ноябрь 2025 года',
					kk: 'Белем, Бразилия, 2025 жылғы қараша',
					en: 'Belém, Brazil, November 2025',
				},
				title: {
					ru: 'Восьмая консультационная встреча',
					kk: 'Сегізінші консультациялық кездесу',
					en: 'Eighth consultation meeting',
				},
				subtitle: {
					ru: '30-я Конференция Сторон (СОР30) Рамочной конвенции ООН об изменении климата (РКИК ООН)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының Тараптар конференциясы (COP30) (UNFCCC)',
					en: '30th Conference of the Parties (COP30) to the UN Framework Convention on Climate Change (UNFCCC)',
				},
				description: {
					ru: 'Проведен сайд-ивент на тему «Миграция, вызванная изменением климата, и развитие «зеленых» навыков в Центральной Азии: на пути к Региональному экологическому саммиту-2026». На мероприятии были продемонстрированы региональные подходы к решению проблем климатически обусловленной миграции через развитие «зелёных» компетенций, создание рабочих мест и укрепление адаптационного потенциала населения.',
					kk: 'Климат өзгерісінен туындайтын көші-қон және Орталық Азиядағы «жасыл» дағдыларды дамыту: Өңірлік Экологиялық Саммит–2026-ға қарай жол тақырыбында сайд-ивент өткізілді. Іс-шарада «жасыл» құзыреттерді дамыту, жұмыс орындарын құру және халықтың бейімделу әлеуетін нығайту арқылы климаттық көші-қон проблемаларын шешудің өңірлік тәсілдері көрсетілді.',
					en: 'A side event titled “Climate-induced migration and the development of green skills in Central Asia: on the road to the Regional Environmental Summit 2026” was held. The event showcased regional approaches to addressing climate-driven migration through the development of green competencies, job creation, and strengthening the adaptive capacity of populations.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/migracionnye-processy-v-centralnoy-azii-vyzvannye-izmeneniem-klimata-obsudili-na-sor-30',
					title: { ru: '', kk: '', en: '' },
				},
			},
			{
				id: 10,
				addessAndTime: {
					ru: 'Белен, Бразилия, Ноябрь 2025 года',
					kk: 'Белем, Бразилия, 2025 жылғы қараша',
					en: 'Belém, Brazil, November 2025',
				},
				title: {
					ru: 'Девятая консультационная встреча',
					kk: 'Тоғызыншы консультациялық кездесу',
					en: 'Ninth consultation meeting',
				},
				subtitle: {
					ru: '30-я Конференция Сторон (СОР30) Рамочной конвенции ООН об изменении климата (РКИК ООН)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының Тараптар конференциясы (COP30) (UNFCCC)',
					en: '30th Conference of the Parties (COP30) to the UN Framework Convention on Climate Change (UNFCCC)',
				},
				description: {
					ru: 'Состоялся сайд-ивент на тему «Изменение климата, здоровье и снижение производительности в Центральной Азии». На мероприятии был представлен научный обзор о воздействии изменения климата, в частности экстремальной жары, на здоровье и производительность труда в Центральной Азии, обсуждены возможные пути адаптации и укрепления устойчивости, меры готовности системы здравоохранения, механизмы защиты трудящихся и гендерно-ориентированные политики.',
					kk: 'Климаттың өзгеруі, денсаулық және Орталық Азиядағы өнімділіктің төмендеуі тақырыбында сайд-ивент өтті. Іс-шарада климаттың өзгеруінің, әсіресе шектен тыс ыстықтың, денсаулық пен еңбек өнімділігіне әсері туралы ғылыми шолу ұсынылып, бейімделу және төзімділікті арттыру жолдары, денсаулық сақтау жүйесінің даярлығы, еңбек етушілерді қорғау тетіктері және гендерлік бағдарланған саясаттар талқыланды.',
					en: 'A side event titled “Climate change, health, and productivity losses in Central Asia” took place. The event presented a scientific review on the impacts of climate change—particularly extreme heat—on health and labour productivity in Central Asia, and discussed possible adaptation and resilience-building pathways, health-system preparedness measures, worker protection mechanisms, and gender-responsive policies.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/vliyanie-izmeneniya-klimata-na-zdorove-zhiteley-centralnoy-azii-obsudili-na-sor-30',
					title: { ru: '', kk: '', en: '' },
				},
			},
			{
				id: 11,
				addessAndTime: {
					ru: 'Белен, Бразилия, Ноябрь 2025 года',
					kk: 'Белем, Бразилия, 2025 жылғы қараша',
					en: 'Belém, Brazil, November 2025',
				},
				title: {
					ru: 'Десятая консультационная встреча',
					kk: 'Оныншы консультациялық кездесу',
					en: 'Tenth consultation meeting',
				},
				subtitle: {
					ru: '30-я Конференция Сторон (СОР30) Рамочной конвенции ООН об изменении климата (РКИК ООН)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының Тараптар конференциясы (COP30) (UNFCCC)',
					en: '30th Conference of the Parties (COP30) to the UN Framework Convention on Climate Change (UNFCCC)',
				},
				description: {
					ru: 'Организован сайд-ивент на тему «Леса и деградация земель: синергия между тремя Рио-конвенциями и вклад Центральной Азии в глобальные решения». Были обсуждены перспективы по восстановлению лесов и деградированных земель, сохранению биоразнообразия совместно с секретариатами трех Рио-конвенций и Продовольственной и сельскохозяйственной организации ООН, а также со стороны ОЭСР были презентованы финансовые инструменты для достижения синергии конвенций по вопросам изменения климата, сохранению биоразнообразия и борьбы с опустыниванием.',
					kk: '«Ормандар және жер деградациясы: үш Рио-конвенция арасындағы синергия және Орталық Азияның жаһандық шешімдерге қосатын үлесі» тақырыбында сайд-ивент ұйымдастырылды. Үш Рио-конвенция хатшылықтарымен және БҰҰ Азық-түлік және ауыл шаруашылығы ұйымымен бірлесіп ормандарды және деградталған жерлерді қалпына келтіру, биоәртүрлілікті сақтау перспективалары талқыланды, сондай-ақ ЭЫДҰ тарапынан климаттың өзгеруі, биоәртүрлілікті сақтау және шөлейттенуге қарсы күрес бағыттарындағы синергияға қол жеткізу үшін қаржылық құралдар таныстырылды.',
					en: 'A side event titled “Forests and land degradation: synergy among the three Rio Conventions and Central Asia’s contribution to global solutions” was organized. Prospects for restoring forests and degraded lands and conserving biodiversity were discussed jointly with the Secretariats of the three Rio Conventions and the Food and Agriculture Organization of the United Nations, and the OECD presented financial instruments to strengthen synergy across the climate, biodiversity, and desertification agendas.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/vklad-stran-centralnoy-azii-v-dostizhenie-globalnyh-celey-v-oblasti-klimata-zemel-i-bioraznoobraziya-obsudili-na-sor-30',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 9,
		date: {
			ru: 'Декабрь 2025',
			kk: '2025 желтоқсан',
			en: 'December 2025',
		},
		items: [
			{
				id: 12,
				addessAndTime: {
					ru: 'Найроби, Кения, Декабрь 2025 года',
					kk: 'Найроби, Кения, 2025 жылғы желтоқсан',
					en: 'Nairobi, Kenya, December 2025',
				},
				title: {
					ru: 'Одиннадцатая консультационная встреча',
					kk: 'Он бірінші консультациялық кездесу',
					en: 'Eleventh consultation meeting',
				},
				subtitle: {
					ru: '7-я сессия Ассамблеи ООН по окружающей среде (ЮНЕА-7)',
					kk: 'БҰҰ Қоршаған орта жөніндегі ассамблеясының 7-сессиясы (ЮНЕА-7)',
					en: 'Seventh session of the UN Environment Assembly (UNEA-7)',
				},
				description: {
					ru: 'В рамках седьмой сессии Ассамблеи ООН по окружающей среде (далее – ЮНЕА-7), которая проходила с 8 по 12 декабря в штаб-квартире Программы ООН по окружающей среде в Найроби, состоялся сайд-ивент на тему «Высыхание морей и озер – глобальная катастрофа XXI века». В мероприятии приняли участие представители экологических ведомств различных стран, первые руководители ЮНЕП, ЕЭК ООН, Секретариата Рамсарской конвенции, Международного фонда спасения Арала, финансовых институтов, научно-исследовательских центров и экспертного сообщества. В рамках мероприятия Казахстан выступил с предложением по разработке резолюции по преодолению водного кризиса на ЮНЕА-8.',
					kk: 'БҰҰ Қоршаған орта бағдарламасының Найробидегі штаб-пәтерінде 8–12 желтоқсан күндері өткен БҰҰ Қоршаған орта жөніндегі ассамблеясының жетінші сессиясы (ЮНЕА-7) аясында «Теңіздер мен көлдердің тартылуы – XXI ғасырдың жаһандық апаты» тақырыбында сайд-ивент өтті. Іс-шараға әртүрлі елдердің экологиялық ведомстволарының өкілдері, ЮНЕП басшылығы, БҰҰ ЕЭК, Рамсар конвенциясы хатшылығы, Аралды құтқару халықаралық қоры, қаржы институттары, ғылыми-зерттеу орталықтары және сарапшылар қауымдастығы қатысты. Іс-шара барысында Қазақстан ЮНЕА-8 аясында су дағдарысын еңсеру бойынша резолюция әзірлеу жөнінде ұсыныс білдірді.',
					en: 'Within the framework of the seventh session of the UN Environment Assembly (UNEA-7), held from 8 to 12 December at the headquarters of the UN Environment Programme in Nairobi, a side event titled “Drying of seas and lakes – a global catastrophe of the 21st century” took place. The event brought together representatives of environmental authorities from various countries, senior leadership of UNEP, UNECE, the Secretariat of the Ramsar Convention, the International Fund for Saving the Aral Sea, financial institutions, research centres, and the expert community. During the event, Kazakhstan proposed developing a resolution on addressing the water crisis for UNEA-8.',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: 'https://caclimate.fund/novosti/problemy-vysyhaniya-morey-i-ozer-obsudili-v-nayrobi',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
	{
		id: 10,
		date: {
			ru: '22–24 апреля 2026',
			kk: '2026 22–24 сәуір',
			en: '22–24 April 2026',
		},
		items: [
			{
				id: 13,
				addessAndTime: {
					ru: 'Астана, Казахстан, 22–24 апреля 2026 года',
					kk: 'Астана, Қазақстан, 2026 жылғы 22–24 сәуір',
					en: 'Astana, Kazakhstan, 22–24 April 2026',
				},
				title: {
					ru: 'Региональный Экологический Саммит 2026',
					kk: 'Өңірлік Экологиялық Саммит 2026',
					en: 'Regional Ecological Summit 2026',
				},
				subtitle: {
					ru: 'Региональная консолидация по экологии, устойчивости и трансграничному сотрудничеству',
					kk: 'Экология, төзімділік және трансшекаралық ынтымақтастық бойынша өңірлік консолидация',
					en: 'Regional consolidation on ecology, resilience, and transboundary cooperation',
				},
				description: {
					ru: '',
					kk: '',
					en: '',
				},
				image: '/imgs/preparation-process/preparation-process-1.png',
				link: {
					src: '',
					title: { ru: '', kk: '', en: '' },
				},
			},
		],
	},
]

export const localizePreparationProcessMocks = (mocks: typeof preparationProcessMocks, locale: Locale) => {
	return mocks.map((mock) => ({
		...mock,
		date: localize(mock.date, locale),
		items: mock.items.map((item) => ({
			...item,
			addessAndTime: localize(item.addessAndTime, locale),
			title: localize(item.title, locale),
			subtitle: localize(item.subtitle, locale),
			description: localize(item.description, locale),
		})),
	}))
}
