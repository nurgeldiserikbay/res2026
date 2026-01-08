import Image from 'next/image'
import Link from 'next/link'

import { IconArrowLeft } from '@/shared/icons/IconArrowLeft'

export interface IKeyDirectionItem {
	image: string
	title: string
	description: string
	href: string
}

export function KeyDirection({ image, title, description, href, className }: IKeyDirectionItem & { className?: string }) {
	return (
		<div className={[`group xs:h-[584px] relative h-[484px] w-full overflow-hidden rounded-[12px]`, className].join(` `)}>
			<Image
				src={image}
				alt={title}
				width={443}
				height={584}
				className="h-full w-full object-cover"
			/>
			<div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-linear-to-b from-[#000000]/20 to-[#02493F] opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover:opacity-100"></div>
			<div className="absolute bottom-0 left-0 z-10 p-[30px] text-left">
				<Link
					href={href}
					className="xs:mb-[60px] mb-[30px] inline-block cursor-pointer"
				>
					<IconArrowLeft className="text-white" />
				</Link>
				<h3
					className="xs:text-[24px] text-[20px] leading-[1.2] font-normal text-white"
					dangerouslySetInnerHTML={{ __html: title }}
				></h3>
				{description && (
					<p className="xs:mt-[60px] mt-[30px] line-clamp-4 text-[16px] leading-normal font-normal text-white">{description}</p>
				)}
			</div>
		</div>
	)
}
