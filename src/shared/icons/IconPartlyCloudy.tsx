export function IconPartlyCloudy({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 64 64"
			fill="none"
			aria-hidden="true"
		>
			<circle
				cx="24"
				cy="24"
				r="9"
				fill="currentColor"
				opacity="0.9"
			/>
			<path
				d="M26 48h22a9 9 0 0 0 0-18 13 13 0 0 0-25-3A8 8 0 0 0 26 48Z"
				fill="currentColor"
				opacity="0.75"
			/>
		</svg>
	)
}
