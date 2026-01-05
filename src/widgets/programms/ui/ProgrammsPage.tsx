'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import { Locale } from '@/shared/config/i18n'
import { IconArrowRight } from '@/shared/icons/IconArrowRight'
import { IconClose } from '@/shared/icons/IconClose'
import { IconVideoSquare } from '@/shared/icons/IconVideoSquare'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { ModalShell } from '@/shared/ui/modal/ModalShell'
import { localize, localizeArray } from '@/shared/utils/localize'

import { programSchedule } from '../mocks'

export function ProgrammsPage() {
	const t = useTranslations()
	const locale = useLocale() as Locale
	const [activeProgram, setActiveProgram] = useState<string | null>(programSchedule[0].id)

	const program = programSchedule.find((program) => program.id === activeProgram)

	const handleProgramClick = (programId: string) => {
		setActiveProgram(programId)
	}

	const [selectedProgramItem, setSelectedProgramItem] = useState<string | null>(null)

	const handleSelectedProgramItemClick = (programItemId: string) => {
		setSelectedProgramItem(programItemId)
	}

	// Refs for animations
	const titleRef = useRef<HTMLHeadingElement>(null)
	const aprilRef = useRef<HTMLDivElement>(null)
	const datesContainerRef = useRef<HTMLDivElement>(null)
	const programsContainerRef = useRef<HTMLDivElement>(null)

	// Animations
	useAnimSlide(titleRef, { x: -90, y: 0, delay: 0.1 })

	// Animation for "Апрель" and dates
	useGSAP(
		() => {
			if (!aprilRef.current || !datesContainerRef.current) return

			// Animate "Апрель"
			gsap.fromTo(
				aprilRef.current,
				{ x: -90, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3,
					ease: 'circ.out',
					scrollTrigger: {
						trigger: aprilRef.current,
						start: 'top 80%',
					},
				},
			)

			// Animate dates buttons one by one
			const dateButtons = datesContainerRef.current.querySelectorAll('button')
			dateButtons.forEach((button, index) => {
				gsap.fromTo(
					button,
					{ x: -90, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 1,
						delay: 0.4 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: datesContainerRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ dependencies: [activeProgram], revertOnUpdate: true },
	)

	// Animation for program items: time first, block second, Live icons parallel left to right
	useGSAP(
		() => {
			if (!programsContainerRef.current || !program) return

			const programItems = programsContainerRef.current.querySelectorAll('[data-program-item]')

			programItems.forEach((item, itemIndex) => {
				const timeElement = item.querySelector('[data-time]')
				const blockElement = item.querySelector('[data-block]')
				const liveElement = item.querySelector('[data-live]')

				// Animate time first
				if (timeElement) {
					gsap.fromTo(
						timeElement,
						{ x: -90, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 1,
							delay: 0.5 + itemIndex * 0.15,
							ease: 'circ.out',
							scrollTrigger: {
								trigger: programsContainerRef.current,
								start: 'top 80%',
							},
						},
					)
				}

				// Animate block second (with slight delay after time)
				if (blockElement) {
					gsap.fromTo(
						blockElement,
						{ x: -90, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 1,
							delay: 0.6 + itemIndex * 0.15,
							ease: 'circ.out',
							scrollTrigger: {
								trigger: programsContainerRef.current,
								start: 'top 80%',
							},
						},
					)
				}

				// Animate Live icon parallel (left to right) - starts at same time as block
				if (liveElement) {
					gsap.fromTo(
						liveElement,
						{ x: -90, opacity: 0 },
						{
							x: 0,
							opacity: 1,
							duration: 1,
							delay: 0.6 + itemIndex * 0.15,
							ease: 'circ.out',
							scrollTrigger: {
								trigger: programsContainerRef.current,
								start: 'top 80%',
							},
						},
					)
				}
			})
		},
		{ dependencies: [activeProgram, program], revertOnUpdate: true },
	)

	return (
		<section className="relative bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<h2
					ref={titleRef}
					className="text-text 3xl:text-[48px] mb-[30px] translate-x-[-90px] text-[32px] leading-[1.2] font-bold opacity-0 lg:mb-[50px] xl:text-[36px] 2xl:text-[44px]"
				>
					{t('pages.programms.title')}
				</h2>

				<div className="mb-[60px] flex flex-wrap items-center justify-start gap-x-[40px] gap-y-[20px] sm:flex-nowrap">
					<div
						ref={aprilRef}
						className="text-text translate-x-[-90px] text-[24px] font-light opacity-0"
					>
						{t('titles.april')}
					</div>

					<div
						ref={datesContainerRef}
						className="flex items-center justify-between gap-[10px] md:gap-[27px]"
					>
						{programSchedule.map((program) => {
							return (
								<button
									key={program.id}
									onClick={() => handleProgramClick(program.id)}
									className={[
										'h-[72px] w-[85px] md:w-[105px] lg:h-[76px]',
										'flex items-center justify-center gap-[10px]',
										'rounded-[12px]',
										'cursor-pointer',
										'transition-all duration-300 ease-out',
										'translate-x-[-90px] opacity-0',

										// ACTIVE
										activeProgram === program.id
											? 'bg-primary-dark'
											: [
													// 🔑 ГРАДИЕНТНЫЙ БОРДЕР
													'border-muted hover:bg-primary-dark border',
													'shadow-[-1px_0_0_0.5px_rgba(255,255,255,0.15),0_8px_24px_rgba(255,255,255,0.08)]',
												].join(' '),
									].join(' ')}
								>
									<span className="text-muted text-[12px] font-light">{t(`days.short.${new Date(program.date).getDay()}`)}</span>

									<span className="text-muted text-[24px] font-bold">{new Date(program.date).getDate()}</span>
								</button>
							)
						})}
					</div>
				</div>

				<div
					ref={programsContainerRef}
					className="flex w-full flex-col items-stretch gap-[30px] overflow-y-auto py-1 md:gap-[10px]"
				>
					{program && program.programs?.length ? (
						program.programs.map((programItem) => {
							return (
								<div
									key={programItem.id}
									data-program-item
									className="relative flex flex-wrap items-start justify-between gap-[20px] md:flex-nowrap"
								>
									<div
										data-time
										className="text-text bg-muted-light h-[36px] w-[138px] shrink-0 translate-x-[-90px] rounded-[12px] py-[10px] text-center align-top text-[16px] leading-none opacity-0"
									>
										{programItem.time}
									</div>

									<div
										data-block
										className={[
											`bg-primary-dark bg-[url('/imgs/programms-mask.png')] bg-cover bg-center bg-no-repeat`,
											'xs:px-[40px] relative flex max-w-[1607px] grow flex-wrap items-center justify-between gap-x-[20px] gap-y-[10px] rounded-[12px] px-[20px] py-[21px] md:flex-nowrap md:px-[40px] md:py-[37px] lg:flex-nowrap',
											'translate-x-[-90px] opacity-0',
										].join(' ')}
									>
										<div>
											<h3 className="xs:text-[24px] flex items-center justify-start gap-[10px] text-[20px] leading-none font-bold text-white md:justify-center md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
												{localize(programItem.title, locale)}{' '}
												<button onClick={() => handleSelectedProgramItemClick(programItem.id)}>
													<IconArrowRight className="text-muted size-[24px] md:size-[28px] lg:size-[32px]" />
												</button>
											</h3>
											{programItem.points?.length && (
												<ul className="mt-[10px] list-inside list-disc pl-2 text-[16px] leading-normal text-white">
													{localizeArray(programItem.points, locale).map((point, index) => {
														return <li key={index}>{point}</li>
													})}
												</ul>
											)}
										</div>
										{programItem.live && (
											<div
												data-live
												className="bg-secondary flex translate-x-[-90px] items-center justify-center gap-[10px] rounded-[8px] px-[16px] py-[20px] text-[16px] font-bold text-white opacity-0"
											>
												<div className="bg-muted-light flex h-[40px] w-[40px] items-center justify-center rounded-full">
													<IconVideoSquare className="text-text" />
												</div>
												<span>Live</span>
											</div>
										)}
									</div>
								</div>
							)
						})
					) : (
						<div className="text-text text-[24px] font-light">{t(`messages.noPrograms`)}</div>
					)}
				</div>
			</Container>

			<ProgrammsPageModal
				open={!!selectedProgramItem}
				onClose={() => setSelectedProgramItem(null)}
			/>
		</section>
	)
}

export function ProgrammsPageModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const ceremonyModalData = {
		id: 'ceremony-opening-2026',
		slug: 'events/ceremony-opening',

		title: {
			ru: 'Церемония открытия Regional Ecological Summit 2026',
			kz: 'Regional Ecological Summit 2026 ашылу салтанаты',
			en: 'Opening Ceremony — Regional Ecological Summit 2026',
		},

		meta: {
			dateLabel: {
				ru: 'Дата:',
				kz: 'Күні:',
				en: 'Date:',
			},
			dateValue: {
				ru: '15 апреля 2026 года',
				kz: '2026 жылғы 15 сәуір',
				en: 'April 15, 2026',
			},

			placeLabel: {
				ru: 'Место проведения:',
				kz: 'Өтетін орны:',
				en: 'Venue:',
			},
			placeValue: {
				ru: 'Главный зал Саммита, Центр международных конференций',
				kz: 'Саммиттің негізгі залы, Халықаралық конференциялар орталығы',
				en: 'Main Summit Hall, International Conference Center',
			},
		},

		cover: {
			src: '/imgs/modal-img.png',
			alt: {
				ru: 'Обложка церемонии открытия',
				kz: 'Ашылу салтанатының мұқабасы',
				en: 'Opening ceremony cover',
			},
		},

		about: {
			ru: 'Церемония открытия Регионального Экологического Саммита 2026 — это захватывающее начало важного события, которое соберет лидеров, экологов, ученых и активистов со всего мира для обсуждения актуальных вопросов устойчивого развития и охраны окружающей среды. В ходе церемонии будут представлены ключевые инициативы и цели саммита, а также заданы основные направления работы в течение всего мероприятия.',
			kz: 'Regional Ecological Summit 2026 ашылу салтанаты — тұрақты даму мен қоршаған ортаны қорғаудың өзекті мәселелерін талқылау үшін әлемнің түкпір-түкпірінен көшбасшыларды, экологтарды, ғалымдарды және белсенділерді біріктіретін маңызды іс-шараның әсерлі бастауы. Салтанат барысында саммиттің негізгі бастамалары мен мақсаттары таныстырылып, бүкіл іс-шараның жұмыс бағыттары айқындалады.',
			en: 'The opening ceremony of the Regional Ecological Summit 2026 marks an inspiring start to a major event bringing together leaders, environmental experts, scientists, and activists from around the world to discuss sustainable development and environmental protection. The ceremony introduces key initiatives and summit goals and sets the main directions for the event.',
		},

		programTitle: {
			ru: 'Программа церемонии:',
			kz: 'Салтанат бағдарламасы:',
			en: 'Ceremony program:',
		},

		program: [
			{
				time: '09:00 - 09:15',
				title: {
					ru: 'Приветственное слово',
					kz: 'Құттықтау сөзі',
					en: 'Welcome address',
				},
				description: {
					ru: 'Открытие саммита. Приветственное слово от Главного организатора саммита и официальных представителей региона.',
					kz: 'Саммиттің ашылуы. Саммиттің Бас ұйымдастырушысы мен өңірдің ресми өкілдерінің құттықтау сөзі.',
					en: 'Summit opening. Welcome remarks from the main organizer and official regional representatives.',
				},
				topicLabel: {
					ru: 'Тема:',
					kz: 'Тақырып:',
					en: 'Topic:',
				},
				topicText: {
					ru: '«Устойчивое будущее для каждого: шаги, которые мы делаем вместе».',
					kz: '«Әркім үшін тұрақты болашақ: біз бірге жасайтын қадамдар».',
					en: '“A sustainable future for everyone: steps we take together.”',
				},
			},

			{
				time: '09:15 - 09:40',
				title: {
					ru: 'Торжественная речь',
					kz: 'Салтанатты сөз',
					en: 'Ceremonial speech',
				},
				description: {
					ru: 'Вступительное слово от ведущих экологов и ученых региона, а также известных активистов, которые представят актуальные экологические вызовы и возможности для их решения.',
					kz: 'Өңірдің жетекші экологтары мен ғалымдарының, сондай-ақ белгілі белсенділердің кіріспе сөзі. Олар өзекті экологиялық сын-қатерлер мен оларды шешу мүмкіндіктерін ұсынады.',
					en: 'Opening remarks from leading environmental experts and scientists of the region, along with notable activists presenting current challenges and solution opportunities.',
				},
				topicLabel: {
					ru: 'Тема:',
					kz: 'Тақырып:',
					en: 'Topic:',
				},
				topicText: {
					ru: '«Инновации и решения для устойчивого развития на региональном уровне».',
					kz: '«Өңірлік деңгейдегі тұрақты даму үшін инновациялар мен шешімдер».',
					en: '“Innovations and solutions for sustainable development at the regional level.”',
				},
			},
		],
	}

	return (
		<ModalShell
			open={open}
			onClose={onClose}
			maxWidthClassName="max-w-[calc(100%-32px)] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[960px]"
			panelClassName="rounded-[12px] pt-[24px] pb-[50px] px-[16px] md:pt-[32px] md:pb-[100px] md:px-[40px] lg:pt-[44px] lg:pb-[150px] lg:px-[60px] xl:pb-[221px] xl:px-[78px] bg-primary-dark bg-[url('/imgs/modal-bg.png')] bg-cover bg-center bg-no-repeat"
		>
			<div>
				<button
					onClick={onClose}
					className="mb-[24px] md:mb-[32px] lg:mb-[48px]"
				>
					<IconClose className="size-[20px] text-white md:size-[22px] lg:size-[24px]" />
				</button>

				<h2 className="mb-[16px] text-[24px] leading-[1.2] font-bold text-white md:mb-[18px] md:text-[32px] lg:mb-[20px] lg:text-[40px] xl:text-[48px]">
					{ceremonyModalData.title.ru}
				</h2>

				<p className="mb-[8px] text-[14px] leading-[1.2] font-normal text-white/30 md:mb-[10px] md:text-[16px]">
					{ceremonyModalData.meta.dateLabel.ru + ' ' + ceremonyModalData.meta.dateValue.ru}
				</p>
				<p className="mb-[20px] text-[14px] leading-[1.2] font-normal text-white/30 md:mb-[24px] md:text-[16px] lg:mb-[30px]">
					{ceremonyModalData.meta.placeLabel.ru + ' ' + ceremonyModalData.meta.placeValue.ru}
				</p>

				<Image
					src={ceremonyModalData.cover.src}
					alt={ceremonyModalData.cover.alt.ru}
					width={960}
					height={540}
					className="mb-[20px] block w-full rounded-[12px] md:mb-[24px] lg:mb-[30px]"
				/>

				<p className="mb-[20px] text-[14px] leading-normal font-normal text-white md:mb-[24px] md:text-[16px] lg:mb-[30px]">
					{ceremonyModalData.about.ru}
				</p>

				<div>
					<h3 className="mb-[16px] text-[18px] leading-[1.2] font-bold text-white md:mb-[18px] md:text-[20px] lg:mb-[20px] lg:text-[24px]">
						{ceremonyModalData.programTitle.ru}
					</h3>
					{ceremonyModalData.program.map((item) => {
						return (
							<div
								key={item.time}
								className="mb-[20px] border-b border-white/10 pb-[20px] text-[14px] leading-[1.2] font-normal text-white last:mb-0 md:mb-[24px] md:pb-[24px] md:text-[16px] lg:mb-[30px] lg:pb-[30px]"
							>
								<div className="mb-[8px] flex flex-wrap items-center justify-start gap-[8px] md:mb-[10px] md:gap-[10px]">
									<div className="rounded-[90px] border border-solid border-white/20 px-[4px] py-[4px] text-[12px] leading-[1.2] font-normal text-white md:px-[6px] md:py-[6px] md:text-[14px]">
										{item.time}
									</div>
									<div className="text-[14px] leading-[1.2] font-bold text-white md:text-[16px]">{item.title.ru}</div>
								</div>
								<p className="text-[14px] leading-[1.2] font-normal text-white md:text-[16px]">{item.description.ru}</p>
								<p className="mt-[8px] text-[14px] leading-[1.2] font-normal text-white md:mt-[10px] md:text-[16px]">
									{item.topicLabel.ru + ' ' + item.topicText.ru}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</ModalShell>
	)
}
