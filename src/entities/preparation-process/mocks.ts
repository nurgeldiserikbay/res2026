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
					kk: 'Бірінші өңірлік консультациялық кездесу',
					en: 'First Regional Consultation Meeting',
				},
				subtitle: {
					ru: '',
					kk: '',
					en: '',
				},
				description: {
					ru: 'Первая региональная консультация по подготовке к РЭС 2026  проведена при участии представителей всех стран Центральной Азии, агентств ООН, международных финансовых институтов. Консультация была посвящена обоснованию идеи РЭС 2026 и старту подготовки, с делегатами из Центральной Азии были обсуждены потребности региона и общие климатические вызовы.',
					kk: 'ӨЭС 2026-ға дайындық жөніндегі бірінші өңірлік консультация Орталық Азияның барлық елдерінің өкілдері, БҰҰ агенттіктері және халықаралық қаржы институттарының қатысуымен өткізілді. Консультация барысында ӨЭС 2026 өткізу бастамасының негіздемесі ұсынылып, дайындық жұмыстарының басталуы жарияланды. Сондай-ақ Орталық Азия елдерінің делегаттарымен өңірдің негізгі қажеттіліктері мен ортақ климаттық сын-қатерлері талқыланды.',
					en: 'The First Regional Consultation on preparations for the RES 2026 was held with the participation of representatives of all Central Asian countries, UN agencies, and international financial institutions. The consultation focused on substantiating the concept of RES 2026 and launching the preparatory process. Regional needs and shared climate challenges were discussed with Central Asian delegates.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-1-1.png',
					'/imgs/preparation-process/preparation-process-1-2.png',
					'/imgs/preparation-process/preparation-process-1-3.png',
					'/imgs/preparation-process/preparation-process-1-4.png',
				],
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
					kk: 'Екінші өңірлік консультациялық кездесу',
					en: 'Second Regional Consultation Meeting',
				},
				subtitle: {
					ru: 'Самаркандский климатический форум',
					kk: 'Самарқанд климаттық форумы',
					en: 'Samarkand Climate Forum',
				},
				description: {
					ru: 'Вторая встреча сфокусировалась на укреплении регионального экологического сотрудничества. Консультация прошла в формате диалога высокого уровня с участием министров экологических ведомств стран Центральной Азии, руководителей региональных агентств ООН, международных финансовых институтов. По итогам предложено формирование пула региональных проектов, а также определение фокал-поинтов от каждой страны для оперативного взаимодействия в рамках подготовки к РЭС 2026.',
					kk: 'Екінші өңірлік консультациялық кездесу өңірлік экологиялық ынтымақтастықты нығайтуға бағытталды. Консультация Орталық Азия елдерінің экология саласына жауапты министрлерінің, БҰҰ өңірлік агенттіктерінің басшылары мен халықаралық қаржы институттарының қатысуымен жоғары деңгейдегі диалог форматында өтті. Кездесу қорытындысы бойынша өңірлік жобалар пулын қалыптастыру, сондай-ақ ӨЭС 2026-ға дайындық аясында жедел өзара іс-қимыл үшін әр елден жауапты байланыс тұлғаларын айқындау ұсынылды.',
					en: 'The Second Regional Consultation focused on strengthening regional environmental cooperation. It was held as a high-level dialogue with the participation of ministers responsible for environmental issues from Central Asian countries, heads of regional UN agencies, and representatives of international financial institutions. Key outcomes included a proposal to establish a pipeline of regional projects and to designate national focal points from each country to ensure effective coordination in preparation for RES 2026.',
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
					kk: 'Үшінші өңірлік консультациялық кездесу',
					en: 'Third Regional Consultation Meeting',
				},
				subtitle: {
					ru: 'Центрально-Азиатская Конференция по вопросам изменения климата (ЦАКИК-2025)',
					kk: 'Орталық Азия климаттың өзгеруі жөніндегі конференциясы (ОАКӨК-2025)',
					en: 'Central Asian Climate Change Conference (CACCC-2025)',
				},
				description: {
					ru: 'Третья региональная консультация проведена при участии руководителей экологических ведомств стран Центральной Азии и представителей агентств ООН, неправительственных организаций и др. В рамках консультации Потсдамским институтом изучения климатических изменений (PIK) была презентована концепция Странового климатического профиля Казахстана, как один из итогов Саммита. Консультация позволила обсудить наиболее острые климатические риски региона и подходы к механизму по реагированию на такие риски.',
					kk: 'Үшінші өңірлік консультациялық кездесу Орталық Азия елдерінің экология саласындағы уәкілетті органдарының басшыларының, БҰҰ агенттіктерінің, үкіметтік емес ұйымдардың және басқа да мүдделі тараптардың қатысуымен өтті. Консультация аясында Потсдам климаттық өзгерістерді зерттеу институты (PIK) Саммиттің ықтимал нәтижелерінің бірі ретінде Қазақстанның Елдік климаттық профилі тұжырымдамасын таныстырды. Кездесу барысында өңір үшін аса өзекті климаттық тәуекелдер және оларға ден қою тетіктері талқыланды.',
					en: 'The Third Regional Consultation was held with the participation of heads of environmental authorities of Central Asian countries and representatives of UN agencies, non-governmental organizations, and other stakeholders. Within the framework of the consultation, the Potsdam Institute for Climate Impact Research (PIK) presented the concept of the Kazakhstan Country Climate Risk Profile as one of the expected Summit outcomes. The consultation enabled discussion of the most acute climate risks in the region and approaches to mechanisms of responding to such risks.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-3-1.png',
					'/imgs/preparation-process/preparation-process-3-2.png',
					// '/imgs/preparation-process/preparation-process-3-3.png',
				],
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
					kk: 'Төртінші өңірлік консультациялық кездесу',
					en: 'Fourth Regional Consultation Meeting',
				},
				subtitle: {
					ru: 'Международная конференция высокого уровня по сохранению ледников 2025',
					kk: 'Мұздықтарды сақтау жөніндегі жоғары деңгейдегі халықаралық конференция 2025',
					en: 'High-Level International Conference on Glacier Preservation 2025',
				},
				description: {
					ru: 'Четвертая региональная консультация прошла при участии министров экологических ведомств, глав гидрометеорологических агентств стран Центральной Азии и региональных руководителей агентств ООН. Консультация была направлена на интеграцию науки в повестку РЭС 2026 и экологическую политику региона.',
					kk: 'Төртінші өңірлік консультация Орталық Азия елдерінің экология министрлерінің, гидрометеорологиялық қызметтер басшыларының және БҰҰ агенттіктерінің өңірлік жетекшілерінің қатысуымен өтті. Консультация ӨЭС 2026 күн тәртібіне ғылымды интеграциялауға және өңірдің экологиялық саясатын ғылыми негізде нығайтуға бағытталды.',
					en: 'The Fourth Regional Consultation was held with the participation of Ministers responsible for environmental issues, heads of Hydrometeorological Services of Central Asian countries, and regional heads of UN agencies. The consultation aimed to integrate science into the agenda of RES 2026 and into the region’s environmental policies.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-4-1.png',
					'/imgs/preparation-process/preparation-process-4-2.png',
					'/imgs/preparation-process/preparation-process-4-3.png',
				],
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
					en: 'Fifth Consultation Meeting',
				},
				subtitle: {
					ru: '62-я сессия Вспомогательных органов РКИК ООН (SB-62)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының қосалқы органдарының 62-сессиясы (SB-62)',
					en: '62nd Session of the Subsidiary Bodies of the UNFCCC (SB-62)',
				},
				description: {
					ru: 'В Пятой консультации приняли участие представители международных организаций, зарубежных партнеров и заинтересованные эксперты. Консультация была посвящена обсуждению вопросов формирования регионального пула проектов, создания сети научного сотрудничества и совершенствования механизмов климатического финансирования для региона Центральной Азии.',
					kk: 'Бесінші консультацияға халықаралық ұйымдардың өкілдері, шетелдік серіктестер және салалық сарапшылар қатысты. Кездесу барысында өңірлік жобалар пулын қалыптастыру, ғылыми ынтымақтастық желісін құру және Орталық Азия үшін климаттық қаржыландыру тетіктерін жетілдіру мәселелері талқыланды.',
					en: 'The Fifth Consultation brought together representatives of international organizations, international partners, and relevant experts. Discussions focused on the formation of a regional project pipeline, the establishment of a scientific cooperation network, and the enhancement of climate finance mechanisms for the Central Asia region.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-5-1.png',
					'/imgs/preparation-process/preparation-process-5-2.png',
					'/imgs/preparation-process/preparation-process-5-3.png',
					'/imgs/preparation-process/preparation-process-5-4.png',
				],
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
					kk: 'Ақтау, Қазақстан, 2025 жылғы 1-2 тамыз',
					en: 'Aktau, Kazakhstan, 1–2 August 2025',
				},
				title: {
					ru: 'Шестая консультационная встреча',
					kk: 'Алтыншы консультациялық кездесу',
					en: 'Sixth Consultative Meeting',
				},
				subtitle: {
					ru: '',
					kk: '',
					en: '',
				},
				description: {
					ru: 'Состоялась встреча министров экологических ведомств стран Центральной Азии, по итогам которой был принят Протокол. Стороны утвердили ключевые тематические направления РЭС 2026, концепцию выставки зеленых технологий, согласились продолжить работу над проектом Декларации глав государств Центральной Азии для последующего принятия в рамках Саммита. На встрече также рассмотрен предварительный пул региональных инициатив.',
					kk: 'Орталық Азия елдерінің экология саласындағы уәкілетті министрлерінің кездесуі өтті, оның қорытындысы бойынша Хаттама қабылданды. Хаттамаға сәйкес Тараптар ӨЭС 2026-ның негізгі тақырыптық бағыттарын, «жасыл» технологиялар көрмесінің тұжырымдамасын бекітті, сондай-ақ Саммит шеңберінде қабылдау үшін Орталық Азия мемлекеттері басшыларының Бірлескен декларациясы жобасын одан әрі пысықтауға уағдаласты. Сонымен қатар өңірлік бастамалардың алдын ала пулы қаралды.',
					en: 'A meeting of ministers responsible for environmental issues from Central Asian countries was held, resulting in the adoption of a Protocol. Under the Protocol, the Parties approved the key thematic areas of RES 2026 and the concept for a green technologies exhibition, and agreed to continue work on the draft Declaration of the Heads of State of Central Asia to be adopted at the Summit. The meeting also reviewed a preliminary pool of regional initiatives.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-6-1.png',
					'/imgs/preparation-process/preparation-process-6-2.png',
					'/imgs/preparation-process/preparation-process-6-3.png',
					'/imgs/preparation-process/preparation-process-6-4.png',
				],
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
					en: 'Seventh Consultation Meeting',
				},
				subtitle: {
					ru: '80-я сессия Генеральной Ассамблеи ООН',
					kk: 'БҰҰ Бас Ассамблеясының 80-сессиясы',
					en: '80th Session of the UN General Assembly',
				},
				description: {
					ru: 'На брифинге по подготовке к РЭС 2026 приняли участие: Постоянный представитель Республики Казахстан при ООН, Министр экологии и природных ресурсов Республики Казахстан, Президент СОР29, Исполнительный секретарь ЕЭК ООН, представители стран Центральной Азии, UNEP, ПРООН, ООН-женщины, ЮНФПА, и др. \n\n Был презентован проект Программы действий по реализации региональных экологических инициатив при партнерстве с ООН на 2026-2030 годы. Программа включает ключевые региональные инициативы по формированию концепции инвестиционного портфеля по климату и экологии, по природоориентированным решениям, по запуску регионального обзора результативности экологической деятельности, циркулярной экономике и др. \n\n По итогам брифинга выражена поддержка Программы действий со стороны агентств ООН.',
					kk: 'ӨЭС 2026-ға дайындық жөніндегі брифингке Қазақстан Республикасының БҰҰ жанындағы Тұрақты өкілі, Қазақстан Республикасы Экология және табиғи ресурстар министрі, СОР29 Президенті, БҰҰ ЕЭК Атқарушы хатшысы, Орталық Азия елдерінің өкілдері, ЮНЕП, БҰҰ Даму бағдарламасы, БҰҰ-Әйелдер, ЮНФПА және басқа да ұйымдардың өкілдері қатысты. \n\n 2026–2030 жылдарға арналған БҰҰ-мен серіктестіктегі өңірлік экологиялық бастамаларды іске асыру жөніндегі Іс-қимыл бағдарламасының жобасы таныстырылды. Бағдарлама климат пен экология саласындағы инвестициялық портфель тұжырымдамасын қалыптастыруды, табиғатқа негізделген шешімдерді, экологиялық қызметтің тиімділігіне өңірлік шолуды іске қосуды, айналмалы экономиканы және басқа да бастамаларды қамтиды. \n\n Брифинг қорытындысы бойынша БҰҰ агенттіктері тарапынан Бағдарламаға қолдау білдірілді.',
					en: 'A briefing on preparations for RES 2026 was attended by the Permanent Representative of the Republic of Kazakhstan to the United Nations, the Minister of Ecology and Natural Resources of the Republic of Kazakhstan, the President of COP29, the Executive Secretary of the UNECE, and representatives of Central Asian countries, as well as UNEP, UNDP, UN Women, UNFPA, and other partners. \n\n During the briefing, the draft Programme of Action for implementing regional environmental initiatives in partnership with the UN for 2026–2030 was presented. The Programme outlines priority initiatives, including the development of a climate and ecology investment portfolio concept, nature-based solutions, the launch of a regional environmental performance review, circular economy initiatives, and others. \n\n Following the briefing, UN agencies expressed their support for the Programme of Action.',
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
					kk: 'Белен, Бразилия, 2025 жылғы 15 қараша',
					en: 'Belém, Brazil, 15 November 2025',
				},
				title: {
					ru: 'Восьмая консультационная встреча',
					kk: 'Сегізінші консультациялық кездесу',
					en: 'Eighth Consultation Meeting',
				},
				subtitle: {
					ru: '30-я Конференция Сторон (СОР30) Рамочной конвенции ООН об изменении климата (РКИК ООН)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының (БҰҰ КӨНК) Тараптар конференциясының 30-сессиясы (СОР30)',
					en: '30th Conference of the Parties (COP30) to the UNFCCC',
				},
				description: {
					ru: 'Совместно с Международной организацией по миграции (МОМ) проведен сайд-ивент на тему «Миграция, вызванная изменением климата, и развитие «зеленых» навыков в Центральной Азии: на пути к Региональному экологическому саммиту - 2026». Мероприятие было направлено на демонстрацию региональных подходов к решению проблем климатически обусловленной миграции через развитие «зеленых» компетенций, создание рабочих мест и укрепление адаптационного потенциала населения.',
					kk: 'Халықаралық көші-қон ұйымымен (МОМ) бірлесіп «Климаттың өзгеруінен туындаған көші-қон және Орталық Азияда “жасыл” дағдыларды дамыту: Өңірлік экологиялық саммит – 2026 жолында» тақырыбында қосымша іс-шара өткізілді. Іс-шара климаттық көші-қон мәселелерін өңірлік деңгейде шешу тәсілдерін, «жасыл» құзыреттерді дамыту, жаңа жұмыс орындарын құру және халықтың бейімделу әлеуетін арттыру арқылы көрсетуге бағытталды.',
					en: 'In partnership with the International Organization for Migration (IOM), a side event titled “Climate-Induced Migration and the Development of Green Skills in Central Asia: Towards the Regional Ecological Summit 2026” was organized. The event highlighted regional approaches to addressing climate-induced migration through the development of green skills, job creation, and strengthening the adaptive capacity of communities.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-8-2.png',
					'/imgs/preparation-process/preparation-process-8-3.png',
					'/imgs/preparation-process/preparation-process-8-4.png',
					'/imgs/preparation-process/preparation-process-8-1.png',
				],
				link: {
					src: 'https://caclimate.fund/novosti/migracionnye-processy-v-centralnoy-azii-vyzvannye-izmeneniem-klimata-obsudili-na-sor-30',
					title: { ru: 'Источник', kk: 'Сілтеме', en: 'Source' },
				},
			},
			{
				id: 10,
				addessAndTime: {
					ru: 'Белен, Бразилия, 18 ноября 2025 года',
					kk: 'Белен, Бразилия, 2025 жылғы 18 қараша',
					en: 'Belém, Brazil, 18 November 2025',
				},
				title: {
					ru: 'Девятая консультационная встреча',
					kk: 'Тоғызыншы консультациялық кездесу',
					en: 'Ninth Consultation Meeting',
				},
				subtitle: {
					ru: '30-я Конференция Сторон (СОР30) Рамочной конвенции ООН об изменении климата (РКИК ООН)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының (БҰҰ КӨНК) Тараптар конференциясының 30-сессиясы (СОР30)',
					en: '30th Conference of the Parties (COP30) to the UNFCCC',
				},
				description: {
					ru: 'Совместно с ЮНФПА, Потсдамским институтом по изучению климатических изменений (PIK) и Гейдельбергским институтом глобального здоровья (HIGH) организован сайд-ивент на тему «Изменение климата, здоровье и снижение производительности в Центральной Азии». На мероприятии был представлен научный обзор о воздействии изменения климата, в частности экстремальной жары, на здоровье и производительность труда в Центральной Азии, обсуждены возможные пути адаптации и укрепления устойчивости, меры готовности системы здравоохранения, механизмы защиты трудящихся и гендерно-ориентированные политики.',
					kk: 'БҰҰ Халық қоры, Потсдам климаттық өзгерістерді зерттеу институты (PIK) және Гейдельберг жаһандық денсаулық институтымен (HIGH) бірлесіп «Климаттың өзгеруі, денсаулық және Орталық Азиядағы еңбек өнімділігінің төмендеуі» тақырыбында қосымша іс-шара ұйымдастырылды. Іс-шара барысында климаттың өзгеруінің, әсіресе экстремалды ыстықтың, халық денсаулығы мен еңбек өнімділігіне әсері жөніндегі ғылыми шолу ұсынылды. Сондай-ақ бейімделу жолдары, денсаулық сақтау жүйесінің дайындық шаралары, еңбеккерлерді қорғау тетіктері және гендерлік саясат мәселелері талқыланды.',
					en: 'In partnership with UNFPA, the Potsdam Institute for Climate Impact Research (PIK), and the Heidelberg Institute of Global Health (HIGH), a side event entitled “Climate Change, Health and Productivity Loss in Central Asia” was organized. The event presented a scientific review on the impacts of climate change, particularly extreme heat, on health and labour productivity in Central Asia, and discussed possible adaptation pathways, health system preparedness measures, worker protection mechanisms, and gender-responsive policies.',
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
					kk: 'Белен, Бразилия, 2025 жылғы 19 қараша',
					en: 'Belém, Brazil, 19November 2025',
				},
				title: {
					ru: 'Десятая консультационная встреча',
					kk: 'Оныншы консультациялық кездесу',
					en: 'Tenth Regional Consultation Meeting',
				},
				subtitle: {
					ru: '30-я Конференция Сторон (СОР30) Рамочной конвенции ООН об изменении климата (РКИК ООН)',
					kk: 'БҰҰ Климаттың өзгеруі туралы негіздемелік конвенциясының (БҰҰ КӨНК) Тараптар конференциясының 30-сессиясы (СОР30)',
					en: '30th Conference of the Parties (COP30) to the UNFCCC',
				},
				description: {
					ru: 'Организован и проведен сайд-ивент на тему: «Леса и деградация земель: синергия трех Рио-конвенций и вклад Центральной Азии в глобальные решения». В дискуссии приняли участие представители всех трех Секретариатов Рио-конвенций (Рамочной конвенции ООН об изменении климата, Конвенции ООН о биологическом разнообразии и Конвенции ООН по борьбе с опустыниванием), ФАО, ОЭСР и др. Были обсуждены перспективы по восстановлению лесов и деградированных земель, презентованы финансовые инструменты для достижения синергии конвенций по вопросам изменения климата, сохранения биоразнообразия и борьбы с опустыниванием.',
					kk: '«Ормандар және жердің деградациясы: үш Рио-конвенциясының синергиясы және Орталық Азияның жаһандық шешімдерге қосқан үлесі» тақырыбында қосымша іс-шара өткізілді. Талқылауға үш Рио-конвенциясы хатшылықтарының, ФАО, ЭЫДҰ және басқа да ұйымдардың өкілдері қатысты. Ормандарды және деградацияға ұшыраған жерлерді қалпына келтіру болашағы, климаттың өзгеруі, биоәртүрлілікті сақтау және шөлейттенумен күрес салаларындағы синергияны қамтамасыз етуге арналған қаржылық құралдар ұсынылды.',
					en: 'A side event entitled “Forests and Land Degradation: Synergies of the Three Rio Conventions and Central Asia’s Contribution to Global Solutions” was organized and held. The discussion brought together representatives of all three Rio Convention Secretariats (the UNFCCC, the Convention on Biological Diversity, and the UN Convention to Combat Desertification), FAO, OECD, and others. Prospects for forest and degraded land restoration were discussed, and financial instruments to achieve synergies among the conventions on climate change, biodiversity conservation, and combating desertification were presented.',
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
					kk: 'Найроби, Кения, 2025 жылғы 9 желтоқсан',
					en: 'Nairobi, Kenya, 9 December 2025',
				},
				title: {
					ru: 'Одиннадцатая консультационная встреча',
					kk: 'Он бірінші консультациялық кездесу',
					en: 'Eleventh Consultation Meeting',
				},
				subtitle: {
					ru: '7-я сессия Ассамблеи ООН по окружающей среде (ЮНЕА-7)',
					kk: 'БҰҰ Қоршаған орта жөніндегі ассамблеясының 7-сессиясы (ЮНЕА-7)',
					en: 'Seventh Session of the UN Environment Assembly (UNEA-7)',
				},
				description: {
					ru: 'На официальном сайд-ивенте на тему «Высыхание морей и озер - глобальная катастрофа XXI века» приняли участие руководители экологических ведомств различных стран, включая Францию и Нигерию, первые руководители ЮНЕП, ЕЭК ООН, Секретариата Рамсарской конвенции, Международного фонда спасения Арала, представители финансовых институтов, научно-исследовательских центров и экспертного сообщества. \n В рамках мероприятия была презентована работа по восстановлению Северного Арала, со стороны ЕЭК ООН и ЮНЕП выражена поддержка инициативы проведения РЭС 2026 в Астане. В ходе сайд-ивента состоялась премьера видеоролика Секретариата КБО ООН “Шепот Аральского моря”, в котором представлены актуальные проблемы населения, проживающего в регионе Приаралья. По итогам сайд-ивента Казахстан выступил с предложением по разработке резолюции по преодолению водного кризиса на ЮНЕА-8.',
					kk: '«Теңіздер мен көлдердің тартылуы – XXI ғасырдың жаһандық апаты» тақырыбындағы ресми қосымша іс-шара Франция мен Нигерияны қоса алғанда, бірқатар елдердің экология саласындағы басшылары, ЮНЕП, БҰҰ ЕЭК, Рамсар конвенциясы хатшылығы, Аралды құтқару халықаралық қоры, қаржы институттарының, ғылыми-зерттеу орталықтарының және сараптамалық қауымдастықтың өкілдері қатысты. \n Іс-шара аясында Солтүстік Аралды қалпына келтіру бойынша жүргізіліп жатқан жұмыстар таныстырылды, ал БҰҰ ЕЭК пен ЮНЕП тарапынан ӨЭС 2026-ны Астанада өткізу бастамасына қолдау білдірілді. \n Іс-шара барысында БҰҰ-ның Шөлейттенуге қарсы күрес конвенциясы хатшылығының «Арал теңізінің сыбыры» атты бейнеролигінің тұсаукесері өтті. Іс-шара қорытындысы бойынша Қазақстан ЮНЕА-8 аясында су дағдарысын еңсеруге арналған резолюция әзірлеу туралы бастама көтерді.',
					en: 'At the official side event titled “Drying Seas and Lakes: A Global Catastrophe of the 21st Century”, participants included heads of environmental authorities from several countries (including France and Nigeria), senior leadership from UNEP and UNECE, the Ramsar Convention Secretariat, the International Fund for Saving the Aral Sea, as well as representatives of financial institutions, research centres, and the expert community. \n The event presented ongoing restoration efforts for the North Aral Sea, and UNECE and UNEP expressed support for the initiative to hold RES 2026 in Astana. The side event also featured the premiere of the UNCCD Secretariat’s video “The Whisper of the Aral Sea”, highlighting the urgent challenges faced by communities in the Aral Sea region. Following the event, Kazakhstan proposed developing a resolution on addressing the water crisis for consideration at UNEA-8.',
				},
				images: [
					'/imgs/preparation-process/preparation-process-11-1.png',
					'/imgs/preparation-process/preparation-process-11-2.png',
					'/imgs/preparation-process/preparation-process-11-3.png',
				],
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
					en: 'Consolidating Central Asian regional efforts on environment, resilience, and transboundary cooperation',
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
