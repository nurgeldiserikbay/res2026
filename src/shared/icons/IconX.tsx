import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconX({ size = 24, color, title = 'X icon', className, ...props }: IconProps) {
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
				d="M18.3263 1.9039H21.6998L14.3297 10.3274L23 21.7899H16.2112L10.894 14.8379L4.80995 21.7899H1.43443L9.31743 12.78L1 1.9039H7.96111L12.7674 8.25823L18.3263 1.9039ZM17.1423 19.7707H19.0116L6.94539 3.81703H4.93946L17.1423 19.7707Z"
				fill={fill}
			/>
		</svg>
	)
}
