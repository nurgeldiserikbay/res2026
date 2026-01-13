import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconArrDown({ size = 31, color, title = 'Arrow down', className, ...props }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 31 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<path
				d="M25.73 11.5604L17.3084 19.9821C16.3138 20.9767 14.6863 20.9767 13.6917 19.9821L5.27002 11.5604"
				stroke={color ?? 'currentColor'}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
