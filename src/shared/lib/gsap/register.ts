import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

let registered = false

export function registerGSAP() {
	if (registered) return

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

		registered = true
	}
}
