'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

export function SingleNationalBanner({ title, items }: { title: string; items: { id: number; title: string; text: string }[] }) {
	const SectionRef = useRef<HTMLElement>(null)
	const TitleRef = useRef<HTMLHeadingElement>(null)
	const ItemsGridRef = useRef<HTMLDivElement>(null)

	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })

	useGSAP(
		() => {
			if (!ItemsGridRef.current) return

			const itemElements = ItemsGridRef.current.querySelectorAll('div > div')
			itemElements.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.2 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: SectionRef.current,
							start: 'top 80%',
							once: true,
						},
					},
				)
			})
		},
		{ scope: SectionRef },
	)

	return (
		<section
			ref={SectionRef}
			className="bg-white pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px]"
		>
			<Container>
				<h2
					ref={TitleRef}
					className="mb-[30px] translate-y-[50px] text-[32px] leading-normal font-bold text-text opacity-0 lg:mb-[50px]"
				>
					{title}
				</h2>

				<div
					ref={ItemsGridRef}
					className="grid grid-cols-1 gap-x-[60px] gap-y-[30px] lg:grid-cols-2"
				>
					{items.map((item) => (
						<div
							key={item.id}
							className="flex min-h-[430px] translate-y-[50px] flex-col items-center justify-center rounded-[12px] bg-[url(/imgs/trees.webp)] bg-cover bg-center bg-no-repeat px-[28px] py-[40px] opacity-0 md:min-h-[364px]"
						>
							<h5 className="mb-[10px] max-w-[600px] text-center text-[22px] leading-normal font-bold text-white md:text-[24px] lg:text-[36px]">
								{item.title}
							</h5>
							<p className="mx-auto max-w-[496px] text-center text-[16px] leading-normal font-normal text-white">{item.text}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}
