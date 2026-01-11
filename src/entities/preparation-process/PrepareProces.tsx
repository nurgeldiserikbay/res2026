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
		<div className="flex w-full flex-wrap items-start justify-between gap-x-[30px] gap-y-[60px] rounded-[12px] bg-[#F4FFF7] p-[26px] lg:flex-nowrap">
			<div className="max-w-[626px]">
				<div className="text-text mb-[10px] text-[14px] leading-normal font-light md:text-[16px] lg:text-[18px] xl:text-[20px]">
					{addessAndTime}
				</div>
				<div className="text-text xs:text-[24px] mb-[30px] text-[22px] leading-normal font-medium md:text-[28px] lg:text-[30px] xl:text-[32px] 2xl:text-[36px]">
					{title}
				</div>
				<div className="text-text mb-[30px] max-w-[552px] text-[20px] leading-normal font-normal lg:text-[22px] 2xl:text-[24px]">
					{subtitle}
				</div>
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
			<div className="grow overflow-hidden rounded-[12px] lg:max-w-[480px] xl:max-w-[600px] 2xl:max-w-[909px]">
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
