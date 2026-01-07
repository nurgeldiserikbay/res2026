import { IconArrowRight } from '@/shared/icons/IconArrowRight'

export function ButtonTree({
	children,
	onClick,
	icon = true,
	className,
}: {
	children?: React.ReactNode
	onClick?: () => void
	icon?: boolean
	className?: string
}) {
	return (
		<button
			type="button"
			className={[
				"text-text font-regular before:bg-muted-light relative isolate flex cursor-pointer items-center justify-center gap-[10px] overflow-hidden rounded-[8px] px-[16px] py-[20px] text-[16px] leading-none before:absolute before:inset-0 before:z-[-1] before:bg-[url('/imgs/btn-mask-tree.svg')] before:bg-cover before:bg-center before:opacity-100 before:bg-blend-overlay",
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
