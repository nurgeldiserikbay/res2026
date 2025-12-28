import Link from 'next/dist/client/link'

import { IconFacebook } from '@/shared/icons/IconFacebook'
import { IconInstagram } from '@/shared/icons/IconInstagram'
import { IconX } from '@/shared/icons/IconX'
import { IconYouTube } from '@/shared/icons/IconYouTube'

export function HeaderSocial() {
	return (
		<div className="flex max-w-[156px] grow items-center justify-between gap-[10px]">
			<Link
				href="https://www.facebook.com/profile.php?id=100063571767189"
				target="_blank"
				aria-label="Facebook"
				className="group block"
			>
				<IconFacebook className="transition-duration-300 group-hover:text-muted text-white transition-colors" />
			</Link>
			<Link
				href="https://x.com/profile.php?id=100063571767189"
				target="_blank"
				aria-label="X"
				className="group block"
			>
				<IconX className="transition-duration-300 group-hover:text-muted! text-white transition-colors" />
			</Link>
			<Link
				href="https://www.instagram.com/profile.php?id=100063571767189"
				target="_blank"
				aria-label="Instagram"
				className="group block"
			>
				<IconInstagram className="transition-duration-300 group-hover:text-muted text-white transition-colors" />
			</Link>
			<Link
				href="https://www.youtube.com/profile.php?id=100063571767189"
				target="_blank"
				aria-label="YouTube"
				className="group block"
			>
				<IconYouTube className="transition-duration-300 group-hover:text-muted text-white transition-colors" />
			</Link>
		</div>
	)
}
