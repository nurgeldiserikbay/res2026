import Link from 'next/link'
import { useLocale } from 'next-intl'

import { Locale, LocalizedText } from '@/shared/config/i18n'
import { localize } from '@/shared/utils/localize'

export interface NewsShortItemProps {
	title: LocalizedText | string
	tag: LocalizedText | string
	slug: string
}

export function NewsShortItem({ title, tag, slug }: NewsShortItemProps) {
	const locale = useLocale() as Locale

	const localizedTitle = localize(title, locale)
	const localizedTag = localize(tag, locale)

	return (
		<Link
			href={`/${locale}/news/${slug}`}
			className="block rounded-[12px] bg-white bg-[url('/imgs/news-short-bg.svg')] bg-cover bg-center bg-no-repeat px-[30px] py-[53px] shadow-[-31px_124px_36px_0_rgba(0,0,0,0),-20px_79px_33px_0px_rgba(0,0,0,0.01),-11px_44px_28px_0px_rgba(0,0,0,0.03),-5px_20px_20px_0px_rgba(0,0,0,0.04),-1px_5px_11px_0px_rgba(0,0,0,0.05)]"
		>
			<div className="mb-[10px] text-[13px] leading-none font-light text-[#777C83]">{localizedTag}</div>
			<div className="text-text text-[24px] leading-none font-normal">{localizedTitle}</div>
		</Link>
	)
}
