import Image from 'next/image'

import { Container } from '@/shared/ui/container/container'

interface InfoInsideAttractionProps {
	insideTitle?: string
	insideSubtitle?: string
	insideText?: string
	insideImage?: string
}

export function InfoInsideAttraction({ insideTitle, insideSubtitle, insideText, insideImage }: InfoInsideAttractionProps) {
	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="grid grid-cols-1 gap-x-[60px] gap-y-[30px] lg:grid-cols-2">
				<div className="flex flex-col items-start justify-start">
					 {insideTitle && <h2 className="text-text 3xl:text-[48px] mb-[30px] align-top text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:mb-[60px] 2xl:text-[30px]">
						{insideTitle}
					</h2>}
					{insideSubtitle && <p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:mb-[60px] 2xl:text-[24px]">
						{insideSubtitle}
					</p>}
					{insideText && <p className="text-text text-[16px] leading-normal font-normal whitespace-pre-line">
						{insideText}
					</p>}
				</div>
				{insideImage && <Image
						src={insideImage}
						alt="Astana Culture and Traditions"
						width={870}
						height={696}
						className="rounded-[12px]"
					/>}
			</Container>
		</section>
	)
}
