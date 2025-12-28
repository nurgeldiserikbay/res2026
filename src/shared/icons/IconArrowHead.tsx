import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconArrowHead({ size = 20, color, title = 'Arrow head', className, ...props }: IconProps) {
	const fill = color ?? 'currentColor'

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<path
				d="M4.16669 10.0001H15.8334M15.8334 10.0001L10 4.16675M15.8334 10.0001L10 15.8334"
				stroke={fill}
				strokeWidth="1.7"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
