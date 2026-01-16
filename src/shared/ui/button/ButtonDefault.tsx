import { Link } from '@/i18n/navigation'
import { IconArrowRight } from '@/shared/icons/IconArrowRight'

export function ButtonDefault({
	children,
	onClick,
	icon = true,
	className,
	href = '',
	id,
	ref,
}: {
	children?: React.ReactNode
	onClick?: () => void
	icon?: boolean
	className?: string
	id?: string
	href?: string
	ref?: React.RefObject<HTMLButtonElement>
}) {
	return href ? (
		<Link
			href={href}
			className={[
				`font-regular relative flex cursor-pointer items-center justify-center gap-[15px] overflow-hidden rounded-[8px] bg-linear-to-tr from-[#71B980] to-[#308757] px-[16px] py-[20px] text-[16px] leading-none text-white`,
				className || '',
			].join(' ')}
		>
			{children}
			{icon && (
				<IconArrowRight
					className="text-inherit"
					aria-hidden="true"
				/>
			)}
		</Link>
	) : (
		<button
			type="button"
			id={id}
			className={[
				`font-regular relative flex cursor-pointer items-center justify-center gap-[15px] overflow-hidden rounded-[8px] bg-linear-to-tr from-[#71B980] to-[#308757] px-[16px] py-[20px] text-[16px] leading-none text-white`,
				className || '',
			].join(' ')}
			onClick={onClick}
			ref={ref}
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
