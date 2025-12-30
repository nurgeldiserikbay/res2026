'use client'

import { useMemo, useState } from 'react'

import { GalleryCard } from '@/entities/gallery/GalleryItem'
import { galleryDaysMock } from '@/entities/gallery/mocks'
import { Locale } from '@/shared/config/i18n'
import { useFancybox } from '@/shared/lib/fancybox/useFancybox'
import { Container } from '@/shared/ui/container/container'

const sizes = ['col-span-5', 'col-span-4', 'col-span-3', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-5', 'col-span-3', 'col-span-4']

export function GallerySection({ locale = 'ru' }: { locale?: Locale }) {
	const days = galleryDaysMock
	const [activeKey, setActiveKey] = useState(days[0]?.key)

	const activeDay = useMemo(() => days.find((d) => d.key === activeKey) ?? days[0], [activeKey, days])

	useFancybox({
		rootSelector: '#gallery',
	})
	if (!activeDay) return null

	return (
		<section className="bg-white py-[100px]">
			<Container>
				<div className="mb-[50px] flex items-center justify-center gap-[27px]">
					{days.map((d) => {
						const isActive = d.key === activeDay.key
						return (
							<button
								key={d.key}
								onClick={() => setActiveKey(d.key)}
								className={[
									'p-[26]',
									'flex items-center justify-center gap-[10px]',
									'rounded-[12px]',
									'cursor-pointer',
									'transition-all duration-300 ease-out',
									'text-[24px] leading-none font-bold',
									// ACTIVE
									isActive
										? 'bg-primary-dark text-white'
										: [
												// 🔑 ГРАДИЕНТНЫЙ БОРДЕР
												'text-muted border-muted border-2',
												'shadow-[-1px_0_0_0.5px_rgba(255,255,255,0.15),0_8px_24px_rgba(255,255,255,0.08)]',
											].join(' '),
								].join(' ')}
							>
								{d.label[locale]}
							</button>
						)
					})}
				</div>

				{/* Grid */}
				<div
					id="gallery"
					className="mx-auto grid auto-rows-[415px] grid-cols-12 gap-[60px]"
				>
					{activeDay.items.map((item, inx) => {
						const size = sizes[inx % 9]
						return (
							<a
								data-fancybox="gallery"
								href={item.image}
								key={item.id}
								className={`${size}`}
							>
								<GalleryCard
									src={item.image}
									alt={item.alt[locale]}
									onClick={() => {}}
								/>
							</a>
						)
					})}
				</div>
			</Container>
		</section>
	)
}
