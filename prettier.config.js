const prettierConfig = {
	printWidth: 140,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	vueIndentScriptAndStyle: false,
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/app/[locale]/globals.css',
}

export default prettierConfig
