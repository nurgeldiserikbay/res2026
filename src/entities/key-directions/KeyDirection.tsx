import Image from 'next/image'

import { IconArrowLeft } from '@/shared/icons/IconArrowLeft'

export interface IKeyDirectionItem {
	image: string
	title: string
	description?: string
	href: string
	onClick: () => void
}

export function KeyDirection({ image, title, onClick, className }: IKeyDirectionItem & { className?: string }) {
	return (
		<div
			className={[`group xs:h-[584px] relative h-[484px] w-full cursor-pointer overflow-hidden rounded-[12px]`, className].join(` `)}
			onClick={onClick}
		>
			<Image
				src={image}
				alt={title}
				width={443}
				height={584}
				className="transform-origin-center h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.15]"
			/>
			<div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-linear-to-b from-[#000000]/20 to-[#02493F] opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover:opacity-100"></div>
			<div className="absolute bottom-0 left-0 z-10 p-[30px] text-left">
				<button className="xs:mb-[60px] mb-[30px] inline-block cursor-pointer">
					<IconArrowLeft className="text-white" />
				</button>
				<h3
					className="xs:text-[24px] text-[20px] leading-[1.2] font-normal text-white"
					dangerouslySetInnerHTML={{ __html: title }}
				></h3>
			</div>
		</div>
	)
}
