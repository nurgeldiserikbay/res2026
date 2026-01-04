import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { NewsShortItem } from '@/entities/news/NewsShortItem'
import { Container } from '@/shared/ui/container/container'
import { newsPaginItems } from '@/widgets/news/mocks'

export default function Page() {
	const t = useTranslations()

	return (
		<>
			<section className="bg-secondary h-[343px] bg-[url('/imgs/news-banner.png')] bg-cover bg-center bg-no-repeat pt-[176px]">
				<Container>
					<h1 className="mb-[30px] text-center text-[48px] leading-none font-bold text-white">{t('titles.news')}</h1>
					<Breadcrumbs
						breadcrumbs={[
							{ label: t('titles.news'), href: '/news' },
							{ label: t('titles.news'), href: '/news/slug' },
						]}
					/>
				</Container>
			</section>

			<section className="bg-white pt-[100px]">
				<Container className="flex items-start justify-between gap-[54px]">
					<div className="max-w-[1332px] grow">
						<h2 className="text-text mb-[50px] max-w-[1214px] text-[48px] leading-none font-normal">
							<strong>Центральная Азия объединяет усилия</strong> для достижения глобальной цели климатического финансирования
						</h2>
						<div className="mb-[10px] text-[13px] leading-none font-light text-[#777C83]">26 декабря 2026</div>
						<div className="mb-[50px] text-[13px] leading-none font-light text-[#777C83]">\\Экология и окружаящая среда</div>

						<Image
							src="/imgs/news-item-banner.png"
							alt="news"
							width={1332}
							height={613}
							className="mb-[50px] block aspect-[2.17] w-full rounded-[12px] object-cover"
						/>

						<p className="text-text mb-[60px] text-[24px] leading-normal font-normal">
							В Ашхабаде проводится 7-я Центрально-Азиатская конференция по вопросам изменения климата (ЦАКИК-2025). В рамках конференции 14
							мая 2025 года Министерством экологии и природных ресурсов Казахстана совместно с Проектным офисом для Центральной Азии по
							изменению климата и зеленой энергетики проведена третья региональная консультация по подготовке к Региональному климатическому
							саммиту в 2026 году.
						</p>

						<p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">
							{`Мероприятие собрало представителей государственных органов из стран Центральной Азии, международных организаций, научного сообщества и гражданского сектора. Консультация прошла под темой: «Климатические риски в Центральной Азии: механизмы оценки и реагирования» и стала очередным важным этапом в формировании регионального подхода к адаптации и устойчивому развитию.\n\n\n С приветственным словом на открытии выступил вице-министр экологии и природных ресурсов Республики Казахстан г-н Мансур Ошурбаев. Также участников приветствовал депутат Мажилиса Парламента Республики Казахстан г-н Еділ Жаңбыршин. Представителем Проектного офиса было представлено видение по проведению Саммита, а также итоги первой и второй консультации.\n\n Особое внимание было уделено презентации Потсдамского института исследований воздействия на климат (PIK), представившего научный анализ климатических рисков в регионе.`}
						</p>
					</div>

					<div className="w-[405px]">
						<h2 className="text-text mb-[50px] text-[48px] leading-none font-bold">{t('titles.otherNews')}</h2>

						<div>
							{newsPaginItems.slice(0, 5).map((item, index) => (
								<div
									key={index}
									className="mb-[10px] w-full last:mb-0"
								>
									<NewsShortItem {...item} />
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
