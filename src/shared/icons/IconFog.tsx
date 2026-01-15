export function IconFog({ className }: { className?: string }) {
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
				opacity="0.75"
			/>
			<g
				stroke="currentColor"
				strokeWidth="3"
				strokeLinecap="round"
				opacity="0.6"
			>
				<path d="M14 42h36" />
				<path d="M10 48h44" />
				<path d="M16 54h32" />
			</g>
		</svg>
	)
}
