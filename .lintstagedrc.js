import path from 'node:path'

const quote = (value) => `"${value}"`

const buildEslintCommand = (filenames) => {
	const files = filenames
		.map((f) => path.relative(process.cwd(), f))
		.map(quote)
		.join(' ')

	return `eslint --fix ${files}`
}

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
