'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { Breadcrumbs } from '@/entities/breadcrumbs/Breadcrumbs'
import { Speaker } from '@/entities/speaker/Speaker'
import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'
import { speakersPaginItems } from '@/widgets/speakers/mocks'

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

	const BannerRef = useRef<HTMLElement>(null)
	useAnimBg(BannerRef, {
		fromSize: '140%',
		toSize: '120%',
		fromPosition: 'center 70%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/news-banner.png',
	})
	const TitleRef = useRef<HTMLHeadingElement>(null)
	useAnimSlide(TitleRef, { y: 50, delay: 0.1 })
	const BreadcrumbsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(BreadcrumbsRef, { y: 50, delay: 0.2 })
	const PaginationRef = useRef<HTMLDivElement>(null)
	useAnimSlide(PaginationRef, { y: 50, delay: 0.3 })

	return (
		<>
			<section
				ref={BannerRef}
				data-animated-banner
				className="bg-secondary h-[343px] pt-[176px]"
			>
				<Container className="relative z-10">
					<h1
						ref={TitleRef}
						className="mb-[30px] translate-y-[50px] text-center text-[48px] leading-none font-bold text-white opacity-0"
					>
						{t('titles.speakersPage')}
					</h1>
					<div
						ref={BreadcrumbsRef}
						className="translate-y-[50px] opacity-0"
					>
						<Breadcrumbs breadcrumbs={[{ label: t('titles.speakersPage'), href: '/program/speakers' }]} />
					</div>
				</Container>
			</section>

			<section className="bg-white pt-[100px]">
				<Container>
					<div className="grid grid-cols-4 gap-x-[82px] gap-y-[22px]">
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
						className="mt-[50px] flex translate-y-[50px] items-center justify-center opacity-0"
					>
						<MainPagination totalPages={10} />
					</div>
				</Container>
			</section>
		</>
	)
}
