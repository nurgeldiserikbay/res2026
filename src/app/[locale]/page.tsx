import { useTranslations } from 'next-intl'

import styles from './page.module.css'

export default function Home() {
	const t = useTranslations('meta')

	return (
		<div className={styles.page}>
			<h1>{t('title')}</h1>;
		</div>
	)
}
