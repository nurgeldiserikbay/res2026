import Link from 'next/dist/client/link'

import { IconFacebook } from '@/shared/icons/IconFacebook'
import { IconInstagram } from '@/shared/icons/IconInstagram'
import { IconTelegram } from '@/shared/icons/IconTelegram'
import { IconX } from '@/shared/icons/IconX'
import { IconYouTube } from '@/shared/icons/IconYouTube'

export function FooterSocial() {
	return (
		<div className="xs:gap-[20px] flex w-full max-w-[200px] items-center justify-between gap-[10px]">
			<Link
				href="https://www.facebook.com/profile.php?id=61586761100536"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Facebook"
				className="group block"
			>
				<IconFacebook
					className="transition-duration-300 group-hover:text-muted text-text xs:w-[24px] xs:h-[24px] h-[20px] w-[20px] transition-colors"
					aria-hidden="true"
				/>
			</Link>
			<Link
				href="https://x.com/res_2026?s=21"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="X"
				className="group block"
			>
				<IconX
					className="transition-duration-300 group-hover:text-muted! text-text xs:w-[24px] xs:h-[24px] h-[20px] w-[20px] transition-colors"
					aria-hidden="true"
				/>
			</Link>
			<Link
				href="https://www.instagram.com/res_2026?igsh=MTlzMXMyODZwb29mdg=="
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram"
				className="group block"
			>
				<IconInstagram
					className="transition-duration-300 group-hover:text-muted text-text xs:w-[24px] xs:h-[24px] h-[20px] w-[20px] transition-colors"
					aria-hidden="true"
				/>
			</Link>
			<Link
				href="https://www.youtube.com/channel/UCsmkooHN4DnsOsvQnGs1nTg"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="YouTube"
				className="group block"
			>
				<IconYouTube
					className="transition-duration-300 group-hover:text-muted text-text xs:w-[24px] xs:h-[24px] h-[20px] w-[20px] transition-colors"
					aria-hidden="true"
				/>
			</Link>
			<Link
				href="https://t.me/res_2026"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Telegram"
				className="group block"
			>
				<IconTelegram
					className="transition-duration-300 group-hover:text-muted text-text xs:w-[24px] xs:h-[24px] h-[20px] w-[20px] transition-colors"
					aria-hidden="true"
				/>
			</Link>
		</div>
	)
}
