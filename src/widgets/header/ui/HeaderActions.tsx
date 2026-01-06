import { appConfig } from '@/shared/config/app.config'

import { HeaderCta } from './HeaderCta'
import { HeaderLang } from './HeaderLang'
import { HeaderMobileNav } from './HeaderMobileNav'
import { HeaderSearch } from './HeaderSearch'
import { HeaderSocial } from './HeaderSocial'

export function HeaderActions() {
	return (
		<div className="flex grow items-center justify-end gap-[10px] md:max-w-[456px] md:justify-end lg:max-w-[156px]">
			<div className="hidden max-w-[210px] grow items-center justify-between gap-[10px] md:flex">
				{!appConfig.isProduction && <HeaderSocial />}
				{!appConfig.isProduction && <HeaderSearch />}
			</div>
			<div className="flex items-center gap-[30px]">
				<HeaderLang />
				{!appConfig.isProduction && <HeaderCta className="max-[441px]:hidden" />}
				<HeaderMobileNav />
			</div>
		</div>
	)
}
