import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	width?: number | string
	height?: number | string
	radius?: number
	strokeWidth?: number
	fromOpacity?: number
	midOpacity?: number
	toOpacity?: number
	x1?: string
	y1?: string
	x2?: string
	y2?: string
	title?: string
	id?: string
	glow?: boolean
}

export function IconGradBorder({
	width = '100%',
	height = '100%',
	radius = 12,
	strokeWidth = 2,
	fromOpacity = 0.42,
	midOpacity = 0.18,
	toOpacity = 0,
	x1 = '0%',
	y1 = '35%',
	x2 = '100%',
	y2 = '65%',
	glow = true,
	title = 'Grad border',
	id,
	className,
	...props
}: IconProps) {
	const autoId = React.useId()
	const gradId = id ?? `grad-${autoId}`
	const glowId = `glow-${autoId}`

	const vbW = typeof width === 'number' ? width : 100
	const vbH = typeof height === 'number' ? height : 100
	const half = strokeWidth / 2

	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${vbW} ${vbH}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			className={className}
			role={props.role ?? 'img'}
			aria-label={props['aria-label'] ?? title}
			{...props}
		>
			{/* Glow (мягкая подсветка) */}
			{glow && (
				<rect
					x={half}
					y={half}
					width={vbW - strokeWidth}
					height={vbH - strokeWidth}
					rx={Math.max(0, radius - half)}
					stroke={`url(#${gradId})`}
					strokeWidth={strokeWidth}
					opacity={0.55}
					filter={`url(#${glowId})`}
				/>
			)}

			{/* Main border */}
			<rect
				x={half}
				y={half}
				width={vbW - strokeWidth}
				height={vbH - strokeWidth}
				rx={Math.max(0, radius - half)}
				stroke={`url(#${gradId})`}
				strokeWidth={strokeWidth}
			/>

			<defs>
				<linearGradient
					id={gradId}
					x1={x1}
					y1={y1}
					x2={x2}
					y2={y2}
				>
					<stop
						offset="0"
						stopColor="white"
						stopOpacity={fromOpacity}
					/>
					<stop
						offset="0.55"
						stopColor="white"
						stopOpacity={midOpacity}
					/>
					<stop
						offset="1"
						stopColor="white"
						stopOpacity={toOpacity}
					/>
				</linearGradient>

				{glow && (
					<filter
						id={glowId}
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
					>
						<feGaussianBlur
							stdDeviation="1.4"
							result="blur"
						/>
						<feMerge>
							<feMergeNode in="blur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				)}
			</defs>
		</svg>
	)
}
