import Image from 'next/image'

import { Container } from '@/shared/ui/container/container'

export function ColumnInitiatives({
	title,
	items,
	img,
}: {
	title: string
	items: { id: number; title: string; description: string }[]
	img: string
}) {
	return (
		<section className="bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px] 3xl:pt-[100px]">
			<Container className="flex items-start justify-between gap-x-[60px]">
				<div className="max-w-[788px]">
					<h2 className="mb-[30px] text-left text-[32px] leading-normal font-bold">{title}</h2>

					<Image
						src={img}
						alt={title}
						width={384}
						height={500}
						className="mb-[60px] block w-full sm:w-auto lg:hidden"
					/>

					<div>
						{items.map((item) => (
							<div
								key={item.id}
								className="mb-[60px] last:mb-0"
							>
								<h3 className="mb-[10px] text-[20px] leading-normal font-bold text-text">{item.title}</h3>
								<p className="text-justify text-[16px] leading-normal font-normal text-text">{item.description}</p>
							</div>
						))}
					</div>
				</div>
				<Image
					src={img}
					alt={title}
					width={870}
					height={1132}
					className="block-cover hidden h-auto w-full rounded-[12px] lg:block lg:max-w-[450px] xl:max-w-[590px] 2xl:max-w-[720px] 3xl:max-w-[870px]"
				/>
			</Container>
		</section>
	)
}
