<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { LINKEDIN_ARTICLES, PROFILE_DATA, type LinkedInArticle } from '$lib/data/profile';

	let articles = $state<LinkedInArticle[]>(LINKEDIN_ARTICLES);
	let activeIndex = $state(0);
	let flagshipArticle = $derived(articles[activeIndex] || LINKEDIN_ARTICLES[0]);

	const blogUrl = PROFILE_DATA.channels.linkedInArticles;

	async function fetchLatestFeed() {
		try {
			const res = await fetch('/api/blog');
			if (res.ok) {
				const data = await res.json();
				if (Array.isArray(data.articles) && data.articles.length > 0) {
					articles = data.articles;
				}
			}
		} catch (err) {
			console.error('Error fetching blog feed:', err);
		}
	}

	function selectFlagship(idx: number) {
		activeIndex = idx;
		if (typeof window !== 'undefined') {
			const el = document.getElementById('flagship-dossier');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}

	onMount(() => {
		fetchLatestFeed();
	});
</script>

<section id="blog" class="py-12 sm:py-16 md:py-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
			<div class="space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// EXECUTIVE INTELLIGENCE & PERSPECTIVES
				</div>
				<h2 class="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
					Perspectives on Enterprise AI.
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed max-w-2xl">
					Direct analysis on sovereign models, quantitative infrastructure, and commercial execution from the field.
				</p>
			</div>

			<div class="shrink-0 pt-2 sm:pt-0">
				<a
					href={blogUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-none bg-[#3300FF] text-white hover:bg-black hover:text-white border border-[#3300FF] hover:border-black px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] shadow-xs"
				>
					<LinkedinIcon class="w-4 h-4 shrink-0" />
					<span>All LinkedIn Articles</span>
					<ArrowUpRight class="w-3.5 h-3.5 text-white/80" />
				</a>
			</div>
		</div>

		<!-- Flagship Dossier Layout (clean, unboxed editorial presentation) -->
		<div id="flagship-dossier" class="bg-white space-y-6">
			<!-- Dossier Classification Telemetry Bar -->
			<div class="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
				<div class="flex flex-wrap items-center gap-2.5">
					<span class="bg-black text-white px-2.5 py-0.5 font-bold uppercase tracking-wider">
						{#if flagshipArticle.id?.startsWith('live-') || flagshipArticle.id?.startsWith('scraped-') || flagshipArticle.id?.startsWith('rapid-')}
							[LIVE DOSSIER]
						{:else}
							[FLAGSHIP DOSSIER]
						{/if}
					</span>
					<span class="text-black font-semibold">
						[REF: {flagshipArticle.id ? flagshipArticle.id.toUpperCase() : 'DOSSIER-01'}]
					</span>
				</div>

				<div class="text-black flex items-center gap-3 font-mono text-xs font-semibold">
					<span>{flagshipArticle.category}</span>
					<span class="text-black">•</span>
					<span>{flagshipArticle.readTime}</span>
				</div>
			</div>

			<!-- Title & Subtitle -->
			<div class="space-y-3">
				<h3 class="text-xl sm:text-3xl lg:text-4xl font-sans font-bold text-black tracking-tight leading-snug">
					{flagshipArticle.title}
				</h3>
				<p class="text-sm sm:text-base text-black leading-relaxed font-sans">
					{flagshipArticle.subtitle}
				</p>
			</div>

			<!-- Executive Brief Box -->
			<div class="space-y-1.5 pt-2">
				<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-black">
					[ EXECUTIVE SUMMARY ]
				</div>
				<p class="text-xs sm:text-sm text-black leading-relaxed">
					{flagshipArticle.summary}
				</p>
			</div>

			<!-- Key Architectural Takeaways -->
			{#if flagshipArticle.keyTakeaways && flagshipArticle.keyTakeaways.length > 0}
				<div class="text-black space-y-2.5 pt-2">
					<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-black">
						[ KEY ARCHITECTURAL TAKEAWAYS ]
					</div>
					<ul class="space-y-2 font-mono text-xs sm:text-sm">
						{#each flagshipArticle.keyTakeaways as takeaway}
							<li class="flex items-start gap-2.5 leading-relaxed text-black">
								<span class="font-bold shrink-0 mt-0.5">•</span>
								<span>{takeaway}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<!-- Excerpt Content -->
			<div class="pt-3 space-y-2">
				<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-black">
					[ FIELD NOTE EXCERPT ]
				</div>
				<div class="space-y-2 text-xs sm:text-sm text-black leading-relaxed">
					{#if flagshipArticle.fullContent && flagshipArticle.fullContent.length > 0}
						{#each flagshipArticle.fullContent.slice(0, 3) as paragraph}
							<p>{paragraph}</p>
						{/each}
					{:else}
						<p>{flagshipArticle.summary}</p>
					{/if}
				</div>
			</div>

			<!-- Action CTA -->
			<div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
				<a
					href={flagshipArticle.url}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-none bg-[#3300FF] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 border border-[#3300FF] hover:bg-black hover:text-white hover:border-black transition-all min-h-[44px] shadow-xs"
				>
					<LinkedinIcon class="w-4 h-4 shrink-0" />
					<span>[ READ FULL ARTICLE & JOIN DISCUSSION ]</span>
					<ArrowUpRight class="w-3.5 h-3.5" />
				</a>

				<span class="text-[11px] font-mono text-black font-semibold">
					Authored by Dr. Chris Moreno-Stokoe
				</span>
			</div>
		</div>

		<!-- Compact Secondary Technical Index -->
		<div class="space-y-4 pt-6">
			<div class="flex items-center justify-between">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Secondary Publications & Technical Index
				</div>
				<div class="font-mono text-[11px] text-black">
					Select to load dossier
				</div>
			</div>

			<div class="bg-white overflow-x-auto">
				<table class="w-full text-left font-mono text-xs">
					<thead>
						<tr class="text-black text-[10px] uppercase tracking-wider font-bold">
							<th class="py-3 px-4">Ref</th>
							<th class="py-3 px-4">Title</th>
							<th class="py-3 px-4 hidden md:table-cell">Category</th>
							<th class="py-3 px-4 hidden sm:table-cell">Read Time</th>
							<th class="py-3 px-4 text-right">Action</th>
						</tr>
					</thead>
					<tbody>
						{#each articles as article, idx}
							<tr
								class="hover:bg-black hover:text-white transition-colors group {idx === activeIndex ? 'bg-black text-white' : ''}"
							>
								<td class="py-3.5 px-4 font-bold">
									0{idx + 1}
								</td>
								<td class="py-3.5 px-4 font-sans font-medium max-w-xs sm:max-w-md">
									<button
										type="button"
										onclick={() => selectFlagship(idx)}
										class="text-left hover:underline cursor-pointer flex items-center gap-2"
									>
										{#if article.id?.startsWith('live-') || article.id?.startsWith('scraped-') || article.id?.startsWith('rapid-')}
											<span class="inline-block bg-[#3300FF] text-white px-1.5 py-0.2 text-[9px] font-mono uppercase tracking-wider font-bold">
												LIVE
											</span>
										{/if}
										<span>{article.title}</span>
									</button>
								</td>
								<td class="py-3.5 px-4 hidden md:table-cell">
									{article.category}
								</td>
								<td class="py-3.5 px-4 hidden sm:table-cell">
									{article.readTime}
								</td>
								<td class="py-3.5 px-4 text-right">
									<button
										type="button"
										onclick={() => selectFlagship(idx)}
										class="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold group-hover:underline transition-all cursor-pointer"
									>
										{#if idx === activeIndex}
											<span>[ACTIVE]</span>
										{:else}
											<span>[INSPECT]</span>
										{/if}
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>