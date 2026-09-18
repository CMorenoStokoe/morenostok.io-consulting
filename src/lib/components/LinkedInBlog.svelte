<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight, FileText } from '@lucide/svelte';
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

<section id="blog" class="py-12 sm:py-16 md:py-20 bg-black border-b border-[#262626]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#262626] pb-6 sm:pb-8">
			<div class="max-w-3xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
					// Perspectives & Technical Dossiers
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
					Engineering Field Notes
				</h2>
				<p class="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
					First-principles analyses on buy-side trading AI, technical talent evaluation, and large-scale data architectures.
				</p>
			</div>

			<div>
				<a
					href={blogUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-none bg-transparent hover:bg-white hover:text-black border border-[#404040] hover:border-white text-white px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors min-h-[44px]"
				>
					<LinkedinIcon class="w-4 h-4 shrink-0" />
					<span>All LinkedIn Articles</span>
					<ArrowUpRight class="w-3.5 h-3.5 text-[#A3A3A3]" />
				</a>
			</div>
		</div>

		<!-- Flagship Dossier Layout -->
		<div id="flagship-dossier" class="border border-white bg-[#0A0A0A] p-6 sm:p-8 md:p-10 space-y-6 shadow-2xs">
			<!-- Dossier Classification Telemetry Bar -->
			<div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#262626] pb-4 font-mono text-xs">
				<div class="flex flex-wrap items-center gap-2.5">
					<span class="border border-white bg-white text-black px-2.5 py-0.5 font-bold uppercase tracking-wider">
						[FLAGSHIP DOSSIER]
					</span>
					<span class="text-[#A3A3A3]">
						[REF: {flagshipArticle.id ? flagshipArticle.id.toUpperCase() : 'DOSSIER-01'}]
					</span>
				</div>

				<div class="text-[#A3A3A3] flex items-center gap-3 font-mono text-xs">
					<span>{flagshipArticle.category}</span>
					<span class="text-[#404040]">•</span>
					<span>{flagshipArticle.readTime}</span>
				</div>
			</div>

			<!-- Title & Subtitle -->
			<div class="space-y-3">
				<h3 class="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-snug">
					{flagshipArticle.title}
				</h3>
				<p class="text-sm sm:text-base text-[#CCCCCC] leading-relaxed font-sans">
					{flagshipArticle.subtitle}
				</p>
			</div>

			<!-- Executive Brief Box -->
			<div class="border border-[#262626] bg-black p-4 sm:p-5 space-y-2">
				<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">
					[ EXECUTIVE SUMMARY ]
				</div>
				<p class="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
					{flagshipArticle.summary}
				</p>
			</div>

			<!-- Inverted Key Architectural Takeaways Box -->
			{#if flagshipArticle.keyTakeaways && flagshipArticle.keyTakeaways.length > 0}
				<div class="border border-white bg-white text-black p-5 sm:p-6 space-y-3">
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
			<div class="border-t border-[#262626] pt-5 space-y-3">
				<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">
					[ FIELD NOTE EXCERPT ]
				</div>
				<div class="space-y-2 text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
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
			<div class="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
				<a
					href={flagshipArticle.url}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 rounded-none bg-white text-black font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 border border-white hover:bg-black hover:text-white transition-all min-h-[44px]"
				>
					<LinkedinIcon class="w-4 h-4 shrink-0" />
					<span>[ READ FULL ARTICLE & JOIN DISCUSSION ]</span>
					<ArrowUpRight class="w-3.5 h-3.5" />
				</a>

				<span class="text-[11px] font-mono text-[#888888]">
					Authored by Dr. Chris Moreno-Stokoe
				</span>
			</div>
		</div>

		<!-- Compact Secondary Technical Index -->
		<div class="space-y-4 pt-4">
			<div class="flex items-center justify-between">
				<div class="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
					// Secondary Publications & Technical Index
				</div>
				<div class="font-mono text-[11px] text-[#888888]">
					Select to load dossier
				</div>
			</div>

			<div class="border border-[#262626] bg-[#0A0A0A] overflow-x-auto">
				<table class="w-full text-left font-mono text-xs">
					<thead>
						<tr class="border-b border-[#262626] bg-black text-[#A3A3A3] text-[10px] uppercase tracking-wider">
							<th class="py-3 px-4">Ref</th>
							<th class="py-3 px-4">Title</th>
							<th class="py-3 px-4 hidden md:table-cell">Category</th>
							<th class="py-3 px-4 hidden sm:table-cell">Read Time</th>
							<th class="py-3 px-4 text-right">Action</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-[#1C1C1C]">
						{#each articles as article, idx}
							<tr
								class="hover:bg-[#141414] transition-colors {idx === activeIndex ? 'bg-[#141414]' : ''}"
							>
								<td class="py-3.5 px-4 font-bold {idx === activeIndex ? 'text-white' : 'text-[#888888]'}">
									0{idx + 1}
								</td>
								<td class="py-3.5 px-4 font-sans font-medium text-white max-w-xs sm:max-w-md">
									<button
										type="button"
										onclick={() => selectFlagship(idx)}
										class="text-left hover:underline cursor-pointer"
									>
										{article.title}
									</button>
								</td>
								<td class="py-3.5 px-4 text-[#A3A3A3] hidden md:table-cell">
									{article.category}
								</td>
								<td class="py-3.5 px-4 text-[#888888] hidden sm:table-cell">
									{article.readTime}
								</td>
								<td class="py-3.5 px-4 text-right">
									<button
										type="button"
										onclick={() => selectFlagship(idx)}
										class="inline-flex items-center gap-1 border border-[#333333] hover:border-white px-2.5 py-1 text-[11px] text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all cursor-pointer"
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