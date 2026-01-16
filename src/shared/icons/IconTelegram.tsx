import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconTelegram({ size = 24, color, title = 'Facebook', className, ...props }: IconProps) {
	const fill = color ?? 'currentColor'

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width={size}
			height={size}
			viewBox="0 0 512 512"
			style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', fillRule: 'evenodd', clipRule: 'evenodd' }}
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			<g>
				<path
					style={{ opacity: 0.987 }}
					fill={fill}
					d="M 511.5,59.5 C 511.5,65.8333 511.5,72.1667 511.5,78.5C 484.753,202.724 457.92,327.058 431,451.5C 422.239,470.076 408.739,474.243 390.5,464C 351.067,435.533 311.9,406.7 273,377.5C 251.864,396.968 231.031,416.802 210.5,437C 204.914,441.361 198.581,443.195 191.5,442.5C 194.191,402.495 197.024,362.495 200,322.5C 274.315,256.85 347.982,190.517 421,123.5C 421.667,122.5 421.667,121.5 421,120.5C 419.43,119.642 417.763,118.975 416,118.5C 411.898,119.301 408.064,120.801 404.5,123C 314.249,179.375 224.083,235.875 134,292.5C 94.255,279.808 54.4217,267.308 14.5,255C 8.46584,252.771 3.46584,249.271 -0.5,244.5C -0.5,241.167 -0.5,237.833 -0.5,234.5C 2.33922,229.558 6.33922,225.724 11.5,223C 166.343,162.941 321.343,103.274 476.5,44C 493.551,37.87 505.218,43.0367 511.5,59.5 Z"
				/>
			</g>
		</svg>
	)
}
