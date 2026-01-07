'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function AboutImgs({ imgs }: { imgs: { id: number; img: string; alt: string; width: number; height: number }[] }) {
	const [activeImg, setActiveImg] = useState(imgs[0])
	const mainImageRef = useRef<HTMLDivElement>(null)
	const thumbnailsRef = useRef<HTMLDivElement>(null)

	// Анимация появления миниатюр
	useGSAP(
		() => {
			if (!thumbnailsRef.current) return

			const thumbnails = thumbnailsRef.current.querySelectorAll('button')
			thumbnails.forEach((thumb, index) => {
				gsap.fromTo(
					thumb,
					{ y: 30, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.6,
						delay: 0.3 + index * 0.1,
						ease: 'circ.out',
						scrollTrigger: {
							trigger: thumbnailsRef.current,
							start: 'top 80%',
						},
					},
				)
			})
		},
		{ scope: thumbnailsRef },
	)

	// Анимация переключения главного изображения
	useEffect(() => {
		if (!mainImageRef.current) return

		gsap.fromTo(
			mainImageRef.current,
			{ opacity: 0, scale: 1.05 },
			{
				opacity: 1,
				scale: 1,
				duration: 0.5,
				ease: 'power2.out',
			},
		)
	}, [activeImg])

	return (
		<>
			<div className="relative w-full pb-[30px] sm:pb-[40px] md:pb-[48px]">
				<div
					ref={mainImageRef}
					className="aspect-870/758 w-full overflow-hidden rounded-[8px] sm:rounded-[12px]"
				>
					{activeImg && (
						<Image
							src={activeImg.img}
							alt={activeImg.alt}
							width={activeImg.width}
							height={activeImg.height}
							className="block w-full rounded-[8px] object-contain sm:rounded-[12px]"
						/>
					)}
				</div>

				<div
					ref={thumbnailsRef}
					className="absolute bottom-0 left-0 flex w-full items-center justify-start gap-1 overflow-x-auto px-[10px] sm:px-[20px] md:px-[30px] lg:px-[43px]"
				>
					{imgs.length > 1 &&
						imgs.map((img) => (
							<button
								key={img.id}
								onClick={() => setActiveImg(img)}
								className={[
									`after:bg-secondary/50 relative block h-[60px] w-[70px] shrink-0 translate-y-[30px] cursor-pointer overflow-hidden rounded-[6px] opacity-0 after:absolute after:inset-0 after:transition-opacity after:duration-300 after:ease-out after:content-[''] hover:after:opacity-100 sm:h-[80px] sm:w-[90px] sm:rounded-[7px] md:h-[103px] md:w-[110px] md:rounded-[8px]`,
									activeImg.id === img.id ? 'after:opacity-100' : 'after:opacity-0',
								].join(` `)}
							>
								<Image
									src={img.img}
									alt={img.alt}
									width={img.width}
									height={img.height}
									className="block h-full w-full object-cover"
								/>
							</button>
						))}
				</div>
			</div>
		</>
	)
}
