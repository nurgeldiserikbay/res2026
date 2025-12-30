import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconCloseCircle({ size = 30, color, title = 'Close circle', className, ...props }: IconProps) {
	const stroke = color ?? 'currentColor'

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<path
				d="M14.8922 29.0345V0.750027"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M29.0345 14.8923H0.75"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
