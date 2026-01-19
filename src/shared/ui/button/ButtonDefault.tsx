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
				`font-regular group relative flex cursor-pointer items-center justify-center gap-[15px] overflow-hidden rounded-[8px] bg-linear-to-tr from-[#71B980] to-[#308757] px-[16px] py-[20px] text-[16px] leading-none text-white before:absolute before:inset-0 before:top-0 before:left-0 before:h-full before:w-[200%] before:bg-[linear-gradient(to_right,#71B980_0%,#308757_33%,#02493F_66%,#E2C75E_100%)] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-[-50%]`,
				className || '',
			].join(' ')}
		>
			<span className="relative z-10">{children}</span>
			{icon && (
				<IconArrowRight
					className="relative z-10 text-inherit"
					aria-hidden="true"
				/>
			)}
		</Link>
	) : (
		<button
			type="button"
			id={id}
			className={[
				`font-regular group relative flex cursor-pointer items-center justify-center gap-[15px] overflow-hidden rounded-[8px] bg-linear-to-tr from-[#71B980] to-[#308757] px-[16px] py-[20px] text-[16px] leading-none text-white before:absolute before:inset-0 before:top-0 before:left-0 before:h-full before:w-[300%] before:bg-[linear-gradient(to_right,#71B980_0%,#308757_33%,#02493F_66%,#E2C75E_100%)] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-[-66%]`,
				className || '',
			].join(' ')}
			onClick={onClick}
			ref={ref}
		>
			<span className="relative z-10">{children}</span>
			{icon && (
				<IconArrowRight
					className="relative z-10 text-inherit"
					aria-hidden="true"
				/>
			)}
		</button>
	)
}
