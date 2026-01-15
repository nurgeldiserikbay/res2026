import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import { IconArrowRight } from '@/shared/icons/IconArrowRight'

interface AttractionItemProps {
	image: string
	title: string
	slug: string
}

export function AttractionItem({ image, title, slug }: AttractionItemProps) {
	return (
		<Link
			href={`/useful/attractions/${slug}`}
			className="relative block overflow-hidden rounded-[12px] bg-white"
		>
			<Image
				src={image}
				alt={title}
				width={562}
				height={673}
				className="w-full object-cover"
			/>
			<div className="absolute right-0 bottom-0 left-0 p-[30px] md:p-[40px]">
				<h3 className="text-[24px] leading-none font-bold text-white">{title}</h3>
			</div>
			<div className="absolute top-[30px] right-[30px] z-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black/10 backdrop-blur-[13px]">
				<IconArrowRight className="text-white" />
			</div>
		</Link>
	)
}
