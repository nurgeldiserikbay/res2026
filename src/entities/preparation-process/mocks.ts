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
					ru: 'Первая региональная консультационная встреча',
					kk: 'Бірінші консультациялық кездесу',
					en: 'First consultation meeting',
				},
				subtitle: {
					ru: 'Первая региональная консультация по подготовке к РЭС 2026',
					kk: 'RES 2026-ға дайындық бойынша бірінші өңірлік консультация',
					en: 'First regional consultation on preparations for RES 2026',
				},
				description: {
					ru: 'Первая региональная консультация по подготовке к РЭС 2026  проведена при участии представителей всех стран Центральной Азии, агентств ООН, международных финансовых институтов. Консультация была посвящена обоснованию идеи РЭС 2026 и старту подготовки, с делегатами из Центральной Азии были обсуждены потребности региона и общие климатические вызовы.',
					kk: 'Бірінші өңірлік консультация ӨЭС 2026-ға дайындықты бастауға және Саммит идеясының негіздемесін айқындауға арналды, оған Орталық Азияның барлық елдерінің өкілдері қатысты',
					en: "The first regional consultation on preparations for RES 2026, with representatives from all Central Asian countries, was dedicated to substantiating the Summit's concept and launching the preparatory process.",
				},
				images: ['/imgs/preparation-process/preparation-process-1-1.png', '/imgs/preparation-process/preparation-process-1-2.png'],
				link: {
					src: 'https://caclimate.fund/novosti/pervaya-regionalnaya-konsultaciya-po-podgotovke-k-regionalnomu-klimaticheskomu-sammitu-2026',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
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
					ru: 'Вторая региональная консультационная встреча',
					kk: 'Екінші консультациялық кездесу',
					en: 'Second consultation meeting',
				},
				subtitle: {
					ru: 'Вторая региональная консультационная встреча, Самаркандский климатический форум',
					kk: 'Самарқанд климат форумы',
					en: 'Samarkand Climate Forum',
				},
				description: {
					ru: 'Вторая встреча сфокусировалась на укреплении регионального экологического сотрудничества. Консультация прошла в формате диалога высокого уровня с участием Министров экологических ведомств стран Центральной Азии, руководители региональных агентств ООН, международных финансовых институтов. По итогам предложено формирование пула региональных проектов, а также определение фокал-поинтов от каждой страны для оперативного взаимодействия в рамках подготовки к РЭС 2026.',
					kk: 'Екінші өңірлік консультация өңірлік экологиялық ынтымақтастықты нығайтуға бағытталып, Орталық Азия елдерінің экологиялық ведомстволары басшылары қатысқан жоғары деңгейдегі диалог форматында өтті; қорытындысы бойынша өңірлік жобалар пулын қалыптастыру ұсынылды',
					en: 'The second regional consultation focused on strengthening regional environmental cooperation and was held as a high-level dialogue with the participation of heads of environmental authorities of Central Asian countries; it resulted in a proposal to form a pool of regional projects.',
				},
				images: ['/imgs/preparation-process/preparation-process-2-1.png'],
				link: {
					src: 'https://www.gov.kz/memleket/entities/ecogeo/press/news/details/970471',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
		],
	},
	{
		id: 3,
		date: {
			ru: '14 мая 2025',
			kk: '2025 14 мамыр',
			en: '14 May 2025',
		},
		items: [
			{
				id: 3,
				addessAndTime: {
					ru: 'Ашхабад, Туркменистан, 14 мая 2025 года',
					kk: 'Ашхабад, Түрікменстан, 2025 жылғы 14 мамыр',
					en: 'Ashgabat, Turkmenistan, 14 May 2025',
				},
				title: {
					ru: 'Третья региональная консультационная встреча',
					kk: 'Үшінші консультациялық кездесу',
					en: 'Third consultation meeting',
				},
				subtitle: {
					ru: 'Центрально-Азиатская Конференция по вопросам изменения климата (ЦАКИК-2025)',
					kk: 'Климаттың өзгеруі мәселелері бойынша Орталық Азия конференциясы (ЦАКИК-2025) «Орталық Азиядағы өңірлік және ұлттық іс-қимыл арқылы климаттық қаржыландырудың жаһандық мақсатына қол жеткізу»',
					en: 'Central Asian Conference on Climate Change (CACCC-2025) "Achieving the Global Goal on Climate Finance through Regional and National Action in Central Asia"',
				},
				description: {
					ru: 'Третья региональная консультация проведена при участии руководителей экологических ведомств стран Центральной Азии и представителей агентств ООН, неправительственных организаций и др. В рамках консультации Потсдамским институтом изучения климатических изменений (PIK) была презентована концепция Странового климатического профиля Казахстана, как один из итогов Саммита. Консультация позволила обсудить наиболее острые климатические риски региона и подходы к механизму по реагированию на такие риски.',
					kk: 'Үшінші консультация өңірдің ең өткір климаттық тәуекелдерін және мұндай тәуекелдерге ден қою тетігіне қатысты тәсілдерді талқылауға мүмкіндік берді',
					en: "The third consultation enabled discussion of the region's most acute climate risks and approaches to response mechanisms for such risks.",
				},
				images: ['/imgs/preparation-process/preparation-process-3-1.png'],
				link: {
					src: 'https://caclimate.fund/novosti/cakik-2025-centralnaya-aziya-obedinyaet-usiliya-dlya-dostizheniya-globalnoy-celi-klimaticheskogo-finansirovaniya',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
		],
	},
	{
		id: 4,
		date: {
			ru: '29 мая 2025',
			kk: '2025 29 мамыр',
			en: '29 May 2025',
		},
		items: [
			{
				id: 4,
				addessAndTime: {
					ru: 'Душанбе, Таджикистан, 29 мая 2025 года',
					kk: 'Душанбе, Тәжікстан, 2025 жылғы 29 мамыр',
					en: 'Dushanbe, Tajikistan, 29 May 2025',
				},
				title: {
					ru: 'Четвертая региональная консультационная встреча',
					kk: 'Төртінші консультациялық кездесу',
					en: 'Fourth consultation meeting',
				},
				subtitle: {
					ru: 'Международная конференция высокого уровня по сохранению ледников 2025',
					kk: 'Мұздықтарды сақтау жөніндегі 2025 жылғы жоғары деңгейдегі халықаралық конференция',
					en: 'High-Level International Conference on Glacier Preservation 2025',
				},
				description: {
					ru: 'Четвертая региональная консультация прошла при участии Министров экологических ведомств, глав Гидрометеорологических агентств стран Центральной Азии и региональных руководителей агентств ООН. Консультация была направлена на интеграцию науки в повестку РЭС 2026 и экологическую политику региона.',
					kk: 'Төртінші консультация ғылымды ӨЭС 2026 күн тәртібіне және өңірдің климат саясатына тұтастай интеграциялауға бағытталды',
					en: "The fourth consultation aimed to integrate science into the RES 2026 agenda and into the region's climate policy more broadly.",
				},
				images: ['/imgs/preparation-process/preparation-process-4-1.png', '/imgs/preparation-process/preparation-process-4-2.png'],
				link: {
					src: 'https://caclimate.fund/novosti/chetvertaya-regionalnaya-konsultaciya-v-ramkah-provedeniya-rks-2026',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
		],
	},
	{
		id: 5,
		date: {
			ru: '20 июня 2025',
			kk: '2025 20 маусым',
			en: '20 June 2025',
		},
		items: [
			{
				id: 5,
				addessAndTime: {
					ru: 'Бонн, Германия, 20 июня 2025 года',
					kk: 'Бонн, Германия, 2025 жылғы 20 маусым',
					en: 'Bonn, Germany, 20 June 2025',
				},
				title: {
					ru: 'Пятая консультационная встреча',
					kk: 'Бесінші консультациялық кездесу',
					en: 'Fifth consultation meeting',
				},
				subtitle: {
					ru: '62-я сессия Вспомогательных органов РКИК ООН (SB-62)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясы шеңберіндегі ғылыми және техникалық консультациялар жөніндегі қосалқы орган мен іске асыру жөніндегі қосалқы органның 62-сессиясы (SB62)',
					en: '62nd session of the Subsidiary Body for Scientific and Technological Advice and the Subsidiary Body for Implementation (SB62) of the UN Framework Convention on Climate Change (UNFCCC)',
				},
				description: {
					ru: 'В Пятой консультации приняли участие представители международных организаций, зарубежных партнеров и заинтересованные эксперты. Консультация была посвящена обсуждению вопросов формирования регионального пула проектов, создания сети научного сотрудничества и совершенствования механизмов климатического финансирования для региона Центральной Азии.',
					kk: 'Бесінші консультация өңірлік жобалар пулын қалыптастыру, ғылыми ынтымақтастық желісін құру және Орталық Азия өңірі үшін климаттық қаржыландыру тетіктерін әзірлеу мәселелерін талқылауға арналды',
					en: 'The fifth consultation focused on discussing the formation of a regional project pool, the establishment of a network for scientific cooperation, and the development of climate finance mechanisms for the Central Asian region.',
				},
				images: ['/imgs/preparation-process/preparation-process-5-1.png', '/imgs/preparation-process/preparation-process-5-2.png'],
				link: {
					src: 'https://caclimate.fund/novosti/proektnyy-ofis-predstavlyaet-regionalnye-klimaticheskie-iniciativy-na-klimaticheskoy-konferencii-oon-v-bonne',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
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
					ru: 'Актау, Казахстан, 1-2 августа 2025 года',
					kk: 'Ақтау, Қазақстан, 2025 жылғы 1–2 тамыз',
					en: 'Aktau, Kazakhstan, 1–2 August 2025',
				},
				title: {
					ru: 'Шестая  консультационная встреча',
					kk: 'Алтыншы консультациялық кездесу',
					en: 'Sixth consultation meeting',
				},
				subtitle: {
					ru: 'Встреча Министров экологических ведомств стран Центральной Азии по утверждению Концепции РЭС саммита 2026',
					kk: 'Орталық Азия елдерінің экологиялық ведомстволары министрлерінің RES 2026 Саммиті тұжырымдамасын бекіту жөніндегі кездесуі',
					en: 'Meeting of Ministers of Environmental Authorities of Central Asian countries to approve the RES Summit 2026 Concept',
				},
				description: {
					ru: 'Состоялась встреча Министров экологических ведомств стран Центральной Азии, по итогам которой был принят Протокол. Согласно Протоколу Стороны утвердили ключевые тематические направления РЭС 2026, концепцию выставки зеленых технологий; согласились продолжить проработку проекта Декларации глав государств Центральной Азии для принятия в рамках Саммита. Также в рамках встречи рассмотрен предварительный пул региональных инициатив.',
					kk: 'Саммиттің жаңартылған тұжырымдамасы, сондай-ақ Орталық Азия мемлекеттері басшыларының экология және орнықты даму саласындағы өңірлік ынтымақтастық жөніндегі Бірлескен декларациясының жобасы ұсынылып, бекітілді; 20-дан астам өңірлік бастамадан тұратын тізбе қалыптастырылды',
					en: 'The updated Summit Concept was presented and approved, along with the draft Joint Declaration by the Heads of State of Central Asia on regional cooperation in ecology and sustainable development; a list of more than 20 regional initiatives was compiled.',
				},
				images: ['/imgs/preparation-process/preparation-process-6-1.png', '/imgs/preparation-process/preparation-process-6-2.png'],
				link: {
					src: 'https://www.gov.kz/memleket/entities/ecogeo/press/news/details/1044448?lang=ru',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
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
					ru: '80-я сессия Генеральной Ассамблеи ООН',
					kk: 'Біріккен Ұлттар Ұйымының Бас Ассамблеясының 80-сессиясы',
					en: '80th Session of the United Nations General Assembly',
				},
				description: {
					ru: 'В брифинге по подготовке к РЭС 2026 приняли участие Постоянный представитель Республики Казахстан при ООН, Министр экологии и природных ресурсов Республики Казахстан, Президент СОР29, Исполнительный секретарь ЕЭК ООН, представители стран Центральной Азии, UNEP, ПРООН, ООН-женщины, ЮНФПА, и др. Презентован проект Программы действий по реализации региональных экологических инициатив при партнерстве с ООН на 2026-2030 годы. Программа включает ключевые региональные инициативы по формированию концепции инвестиционного портфеля по климату и экологии, по природоориентированным решениям, запуску регионального обзора результативности экологической деятельности, циркулярной экономике и др. По итогам брифинга выражена поддержка Программы действий со стороны агентств ООН.',
					kk: 'БҰҰ-мен әріптестікте 2026–2030 жылдарға арналған өңірлік экологиялық бастамаларды іске асыру жөніндегі Іс-қимыл бағдарламасының жобасы таныстырылды: Орталық Азияның орнықты болашағына арналған ортақ пайым. Бағдарлама климат және экология бойынша инвестициялық портфель тұжырымдамасын қалыптастыру, табиғи-негізделген шешімдер, экологиялық қызмет нәтижелілігіне өңірлік шолу жүргізу, циркулярлық экономика және басқа да бастамаларды қамтиды.',
					en: "The draft Action Programme for implementing regional environmental initiatives in partnership with the United Nations for 2026–2030 was presented as a shared vision for Central Asia's sustainable future. The Programme includes key regional initiatives on developing the concept of an investment portfolio for climate and ecology, nature-based solutions, launching a regional environmental performance review, circular economy, and other areas.",
				},
				images: [
					'/imgs/preparation-process/preparation-process-7-1.png',
					'/imgs/preparation-process/preparation-process-7-2.png',
					'/imgs/preparation-process/preparation-process-7-3.png',
					'/imgs/preparation-process/preparation-process-7-4.png',
				],
				link: {
					src: 'https://www.gov.kz/memleket/entities/ecogeo/press/news/details/1075377',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
		],
	},
	{
		id: 8,
		date: {
			ru: '15-19 ноября 2025',
			kk: '2025 15-19 қараша',
			en: '15-19 November 2025',
		},
		items: [
			{
				id: 9,
				addessAndTime: {
					ru: 'Белен, Бразилия, 15 ноября 2025 года',
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
					ru: 'Совместно с МОМ проведен сайд-ивент на тему: «Миграция, вызванная изменением климата, и развитие «зеленых» навыков в Центральной Азии: на пути к Региональному экологическому саммиту - 2026». Мероприятие было направлено на демонстрацию региональных подходов к решению проблем климатически обусловленной миграции через развитие «зеленых» компетенций, создание рабочих мест и укрепление адаптационного потенциала населения.',
					kk: 'Климат өзгерісінен туындайтын көші-қон және Орталық Азиядағы «жасыл» дағдыларды дамыту: Өңірлік Экологиялық Саммит–2026-ға қарай жол тақырыбында сайд-ивент өткізілді. Іс-шарада «жасыл» құзыреттерді дамыту, жұмыс орындарын құру және халықтың бейімделу әлеуетін нығайту арқылы климаттық көші-қон проблемаларын шешудің өңірлік тәсілдері көрсетілді.',
					en: 'A side event titled "Climate-induced migration and the development of green skills in Central Asia: on the road to the Regional Environmental Summit 2026" was held. The event showcased regional approaches to addressing climate-driven migration through the development of green competencies, job creation, and strengthening the adaptive capacity of populations.',
				},
				images: ['/imgs/preparation-process/preparation-process-8-1.png', '/imgs/preparation-process/preparation-process-8-2.png'],
				link: {
					src: 'https://caclimate.fund/novosti/migracionnye-processy-v-centralnoy-azii-vyzvannye-izmeneniem-klimata-obsudili-na-sor-30',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
			{
				id: 10,
				addessAndTime: {
					ru: 'Белен, Бразилия, 18 ноября 2025 года',
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
					ru: 'Совместно с ЮНФПА, Потсдамским институтом по изучению климатических изменений (PIK) и Гейдельбергским институтом глобального здоровья (HIGH) организован сайд-ивент на тему «Изменение климата, здоровье и снижение производительности в Центральной Азии». На мероприятии был представлен научный обзор о воздействии изменения климата, в частности экстремальной жары, на здоровье и производительность труда в Центральной Азии, обсуждены возможные пути адаптации и укрепления устойчивости, меры готовности системы здравоохранения, механизмы защиты трудящихся и гендерно-ориентированные политики.',
					kk: 'Климаттың өзгеруі, денсаулық және Орталық Азиядағы өнімділіктің төмендеуі тақырыбында сайд-ивент өтті. Іс-шарада климаттың өзгеруінің, әсіресе шектен тыс ыстықтың, денсаулық пен еңбек өнімділігіне әсері туралы ғылыми шолу ұсынылып, бейімделу және төзімділікті арттыру жолдары, денсаулық сақтау жүйесінің даярлығы, еңбек етушілерді қорғау тетіктері және гендерлік бағдарланған саясаттар талқыланды.',
					en: 'A side event titled "Climate change, health, and productivity losses in Central Asia" took place. The event presented a scientific review on the impacts of climate change—particularly extreme heat—on health and labour productivity in Central Asia, and discussed possible adaptation and resilience-building pathways, health-system preparedness measures, worker protection mechanisms, and gender-responsive policies.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-9-1.png',
					'/imgs/preparation-process/preparation-process-9-2.png',
					'/imgs/preparation-process/preparation-process-9-3.png',
				],
				link: {
					src: 'https://caclimate.fund/novosti/vliyanie-izmeneniya-klimata-na-zdorove-zhiteley-centralnoy-azii-obsudili-na-sor-30',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
			{
				id: 11,
				addessAndTime: {
					ru: 'Белен, Бразилия, 19 ноября 2025 года',
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
					ru: 'Организован и проведен сайд-ивент на тему: «Леса и деградация земель: синергия трех Рио-конвенций и вклад Центральной Азии в глобальные решения». В дискуссии приняли участие представители всех трех Секретариатов Рио-конвенций (Рамочной конвенции ООН об изменении климата, Конвенции ООН о биологическом разнообразии и Конвенции ООН по борьбе с опустыниванием), ФАО, ОЭСР и др. Были обсуждены перспективы по восстановлению лесов и деградированных земель, презентованы финансовые инструменты для достижения синергии конвенций по вопросам изменения климата, сохранения биоразнообразия и борьбы с опустыниванием.',
					kk: '«Ормандар және жер деградациясы: үш Рио-конвенция арасындағы синергия және Орталық Азияның жаһандық шешімдерге қосатын үлесі» тақырыбында сайд-ивент ұйымдастырылды. Үш Рио-конвенция хатшылықтарымен және БҰҰ Азық-түлік және ауыл шаруашылығы ұйымымен бірлесіп ормандарды және деградталған жерлерді қалпына келтіру, биоәртүрлілікті сақтау перспективалары талқыланды, сондай-ақ ЭЫДҰ тарапынан климаттың өзгеруі, биоәртүрлілікті сақтау және шөлейттенуге қарсы күрес бағыттарындағы синергияға қол жеткізу үшін қаржылық құралдар таныстырылды.',
					en: 'A side event titled "Forests and land degradation: synergy among the three Rio Conventions and Central Asia\'s contribution to global solutions" was organized. Prospects for restoring forests and degraded lands and conserving biodiversity were discussed jointly with the Secretariats of the three Rio Conventions and the Food and Agriculture Organization of the United Nations, and the OECD presented financial instruments to strengthen synergy across the climate, biodiversity, and desertification agendas.',
				},
				images: ['/imgs/preparation-process/preparation-process-10-1.png', '/imgs/preparation-process/preparation-process-10-2.png'],
				link: {
					src: 'https://caclimate.fund/novosti/vklad-stran-centralnoy-azii-v-dostizhenie-globalnyh-celey-v-oblasti-klimata-zemel-i-bioraznoobraziya-obsudili-na-sor-30',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
		],
	},
	{
		id: 9,
		date: {
			ru: '9 декабря 2025',
			kk: '2025 9 желтоқсан',
			en: '9 December 2025',
		},
		items: [
			{
				id: 12,
				addessAndTime: {
					ru: 'Найроби, Кения, 9 декабря 2025 года',
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
					ru: 'На официальном сайд-ивенте на тему «Высыхание морей и озер - глобальная катастрофа XXI века» приняли участие руководители экологических ведомств различных стран, включая Францию и Нигерию, первые руководители ЮНЕП, ЕЭК ООН, Секретариата Рамсарской конвенции, Международного фонда спасения Арала, представители финансовых институтов, научно-исследовательских центров и экспертного сообщества. В рамках мероприятия была презентована работа по восстановлению Северного Арала, со стороны ЕЭК ООН и ЮНЕП выражена поддержка инициативы проведения РЭС 2026 в Астане. В ходе сайд-ивента состоялась премьера видеоролика Секретариата КБО ООН "Шепот Аральского моря", в котором представлены актуальные проблемы населения, проживающего в регионе Приаралья. По итогам сайд-ивента Казахстан выступил с предложением по разработке резолюции по преодолению водного кризиса на ЮНЕА-8.',
					kk: 'БҰҰ Қоршаған орта бағдарламасының Найробидегі штаб-пәтерінде 8–12 желтоқсан күндері өткен БҰҰ Қоршаған орта жөніндегі ассамблеясының жетінші сессиясы (ЮНЕА-7) аясында «Теңіздер мен көлдердің тартылуы – XXI ғасырдың жаһандық апаты» тақырыбында сайд-ивент өтті. Іс-шараға әртүрлі елдердің экологиялық ведомстволарының өкілдері, ЮНЕП басшылығы, БҰҰ ЕЭК, Рамсар конвенциясы хатшылығы, Аралды құтқару халықаралық қоры, қаржы институттары, ғылыми-зерттеу орталықтары және сарапшылар қауымдастығы қатысты. Іс-шара барысында Қазақстан ЮНЕА-8 аясында су дағдарысын еңсеру бойынша резолюция әзірлеу жөнінде ұсыныс білдірді.',
					en: 'Within the framework of the seventh session of the UN Environment Assembly (UNEA-7), held from 8 to 12 December at the headquarters of the UN Environment Programme in Nairobi, a side event titled "Drying of seas and lakes – a global catastrophe of the 21st century" took place. The event brought together representatives of environmental authorities from various countries, senior leadership of UNEP, UNECE, the Secretariat of the Ramsar Convention, the International Fund for Saving the Aral Sea, financial institutions, research centres, and the expert community. During the event, Kazakhstan proposed developing a resolution on addressing the water crisis for UNEA-8.',
				},
				images: ['/imgs/preparation-process/preparation-process-11-1.png'],
				link: {
					src: 'https://caclimate.fund/novosti/problemy-vysyhaniya-morey-i-ozer-obsudili-v-nayrobi',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
		],
	},
	{
		id: 10,
		date: {
			ru: '22-24 апреля Саммит 2026',
			kk: 'Саммит 2026 22–24 сәуір',
			en: '22-24 April Summit 2026',
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
				images: ['/imgs/preparation-process/preparation-process-12-1.png'],
				link: {
					src: '',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
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
			link: {
				...item.link,
				title: localize(item.link.title, locale),
			},
		})),
	}))
}
