import Image from 'next/image'

export interface SpeakerProps {
	name: string
	title: string
	description: string
	image: string
	tag: string
}

export function Speaker({ name, description, image, tag, title }: SpeakerProps) {
	return (
		<div className="w-full">
			<div className="relative mb-[20px] aspect-386/453 w-full">
				<Image
					src={image}
					alt={name}
					width={386}
					height={453}
					className="block h-full w-full object-contain"
				/>

				<div className="absolute bottom-0 left-0 px-[33px] py-[35px] md:py-[45px] lg:py-[55px] xl:py-[65px]">
					<span className="mb-[10px] text-[16px] leading-normal font-light text-[#90C29E] md:text-[18px] xl:text-[20px]">{`//${tag}`}</span>
					<h3 className="text-[32px] leading-none font-bold text-white md:text-[34px] lg:text-[36px] xl:text-[40px]">{name}</h3>
				</div>
			</div>
			<h3 className="text-text mb-[10px] line-clamp-2 text-[20px] leading-none font-bold md:text-[22px] xl:text-[24px]">{title}</h3>
			<p className="text-text line-clamp-2 text-[14px] leading-normal lg:text-[16px]">{description}</p>
		</div>
	)
}
