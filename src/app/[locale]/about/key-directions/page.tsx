'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'

import { IKeyDirectionItem, KeyDirection } from '@/entities/key-directions/KeyDirection'
import { KeyDirectionModal } from '@/entities/key-directions/KeyDirectionModal'
import { keyDirections } from '@/entities/key-directions/mocks'
import { Locale } from '@/shared/config/i18n'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { localize } from '@/shared/utils/localize'

export default function Page() {
	const t = useTranslations()
	const locale = useLocale() as Locale
	const [direction, setDirection] = useState<IKeyDirectionItem | null>(null)

	const items = keyDirections.map((direction) => ({
		id: direction.id,
		image: direction.image,
		title: localize(direction.title, locale),
		description: localize(direction.description, locale),
		href: direction.link,
	}))

	return (
		<>
			<PageBanner
				title={t('pages.keyDirections.title')}
				breadcrumbs={[
					{ label: t('pages.about.title'), href: '/about' },
					{ label: t('pages.keyDirections.title'), href: '/about/key-directions' },
				]}
				useMinHeight
			/>

			<section className="3xl:pt-[100px] bg-white pt-[50px] md:pt-[60px] 2xl:pt-[80px]">
				<Container className="grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{items.map((direction) => (
						<KeyDirection
							key={direction.id}
							image={direction.image}
							title={direction.title}
							description={direction.description}
							href={direction.href}
							onClick={() => setDirection(direction as unknown as IKeyDirectionItem)}
						/>
					))}
				</Container>
			</section>

			{direction && (
				<KeyDirectionModal
					open={Boolean(direction)}
					onClose={() => setDirection(null)}
					title={direction.title}
					text={direction.description ?? ''}
				/>
			)}
		</>
	)
}
