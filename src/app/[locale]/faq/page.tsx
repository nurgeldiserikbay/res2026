'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { useRef } from 'react'

import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Accordion } from '@/shared/ui/accordion/Accordion'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { FAQ_MOCK } from '@/widgets/faqs/model'
import { FaqBlockData } from '@/widgets/faqs/types'

type FaqItemWrapperProps = {
	item: FaqBlockData['items'][0]
	delay: number
}

function FaqItemWrapper({ item, delay }: FaqItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 50, delay })

	return (
		<div
			ref={ref}
			className="mb-[30px] translate-y-[50px] opacity-0 last:mb-0"
		>
			<Accordion title={item.question}>{item.answer}</Accordion>
		</div>
	)
}

export default function Page() {
	const locale = useLocale()

	const imageRef = useRef<HTMLDivElement>(null)
	const faqContainerRef = useRef<HTMLDivElement>(null)

	useAnimSlide(imageRef, { y: 50, delay: 0.1 })
	useAnimSlide(faqContainerRef, { y: 50, delay: 0.15 })

	const faqData: FaqBlockData = {
		items: FAQ_MOCK.items.map((item) => ({
			id: item.id,
			question: item.question[locale as keyof typeof item.question],
			answer: item.answer[locale as keyof typeof item.answer],
		})),
	}

	return (
		<>
			<PageBanner
				title="FAQ"
				breadcrumbs={[{ label: 'FAQ', href: '/faq' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container className="flex items-start justify-between gap-[30px]">
					<div
						ref={imageRef}
						className="hidden max-w-[560px] translate-y-[50px] opacity-0 md:block"
					>
						<Image
							src="/imgs/faq.png"
							alt="FAQ"
							width={560}
							height={797}
							className="block w-full rounded-[12px]"
						/>
					</div>
					<div
						ref={faqContainerRef}
						className="w-full max-w-[1179px] translate-y-[50px] opacity-0"
					>
						{faqData.items.map((item, index) => (
							<FaqItemWrapper
								key={item.id}
								item={item}
								delay={0.2 + index * 0.05}
							/>
						))}
					</div>
				</Container>
			</section>
		</>
	)
}
