import { IconCloudy } from '@/shared/icons/IconCloudy'
import { IconDrizzle } from '@/shared/icons/IconDrizzle'
import { IconFog } from '@/shared/icons/IconFog'
import { IconPartlyCloudy } from '@/shared/icons/IconPartlyCloudy'
import { IconRain } from '@/shared/icons/IconRain'
import { IconSnow } from '@/shared/icons/IconSnow'
import { IconSun } from '@/shared/icons/IconSun'
import { IconThunder } from '@/shared/icons/IconThunder'

export function WeatherIcon({ code, className }: { code: number; className?: string }) {
	// WMO weather interpretation codes (как у Open-Meteo)
	if (code === 0) return <IconSun className={className} />
	if (code === 1 || code === 2) return <IconPartlyCloudy className={className} />
	if (code === 3) return <IconCloudy className={className} />

	if (code === 45 || code === 48) return <IconFog className={className} />

	// Drizzle
	if (code >= 51 && code <= 57) return <IconDrizzle className={className} />

	// Rain
	if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return <IconRain className={className} />

	// Snow
	if ((code >= 71 && code <= 77) || code === 85 || code === 86) return <IconSnow className={className} />

	// Thunderstorm
	if (code >= 95 && code <= 99) return <IconThunder className={className} />

	// Fallback
	return <IconCloudy className={className} />
}
