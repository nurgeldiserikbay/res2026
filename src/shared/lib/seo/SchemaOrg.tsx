import Script from 'next/script'

interface SchemaOrgProps {
	baseUrl: string
	organizationName: string
	organizationDescription: string
}

export function SchemaOrg({ baseUrl, organizationName, organizationDescription }: SchemaOrgProps) {
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: organizationName,
		description: organizationDescription,
		url: baseUrl,
		logo: `${baseUrl}/imgs/logotype.svg`,
		sameAs: [
			// Добавьте ссылки на социальные сети, если они есть
		],
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'Customer Service',
			availableLanguage: ['Russian', 'Kazakh', 'English'],
		},
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'KZ',
		},
	}

	return (
		<Script
			id="organization-schema"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(organizationSchema),
			}}
		/>
	)
}
