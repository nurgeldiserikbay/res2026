import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconDoubleArrowDown({ size = 18, color, title = 'Double arrow down', className, ...props }: IconProps) {
	const fill = color ?? 'currentColor'

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 18 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<path
				d="M1.46203 -7.22898e-07L-6.74398e-08 1.54284L9 11L18 1.54284L16.538 -6.39074e-08L9 7.95462L1.46203 -7.22898e-07Z"
				fill={fill}
			/>
			<path
				d="M1.46203 13L-6.74398e-08 14.5428L9 24L18 14.5428L16.538 13L9 20.9546L1.46203 13Z"
				fill={fill}
			/>
		</svg>
	)
}
