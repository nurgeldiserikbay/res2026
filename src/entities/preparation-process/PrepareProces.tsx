import Link from 'next/link'

import { ImageSlider } from '@/shared/components/ImageSlider'

export function PrepareProcess({
	addessAndTime,
	title,
	subtitle,
	description,
	images,
	link,
}: {
	addessAndTime: string
	title: string
	subtitle: string
	description: string
	images: string[]
	link: {
		src: string
		title: string
	}
}) {
	return (
		<div className="flex w-full items-start justify-between gap-[30px] rounded-[12px] bg-[#F4FFF7] p-[26px]">
			<div className="max-w-[626px]">
				<div className="text-text mb-[10px] text-[20px] leading-normal font-light">{addessAndTime}</div>
				<div className="text-text mb-[30px] text-[36px] leading-normal font-medium">{title}</div>
				<div className="text-text mb-[30px] max-w-[552px] text-[24px] leading-normal font-normal">{subtitle}</div>
				<div className="text-text max-w-[580px] text-justify text-[16px] leading-normal font-normal">{description}</div>
				{link && (
					<Link
						href={link.src}
						target="_blank"
						className="text-primary mt-[30px] block text-[16px] leading-normal font-normal underline"
					>
						{link.title}
					</Link>
				)}
			</div>
			<div className="max-w-[909px] grow overflow-hidden rounded-[12px]">
				{images?.length > 0 && (
					<ImageSlider
						images={images}
						alt={title}
					/>
				)}
			</div>
		</div>
	)
}
