import Image from 'next/image'

import { Container } from '@/shared/ui/container/container'

interface AboutAttractionProps {
	aboutTitle?: string
	aboutText?: string
	aboutStats?: {
		title1?: string
		text1?: string
		title2?: string
		text2?: string
	}
	aboutImages?: string[]
}

export function AboutAttraction({ aboutTitle, aboutText, aboutStats, aboutImages }: AboutAttractionProps) {
	return (
		<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]">
			<Container className="3xl:items-stretch grid grid-cols-1 items-start gap-x-[60px] gap-y-[30px] lg:grid-cols-2">
				<div className="xl:flex-start flex w-full flex-col justify-between gap-[10px] md:flex-row lg:flex-col xl:flex-row">
					{aboutImages?.length && aboutImages[0] && <Image
						src={aboutImages[0]}
						alt="Astana Culture and Traditions"
						width={419}
						height={537}
						className="block w-full object-cover object-center max-[768px]:min-w-full md:w-[48.16%] lg:w-full xl:w-[48.16%] rounded-[12px]"
					/>}
					<div className="grid shrink-0 grid-cols-2 gap-[10px] md:flex md:w-[50.8%] md:flex-col lg:grid lg:w-full xl:flex xl:w-[50.8%]">
						{aboutImages?.length && aboutImages[1] && <Image
								src={aboutImages[1]}
								alt="Astana Culture and Traditions"
								width={442}
								height={265}
								className="rounded-[12px]"
							/>
						}
						{aboutImages?.length && aboutImages[2] && <Image
								src={aboutImages[2]}
								alt="Astana Culture and Traditions"
								width={442}
								height={265}
								className="rounded-[12px]"
							/>
						}
					</div>
				</div>
				<div className="w-full">
					{aboutTitle && <h2 className="text-text 3xl:text-[48px] mb-[30px] text-[32px] leading-[1.2] font-bold xl:text-[36px] 2xl:text-[30px]">
						{aboutTitle}
					</h2>}
					{aboutText && <p className="text-text mb-[30px] text-[16px] leading-normal font-normal whitespace-pre-line">
						{aboutText}
					</p>}
					{aboutStats?.title1 && aboutStats?.text1 && aboutStats?.title2 && aboutStats?.text2 && <div className="grid grid-cols-1 items-stretch gap-[10px] bg-white sm:grid-cols-2">
							<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
								<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap xl:text-[48px] 2xl:text-[64px]">
									{aboutStats.title1}
								</h3>
								<div className="text-secondary text-[16px] leading-normal font-normal">{aboutStats?.text1}</div>
							</div>
							<div className="flex flex-col items-center justify-start rounded-[12px] bg-linear-to-b from-[#E0EAB8] to-[#D4D8C300] px-[30px] pt-[26px] pb-[26px] text-center">
								<h3 className="text-secondary xs:text-[40px] text-[32px] leading-normal font-bold whitespace-nowrap xl:text-[48px] 2xl:text-[64px]">
									{aboutStats?.title2}
								</h3>
								<div className="text-secondary text-[16px] leading-normal font-normal">{aboutStats?.text2}</div>
							</div>
						</div>}
				</div>
			</Container>
		</section>
	)
}
