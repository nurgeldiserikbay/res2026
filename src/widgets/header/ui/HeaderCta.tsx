'use client'

import { useTranslations } from 'next-intl'

import { useRouter } from '@/i18n/navigation'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'

export function HeaderCta({ className }: { className?: string }) {
	const t = useTranslations()
	const router = useRouter()

	return (
		<ButtonTree
			className={['py-[12px]! before:bg-[url("/imgs/btn-mask-tree-yellow.svg")]! before:bg-blend-normal! 2xl:py-[20px]!', className].join(
				' ',
			)}
			onClick={() => router.push('/register')}
		>
			{t('commands.register')}
		</ButtonTree>
	)
}
