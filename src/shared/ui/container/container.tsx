export function Container({
	className = '',
	ref,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement> }) {
	return (
		<div
			className={`3xl:max-w-[1800px] mx-auto box-border max-w-[1832px] px-[16px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1320px] 2xl:max-w-[1536px] ${className}`}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	)
}
