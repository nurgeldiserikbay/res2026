'use client'

import { useTranslations } from 'next-intl'

import { useRouter } from '@/i18n/navigation'
import { ButtonTree } from '@/shared/ui/button/ButtonTree'

export function HeaderCta() {
	const t = useTranslations()
	const router = useRouter()

	return <ButtonTree onClick={() => router.push('/register')}>{t('commands.register')}</ButtonTree>
}
