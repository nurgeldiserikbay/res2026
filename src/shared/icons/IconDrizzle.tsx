export function IconDrizzle({ className }: { className?: string }) {
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
				opacity="0.75"
			>
				<path d="M24 40v6" />
				<path d="M32 40v6" />
				<path d="M40 40v6" />
			</g>
		</svg>
	)
}
