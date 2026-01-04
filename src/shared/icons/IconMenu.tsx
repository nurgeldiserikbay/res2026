import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconMenu({ size = 18, color, title = 'Menu', className, ...props }: IconProps) {
	const fill = color ?? 'currentColor'

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 47 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<rect
				width="38"
				height="2"
				fill={fill}
			/>
			<rect
				y="12"
				width="32"
				height="2"
				fill={fill}
			/>
			<rect
				y="24"
				width="47"
				height="2"
				fill={fill}
			/>
		</svg>
	)
}
