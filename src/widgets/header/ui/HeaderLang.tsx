'use client'

import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher'

export function HeaderLang() {
	return (
		<div className="relative flex items-center">
			<LanguageSwitcher />
		</div>
	)
}
