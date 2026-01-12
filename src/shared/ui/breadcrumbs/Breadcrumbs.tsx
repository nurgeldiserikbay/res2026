import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: { label: string; href: string }[] }) {
	const t = useTranslations()

	return (
		<div className="flex items-center justify-center gap-[30px]">
			<Link
				key="main"
				href="/"
				className="font-regular text-[14px] leading-none text-white"
			>
				\\{t('titles.main')}
			</Link>

			{breadcrumbs.map((breadcrumb) => (
				<Link
					key={breadcrumb.href}
					href={breadcrumb.href}
					className="font-regular text-[14px] leading-none text-white/50"
				>
					\\{breadcrumb.label}
				</Link>
			))}
		</div>
	)
}
