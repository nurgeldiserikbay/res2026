'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

import { useAnimBg } from '@/shared/lib/gsap/useAnimBg'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { Container } from '@/shared/ui/container/container'

import type { ReactNode } from 'react'

export function AbountEtc({
	strategicVisionTitle,
	strategicVisionIntro,
	strategicDocuments,
	nationalInitiativesTitle,
	nationalInitiativesIntro,
	nationalInitiatives,
}: {
	strategicVisionTitle: string
	strategicVisionIntro: string
	strategicDocuments: { id: number; title: string }[]
	nationalInitiativesTitle: string
	nationalInitiativesIntro: { id: number; title: string; description: string; image?: string }[]
	nationalInitiatives: { id: number; title: string; description: string | ReactNode; image?: string }[]
}) {
	const StrategicVisionRef = useRef<HTMLDivElement>(null)
	const InitiativesSectionRef = useRef<HTMLDivElement>(null)
	const LeftContentRef = useRef<HTMLDivElement>(null)
	const LogoRef = useRef<HTMLDivElement>(null)
	const InitiativesTitleRef = useRef<HTMLHeadingElement>(null)
	const InitiativesGridRef = useRef<HTMLDivElement>(null)

	useAnimBg(StrategicVisionRef, {
		fromSize: '120%',
		toSize: '100%',
		fromPosition: 'center 60%',
		toPosition: 'center center',
		duration: 1.4,
		bgImage: '/imgs/about-etc-banner.png',
	})

	useAnimSlide(LeftContentRef, { x: -90, delay: 0.2 })
	useAnimSlide(LogoRef, { x: 90, delay: 0.3 })
	useAnimSlide(InitiativesTitleRef, { y: 50, delay: 0.4 })

	useGSAP(
		() => {
			if (!LeftContentRef.current) return

			const listItems = LeftContentRef.current.querySelectorAll('li')
			listItems.forEach((item, index) => {
				gsap.fromTo(
					item,
					{ x: -30, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.6,
						delay: 0.5 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: StrategicVisionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: StrategicVisionRef },
	)

	useGSAP(
		() => {
			if (!InitiativesGridRef.current) return

			const initiativeCards = InitiativesGridRef.current.querySelectorAll('div > div')
			initiativeCards.forEach((card, index) => {
				gsap.fromTo(
					card,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						delay: 0.6 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: InitiativesSectionRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: InitiativesSectionRef },
	)

	const defaultImages = [
		'/imgs/national-inits/green1.png',
		'/imgs/national-inits/green2.png',
		'/imgs/national-inits/green3.png',
		'/imgs/national-inits/green4.png',
	]

	const defaultMobImages = [
		'/imgs/national-inits/green1-mobile.png',
		'/imgs/national-inits/green2-mobile.png',
		'/imgs/national-inits/green3.png',
		'/imgs/national-inits/green4.png',
	]

	const introDefaultImages = ['/imgs/recycle1.png', '/imgs/recycle2.png', '/imgs/recycle3.png']

	return (
		<>
			<section
				id="etc"
				className="relative pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[100px]"
			>
				<Container>
					<div
						ref={StrategicVisionRef}
						data-animated-banner
						className="relative mb-[50px] rounded-[12px] p-[20px] sm:mb-[60px] sm:p-[30px] md:mb-[80px] md:p-[40px] lg:mb-[100px] lg:p-[50px]"
					>
						<div className="relative z-1 flex flex-col items-start gap-[30px] md:justify-between lg:flex-row lg:gap-[60px]">
							<div
								ref={LeftContentRef}
								className="w-full translate-x-[-90px] opacity-0 lg:w-auto"
							>
								<h3 className="mb-[10px] text-[24px] leading-normal font-bold text-white sm:text-[28px] md:text-[32px]">
									{strategicVisionTitle}
								</h3>
								<p className="mb-[20px] text-[14px] leading-normal font-normal text-white sm:mb-[25px] sm:text-[15px] md:mb-[30px] md:text-justify md:text-[16px]">
									{strategicVisionIntro}
								</p>
								<ul>
									{strategicDocuments.map((document: { id: number; title: string }) => (
										<li
											key={document.id}
											className="mb-[8px] flex items-center justify-start gap-[10px] text-[13px] text-white sm:mb-[10px] sm:text-[14px] md:text-[16px]"
										>
											<span className="bg-muted-light flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-justify text-[13px] leading-normal font-normal text-black sm:h-[32px] sm:w-[32px] sm:text-[14px] md:h-[35px] md:w-[35px] md:text-[16px]">
												{document.id}
											</span>
											{document.title}
										</li>
									))}
								</ul>
							</div>

							<div
								ref={LogoRef}
								className="w-full translate-x-[90px] opacity-0 sm:max-w-[200px]"
							>
								<Image
									src="/imgs/logotype.svg"
									alt="About Logotype"
									width={298}
									height={261}
									className="block h-auto w-full sm:max-w-[200px] lg:max-w-[298px]"
								/>
							</div>
						</div>
					</div>

					<div
						ref={InitiativesSectionRef}
						className="relative"
					>
						<h3
							ref={InitiativesTitleRef}
							className="mb-[20px] translate-y-[50px] text-[24px] leading-normal font-bold text-black opacity-0 sm:mb-[25px] sm:text-[28px] md:mb-[30px] md:text-[32px] 2xl:mb-[60px]"
						>
							{nationalInitiativesTitle}
						</h3>

						<div
							ref={InitiativesGridRef}
							className="flex flex-col gap-[10px]"
						>
							<div className="mb-[25px] flex flex-wrap items-center gap-x-[60px] gap-y-[30px] lg:flex-nowrap">
								<div className="grid max-w-[1028px] grid-cols-3 gap-[10px]">
									{nationalInitiativesIntro.map((initiative, index) => {
										const imageSrc = initiative.image || introDefaultImages[index % introDefaultImages.length]

										return (
											<div
												key={initiative.id}
												className="relative overflow-hidden rounded-[12px]"
											>
												<Image
													src={imageSrc}
													alt={initiative.title}
													className="block-cover max-w-full rounded-[12px] object-cover"
													width={336}
													height={354}
												/>
											</div>
										)
									})}
								</div>

								<div className="max-w-[715px]">
									{nationalInitiativesIntro.map((initiative) => {
										return (
											<div
												key={initiative.id}
												className="mb-[30px] last:mb-0"
											>
												<h5 className="text-text mb-[30px] text-[20px] leading-none font-bold">{initiative.title}</h5>
												<p className="text-text text-[16px] leading-normal font-normal">{initiative.description}</p>
											</div>
										)
									})}
								</div>
							</div>

							<div className="mb-[40px] grid grid-cols-1 gap-x-[40px] gap-y-[50px] sm:grid-cols-2 xl:mb-0 xl:grid-cols-[55fr_45fr] xl:gap-x-[10px]">
								{nationalInitiatives.slice(0, 2).map((initiative, index) => {
									const bgImage = initiative.image || defaultImages[index % defaultImages.length]
									const bgMobImage = initiative.image || defaultMobImages[index % defaultMobImages.length]
									const gridColumnClass = index === 0 ? 'xl:col-start-1' : 'xl:col-start-2'

									return (
										<div
											key={initiative.id}
											className={`relative h-full translate-y-[50px] overflow-hidden rounded-[12px] opacity-0 max-[1280px]:bg-none! sm:min-h-[350px] md:min-h-[400px] ${gridColumnClass}`}
											style={{
												backgroundImage: `url(${bgImage})`,
												backgroundSize: 'cover',
												backgroundPosition: '100% 0px',
												backgroundRepeat: 'no-repeat',
											}}
										>
											<div className="absolute inset-0 hidden bg-linear-to-b from-black/40 to-black/50 xl:block" />

											<div className="relative z-10 flex h-full flex-col justify-start xl:justify-end xl:p-[30px]">
												{initiative.title && (
													<h5 className="text-text mb-[30px] text-left text-[18px] leading-normal font-bold sm:text-[19px] md:text-[20px] xl:text-white">
														{initiative.title}
													</h5>
												)}
												<Image
													src={bgMobImage}
													alt={initiative.title}
													width={379}
													height={225}
													className="mb-[30px] block h-auto w-full rounded-[12px] xl:hidden"
												/>
												<p className="text-text text-[13px] leading-normal sm:text-[14px] md:text-justify md:text-[16px] xl:text-white">
													{initiative.description}
												</p>
											</div>
										</div>
									)
								})}
							</div>

							<div className="grid grid-cols-1 gap-x-[40px] gap-y-[50px] sm:grid-cols-2 xl:mb-0 xl:grid-cols-[45fr_55fr] xl:gap-x-[10px]">
								{nationalInitiatives.slice(2, 4).map((initiative, index) => {
									const originalIndex = index + 2
									const bgImage = initiative.image || defaultImages[originalIndex % defaultImages.length]
									const bgMobImage = initiative.image || defaultMobImages[index % defaultMobImages.length]
									const gridColumnClass = index === 0 ? 'xl:col-start-1' : 'xl:col-start-2'

									return (
										<div
											key={initiative.id}
											className={`relative h-full translate-y-[50px] overflow-hidden rounded-[12px] opacity-0 max-[1280px]:bg-none! sm:min-h-[350px] md:min-h-[400px] ${gridColumnClass}`}
											style={{
												backgroundImage: `url(${bgImage})`,
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												backgroundRepeat: 'no-repeat',
											}}
										>
											<div className="absolute inset-0 hidden bg-linear-to-b from-black/40 to-black/50 xl:block" />

											<div className="relative z-10 flex h-full flex-col justify-start xl:justify-end xl:p-[30px]">
												{initiative.title && (
													<h5 className="text-text mb-[30px] text-left text-[18px] leading-normal font-bold sm:text-[19px] md:text-[20px] xl:text-white">
														{initiative.title}
													</h5>
												)}
												<Image
													src={bgMobImage}
													alt={initiative.title}
													width={379}
													height={225}
													className="mb-[30px] block h-auto w-full rounded-[12px] xl:hidden"
												/>
												<p className="text-text text-[13px] leading-normal sm:text-[14px] md:text-justify md:text-[16px] xl:text-white">
													{initiative.description}
												</p>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
