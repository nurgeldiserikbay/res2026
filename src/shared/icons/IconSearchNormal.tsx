import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconSearchNormal({ size = 24, color, title = 'Search normal', className, ...props }: IconProps) {
	const fill = color ?? 'currentColor'
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<path
				d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
				stroke={fill}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 22L20 20"
				stroke={fill}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
