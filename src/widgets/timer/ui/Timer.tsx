'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useRef, useState } from 'react'

type TimerProps = {
	targetDate: Date | string | number
	animateOnMount?: boolean
}

type Parts = { days: number; hours: number; minutes: number; seconds: number }

function clamp0(n: number) {
	return n < 0 ? 0 : n
}

function getRemainingParts(targetMs: number): Parts {
	const diff = clamp0(targetMs - Date.now())
	const totalSeconds = Math.floor(diff / 1000)

	return {
		days: Math.floor(totalSeconds / 86400),
		hours: Math.floor((totalSeconds % 86400) / 3600),
		minutes: Math.floor((totalSeconds % 3600) / 60),
		seconds: totalSeconds % 60,
	}
}

function pad2(n: number) {
	return String(n).padStart(2, '0')
}

function animateNumber(from: number, to: number, durationMs: number, onUpdate: (v: number) => void, onDone?: () => void) {
	const start = performance.now()
	const diff = to - from

	const tick = (t: number) => {
		const p = Math.min(1, (t - start) / durationMs)
		const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
		onUpdate(Math.round(from + diff * eased))
		if (p < 1) requestAnimationFrame(tick)
		else onDone?.()
	}

	requestAnimationFrame(tick)
}

export function Timer({ targetDate, animateOnMount = true }: TimerProps) {
	const t = useTranslations()

	const targetMs = useMemo(() => {
		const ms = targetDate instanceof Date ? targetDate.getTime() : new Date(targetDate).getTime()
		return ms
	}, [targetDate])

	const [display, setDisplay] = useState<Parts>(() => ({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	}))

	const didAnimateRef = useRef(false)
	const intervalRef = useRef<number | null>(null)
	const rafRef = useRef<number | null>(null)

	useEffect(() => {
		if (Number.isNaN(targetMs)) return

		// cleanup previous timers
		if (intervalRef.current) {
			window.clearInterval(intervalRef.current)
			intervalRef.current = null
		}
		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current)
			rafRef.current = null
		}

		const startCountdown = () => {
			intervalRef.current = window.setInterval(() => {
				setDisplay(getRemainingParts(targetMs))
			}, 1000)
		}

		const initial = getRemainingParts(targetMs)

		if (animateOnMount && !didAnimateRef.current) {
			didAnimateRef.current = true

			// ВАЖНО: setState не синхронно — а через rAF
			rafRef.current = requestAnimationFrame(() => {
				setDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 })

				const duration = 900
				let doneCount = 0
				const done = () => {
					doneCount += 1
					if (doneCount === 4) {
						// после анимации — сразу выставим актуальные значения и запустим отсчёт
						setDisplay(getRemainingParts(targetMs))
						startCountdown()
					}
				}

				animateNumber(
					0,
					initial.days,
					duration,
					(v) => {
						setDisplay((p) => (p.days === v ? p : { ...p, days: v }))
					},
					done,
				)

				animateNumber(
					0,
					initial.hours,
					duration,
					(v) => {
						setDisplay((p) => (p.hours === v ? p : { ...p, hours: v }))
					},
					done,
				)

				animateNumber(
					0,
					initial.minutes,
					duration,
					(v) => {
						setDisplay((p) => (p.minutes === v ? p : { ...p, minutes: v }))
					},
					done,
				)

				animateNumber(
					0,
					initial.seconds,
					duration,
					(v) => {
						setDisplay((p) => (p.seconds === v ? p : { ...p, seconds: v }))
					},
					done,
				)
			})

			return () => {
				if (intervalRef.current) window.clearInterval(intervalRef.current)
				if (rafRef.current) cancelAnimationFrame(rafRef.current)
			}
		}

		// без анимации — тоже не делаем синхронный setState, кинем в microtask/rAF
		rafRef.current = requestAnimationFrame(() => {
			setDisplay(getRemainingParts(targetMs))
			startCountdown()
		})

		return () => {
			if (intervalRef.current) window.clearInterval(intervalRef.current)
			if (rafRef.current) cancelAnimationFrame(rafRef.current)
		}
	}, [targetMs, animateOnMount])

	const items: { value: number; label: string; pad: boolean; x: number; y: number }[] = [
		{ value: display.days, label: t('labels.days'), pad: false, x: -25, y: 80 },
		{ value: display.hours, label: t('labels.hours'), pad: true, x: -10, y: 80 },
		{ value: display.minutes, label: t('labels.minutes'), pad: true, x: 10, y: 80 },
		{ value: display.seconds, label: t('labels.seconds'), pad: true, x: 25, y: 80 },
	] as const

	const rootRef = useRef<HTMLDivElement>(null)
	useGSAP(
		() => {
			if (!rootRef.current) return

			const itemsElements = rootRef.current.querySelectorAll<HTMLElement>('[data-timer-item]')
			if (!itemsElements.length) return

			Array.from(itemsElements).forEach((item, index: number) => {
				const settings = items[index]

				if (!settings) return

				gsap.fromTo(
					item,
					{
						y: settings.y,
						x: settings.x,
						opacity: 0,
					},
					{
						y: 0,
						x: 0,
						opacity: 1,
						delay: 0.35,
						duration: 1,
						ease: 'power2.out',
					},
				)
			})
		},
		{ scope: rootRef, dependencies: [] },
	)

	return (
		<div
			ref={rootRef}
			className="flex w-full max-w-[674px] items-center justify-between gap-[20px]"
		>
			{items.map((it, index) => (
				<div
					key={it.label}
					data-timer-item={index}
					className="flex h-[136px] min-w-[131px] translate-y-[24px] transform flex-col items-center justify-between rounded-[12px] bg-[#ffffff08] p-[12px] text-center text-[20px] leading-[1.2] font-light text-white lowercase opacity-0 backdrop-blur-[3px]"
				>
					<div
						className="mb-[10px] align-top text-[64px] leading-[1.2] font-bold tabular-nums"
						style={{
							background: 'linear-gradient(to bottom, #FFFFFF 0%, #BACDA6 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
							color: 'transparent',
						}}
					>
						{it.pad ? pad2(it.value) : String(it.value)}
					</div>
					<div>{it.label}</div>
				</div>
			))}
		</div>
	)
}
