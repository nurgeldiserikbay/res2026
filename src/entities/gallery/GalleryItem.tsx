import Image from 'next/image'

import { IconZoom } from '@/shared/icons/IconZoom'

type GalleryCardProps = {
	src: string
	title?: string
	description?: string
	alt: string
	className?: string
	onClick?: () => void
}

export function GalleryCard({ src, title, description, alt, className, onClick }: GalleryCardProps) {
	console.log(title, description, 'sdv')
	return (
		<article
			className={[
				'group relative',
				'mb-[20px] h-full w-full cursor-pointer break-inside-avoid overflow-hidden rounded-[12px]',
				// визуал как на скрине
				'bg-white',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			onClick={onClick}
		>
			<Image
				src={src}
				alt={alt}
				width={557}
				height={415}
				className="h-full w-full object-cover"
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
			/>
			<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
				<IconZoom className="text-white" />
			</div>
			{(title || description) && (
				<div className="absolute top-0 right-0 bottom-0 left-0 z-1 flex flex-col items-start justify-end p-[30px] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
					{title && (
						<h3 className="mb-[10px] translate-x-90 text-left text-[24px] leading-none font-normal text-white transition-all duration-300 ease-out group-hover:translate-x-0">
							{title}
						</h3>
					)}
					{description && (
						<p className="font-regular translate-x-90 text-left text-[16px] leading-normal text-white transition-all duration-300 ease-out group-hover:translate-x-0">
							{description}
						</p>
					)}
				</div>
			)}
		</article>
	)
}
