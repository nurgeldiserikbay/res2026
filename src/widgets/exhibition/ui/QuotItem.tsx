import Image from 'next/image'

import { IconQuot } from '@/shared/icons/IconQuot'

export function QuotItem({ image, text, name, position }: { image: string; text: string; name: string; position: string }) {
	return (
		<div className="flex items-start justify-between gap-[44px]">
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
				<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line">{text}</p>

				<h3 className="text-primary xs:text-[20px] mb-[5px] text-[18px] leading-normal font-bold whitespace-pre-line lg:text-[22px] xl:text-[24px]">
					{name}
				</h3>

				<div className="text-primary text-[14px] leading-normal font-normal">{position}</div>
			</div>
		</div>
	)
}
