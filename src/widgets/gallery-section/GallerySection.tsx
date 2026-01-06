'use client'

import { useMemo, useRef, useState } from 'react'

import { GalleryCard } from '@/entities/gallery/GalleryItem'
import { galleryDaysMock } from '@/entities/gallery/mocks'
import { Locale } from '@/shared/config/i18n'
import { useFancybox } from '@/shared/lib/fancybox/useFancybox'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

const sizes = ['col-span-5', 'col-span-4', 'col-span-3', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-5', 'col-span-3', 'col-span-4']

type GalleryTabButtonProps = {
	day: (typeof galleryDaysMock)[0]
	isActive: boolean
	locale: Locale
	onClick: () => void
	delay: number
}

function GalleryTabButton({ day, isActive, locale, onClick, delay }: GalleryTabButtonProps) {
	const ref = useRef<HTMLButtonElement>(null)
	useAnimSlide(ref, { y: 50, delay })

	return (
		<button
			ref={ref}
			onClick={onClick}
			className={[
				'p-[12px] md:p-[14px] lg:p-[18px] xl:p-[20px] 2xl:p-[26px]',
				'box-border flex items-center justify-center gap-[10px]',
				'rounded-[12px]',
				'cursor-pointer',
				'transition-all duration-300 ease-out',
				'text-[16px] leading-none font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]',
				'translate-y-[50px] opacity-0',
				// ACTIVE
				isActive
					? 'bg-primary-dark text-white'
					: [
							// 🔑 ГРАДИЕНТНЫЙ БОРДЕР
							'text-muted hover:bg-primary-dark border-muted border hover:text-white',
							'shadow-[-1px_0_0_0.5px_rgba(255,255,255,0.15),0_8px_24px_rgba(255,255,255,0.08)]',
						].join(' '),
			].join(' ')}
		>
			{day.label[locale]}
		</button>
	)
}

type GalleryItemWrapperProps = {
	item: (typeof galleryDaysMock)[0]['items'][0]
	locale: Locale
	size: string
	delay: number
}

function GalleryItemWrapper({ item, locale, size, delay }: GalleryItemWrapperProps) {
	const ref = useRef<HTMLAnchorElement>(null)
	useAnimSlide(ref, { y: 50, delay })
	// Map size classes for different breakpoints
	const sizeClasses: Record<string, string> = {
		'col-span-3': 'lg:col-span-3',
		'col-span-4': 'lg:col-span-4',
		'col-span-5': 'lg:col-span-5',
	}

	const responsiveSize = sizeClasses[size] || 'lg:col-span-4'

	return (
		<a
			ref={ref}
			data-fancybox="gallery"
			href={item.image}
			className={`col-span-1 sm:col-span-1 ${responsiveSize} translate-y-[50px] opacity-0`}
		>
			<GalleryCard
				src={item.image}
				title={item.title}
				description={item.description}
				alt={item.alt[locale]}
				onClick={() => {}}
			/>
		</a>
	)
}

export function GallerySection({ locale = 'ru' }: { locale?: Locale }) {
	const days = galleryDaysMock
	const [activeKey, setActiveKey] = useState(days[0]?.key)

	const activeDay = useMemo(() => days.find((d) => d.key === activeKey) ?? days[0], [activeKey, days])

	useFancybox({
		rootSelector: '#gallery',
	})
	if (!activeDay) return null

	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container>
				<div className="mb-[30px] flex flex-wrap items-center justify-center gap-[10px] md:mb-[40px] md:gap-[20px] lg:mb-[50px] lg:gap-[27px]">
					{days.map((d, index) => (
						<GalleryTabButton
							key={d.key}
							day={d}
							isActive={d.key === activeDay.key}
							locale={locale}
							onClick={() => setActiveKey(d.key)}
							delay={0.1 + index * 0.05}
						/>
					))}
				</div>

				{/* Grid */}
				<div
					id="gallery"
					className="mx-auto grid auto-rows-[200px] grid-cols-1 gap-[20px] sm:auto-rows-[250px] sm:grid-cols-2 sm:gap-[30px] md:auto-rows-[300px] md:gap-[40px] lg:auto-rows-[350px] lg:grid-cols-12 lg:gap-[50px] xl:auto-rows-[415px] xl:gap-[60px]"
				>
					{activeDay.items.map((item, inx) => {
						const size = sizes[inx % 9]
						return (
							<GalleryItemWrapper
								key={item.id}
								item={item}
								locale={locale}
								size={size}
								delay={0.2 + inx * 0.05}
							/>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
