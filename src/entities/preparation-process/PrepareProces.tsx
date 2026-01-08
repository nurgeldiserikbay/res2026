import Image from 'next/image'

export function PrepareProcess({
	addessAndTime,
	title,
	subtitle,
	description,
	image,
}: {
	addessAndTime: string
	title: string
	subtitle: string
	description: string
	image: string
}) {
	return (
		<div className="flex w-full items-start justify-between gap-[30px] rounded-[12px] bg-[#F4FFF7] p-[26px]">
			<div className="max-w-[626px]">
				<div className="text-text mb-[10px] text-[20px] leading-normal font-light">{addessAndTime}</div>
				<div className="text-text mb-[30px] text-[36px] leading-normal font-medium">{title}</div>
				<div className="text-text mb-[30px] max-w-[552px] text-[24px] leading-normal font-normal">{subtitle}</div>
				<div className="text-text max-w-[580px] text-[16px] leading-normal font-normal">{description}</div>
			</div>
			<div className="max-w-[909px] grow overflow-hidden rounded-[12px]">
				{image && (
					<Image
						src={image}
						alt="Arrow"
						width={909}
						height={430}
						className="block w-full rounded-[12px]"
					/>
				)}
			</div>
		</div>
	)
}
