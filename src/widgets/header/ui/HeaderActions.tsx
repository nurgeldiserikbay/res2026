import { HeaderCta } from './HeaderCta'
import { HeaderLang } from './HeaderLang'
import { HeaderSearch } from './HeaderSearch'
import { HeaderSocial } from './HeaderSocial'

export function HeaderActions() {
	return (
		<div className="flex max-w-[556px] grow items-center justify-between gap-[10px]">
			<div className="flex max-w-[210px] grow items-center justify-between gap-[10px]">
				<HeaderSocial />
				<HeaderSearch />
			</div>
			<div className="flex items-center gap-[10px]">
				<HeaderLang />
				<HeaderCta />
			</div>
		</div>
	)
}
