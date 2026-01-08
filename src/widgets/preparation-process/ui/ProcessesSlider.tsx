import { useLocale } from 'next-intl'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { localizePreparationProcessMocks, preparationProcessMocks } from '@/entities/preparation-process/mocks'
import { PrepareProcess } from '@/entities/preparation-process/PrepareProces'
import { Locale } from '@/shared/config/i18n'
import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'
import { Container } from '@/shared/ui/container/container'

export function ProcessesSlider() {
	const locale = useLocale() as Locale

	const [activeIndex, setActiveIndex] = useState(0)

	const data = localizePreparationProcessMocks(preparationProcessMocks, locale)

	const activeProcessTab = data[activeIndex]

	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const [activeSlide, setActiveSlide] = useState(0)

	return (
		<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
			<Container>
				<div className="relative mb-[37px]">
					<div className="flex items-center justify-start gap-[35px]">
						{data.map((processTab, processTabIndex) => (
							<button
								key={processTab.id}
								className="relative cursor-pointer pb-[37px]"
								onClick={() => setActiveIndex(processTabIndex)}
							>
								<div
									key={processTab.id}
									className={[
										`rounded-[12px] bg-linear-to-r p-[2px] transition-all duration-300`,
										activeIndex >= processTabIndex ? 'from-[#02493F] to-[#02493F]' : 'from-[#02493F] to-[#FFFFFF00]',
									].join(` `)}
								>
									<div
										className={[
											`rounded-[12px] p-[16px] text-[16px] leading-none font-normal transition-all duration-300`,
											activeIndex >= processTabIndex ? 'bg-[#02493F] text-white' : 'bg-white text-[#02493F]',
										].join(` `)}
									>
										{processTab.date}
									</div>
								</div>
								<div
									className={[
										`absolute bottom-0 left-1/2 box-border h-[16px] w-[16px] -translate-x-1/2 translate-y-[9px] transform rounded-full border border-solid border-[#02493F] transition-all duration-300`,
										activeIndex >= processTabIndex ? 'bg-[#02493F]' : 'bg-white',
									].join(` `)}
								></div>
							</button>
						))}
					</div>
					<div className="h-[2px] w-full bg-linear-to-r from-[#41754F] to-[#FFFFFF]"></div>
				</div>
				<div className="w-full">
					{activeProcessTab ? (
						<>
							<Swiper
								modules={[Navigation]}
								slidesPerView={1}
								spaceBetween={10}
								className="h-[482px] w-full overflow-visible rounded-[12px]"
								navigation={{
									nextEl: '#preparation-process-swiper-button-next',
									prevEl: '#preparation-process-swiper-button-prev',
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
								{activeProcessTab.items.map((processItem) => (
									<SwiperSlide
										key={processItem.id}
										className="h-[482px] overflow-hidden rounded-[12px]"
									>
										<PrepareProcess {...processItem} />
									</SwiperSlide>
								))}
							</Swiper>
							{activeProcessTab.items?.length > 1 && (
								<div className="mt-[30px] flex items-center justify-start gap-[20px]">
									<div className="flex items-center justify-start gap-[10px]">
										<div id="preparation-process-swiper-button-prev">
											{isBeginning ? (
												<ButtonOutlined
													icon={false}
													className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default p-[8px]!"
												>
													<IconArrowHead className="text-muted rotate-180 transform" />
												</ButtonOutlined>
											) : (
												<ButtonDefault
													icon={false}
													className="h-[45px] w-[36px] p-[8px]!"
												>
													<IconArrowHead className="rotate-180 transform" />
												</ButtonDefault>
											)}
										</div>

										<div id="preparation-process-swiper-button-next">
											{isEnd ? (
												<ButtonOutlined
													icon={false}
													className="text-muted pointer-events-none box-border h-[45px] w-[36px] cursor-default p-[8px]!"
												>
													<IconArrowHead className="text-muted" />
												</ButtonOutlined>
											) : (
												<ButtonDefault
													icon={false}
													className="h-[45px] w-[36px] p-[8px]!"
												>
													<IconArrowHead />
												</ButtonDefault>
											)}
										</div>
									</div>
									<div className="text-muted-light text-[24px] leading-normal font-normal">
										<span className="text-[24px] leading-normal font-normal text-[#02493F]">{activeSlide + 1}</span>
										<span>/</span>
										<span className="font-normal] text-[16px] leading-normal">{activeProcessTab.items?.length}</span>
									</div>
								</div>
							)}
						</>
					) : (
						<></>
					)}
				</div>
			</Container>
		</section>
	)
}
