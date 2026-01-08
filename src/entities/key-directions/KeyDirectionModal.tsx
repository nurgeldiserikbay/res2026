import { IconClose } from '@/shared/icons/IconClose'
import { ModalShell } from '@/shared/ui/modal/ModalShell'

export function KeyDirectionModal({ open, onClose, title, text }: { open: boolean; onClose: () => void; title: string; text: string }) {
	return (
		<ModalShell
			open={open}
			onClose={onClose}
			maxWidthClassName="max-w-[calc(100%-32px)] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[960px]"
			panelClassName="rounded-[12px] pt-[24px] pb-[50px] px-[16px] md:pt-[32px] md:pb-[32px] md:px-[40px] lg:pt-[44px] lg:pb-[44px] lg:px-[60px] xl:pb-[93px] xl:px-[78px] bg-primary-dark bg-[url('/imgs/modal-bg.png')] bg-cover bg-center bg-no-repeat"
		>
			<div>
				<button
					onClick={onClose}
					className="mb-[24px] cursor-pointer md:mb-[32px] lg:mb-[48px]"
				>
					<IconClose className="size-[20px] text-white md:size-[22px] lg:size-[24px]" />
				</button>

				<h2
					className="mb-[16px] text-[24px] leading-[1.2] font-normal text-white md:mb-[18px] md:text-[32px] lg:mb-[30px] lg:text-[40px] xl:text-[48px]"
					dangerouslySetInnerHTML={{ __html: title }}
				></h2>

				<p className="text-[14px] leading-normal font-normal text-white md:text-[16px]">{text}</p>
			</div>
		</ModalShell>
	)
}
