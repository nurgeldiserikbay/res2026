import { IconArrowRight } from '@/shared/icons/IconArrowRight'

export function ButtonOutlined({
	children,
	onClick,
	icon = true,
	className,
	id,
}: {
	children?: React.ReactNode
	onClick?: () => void
	icon?: boolean
	className?: string
	id?: string
}) {
	return (
		<button
			type="button"
			id={id}
			className={[
				`font-regular border-muted relative flex cursor-pointer items-center justify-center gap-[15px] overflow-hidden rounded-[8px] border border-solid px-[16px] py-[20px] text-[16px] leading-none text-white`,
				className || '',
			].join(' ')}
			onClick={onClick}
		>
			{children}
			{icon && (
				<IconArrowRight
					className="text-inherit"
					aria-hidden="true"
				/>
			)}
		</button>
	)
}
