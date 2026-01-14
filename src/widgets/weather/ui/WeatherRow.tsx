import Image from 'next/image'

export function WeatherRow({
	title,
	months,
	text,
	minus,
	plus,
	minusText,
	plusText,
	image1,
	image2,
	className,
	reverse,
}: {
	title: string
	months: string
	text: string
	minus: string
	plus: string
	minusText: string
	plusText: string
	image1: string
	image2: string
	className?: string
	reverse?: boolean
}) {
	return (
		<div className={[`grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 md:gap-x-[60px]`, className].join(' ')}>
			<div className={`flex flex-row items-stretch justify-center gap-[8px] ${reverse ? 'order-2 flex-row-reverse' : 'order-1 flex-row'}`}>
				<Image
					src={image1}
					alt={title}
					width={561}
					height={372}
					className="block rounded-[12px]"
				/>
				<Image
					src={image2}
					alt={title}
					width={300}
					height={372}
					className="block rounded-[12px]"
				/>
			</div>

			<div className={`${reverse ? 'order-1' : 'order-2'}`}>
				<h2 className="text-text mb-[30px] text-[24px] leading-normal font-bold lg:text-[28px] 2xl:text-[32px]">{title}</h2>

				<div className="text-text mb-[10px] flex flex-row items-center justify-start gap-[10px] text-[16px] leading-normal font-normal">
					<Image
						src="/imgs/sun.svg"
						alt="Sun"
						width={25}
						height={25}
						className="block h-[25px] w-[25px]"
					/>
					<span>{months}</span>
				</div>

				<p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line">{text}</p>

				<div className="grid grid-cols-1 items-stretch gap-[10px] bg-white sm:grid-cols-2">
					<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
						<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap lg:text-[48px] 2xl:text-[64px]">
							{plus}
						</h3>
						<div className="text-secondary text-[16px] leading-normal font-normal">{plusText}</div>
					</div>
					<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
						<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap lg:text-[48px] 2xl:text-[64px]">
							{minus}
						</h3>
						<div className="text-secondary text-[16px] leading-normal font-normal">{minusText}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
