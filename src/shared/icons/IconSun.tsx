export function IconSun({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 64 64"
			fill="none"
			aria-hidden="true"
		>
			<circle
				cx="32"
				cy="32"
				r="12"
				fill="currentColor"
				opacity="0.9"
			/>
			<g
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
				opacity="0.9"
			>
				<path d="M32 6v8" />
				<path d="M32 50v8" />
				<path d="M6 32h8" />
				<path d="M50 32h8" />
				<path d="M13 13l6 6" />
				<path d="M45 45l6 6" />
				<path d="M51 13l-6 6" />
				<path d="M19 45l-6 6" />
			</g>
		</svg>
	)
}
