export function Container({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={`mx-auto box-border max-w-[1832px] px-[16px] ${className}`}
			{...props}
		/>
	)
}
