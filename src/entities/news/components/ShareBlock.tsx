'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { IconFacebook } from '@/shared/icons/IconFacebook'
import { IconInstagram } from '@/shared/icons/IconInstagram'
import { IconTelegram } from '@/shared/icons/IconTelegram'
import { IconX } from '@/shared/icons/IconX'

interface ShareBlockProps {
	title: string
	url: string
	className?: string
}

export function ShareBlock({ title, url, className = '' }: ShareBlockProps) {
	const t = useTranslations()
	const [copied, setCopied] = useState(false)

	const encodedUrl = encodeURIComponent(url)
	const encodedTitle = encodeURIComponent(title)

	const shareLinks = {
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
		telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
	}

	const handleShare = (platform: keyof typeof shareLinks, e: React.MouseEvent) => {
		e.preventDefault()
		window.open(shareLinks[platform], '_blank', 'width=600,height=400,noopener,noreferrer')
	}

	const handleInstagramShare = async (e: React.MouseEvent) => {
		e.preventDefault()
		try {
			await navigator.clipboard.writeText(url)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch {
			// Fallback for older browsers
			const textArea = document.createElement('textarea')
			textArea.value = url
			textArea.style.position = 'fixed'
			textArea.style.opacity = '0'
			document.body.appendChild(textArea)
			textArea.select()
			try {
				document.execCommand('copy')
				setCopied(true)
				setTimeout(() => setCopied(false), 2000)
			} catch (error) {
				console.error('Failed to copy:', error)
			}
			document.body.removeChild(textArea)
		}
	}

	return (
		<div className={['flex flex-col gap-[20px]', className].join(' ')}>
			<h3 className="text-text text-[18px] leading-none font-bold lg:text-[20px] 2xl:text-[24px]">{t('commands.share')}</h3>
			<div className="flex items-center gap-[20px]">
				<button
					onClick={(e) => handleShare('facebook', e)}
					aria-label="Facebook"
					className="group hover:text-muted flex cursor-pointer items-center justify-center transition-colors"
				>
					<IconFacebook
						size={32}
						className="transition-duration-300 group-hover:text-muted text-text transition-colors"
						aria-hidden="true"
					/>
				</button>
				<button
					onClick={(e) => handleShare('x', e)}
					aria-label="X (Twitter)"
					className="group hover:text-muted flex cursor-pointer items-center justify-center transition-colors"
				>
					<IconX
						size={32}
						className="transition-duration-300 group-hover:text-muted text-text transition-colors"
						aria-hidden="true"
					/>
				</button>
				<button
					onClick={(e) => handleShare('telegram', e)}
					aria-label="Telegram"
					className="group hover:text-muted flex cursor-pointer items-center justify-center transition-colors"
				>
					<IconTelegram
						size={32}
						className="transition-duration-300 group-hover:text-muted text-text transition-colors"
						aria-hidden="true"
					/>
				</button>
				<button
					onClick={handleInstagramShare}
					aria-label="Instagram"
					className="group hover:text-muted relative flex cursor-pointer items-center justify-center transition-colors"
					title="Instagram"
				>
					<IconInstagram
						size={32}
						className="transition-duration-300 group-hover:text-muted text-text transition-colors"
						aria-hidden="true"
					/>
					{copied && (
						<span className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs whitespace-nowrap text-white">
							Скопировано
						</span>
					)}
				</button>
			</div>
		</div>
	)
}
