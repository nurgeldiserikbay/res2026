import { useLocale } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { localizePreparationProcessMocks, preparationProcessMocks } from '@/entities/preparation-process/mocks'
import { PrepareProcess } from '@/entities/preparation-process/PrepareProces'
import { Locale } from '@/shared/config/i18n'
import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { IconArrRight } from '@/shared/icons/IconArrRight'
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

	const tabsContainerRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)
	const hasMovedRef = useRef(false)
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!tabsContainerRef.current) return
		setIsDragging(true)
		hasMovedRef.current = false
		setStartX(e.pageX - tabsContainerRef.current.offsetLeft)
		setScrollLeft(tabsContainerRef.current.scrollLeft)
	}

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging || !tabsContainerRef.current) return
		e.preventDefault()
		hasMovedRef.current = true
		const x = e.pageX - tabsContainerRef.current.offsetLeft
		const walk = (x - startX) * 2
		tabsContainerRef.current.scrollLeft = scrollLeft - walk
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	const handleMouseLeave = () => {
		setIsDragging(false)
	}

	const handleTabClick = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
		if (hasMovedRef.current) {
			e.preventDefault()
			e.stopPropagation()
			hasMovedRef.current = false
			return
		}
		setActiveIndex(index)
	}

	const checkScrollability = () => {
		if (!tabsContainerRef.current) return
		const container = tabsContainerRef.current
		setCanScrollLeft(container.scrollLeft > 0)
		setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1)
	}

	useEffect(() => {
		checkScrollability()
		const container = tabsContainerRef.current
		if (!container) return

		const handleScroll = () => {
			checkScrollability()
		}

		const handleResize = () => {
			checkScrollability()
		}

		container.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleResize)

		return () => {
			container.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleResize)
		}
	}, [data])

	const handleScrollLeft = () => {
		if (!tabsContainerRef.current || !canScrollLeft) return
		tabsContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
		setTimeout(() => checkScrollability(), 100)
	}

	const handleScrollRight = () => {
		if (!tabsContainerRef.current || !canScrollRight) return
		tabsContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
		setTimeout(() => checkScrollability(), 100)
	}

	return (
		<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
			<Container>
				<div className="relative">
					<div
						ref={tabsContainerRef}
						className={`scrollbar-hide relative z-1 flex items-stretch justify-start gap-[35px] overflow-x-scroll pt-[10px] ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseLeave}
					>
						{data.map((processTab, processTabIndex) => (
							<button
								key={processTab.id}
								className="relative h-full min-w-[143px] shrink-0 cursor-pointer pb-[45px] whitespace-nowrap"
								onClick={(e) => handleTabClick(processTabIndex, e)}
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
										`absolute bottom-0 left-1/2 box-border h-[16px] w-[16px] -translate-x-1/2 transform rounded-full border border-solid border-[#02493F] transition-all duration-300`,
										activeIndex >= processTabIndex ? 'bg-[#02493F]' : 'bg-white',
									].join(` `)}
								></div>
							</button>
						))}
					</div>
					<div className="absolute right-0 bottom-[8px] left-0 h-[2px] w-full bg-linear-to-r from-[#41754F] to-[#FFFFFF]"></div>
				</div>
				<div className="mb-[37px] flex items-center justify-between gap-[19.5px] pt-[20px]">
					<button
						onClick={handleScrollLeft}
						disabled={!canScrollLeft}
						className={[
							`flex h-[46px] w-[40px] items-center justify-center`,
							canScrollLeft ? 'cursor-pointer' : 'cursor-not-allowed opacity-50',
						].join(` `)}
					>
						<IconArrRight
							className="rotate-180 transform"
							color={canScrollLeft ? '#41754F' : '#BFC6CE'}
							style={{ textDecoration: 'inherit' }}
						/>
					</button>
					<div className="h-[2px] grow bg-[#F4FFF7]"></div>
					<button
						onClick={handleScrollRight}
						disabled={!canScrollRight}
						className={[
							`flex h-[46px] w-[40px] items-center justify-center`,
							canScrollRight ? 'cursor-pointer' : 'cursor-not-allowed opacity-50',
						].join(` `)}
					>
						<IconArrRight
							color={canScrollRight ? '#41754F' : '#BFC6CE'}
							style={{ textDecoration: 'inherit' }}
						/>
					</button>
				</div>
				<div className="w-full">
					{activeProcessTab ? (
						<>
							<Swiper
								key={activeIndex}
								modules={[Navigation]}
								slidesPerView={1}
								spaceBetween={10}
								className="w-full overflow-visible rounded-[12px]"
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
										className="overflow-hidden rounded-[12px]"
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
