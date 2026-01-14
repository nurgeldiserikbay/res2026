import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { IconPin } from '@/shared/icons/IconPin'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'

import { RestaurantItem as RestaurantItemType } from './restaurant.types'

interface RestaurantItemProps extends RestaurantItemType {
	className?: string
}

export function RestaurantItem({ image, title, price, currency, description, address, className }: RestaurantItemProps) {
	const t = useTranslations()

	return (
		<div className={[className].join(' ')}>
			<div className="relative mb-[30px] overflow-hidden rounded-[12px]">
				<Image
					src={image}
					alt="Hotel"
					width={408}
					height={559}
					className="w-full object-cover"
				/>
				<div className="absolute right-0 bottom-0 left-0 p-[30px]">
					<h3 className="text-[24px] leading-none font-bold text-white">{title}</h3>
					<p className="mt-[10px] flex items-center gap-[10px] text-[16px] leading-normal font-normal text-white">
						<IconPin className="block shrink-0 text-white transition-colors" />
						<span>{address}</span>
					</p>
				</div>
			</div>
			<p className="text-text mb-[20px] line-clamp-3 h-[72px] overflow-hidden text-[16px] leading-normal text-ellipsis">{description}</p>

			<div className="mb-[20px] flex items-center gap-[10px] text-[20px] leading-normal font-bold text-[#41754F]">
				<span>{t(`labels.priceCategory`)}:</span>
				<span>
					{price} {t(`currencies.${currency}`)}
				</span>
			</div>
			<ButtonDefault>{t('labels.more')}</ButtonDefault>
		</div>
	)
}
