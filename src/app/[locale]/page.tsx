import { useTranslations } from 'next-intl'

import styles from './page.module.css'

export default function Home() {
	const t = useTranslations('meta')

	return (
		<div className={styles.page}>
			<h1>{t('title')}</h1>
			<span className="text-blue text-hover:red border-red w-10 cursor-default border-solid text-5xl">Nextjs</span>
			<div className="i-carbon-car inline-block text-4xl" />
			<button className="bg-blue rounded-[10px] p-[10px] text-red-500">Button</button>
		</div>
	)
}
