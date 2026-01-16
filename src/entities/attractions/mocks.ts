import { AttractionItemMultilang, Locale } from './attractions.types'

export const attractionsMultilang: AttractionItemMultilang[] = [
	{
		id: 1,
		slug: 'first-president-museum',
		title: {
			ru: 'Музей Первого Президента',
			kk: 'Тұңғыш Президент музейі',
			en: 'Museum of the First President',
		},
		image: 'https://visitastana.kz/upload/iblock/02f/tw2iti3m1r5az0htwbxv0oxbv2glc3mb.png',
		description: {
			ru: 'Уникальный музей, отражающий историю Независимости Казахстана и этапы становления государственных институтов через документы, личные вещи, подарки и фотографии.',
			kk: 'Қазақстан тәуелсіздігі тарихын және мемлекеттік институттардың қалыптасу кезеңдерін құжаттар, жеке заттар, сыйлықтар мен фотосуреттер арқылы таныстыратын бірегей музей.',
			en: 'A unique museum that presents Kazakhstan’s independence history and state-building milestones through documents, personal items, gifts, and photographs.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/first-president-museum',
	},
	{
		id: 2,
		slug: 'museum-of-arts',
		title: {
			ru: 'Музей Искусств',
			kk: 'Өнер музейі',
			en: 'Museum of Arts',
		},
		image: 'https://visitastana.kz/upload/iblock/818/20v862tq25wa4redkk7hblz125nzq4df.jpeg',
		description: {
			ru: 'Один из главных художественных центров столицы: выставки, арт-проекты и культурные мероприятия в просторных залах современного здания.',
			kk: 'Елордадағы басты өнер орталықтарының бірі: заманауи ғимараттың кең залдарында көрмелер, арт-жобалар және мәдени іс-шаралар өтеді.',
			en: 'One of the capital’s key art centers, hosting exhibitions, art projects, and cultural events in spacious modern galleries.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/museum-of-arts',
	},
	{
		id: 3,
		slug: 'k-kuanyshbaev-theatre',
		title: {
			ru: 'Государственный театр имени К.Куанышбаева',
			kk: 'Қ. Қуанышбаев атындағы мемлекеттік театр',
			en: 'K. Kuanyshbaev State Theatre',
		},
		image: 'https://visitastana.kz/upload/iblock/ed7/84qw6lzciubpd9xgjrnuyb9ilakqc1r8.jpg',
		description: {
			ru: 'Одна из ведущих драматических сцен Казахстана: постановки казахской классики, современной драматургии и мировых произведений.',
			kk: 'Қазақстандағы жетекші драма сахналарының бірі: қазақ классикасы, заманауи драматургия және әлемдік қойылымдар.',
			en: 'One of Kazakhstan’s leading drama stages, featuring Kazakh classics, contemporary plays, and world drama.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/k-kuanyshbaev-theatre',
	},
	{
		id: 4,
		slug: 'm-gorky-russian-drama-theatre',
		title: {
			ru: 'Государственный академический русский театр драмы имени М.Горького',
			kk: 'М. Горький атындағы мемлекеттік академиялық орыс драма театры',
			en: 'M. Gorky State Academic Russian Drama Theatre',
		},
		image: 'https://visitastana.kz/upload/iblock/71e/phm05du06ma08oythbknmz3jxmcm3m4m.jpg',
		description: {
			ru: 'Один из старейших театров столицы: классические и современные спектакли по русской и мировой драматургии для разных возрастов.',
			kk: 'Елордадағы ең көне театрлардың бірі: орыс және әлемдік драматургия бойынша классикалық әрі заманауи қойылымдар.',
			en: 'One of the capital’s oldest theatres, staging classic and modern productions from Russian and world drama for all ages.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/m-gorky-russian-drama-theatre',
	},
	{
		id: 5,
		slug: 'astana-opera',
		title: {
			ru: 'Театр оперы и балета «Астана Опера»',
			kk: '«Астана Опера» опера және балет театры',
			en: 'Astana Opera House',
		},
		image: 'https://visitastana.kz/upload/iblock/273/7pbrrk4ov1ykbmxebti5b0nwh19t6xcv.jpeg',
		description: {
			ru: 'Главный центр оперы и балета: масштабные постановки, международные проекты, гастроли и мастер-классы.',
			kk: 'Опера мен балеттің басты орталығы: ауқымды қойылымдар, халықаралық жобалар, гастрольдер және шеберлік сабақтары.',
			en: 'A major opera and ballet center with large-scale productions, international projects, tours, and masterclasses.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/astana-opera',
	},
	{
		id: 6,
		slug: 'palace-of-peace-and-reconciliation',
		title: {
			ru: 'Дворец Мира и Согласия',
			kk: 'Бейбітшілік пен келісім сарайы',
			en: 'Palace of Peace and Reconciliation',
		},
		image: 'https://visitastana.kz/upload/iblock/6dd/doe3l27c7h5tsqm2rx2sbw85lox0l9nj.jpg',
		description: {
			ru: 'Знаковая пирамида-символ единения культур и религий: архитектурный шедевр и площадка для форумов и культурных событий.',
			kk: 'Мәдениеттер мен діндердің бірлігін бейнелейтін әйгілі пирамида: сәулеттік шедевр және форумдар мен мәдени шаралар өтетін орын.',
			en: 'An iconic pyramid symbolizing unity of cultures and religions—an architectural landmark and venue for forums and cultural events.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/palace-of-peace-and-reconciliation',
	},
	{
		id: 7,
		slug: 'baiterek-monument',
		title: {
			ru: 'Монумент «Астана Байтерек»',
			kk: '«Астана Бәйтерек» монументі',
			en: 'Baiterek Monument',
		},
		image: 'https://visitastana.kz/upload/iblock/438/i652jm4g4uv6m5qmpcx2rilwkcgdqbfa.jpg',
		description: {
			ru: 'Символ столицы и «Древо жизни», отражающее философию кочевников: обзорная площадка и панорама города.',
			kk: 'Елорданың символы әрі «Өмір ағашы»: көшпенділер дүниетанымын бейнелейтін нысан, қаланың панорамасын тамашалау алаңы бар.',
			en: 'The capital’s symbol and “Tree of Life,” inspired by nomadic philosophy, with an observation deck and city panorama.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/baiterek-monument',
	},
	{
		id: 8,
		slug: 'astana-grand-mosque',
		title: {
			ru: 'Центральная мечеть города Астаны',
			kk: 'Астана қаласының орталық мешіті',
			en: 'Astana Grand Mosque',
		},
		image: 'https://visitastana.kz/upload/iblock/c9b/a6tiq9s3246h025qbkphlq6izu0p6qzk.jpg',
		description: {
			ru: 'Одна из крупнейших мечетей региона: впечатляющая архитектура, просторные молитвенные залы и открытость для гостей.',
			kk: 'Өңірдегі ең ірі мешіттердің бірі: әсерлі сәулет, кең намаз залдары және қонақтарға ашық кеңістік.',
			en: 'One of the region’s largest mosques, featuring impressive architecture, vast prayer halls, and welcoming access for visitors.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/astana-grand-mosque',
	},
	{
		id: 9,
		slug: 'youth-musical-theatre',
		title: {
			ru: 'Музыкальный театр юного зрителя',
			kk: 'Жас көрермен музыкалық театры',
			en: 'Youth Musical Theatre',
		},
		image: 'https://visitastana.kz/upload/iblock/f97/4kioedx7im1908dwcrcwgr8xzm4xlkge.webp',
		description: {
			ru: 'Театр для молодежи и семейной аудитории: мюзиклы и музыкальные спектакли, современные постановки с национальным колоритом.',
			kk: 'Жастар мен отбасыға арналған театр: мюзиклдер мен музыкалық қойылымдар, ұлттық нақышы бар заманауи сахналанымдар.',
			en: 'A theatre for youth and families featuring musicals and music-driven productions, including modern shows with national flair.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/youth-musical-theatre',
	},
	{
		id: 10,
		slug: 'uly-dala-eli-monument',
		title: {
			ru: 'Монумент «Ұлы Дала Елі»',
			kk: '«Ұлы Дала Елі» монументі',
			en: 'Uly Dala Eli Monument',
		},
		image: 'https://visitastana.kz/upload/iblock/5a3/zsfne9hr1m6tot0ujw8712tchx3nx65i.jpg',
		description: {
			ru: 'Монумент-символ независимости и единства: архитектурный комплекс и популярное место для прогулок и фото.',
			kk: 'Тәуелсіздік пен бірліктің символы: сәулеттік кешен және серуен мен фотоға арналған танымал орын.',
			en: 'A monument symbolizing independence and unity—an architectural complex and a popular spot for walks and photos.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/uly-dala-eli-monument',
	},
	{
		id: 11,
		slug: 'mineralogical-museum',
		title: {
			ru: 'Минералогический (геологический) музей',
			kk: 'Минералогиялық (геологиялық) музей',
			en: 'Mineralogical (Geological) Museum',
		},
		image: 'https://visitastana.kz/upload/iblock/bf7/blbtvfxn893pm69ana0a58behtzace2c.png',
		description: {
			ru: 'Единственный в столице музей минералогии и геологии: редкие минералы, самородные металлы, окаменелости и коллекции из разных стран.',
			kk: 'Елордадағы минералогия мен геологияға арналған жалғыз музей: сирек минералдар, самород металдар, қазба қалдықтар және әлемнің түрлі елдерінен жинақталған коллекциялар.',
			en: 'The capital’s dedicated mineralogy and geology museum with rare minerals, native metals, fossils, and collections from around the world.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/mineralogical-museum',
	},
	{
		id: 12,
		slug: 'book-museum',
		title: {
			ru: 'Книжный музей',
			kk: 'Кітап музейі',
			en: 'Book Museum',
		},
		image: 'https://visitastana.kz/upload/iblock/d64/mx1uhhsw107z995191caq7rmqawitnbq.png',
		description: {
			ru: 'Музей редких книг и рукописей при Национальной академической библиотеке: уникальные издания и история письменной культуры.',
			kk: 'Ұлттық академиялық кітапхана жанындағы сирек кітаптар мен қолжазбалар музейі: бірегей басылымдар және жазба мәдениетінің тарихы.',
			en: 'A rare-books and manuscripts museum at the National Academic Library, showcasing unique editions and the history of written culture.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/book-museum',
	},
	{
		id: 13,
		slug: 'berik-alibai-house-museum',
		title: {
			ru: 'Дом-музей Берика Алибая',
			kk: 'Берік Әлибайдың үй-музейі',
			en: 'Berik Alibai House-Museum',
		},
		image: 'https://visitastana.kz/upload/iblock/b56/iw5402hivjc3d2syhppoe2yf0dgjsl7g.png',
		description: {
			ru: 'Музей-коллекция мастера-ювелира: украшения, реставрационные работы и национальные предметы быта, отражающие культурное наследие.',
			kk: 'Зергер-шебердің музей-коллекциясы: әшекейлер, реставрациялық жұмыстар және мәдени мұраны танытатын ұлттық тұрмыстық бұйымдар.',
			en: 'A jeweller’s collection museum featuring jewelry, restoration works, and traditional artifacts reflecting Kazakh cultural heritage.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/berik-alibai-house-museum',
	},
	{
		id: 14,
		slug: 'hazret-sultan-mosque',
		title: {
			ru: 'Мечеть «Хазрет Султан»',
			kk: '«Хазірет Сұлтан» мешіті',
			en: 'Hazret Sultan Mosque',
		},
		image: 'https://visitastana.kz/upload/iblock/41d/mnauvp3n6pbik57jk3hncuk5htgcnelw.jpg',
		description: {
			ru: 'Одна из крупнейших мечетей столицы: впечатляющая архитектура, национальные орнаменты и просторный комплекс для посетителей.',
			kk: 'Елордадағы ең ірі мешіттердің бірі: әсерлі сәулет, ұлттық өрнектер және келушілерге арналған кең кешен.',
			en: 'One of the capital’s largest mosques, known for its impressive architecture, national ornaments, and spacious visitor-friendly complex.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/hazret-sultan-mosque',
	},
	{
		id: 15,
		slug: 'holy-dormition-cathedral',
		title: {
			ru: 'Свято-Успенский кафедральный собор',
			kk: 'Қасиетті Успение кафедралды соборы',
			en: 'Holy Dormition Cathedral',
		},
		image: 'https://visitastana.kz/upload/iblock/bbd/x8xrsbg2nb4pri8eegihmxtt2ea56knb.jpg',
		description: {
			ru: 'Крупнейший православный собор: важный духовный центр с богослужениями, иконами и художественным убранством.',
			kk: 'Ірі православ соборы: құлшылықтар өтетін, иконалар мен көркем безендірілуі бар маңызды рухани орталық.',
			en: 'A major Orthodox cathedral and spiritual center, known for services, icons, and rich interior artwork.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/holy-dormition-cathedral',
	},
	{
		id: 16,
		slug: 'a-mambetov-theatre',
		title: {
			ru: 'Государственный театр им. А. Мамбетова',
			kk: 'Ә. Мамбетov атындағы мемлекеттік театр',
			en: 'A. Mambetov State Theatre',
		},
		image: 'https://visitastana.kz/upload/iblock/746/lbcyt8pqx3pefr08on89zhk1ttc674bj.png',
		description: {
			ru: 'Современный театр драмы и комедии: казахская и мировая классика, новые постановки и технологичная сцена.',
			kk: 'Заманауи драма және комедия театры: қазақ және әлемдік классика, жаңа қойылымдар және техникалық мүмкіндігі жоғары сахна.',
			en: 'A modern drama and comedy theatre presenting Kazakh and world classics, new productions, and a well-equipped stage.',
		},
		buttonText: { ru: 'Подробнее', kk: 'Толығырақ', en: 'More' },
		link: '/attractions/a-mambetov-theatre',
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
