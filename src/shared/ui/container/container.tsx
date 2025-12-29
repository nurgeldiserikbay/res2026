export function Container({
	className = '',
	ref,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement> }) {
	return (
		<div
			className={`mx-auto box-border max-w-[1832px] px-[16px] ${className}`}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	)
}
