import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { IconStar } from '@/shared/icons/IconStar'
// import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'

import { HotelItem as HotelItemType } from './hotel.types'

interface HotelItemProps extends HotelItemType {
	className?: string
}

export function HotelItem({ image, title, rating, priceFrom, currency, description, className }: HotelItemProps) {
	const t = useTranslations()

	return (
		<div className={[className].join(' ')}>
			<div className="relative mb-[30px] overflow-hidden rounded-[12px]">
				<Image
					src={image}
					alt="Hotel"
					width={408}
					height={559}
					className="aspect-408/559 w-full object-cover"
				/>
				<div
					className="pointer-events-none absolute inset-0"
					style={{
						background: 'linear-gradient(to bottom, #02493F00 0%, #02493FC2 76%)',
					}}
				/>
				<div className="absolute right-0 bottom-0 left-0 z-10 p-[30px]">
					<div className="mb-[20px] flex items-center gap-[10px]">
						{new Array(rating).fill(0).map((_, index) => (
							<IconStar
								key={index}
								className="text-[#A1BB94]"
								color="currentColor"
							/>
						))}
					</div>
					<h3 className="text-[24px] leading-none font-bold text-white">{title}</h3>
				</div>
			</div>
			<p className="text-text mb-[20px] line-clamp-3 h-[72px] overflow-hidden text-[16px] leading-normal text-ellipsis">{description}</p>

			<div className="mb-[20px] flex items-center gap-[10px] text-[20px] leading-normal font-bold text-[#41754F]">
				<span>{t(`labels.price`)}:</span>
				<span>
					{priceFrom} {t(`currencies.${currency}`)}
				</span>
			</div>
			{/* <ButtonDefault>{buttonText || t('commands.book')}</ButtonDefault> */}
		</div>
	)
}
