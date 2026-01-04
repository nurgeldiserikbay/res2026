'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import { IconVideoSquare } from '@/shared/icons/IconVideoSquare'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import { programSchedule } from '../mocks'

export function Programms() {
	const t = useTranslations()
	const [activeProgram, setActiveProgram] = useState<string | null>(programSchedule[0].id)

	const program = programSchedule.find((program) => program.id === activeProgram)

	const handleProgramClick = (programId: string) => {
		setActiveProgram(programId)
	}

	// Refs for animations
	const titleRef = useRef<HTMLHeadingElement>(null)
	const textRef = useRef<HTMLDivElement>(null)
	const aprilRef = useRef<HTMLDivElement>(null)
	const datesContainerRef = useRef<HTMLDivElement>(null)
	const programsContainerRef = useRef<HTMLDivElement>(null)

	// Animations
	useAnimSlide(titleRef, { x: -90, y: 0, delay: 0.1 })
	useAnimSlide(textRef, { x: 90, y: 0, delay: 0.2 })

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
		<section className="relative bg-[#2E8656] bg-linear-to-b from-[#589668] to-[#41754F] pt-[57px] pb-[85px] before:pointer-events-none before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-0 before:bg-black/20 before:bg-[url('/imgs/programms-bg.png')] before:bg-cover before:bg-center before:bg-no-repeat md:pt-[75px] md:pb-[85px] xl:pt-[100px] xl:pb-[140px]">
			<Container>
				<div className="mb-[30px] flex items-start justify-between gap-8 md:mb-[40px] xl:mb-[50px] 2xl:mb-[70px]">
					<div className="max-w-[626px] grow">
						<h2
							ref={titleRef}
							className="mb-[30px] translate-x-[-90px] text-[32px] leading-[1.2] font-bold text-white opacity-0 md:text-[34px] lg:text-[38px] xl:mb-[50px] xl:text-[42px] 2xl:text-[48px]"
						>
							{t('pages.programms.title')}
						</h2>
						<div className="3xl:text-[24px] mb-[50px] max-w-[820px] grow text-left text-[20px] leading-normal text-white lg:hidden 2xl:text-[22px]">
							{t('pages.programms.text')}
						</div>

						<div className="flex flex-wrap items-center justify-start gap-x-[40px] gap-y-[20px] sm:flex-nowrap">
							<div
								ref={aprilRef}
								className="translate-x-[-90px] text-[20px] font-light text-white opacity-0 lg:text-[22px] 2xl:text-[24px]"
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
															'hover:bg-primary-dark/50 border border-transparent',
															'shadow-[-1px_0_0_0.5px_rgba(255,255,255,0.15),0_8px_24px_rgba(255,255,255,0.08)]',
														].join(' '),
											].join(' ')}
										>
											<span className="text-[12px] font-light text-white">{t(`days.short.${new Date(program.date).getDay()}`)}</span>

											<span className="text-[24px] font-bold text-white">{new Date(program.date).getDate()}</span>
										</button>
									)
								})}
							</div>
						</div>
					</div>

					<div
						ref={textRef}
						className="3xl:text-[24px] hidden max-w-[820px] grow translate-x-[90px] text-left text-[20px] leading-normal text-white opacity-0 lg:block 2xl:text-[22px]"
					>
						{t('pages.programms.text')}
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
										className="text-text h-[36px] w-[138px] shrink-0 translate-x-[-90px] rounded-[12px] bg-white py-[10px] text-center align-top text-[16px] leading-none opacity-0"
									>
										{programItem.time}
									</div>

									<div
										data-block
										className={[
											'xs:px-[40px] relative flex max-w-[1607px] grow flex-wrap items-center justify-between gap-x-[20px] gap-y-[10px] rounded-[12px] px-[20px] py-[21px] shadow-[-1px_0_0_0.5px_rgba(255,255,255,0.15)] md:flex-nowrap lg:flex-nowrap',
											'translate-x-[-90px] opacity-0',
										].join(' ')}
									>
										<div>
											<h3 className="xs:text-[24px] text-[20px] leading-none font-bold text-white md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
												{programItem.title}
											</h3>
											{programItem.points?.length && (
												<ul className="mt-[10px] list-inside list-disc pl-2 text-[16px] leading-normal text-white">
													{programItem.points?.map((point) => {
														return <li key={point}>{point}</li>
													})}
												</ul>
											)}
										</div>
										{programItem.live && (
											<div
												data-live
												className="flex translate-x-[-90px] items-center justify-center gap-[10px] rounded-[8px] bg-white/10 px-[16px] py-[20px] text-[16px] font-bold text-white opacity-0"
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
						<div className="text-[24px] font-light text-white">{t(`messages.noPrograms`)}</div>
					)}
				</div>
			</Container>
		</section>
	)
}
