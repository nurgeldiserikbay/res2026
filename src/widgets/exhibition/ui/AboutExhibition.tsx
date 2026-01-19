import { Container } from '@/shared/ui/container/container'

import { PresidentAboutExb } from './PresidentAboutExb'

export function AboutExhibition() {
	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="flex flex-wrap items-center justify-between gap-x-[60px] gap-y-[30px] lg:flex-nowrap">
				<div>
					<PresidentAboutExb />
				</div>
			</Container>
		</section>
	)
}
