import { useTranslations } from 'next-intl'

import { IconArrowHead } from '@/shared/icons/IconArrowHead'
import { ButtonDefault } from '@/shared/ui/button/ButtonDefault'
import { ButtonOutlined } from '@/shared/ui/button/ButtonOutlined'

export function SpekerControl({
	className,
	isBeginning,
	isEnd,
	showNavigation = true,
}: {
	className: string
	isBeginning: boolean
	isEnd: boolean
	showNavigation?: boolean
}) {
	const t = useTranslations()

	return (
		<div className={`flex w-full items-start justify-between gap-[20px] ${className}`}>
			<ButtonDefault>{t('labels.allSpeakers')}</ButtonDefault>

			<div
				className={!showNavigation ? 'hidden' : ''}
				aria-hidden={!showNavigation}
			>
				<div id="swiper-button-prev">
					{isBeginning ? (
						<ButtonOutlined
							icon={false}
							className="text-muted pointer-events-none mb-[10px] box-border h-[45px] w-[82px] cursor-default py-[12px]"
						>
							<IconArrowHead className="text-muted rotate-180 transform" />
						</ButtonOutlined>
					) : (
						<ButtonDefault
							icon={false}
							className="mb-[10px] h-[45px] w-[82px] py-[12px]"
						>
							<IconArrowHead className="rotate-180 transform" />
						</ButtonDefault>
					)}
				</div>

				<div id="swiper-button-next">
					{isEnd ? (
						<ButtonOutlined
							icon={false}
							className="text-muted pointer-events-none box-border h-[45px] w-[82px] cursor-default py-[12px]"
						>
							<IconArrowHead className="text-muted" />
						</ButtonOutlined>
					) : (
						<ButtonDefault
							icon={false}
							className="h-[45px] w-[82px] py-[12px]"
						>
							<IconArrowHead />
						</ButtonDefault>
					)}
				</div>
			</div>
		</div>
	)
}
