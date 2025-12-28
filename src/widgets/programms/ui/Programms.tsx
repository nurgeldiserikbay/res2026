'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { IconVideoSquare } from '@/shared/icons/IconVideoSquare'
import { Container } from '@/shared/ui/container/container'

import { programSchedule } from '../mocks'

export function Programms() {
	const t = useTranslations()
	const [activeProgram, setActiveProgram] = useState<string | null>(programSchedule[0].id)

	const program = programSchedule.find((program) => program.id === activeProgram)

	const handleProgramClick = (programId: string) => {
		setActiveProgram(programId)
	}

	return (
		<section className="relative bg-[#2E8656] bg-linear-to-b from-[#589668] to-[#41754F] pt-[100px] pb-[140px] before:pointer-events-none before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-0 before:bg-black/20 before:bg-[url('/imgs/programms-bg.png')] before:bg-cover before:bg-center before:bg-no-repeat">
			<Container>
				<div className="mb-[70px] flex items-start justify-between">
					<div className="max-w-[626px] grow">
						<h2 className="mb-[50px] text-[48px] leading-[1.2] font-bold text-white">{t('pages.programms.title')}</h2>

						<div className="flex items-center justify-start gap-[40px]">
							<div className="text-[24px] font-light text-white">{'Апрель'}</div>

							<div className="flex items-center justify-between gap-[27px]">
								{programSchedule.map((program) => {
									return (
										<button
											key={program.id}
											onClick={() => handleProgramClick(program.id)}
											className={[
												'h-[76px] w-[105px]',
												'flex items-center justify-center gap-[10px]',
												'rounded-[12px]',
												'cursor-pointer',
												'transition-all duration-300 ease-out',

												// ACTIVE
												activeProgram === program.id
													? 'bg-primary-dark'
													: [
															// 🔑 ГРАДИЕНТНЫЙ БОРДЕР
															'border border-transparent',
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

					<div className="max-w-[820px] grow text-left text-[24px] leading-normal text-white">{t('pages.programms.text')}</div>
				</div>

				<div className="flex h-[674px] w-full flex-col items-stretch gap-[10px] overflow-y-auto py-1">
					{program && program.programs?.length ? (
						program.programs.map((programItem) => {
							return (
								<div
									key={programItem.id}
									className="relative flex items-start justify-between gap-[20px]"
								>
									<div className="text-text h-[36px] w-[138px] rounded-[12px] bg-white py-[10px] text-center align-top text-[16px] leading-none">
										{programItem.time}
									</div>

									<div
										className={[
											'relative flex max-w-[1607px] grow items-center justify-between gap-[20px] rounded-[12px] px-[40px] py-[21px] shadow-[-1px_0_0_0.5px_rgba(255,255,255,0.15)]',
										].join(' ')}
									>
										<div>
											<h3 className="text-[32px] leading-none font-bold text-white">{programItem.title}</h3>
											{programItem.points?.length && (
												<ul className="mt-[10px] list-inside list-disc pl-2 text-[16px] leading-normal text-white">
													{programItem.points?.map((point) => {
														return <li key={point}>{point}</li>
													})}
												</ul>
											)}
										</div>
										{programItem.live && (
											<div className="flex items-center justify-center gap-[10px] rounded-[8px] bg-white/10 px-[16px] py-[20px] text-[16px] font-bold text-white">
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
