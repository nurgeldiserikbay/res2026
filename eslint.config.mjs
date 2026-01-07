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

			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/anchor-is-valid': ['error', { aspects: ['noHref', 'invalidHref', 'preferButton'] }],
			'jsx-a11y/label-has-associated-control': ['error', { assert: 'either', depth: 25 }],

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
