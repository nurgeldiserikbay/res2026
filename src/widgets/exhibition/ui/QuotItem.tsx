import Image from 'next/image'

import { IconQuot } from '@/shared/icons/IconQuot'

export function QuotItem({ image, text, name, position }: { image: string; text: string; name: string; position: string }) {
	return (
		<div className="flex flex-col items-center justify-between gap-x-[44px] gap-y-[20px] sm:flex-row sm:items-start">
			<Image
				src={image}
				alt={name}
				width={93}
				height={93}
				className="block h-[93px] w-[93px] rounded-full"
			/>

			<div>
				<IconQuot
					color="#A1BB94"
					className="mb-[30px] block"
				/>
				<p className="mb-[30px] text-justify text-[16px] leading-normal font-normal whitespace-pre-line text-text">{text}</p>

				<h3 className="mb-[5px] text-[18px] leading-normal font-bold whitespace-pre-line text-primary xs:text-[20px] lg:text-[22px] xl:text-[24px]">
					{name}
				</h3>

				<div className="text-[14px] leading-normal font-normal text-primary">{position}</div>
			</div>
		</div>
	)
}
