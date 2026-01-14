import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: { label: string; href: string }[] }) {
	const t = useTranslations()

	// Функция для извлечения пути без локали из href
	const getPathWithoutLocale = (href: string): string => {
		// Если href начинается с /ru/, /kk/ или /en/, убираем префикс локали
		const localePattern = /^\/(ru|kk|en)(\/|$)/
		if (localePattern.test(href)) {
			const path = href.replace(localePattern, '/')
			return path || '/'
		}
		return href
	}

	return (
		<div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-[10px]">
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
					href={getPathWithoutLocale(breadcrumb.href)}
					className="font-regular max-w-[230px] overflow-hidden text-[14px] leading-none text-ellipsis whitespace-nowrap text-white/50 md:max-w-full"
				>
					\\{breadcrumb.label}
				</Link>
			))}
		</div>
	)
}
