'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Locale } from '@/shared/config/i18n'
import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'
import { localize } from '@/shared/utils/localize'

const SLIDES = [
	{
		id: 1,
		image: '/imgs/flora-and-fauna.png',
		title: {
			kk: 'Қазақстанның флорасы мен фаунасы 1',
			ru: 'Флора и фауна Казахстана 1',
			en: 'The flora and fauna of Kazakhstan 1',
		},
		description: {
			kk: 'Табиғи аумақтарының үлкендігіне байланысты өте алуан түрлі: далалар мен шөлдерден бастап Тянь-Шань мен Алтай тауларына дейін, онда ерекше түрлер бар, олардың көпшілігі Қызыл кітапқа енгізілген, мысалы, қар барысы (қар барысы), Тянь-Шань қоңыр аюы, құлан, сондай-ақ қызғылт фламинго, қарақұйрық. Мұнда көптеген сүтқоректілер (180-нен астам түрі), құстар (шамамен 500 түрі), бауырымен жорғалаушылар, қосмекенділер және балықтар мекендейді, ал өсімдіктер әлеміне сексеуіл, арша, қарағай, қайың және көптеген дала шөптері мен гүлдері кіреді, бұл биоәртүрліліктің байлығын көрсетеді.',
			ru: 'Благодаря обширным природным территориям, регион отличается невероятным биоразнообразием: от степей и пустынь до Тянь-Шаня и Алтая, где обитают уникальные виды, многие из которых занесены в Красную книгу, такие как снежный леопард, тяньшаньский бурый медведь, кулан, а также розовые фламинго и газели. Здесь обитает множество млекопитающих (более 180 видов), птиц (около 500 видов), рептилий, амфибий и рыб, а растительность включает саксаул, можжевельник, сосну, березу и множество степных трав и цветов, что отражает богатство биоразнообразия.',
			en: 'is extremely diverse due to its large natural areas: from steppes and deserts to the Tien Shan and Altai Mountains, where there are unique species, many of which are in the Red Book, such as the snow leopard (snow leopard), Tianshan brown bear, kulan, as well as pink flamingos, gazelles. It is home to many mammals (more than 180 species), birds (about 500 species), reptiles, amphibians and fish, and vegetation includes saxaul, juniper, pine, birch and many steppe grasses and flowers, reflecting the richness of biodiversity.',
		},
		alt: 'flora-and-fauna',
		width: 1793,
		height: 888,
	},
	{
		id: 2,
		image: '/imgs/flora-and-fauna.png',
		title: {
			kk: 'Қазақстанның флорасы мен фаунасы 2',
			ru: 'Флора и фауна Казахстана 2',
			en: 'The flora and fauna of Kazakhstan 2',
		},
		description: {
			kk: 'Табиғи аумақтарының үлкендігіне байланысты өте алуан түрлі: далалар мен шөлдерден бастап Тянь-Шань мен Алтай тауларына дейін, онда ерекше түрлер бар, олардың көпшілігі Қызыл кітапқа енгізілген, мысалы, қар барысы (қар барысы), Тянь-Шань қоңыр аюы, құлан, сондай-ақ қызғылт фламинго, қарақұйрық. Мұнда көптеген сүтқоректілер (180-нен астам түрі), құстар (шамамен 500 түрі), бауырымен жорғалаушылар, қосмекенділер және балықтар мекендейді, ал өсімдіктер әлеміне сексеуіл, арша, қарағай, қайың және көптеген дала шөптері мен гүлдері кіреді, бұл биоәртүрліліктің байлығын көрсетеді.',
			ru: 'Благодаря обширным природным территориям, регион отличается невероятным биоразнообразием: от степей и пустынь до Тянь-Шаня и Алтая, где обитают уникальные виды, многие из которых занесены в Красную книгу, такие как снежный леопард, тяньшаньский бурый медведь, кулан, а также розовые фламинго и газели. Здесь обитает множество млекопитающих (более 180 видов), птиц (около 500 видов), рептилий, амфибий и рыб, а растительность включает саксаул, можжевельник, сосну, березу и множество степных трав и цветов, что отражает богатство биоразнообразия.',
			en: 'is extremely diverse due to its large natural areas: from steppes and deserts to the Tien Shan and Altai Mountains, where there are unique species, many of which are in the Red Book, such as the snow leopard (snow leopard), Tianshan brown bear, kulan, as well as pink flamingos, gazelles. It is home to many mammals (more than 180 species), birds (about 500 species), reptiles, amphibians and fish, and vegetation includes saxaul, juniper, pine, birch and many steppe grasses and flowers, reflecting the richness of biodiversity.',
		},
		alt: 'flora-and-fauna',
		width: 1793,
		height: 888,
	},
	{
		id: 3,
		image: '/imgs/flora-and-fauna.png',
		title: {
			kk: 'Қазақстанның флорасы мен фаунасы 3',
			ru: 'Флора и фауна Казахстана 3',
			en: 'The flora and fauna of Kazakhstan 3',
		},
		description: {
			kk: 'Табиғи аумақтарының үлкендігіне байланысты өте алуан түрлі: далалар мен шөлдерден бастап Тянь-Шань мен Алтай тауларына дейін, онда ерекше түрлер бар, олардың көпшілігі Қызыл кітапқа енгізілген, мысалы, қар барысы (қар барысы), Тянь-Шань қоңыр аюы, құлан, сондай-ақ қызғылт фламинго, қарақұйрық. Мұнда көптеген сүтқоректілер (180-нен астам түрі), құстар (шамамен 500 түрі), бауырымен жорғалаушылар, қосмекенділер және балықтар мекендейді, ал өсімдіктер әлеміне сексеуіл, арша, қарағай, қайың және көптеген дала шөптері мен гүлдері кіреді, бұл биоәртүрліліктің байлығын көрсетеді.',
			ru: 'Благодаря обширным природным территориям, регион отличается невероятным биоразнообразием: от степей и пустынь до Тянь-Шаня и Алтая, где обитают уникальные виды, многие из которых занесены в Красную книгу, такие как снежный леопард, тяньшаньский бурый медведь, кулан, а также розовые фламинго и газели. Здесь обитает множество млекопитающих (более 180 видов), птиц (около 500 видов), рептилий, амфибий и рыб, а растительность включает саксаул, можжевельник, сосну, березу и множество степных трав и цветов, что отражает богатство биоразнообразия.',
			en: 'is extremely diverse due to its large natural areas: from steppes and deserts to the Tien Shan and Altai Mountains, where there are unique species, many of which are in the Red Book, such as the snow leopard (snow leopard), Tianshan brown bear, kulan, as well as pink flamingos, gazelles. It is home to many mammals (more than 180 species), birds (about 500 species), reptiles, amphibians and fish, and vegetation includes saxaul, juniper, pine, birch and many steppe grasses and flowers, reflecting the richness of biodiversity.',
		},
		alt: 'flora-and-fauna',
		width: 1793,
		height: 888,
	},
]

export function FloraAndFauna() {
	const locale = useLocale() as Locale

	const [activeSlide, setActiveSlide] = useState(0)

	const slide = SLIDES[activeSlide]
	const localizedTitle = localize(slide.title, locale, '')
	const localizedDescription = localize(slide.description, locale, '')

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	return (
		<>
			<section
				id="flora-and-fauna"
				className="relative mt-[50px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]"
			>
				<Container className="overflow-visible">
					<div className="relative w-full">
						<Swiper
							modules={[Navigation]}
							slidesPerView={1}
							spaceBetween={30}
							className="h-[888px] w-full overflow-visible"
							navigation={{
								nextEl: '#flora-and-fauna-swiper-button-next',
								prevEl: '#flora-and-fauna-swiper-button-prev',
							}}
							onSwiper={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
								setActiveSlide(swiper.activeIndex)
							}}
							onSlideChange={(swiper) => {
								setIsBeginning(swiper.isBeginning)
								setIsEnd(swiper.isEnd)
								setActiveSlide(swiper.activeIndex)
							}}
						>
							{SLIDES.map((slide) => (
								<SwiperSlide
									key={slide.id}
									className="h-[888px] overflow-hidden"
								>
									<Image
										src={slide.image}
										alt={slide.alt}
										width={slide.width}
										height={slide.height}
										className="block h-full w-full object-cover"
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="absolute bottom-0 left-0 z-1 flex flex-col items-start justify-end p-[50px]">
							<div className="mb-[50px]">
								<div id="flora-and-fauna-swiper-button-prev">
									{isBeginning ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none mb-[10px] box-border h-[45px] w-[82px] cursor-default py-[12px]"
										>
											<IconArrowHead className="text-muted rotate-180 transform" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="mb-[10px] h-[45px] w-[82px] py-[12px]"
										>
											<IconArrowHead className="rotate-180 transform" />
										</ButtonDefault>
									)}
								</div>

								<div id="flora-and-fauna-swiper-button-next">
									{isEnd ? (
										<ButtonOutlined
											icon={false}
											className="text-muted pointer-events-none box-border h-[45px] w-[82px] cursor-default py-[12px]"
										>
											<IconArrowHead className="text-muted" />
										</ButtonOutlined>
									) : (
										<ButtonDefault
											icon={false}
											className="h-[45px] w-[82px] py-[12px]"
										>
											<IconArrowHead />
										</ButtonDefault>
									)}
								</div>
							</div>
							<div>
								<h3 className="mb-[30px] text-[32px] leading-normal font-bold text-white">{localizedTitle}</h3>
								<p className="max-w-[860px] text-[16px] leading-normal font-normal text-white">{localizedDescription}</p>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
