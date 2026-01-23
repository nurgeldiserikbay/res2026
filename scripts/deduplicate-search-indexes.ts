import fs from 'node:fs/promises'
import path from 'node:path'

type SearchDoc = {
	id: string
	locale: string
	url: string
	title: string
	content: string
}

async function deduplicateIndexFile(filePath: string) {
	try {
		const content = await fs.readFile(filePath, 'utf-8')
		const docs = JSON.parse(content) as SearchDoc[]

		if (!Array.isArray(docs)) {
			console.error(`File ${filePath} is not an array`)
			return
		}

		const seenIds = new Set<string>()
		const deduplicated: SearchDoc[] = []
		let duplicateCount = 0

		for (const doc of docs) {
			if (!seenIds.has(doc.id)) {
				seenIds.add(doc.id)
				deduplicated.push(doc)
			} else {
				duplicateCount++
				console.log(`  Removing duplicate: ${doc.id}`)
			}
		}

		if (duplicateCount > 0) {
			await fs.writeFile(filePath, JSON.stringify(deduplicated, null, 2), 'utf-8')
			console.log(
				`✓ ${filePath}: Removed ${duplicateCount} duplicate(s), kept ${deduplicated.length} document(s)`
			)
		} else {
			console.log(`✓ ${filePath}: No duplicates found (${deduplicated.length} documents)`)
		}
	} catch (error) {
		console.error(`Error processing ${filePath}:`, error)
	}
}

async function main() {
	const searchDir = path.join(process.cwd(), 'public', 'search')
	const files = ['index-ru.json', 'index-en.json', 'index-kk.json']

	console.log('Deduplicating search index files...\n')

	for (const file of files) {
		const filePath = path.join(searchDir, file)
		await deduplicateIndexFile(filePath)
	}

	console.log('\nDone!')
}

main().catch((e) => {
	console.error('\n❌ Error:', e instanceof Error ? e.message : String(e))
	if (e instanceof Error && e.stack) {
		console.error('\nStack trace:')
		console.error(e.stack)
	}
	process.exit(1)
})
