import { Container } from '@/shared/ui/container/container'

export function SingleNationalBanner({ title, subtitle, text }: { title: string; subtitle: string; text: string }) {
	return (
		<section className="bg-white pt-[50px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px]">
			<Container>
				<h2 className="mb-[30px] text-[32px] leading-normal font-bold text-text lg:mb-[50px]">{title}</h2>

				<div className="flex min-h-[430px] flex-col items-center justify-center rounded-[12px] bg-[url(/imgs/trees.webp)] bg-cover bg-center bg-no-repeat px-[28px] py-[40px] md:min-h-[364px]">
					<h5 className="mb-[10px] text-center text-[36px] leading-normal font-bold text-white">{subtitle}</h5>
					<p className="mx-auto max-w-[496px] text-center text-[16px] leading-normal font-normal text-white">{text}</p>
				</div>
			</Container>
		</section>
	)
}
