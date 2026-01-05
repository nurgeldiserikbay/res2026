import { Container } from '@/shared/ui/container/container'

export function AboutKazBanner() {
	return (
		<>
			<section className="mt-[100px] h-[795px] bg-[url('/imgs/region-banner.png')] bg-cover bg-center">
				<Container className="flex h-full items-center justify-center text-center">
					<h1 className="text-[128px] leading-none font-bold text-white">Kazakhstan</h1>
				</Container>
			</section>
		</>
	)
}
