import Image from 'next/image'

import { Link } from '@/i18n/navigation'

export function HeaderLogo() {
	return (
		<Link
			href="/"
			className="block"
		>
			<Image
				src="/imgs/logotype.svg"
				alt="Logo"
				width={74}
				height={65}
				className="block"
			/>
		</Link>
	)
}
