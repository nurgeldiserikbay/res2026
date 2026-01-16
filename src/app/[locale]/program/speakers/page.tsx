'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Speaker } from '@/entities/speaker/Speaker'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { speakersPaginItems } from '@/widgets/speakers/mocks'

// Note: This is a client component, so metadata should be handled in a parent layout or separate metadata file

type SpeakersItemWrapperProps = {
	item: (typeof speakersPaginItems)[0]
	index: number
	delay: number
}

function SpeakersItemWrapper({ item, delay }: SpeakersItemWrapperProps) {
	const ref = useRef<HTMLDivElement>(null)
	useAnimSlide(ref, { y: 50, delay })

	return (
		<div
			ref={ref}
			className={`translate-y-[50px] opacity-0`}
		>
			<Speaker {...item} />
		</div>
	)
}

export default function Page() {
	const t = useTranslations()

	const PaginationRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PaginationRef, { y: 50, delay: 0.3 })

	return (
		<>
			<PageBanner
				title={t('titles.speakersPage')}
				breadcrumbs={[{ label: t('titles.speakersPage'), href: '/program/speakers' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
				<Container>
					<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]">
						{speakersPaginItems.map((item, index) => (
							<SpeakersItemWrapper
								key={index}
								item={item}
								index={index}
								delay={0.1 + index * 0.1}
							/>
						))}
					</div>

					<div
						ref={PaginationRef}
						className="mt-[30px] flex translate-y-[50px] items-center justify-center opacity-0 xl:mt-[50px]"
					>
						<MainPagination totalPages={10} />
					</div>
				</Container>
			</section>
		</>
	)
}
