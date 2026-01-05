'use client'

import Image from 'next/image'
import { useState } from 'react'

const IMGS = [
	{
		id: 1,
		img: '/imgs/region-slide-1.png',
		alt: 'Region Img 1',
		width: 870,
		height: 758,
	},
	{
		id: 2,
		img: '/imgs/region-slide-1.png',
		alt: 'Region Img 1',
		width: 870,
		height: 758,
	},
	{
		id: 3,
		img: '/imgs/region-slide-1.png',
		alt: 'Region Img 1',
		width: 870,
		height: 758,
	},
]

export function AboutImgs() {
	const [activeImg, setActiveImg] = useState(IMGS[0])

	return (
		<>
			<div className="relative w-full pb-[48px]">
				<div className="aspect-870/758 w-full overflow-hidden">
					{activeImg && (
						<Image
							src={activeImg.img}
							alt={activeImg.alt}
							width={activeImg.width}
							height={activeImg.height}
							className="block h-full w-full object-cover"
						/>
					)}
				</div>

				<div className="absolute bottom-0 left-0 flex w-full items-center justify-start gap-1 overflow-hidden px-[43px]">
					{IMGS.map((img) => (
						<button
							key={img.id}
							onClick={() => setActiveImg(img)}
							className={[
								`after:bg-secondary/50 relative block h-[103px] w-[110px] cursor-pointer overflow-hidden rounded-[8px] after:absolute after:inset-0 after:transition-opacity after:duration-300 after:ease-out after:content-[''] hover:after:opacity-100`,
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
