import Link from 'next/link'
import { useLocale } from 'next-intl'

import { Locale, LocalizedText } from '@/shared/config/i18n'
import { IconArrowRight } from '@/shared/icons/IconArrowRight'
import { IconEye } from '@/shared/icons/IconEye'
import { localize } from '@/shared/utils/localize'

export interface NewsItemProps {
	title: LocalizedText | string
	image: string
	bannerImage: string
	date: LocalizedText | string
	tag: LocalizedText | string
	slug: string
	variant: 'light' | 'dark'
	type: 'latest' | 'anounce' | 'publication'
	content: LocalizedText | string
	wide?: boolean
	views?: number
}

export function NewsItem({ title, image, date, tag, slug, variant = 'light', wide = false, views = 0 }: NewsItemProps) {
	const locale = useLocale() as Locale

	const localizedTitle = localize(title, locale)
	const localizedDate = localize(date, locale)
	const localizedTag = localize(tag, locale)

	return (
		<div
			className={`group relative ${wide ? 'aspect-[1.696]' : 'aspect-[0.789]'} w-full overflow-hidden rounded-[12px] bg-white shadow-[-1px_5px_11px_0px_rgba(0,0,0,0.05),-5px_20px_20px_0px_rgba(0,0,0,0.04)] ${variant === 'light' ? 'bg-white' : 'after:absolute after:inset-0 after:h-full after:w-full after:rounded-[12px] after:bg-linear-to-b after:from-[#00000000] after:to-[#000000] after:content-[""]'}`}
		>
			<img
				loading="lazy"
				decoding="async"
				src={image}
				alt={localizedTitle}
				width={wide ? 860 : 405}
				height={507}
				className="absolute top-0 right-0 bottom-0 left-0 block h-full w-full rounded-[12px] object-cover transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-[22%] group-hover:translate-y-[8%] group-hover:scale-[1.75]"
			/>
			<div className="relative z-1 flex h-full w-full flex-col items-start justify-end p-[30px]">
				<div className={`${variant === 'light' ? 'text-[#777C83]' : 'text-[#C9CED4]'} mb-[10px] text-[13px] leading-none font-light`}>
					{localizedDate}
				</div>
				{localizedTag && (
					<div
						className={`${variant === 'light' ? 'text-[#777C83]' : 'text-[#C9CED4]'} mb-[10px] text-[13px] leading-none font-light`}
					>{`//${localizedTag}`}</div>
				)}
				<h4
					className={`${variant === 'light' ? 'text-text' : 'text-white'} line-clamp-3 h-[60px] text-[20px] leading-none font-medium md:h-[66px] md:text-[22px] lg:h-[72px] lg:text-[24px]`}
				>
					{localizedTitle}
				</h4>
				{views && (
					<div
						className={[
							`mt-[10px] flex items-center justify-start gap-[10px] text-[13px] leading-none font-medium`,
							variant === 'light' ? 'text-text' : 'text-white',
						].join(` `)}
					>
						<IconEye />
						<span>{views}</span>
					</div>
				)}
			</div>
			<Link
				href={`/${locale}/news/${slug}`}
				className="absolute top-[30px] right-[30px] z-5 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-black/10 backdrop-blur-[13px]"
			>
				<IconArrowRight className="text-white" />
			</Link>
		</div>
	)
}
