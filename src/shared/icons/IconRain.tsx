export function IconRain({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 64 64"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M22 34h22a9 9 0 0 0 0-18 13 13 0 0 0-25-3A8 8 0 0 0 22 34Z"
				fill="currentColor"
				opacity="0.8"
			/>
			<g
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
				opacity="0.85"
			>
				<path d="M22 40l-2 6" />
				<path d="M30 40l-2 8" />
				<path d="M38 40l-2 6" />
				<path d="M46 40l-2 8" />
			</g>
		</svg>
	)
}
