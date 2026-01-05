import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { IconArrowRight } from '@/shared/icons/IconArrowRight'
import { IconEye } from '@/shared/icons/IconEye'

export interface NewsItemProps {
	title: string
	image: string
	date: string
	tag: string
	slug: string
	type: 'light' | 'dark'
	wide?: boolean
	views?: number
}

export function NewsItem({ title, image, date, tag, slug, type = 'light', wide = false, views = 0 }: NewsItemProps) {
	const locale = useLocale()

	return (
		<div
			className={`group relative ${wide ? 'aspect-[1.696]' : 'aspect-[0.789]'} w-full overflow-hidden rounded-[12px] bg-white shadow-[-31px_124px_36px_0_rgba(0,0,0,0),-20px_79px_33px_0px_rgba(0,0,0,0.01),-11px_44px_28px_0px_rgba(0,0,0,0.03),-5px_20px_20px_0px_rgba(0,0,0,0.04),-1px_5px_11px_0px_rgba(0,0,0,0.05)]`}
		>
			<Image
				src={image}
				alt={title}
				width={wide ? 860 : 405}
				height={507}
				className="absolute top-0 right-0 bottom-0 left-0 block h-full w-full rounded-[12px] object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-[22%] group-hover:translate-y-[8%] group-hover:scale-[1.75]"
			/>
			<div className="relative z-1 flex h-full w-full flex-col items-start justify-end p-[30px]">
				<div className={`${type === 'light' ? 'text-[#777C83]' : 'text-[#C9CED4]'} mb-[10px] text-[13px] leading-none font-light`}>
					{date}
				</div>
				<div
					className={`${type === 'light' ? 'text-[#777C83]' : 'text-[#C9CED4]'} mb-[10px] text-[13px] leading-none font-light`}
				>{`//${tag}`}</div>
				<h4
					className={`${type === 'light' ? 'text-text' : 'text-white'} line-clamp-3 h-[60px] text-[20px] leading-none font-medium md:h-[66px] md:text-[22px] lg:h-[72px] lg:text-[24px]`}
				>
					{title}
				</h4>
				{views && (
					<div
						className={[
							`mt-[10px] flex items-center justify-start gap-[10px] text-[13px] leading-none font-medium`,
							type === 'light' ? 'text-text' : 'text-white',
						].join(` `)}
					>
						<IconEye />
						<span>{views}</span>
					</div>
				)}
			</div>
			<Link
				href={`/${locale}/news/${slug}`}
				className="absolute top-[30px] right-[30px] z-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black/10"
			>
				<IconArrowRight className="text-white" />
			</Link>
		</div>
	)
}
