import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	width?: number
	height?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconQuot({ width = 38, height = 32, title = 'Quote', className, color, ...props }: IconProps) {
	const fill = color ?? 'currentColor'
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 38 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<path
				d="M37.12 -1.52588e-05V10.496C37.12 22.144 32.512 29.312 23.296 32V25.856C27.648 23.936 30.08 19.712 30.336 13.184H23.296V-1.52588e-05H37.12ZM13.824 0.127983V10.496C13.824 22.144 9.21602 29.312 2.09808e-05 32V25.856C4.35202 23.936 6.78402 19.712 7.04002 13.312H2.09808e-05V0.127983H13.824Z"
				fill={fill}
			/>
		</svg>
	)
}
