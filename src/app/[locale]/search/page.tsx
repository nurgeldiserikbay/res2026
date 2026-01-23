'use client'

import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useRef, useState, useCallback } from 'react'

import { Link } from '@/i18n/navigation'
import { useAnimSlide } from '@/shared/lib/gsap/useAnimSlide'
import { PageBanner } from '@/shared/ui/banner'
import { Container } from '@/shared/ui/container/container'
import { MainPagination } from '@/shared/ui/pagination/MainPagination'

type SearchResult = {
	id: string
	title: string
	content: string
	url: string
	locale: string
}

type SearchMeta = {
	total: number
	per_page: number
	page: number
	totalPages: number
}

type SearchResponse = {
	items: SearchResult[]
	meta?: SearchMeta
	error?: string
}

export default function SearchPage() {
	const locale = useLocale()
	const t = useTranslations()
	const searchParams = useSearchParams()
	const query = searchParams.get('q') || ''
	const page = Number(searchParams.get('page')) || 1
	
	const [results, setResults] = useState<SearchResult[]>([])
	const [meta, setMeta] = useState<SearchMeta | null>(null)
	const [loading, setLoading] = useState(false)
	const [hasSearched, setHasSearched] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const resultsRef = useRef<HTMLDivElement>(null)
	useAnimSlide(resultsRef, { y: 50, delay: 0.1 })

	const performSearch = useCallback(async (searchQuery: string, currentPage: number = 1) => {
		// Валидация на клиенте
		if (!searchQuery || searchQuery.trim().length < 2) {
			setResults([])
			setMeta(null)
			setHasSearched(false)
			setError(null)
			setLoading(false)
			return
		}

		setLoading(true)
		setHasSearched(true)
		setError(null)

		try {
			const apiUrl = `/api/search?q=${encodeURIComponent(searchQuery.trim())}&locale=${locale}&page=${currentPage}`
			const response = await fetch(apiUrl)

			if (!response.ok) {
				throw new Error(`Search failed: ${response.status}`)
			}

			const data: SearchResponse = await response.json()

			if (data.error) {
				setError(data.error)
				setResults([])
				setMeta(null)
			} else {
				setResults(data.items || [])
				setMeta(data.meta || null)
				setError(null)
			}
		} catch (err) {
			console.error('Search error:', err)
			setError(t('search.error') || 'An error occurred while searching')
			setResults([])
			setMeta(null)
		} finally {
			setLoading(false)
		}
	}, [locale, t])

	// Выполняем поиск при изменении query параметра, страницы или локали
	useEffect(() => {
		performSearch(query, page)
	}, [query, page, performSearch])

	return (
		<>
			<PageBanner
				title={t('titles.search') || 'Search'}
				breadcrumbs={[{ label: t('titles.search') || 'Search', href: '/search' }]}
			/>

			<section className="bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px] pb-[100px]">
				<Container>
					{!hasSearched && query.length < 2 && (
						<div className="text-center py-[60px]">
							<p className="text-text text-[18px]">
								{t('search.enterQuery') || 'Enter a search query to find results'}
							</p>
						</div>
					)}

					{loading && (
						<div className="text-center py-[60px]">
							<p className="text-text text-[18px]">
								{t('search.loading') || 'Searching...'}
							</p>
						</div>
					)}

					{error && (
						<div className="text-center py-[60px]">
							<p className="text-red-500 text-[18px]">
								{error}
							</p>
						</div>
					)}

					{hasSearched && !loading && !error && (
						<div
							ref={resultsRef}
							className="translate-y-[50px] opacity-0"
						>
							{query && (
								<div className="mb-[40px]">
									<p className="text-text text-[16px]">
										{t('search.resultsFor') || 'Search results for'}: <span className="font-bold">&quot;{query}&quot;</span>
									</p>
									{meta && (
										<p className="text-text/60 text-[14px] mt-[10px]">
											{meta.total} {t('search.resultsFound') || 'results found'}
											{meta.totalPages > 1 && ` • ${t('search.page') || 'Page'} ${meta.page} ${t('search.of') || 'of'} ${meta.totalPages}`}
										</p>
									)}
								</div>
							)}

							{results.length === 0 ? (
								<div className="text-center py-[60px]">
									<p className="text-text text-[18px]">
										{t('search.noResults') || 'No results found'}
									</p>
								</div>
							) : (
								<>
									<div className="flex flex-col gap-[20px]">
										{results.map((item) => (
											<Link
												key={item.id}
												href={item.url}
												className="group block rounded-[8px] border border-text/10 bg-white p-[24px] transition-all duration-300 hover:border-secondary hover:shadow-lg"
											>
												<h3 className="text-text group-hover:text-secondary mb-[8px] text-[18px] font-bold transition-colors">
													{item.title}
												</h3>
												{item.content && (
													<p className="text-text/70 mb-[8px] text-[14px] leading-relaxed line-clamp-3">
														{item.content}
													</p>
												)}
												<p className="text-text/60 text-[12px]">
													{item.url}
												</p>
											</Link>
										))}
									</div>

									{meta && meta.totalPages > 1 && (
										<div className="mt-[30px] flex items-center justify-center xl:mt-[50px]">
											<MainPagination totalPages={meta.totalPages} />
										</div>
									)}
								</>
							)}
						</div>
					)}
				</Container>
			</section>
		</>
	)
}
