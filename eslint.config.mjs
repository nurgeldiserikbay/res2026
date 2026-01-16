import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import boundaries from 'eslint-plugin-boundaries'
import security from 'eslint-plugin-security'
import sonarjs from 'eslint-plugin-sonarjs'

const FSD_LAYERS = ['app', 'widgets', 'features', 'entities', 'shared']

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'node_modules/**',
		'next-env.d.ts',
	]),
	prettier,
	{
		files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
		plugins: {
			boundaries,
			security,
			sonarjs,
		},
		settings: {
			'boundaries/elements': FSD_LAYERS.map((layer) => ({
				type: layer,
				pattern: `src/${layer}/**`,
			})),
		},
		rules: {
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'type'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
					pathGroups: [{ pattern: '@/**', group: 'internal' }],
					pathGroupsExcludedImportTypes: ['builtin'],
				},
			],
			'import/no-duplicates': 'error',
			'import/no-cycle': ['warn', { maxDepth: 3 }],

			// Accessibility & SEO Rules
			// Images & Media
			'jsx-a11y/alt-text': [
				'error',
				{
					elements: ['img', 'object', 'area', 'input[type="image"]'],
					img: ['Image'],
					object: ['Object'],
					area: ['Area'],
					'input[type="image"]': ['InputImage'],
				},
			],
			'jsx-a11y/img-redundant-alt': 'error',
			'jsx-a11y/media-has-caption': 'warn',

			// ARIA attributes
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-proptypes': 'error',
			'jsx-a11y/aria-unsupported-elements': 'error',
			'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
			'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

			// Links & Navigation
			'jsx-a11y/anchor-is-valid': [
				'error',
				{
					components: ['Link'],
					specialLink: ['hrefLeft', 'hrefRight'],
					aspects: ['noHref', 'invalidHref', 'preferButton'],
				},
			],
			'jsx-a11y/anchor-has-content': 'error',
			'jsx-a11y/click-events-have-key-events': 'error',
			'jsx-a11y/no-static-element-interactions': [
				'error',
				{
					handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
				},
			],

			// Forms & Labels
			'jsx-a11y/label-has-associated-control': [
				'error',
				{
					labelComponents: [],
					labelAttributes: [],
					controlComponents: [],
					assert: 'both',
					depth: 25,
				},
			],
			'jsx-a11y/label-has-for': 'off', // Deprecated, replaced by label-has-associated-control
			'jsx-a11y/control-has-associated-label': [
				'error',
				{
					labelAttributes: ['label'],
					controlComponents: [],
					ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
					ignoreRoles: ['grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'row', 'tablist', 'toolbar', 'tree', 'treegrid'],
					depth: 5,
				},
			],

			// Headings
			'jsx-a11y/heading-has-content': ['error', { components: [''] }],

			// Interactive elements
			'jsx-a11y/interactive-supports-focus': 'error',
			'jsx-a11y/no-noninteractive-element-interactions': [
				'error',
				{
					handlers: ['onClick', 'onError', 'onLoad', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
					alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
					body: ['onError', 'onLoad'],
					dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
					iframe: ['onError', 'onLoad'],
					img: ['onError', 'onLoad'],
				},
			],
			'jsx-a11y/no-noninteractive-tabindex': [
				'error',
				{
					tags: [],
					roles: ['tabpanel'],
					allowExpressionValues: true,
				},
			],
			'jsx-a11y/role-has-required-aria-props': 'error',
			'jsx-a11y/role-supports-aria-props': 'error',

			// Semantic HTML
			'jsx-a11y/no-access-key': 'error',
			'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
			'jsx-a11y/no-distracting-elements': 'error',
			'jsx-a11y/no-redundant-roles': 'error',
			'jsx-a11y/scope': 'error',

			// Keyboard navigation
			'jsx-a11y/mouse-events-have-key-events': 'error',
			'jsx-a11y/no-noninteractive-element-to-interactive-role': [
				'error',
				{
					tr: ['none', 'presentation'],
				},
			],
			'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',

			// Focus management
			'jsx-a11y/tabindex-no-positive': 'error',
			'jsx-a11y/no-aria-hidden-on-focusable': 'error',

			// Language & i18n
			'jsx-a11y/lang': 'error',
			'jsx-a11y/html-has-lang': 'error',

			// Iframe
			'jsx-a11y/iframe-has-title': 'error',

			// Forms
			'jsx-a11y/autocomplete-valid': 'error',
			'jsx-a11y/no-onchange': 'warn',

			// Other
			'jsx-a11y/accessible-emoji': 'warn',
			'jsx-a11y/anchor-ambiguous-text': 'warn',
			'jsx-a11y/prefer-tag-over-role': 'warn',

			...security.configs.recommended.rules,
			...sonarjs.configs.recommended.rules,

			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'error',
			'sonarjs/no-nested-functions': 'off',
			'security/detect-object-injection': 'off',

			'boundaries/element-types': [
				'error',
				{
					default: 'disallow',
					rules: [
						{ from: 'app', allow: ['widgets', 'features', 'entities', 'shared'] },
						{ from: 'widgets', allow: ['features', 'entities', 'shared'] },
						{ from: 'features', allow: ['entities', 'shared'] },
						{ from: 'entities', allow: ['shared'] },
						{ from: 'shared', allow: ['shared'] },
					],
				},
			],
		},
	},

	{
		files: ['**/*.config.*', '**/*.d.ts', 'next.config.*', 'src/middleware.ts'],
		rules: {
			'import/no-cycle': 'off',
		},
	},
])

export default eslintConfig
