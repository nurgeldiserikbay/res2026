declare module '*.css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module 'swiper/css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare global {
	interface Window {
		ym?: (counterId: number | string, method: 'init' | 'hit' | 'reachGoal' | 'params', params?: string | Record<string, unknown>) => void
	}
}
