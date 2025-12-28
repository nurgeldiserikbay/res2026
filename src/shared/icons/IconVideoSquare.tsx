import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	title?: string
	color?: string
}

export function IconVideoSquare({ size = 24, color = 'currentColor', title = 'Video square', className, ...props }: IconProps) {
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
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke={fill}
				strokeWidth="1.5"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
			<path
				d="M9.09998 12V10.52C9.09998 8.60999 10.45 7.83999 12.1 8.78999L13.38 9.52999L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.09998 15.38 9.09998 13.48V12Z"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
		</svg>
	)
}
