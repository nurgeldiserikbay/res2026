import * as React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
	/** px */
	size?: number
	/** если не задано — используется currentColor (цвет из CSS) */
	color?: string
	title?: string
}

export function IconMail({ size = 18, color, title = 'Mail', className }: IconProps) {
	const fill = color ?? 'currentColor'

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-label={title}
		>
			<path
				d="M9 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V8.625"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V8.625"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.4075 11.0777L11.7525 13.7327C11.6475 13.8377 11.55 14.0327 11.5275 14.1752L11.385 15.1877C11.3325 15.5552 11.5875 15.8102 11.955 15.7577L12.9675 15.6152C13.11 15.5927 13.3125 15.4952 13.41 15.3902L16.065 12.7352C16.5225 12.2777 16.74 11.7452 16.065 11.0702C15.3975 10.4027 14.865 10.6202 14.4075 11.0777Z"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.4075 11.0777L11.7525 13.7327C11.6475 13.8377 11.55 14.0327 11.5275 14.1752L11.385 15.1877C11.3325 15.5552 11.5875 15.8102 11.955 15.7577L12.9675 15.6152C13.11 15.5927 13.3125 15.4952 13.41 15.3902L16.065 12.7352C16.5225 12.2777 16.74 11.7452 16.065 11.0702C15.3975 10.4027 14.865 10.6202 14.4075 11.0777Z"
				stroke={fill}
				strokeOpacity="0.2"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.025 11.46C14.25 12.27 14.88 12.9 15.69 13.125"
				stroke={fill}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.025 11.46C14.25 12.27 14.88 12.9 15.69 13.125"
				stroke={fill}
				strokeOpacity="0.2"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
