import Image from 'next/image'

import { IconZoom } from '@/shared/icons/IconZoom'

type GalleryCardProps = {
	src: string
	alt: string
	className?: string
	onClick?: () => void
}

export function GalleryCard({ src, alt, className, onClick }: GalleryCardProps) {
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
		</article>
	)
}
