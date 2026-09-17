<script lang="ts">
	import { onMount } from 'svelte';
	import { ExternalLink, Lock, ArrowUpRight, ChevronLeft, ChevronRight, Share2, RotateCw } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { LINKEDIN_ARTICLES, PROFILE_DATA, type LinkedInArticle } from '$lib/data/profile';

	let articles = $state<LinkedInArticle[]>(LINKEDIN_ARTICLES);
	let activeArticleIndex = $state(0);
	let activeArticle = $derived(articles[activeArticleIndex] || LINKEDIN_ARTICLES[0]);

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

	function selectArticle(index: number) {
		activeArticleIndex = index;
		if (typeof window !== 'undefined' && window.innerWidth < 1024) {
			const el = document.getElementById('article-reader');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}

	onMount(() => {
		fetchLatestFeed();
	});
</script>

<section id="blog" class="py-14 sm:py-20 bg-white border-b border-slate-200">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
			<div class="max-w-3xl">
				<div class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
					// Perspectives & Thought Leadership
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight">
					Blog
				</h2>
				<p class="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
					Articles and field notes on the AI space, buy-side systems architecture, and engineering leadership published on LinkedIn.
				</p>
			</div>

			<div>
				<a
					href={blogUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-none bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors min-h-[44px]"
				>
					<LinkedinIcon class="w-4 h-4 text-slate-800 shrink-0" />
					<span>View on LinkedIn</span>
					<ArrowUpRight class="w-3.5 h-3.5 text-slate-500" />
				</a>
			</div>
		</div>

		<!-- macOS Safari-Style Browser Window Container -->
		<div class="rounded-xl border border-slate-300/80 bg-white text-slate-900 shadow-xl overflow-hidden">
			<!-- macOS Safari Browser Chrome Toolbar -->
			<div class="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#f4f4f6] px-4 py-2.5 select-none">
				<!-- Traffic Lights + Navigation Controls -->
				<div class="flex items-center gap-3.5">
					<!-- macOS Traffic Lights -->
					<div class="flex items-center gap-2">
						<span class="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block shadow-2xs"></span>
						<span class="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block shadow-2xs"></span>
						<span class="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block shadow-2xs"></span>
					</div>

					<!-- Back / Forward Buttons -->
					<div class="hidden sm:flex items-center gap-0.5 text-slate-400">
						<span class="p-1 rounded text-slate-400/60 cursor-default" title="Back">
							<ChevronLeft class="w-4 h-4" />
						</span>
						<span class="p-1 rounded text-slate-400/60 cursor-default" title="Forward">
							<ChevronRight class="w-4 h-4" />
						</span>
					</div>
				</div>

				<!-- Safari-Style Centered Pill Address Bar -->
				<div class="flex items-center flex-1 max-w-xl mx-2">
					<div class="flex items-center justify-between w-full rounded-lg bg-white border border-slate-200/90 px-3 py-1.5 text-xs text-slate-600 shadow-2xs">
						<div class="flex items-center gap-2 min-w-0">
							<Lock class="w-3.5 h-3.5 text-slate-400 shrink-0" />
							<span class="text-slate-400 text-[11px] shrink-0 font-mono hidden md:inline select-none">https://</span>
							<span class="text-slate-700 font-medium text-[11px] sm:text-xs truncate font-mono">www.linkedin.com/in/cmorenostokoe/recent-activity/articles/</span>
						</div>
						<a
							href={blogUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="ml-2 text-slate-400 hover:text-slate-900 transition-colors shrink-0"
							title="Open live articles page"
						>
							<ExternalLink class="w-3.5 h-3.5" />
						</a>
					</div>
				</div>

				<!-- Right Actions: Share & Reload -->
				<div class="flex items-center gap-1 text-slate-500">
					<a
						href={blogUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="p-1.5 rounded hover:bg-slate-200/60 text-slate-500 hover:text-slate-900 transition-colors hidden sm:inline-flex"
						title="Share or open link"
					>
						<Share2 class="w-3.5 h-3.5" />
					</a>
					<button
						type="button"
						onclick={fetchLatestFeed}
						class="p-1.5 rounded hover:bg-slate-200/60 text-slate-500 hover:text-slate-900 transition-colors"
						title="Reload feed"
						aria-label="Reload feed"
					>
						<RotateCw class="w-3.5 h-3.5" />
					</button>
				</div>
			</div>

			<!-- Article Feed & Reader -->
			<div class="bg-white text-slate-900 p-4 sm:p-6 lg:p-8">
				<!-- Two-Column Feed: Article List Left & Full Reading Panel Right -->
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
					<!-- Article Selector List Left -->
					<div class="lg:col-span-5 space-y-2.5">
						<div class="font-mono text-[10px] uppercase tracking-wider text-slate-500 px-1 mb-1">
							Published Articles ({articles.length})
						</div>
						{#each articles as article, index}
							<button
								type="button"
								onclick={() => selectArticle(index)}
								class="w-full text-left p-4 rounded-none border transition-all min-h-[44px] {activeArticleIndex === index ? 'bg-[#fafaf9] border-slate-900 shadow-xs ring-1 ring-slate-900/10' : 'bg-white border-slate-200 hover:bg-[#fafaf9] text-slate-700'}"
							>
								<div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-1.5">
									<span class={activeArticleIndex === index ? 'text-slate-900 font-bold' : 'text-slate-500'}>
										{article.category || `Article 0${index + 1}`}
									</span>
									<span class="text-slate-400">{article.readTime}</span>
								</div>
								<h4 class="text-xs sm:text-sm font-display font-semibold text-slate-900 leading-snug">
									{article.title}
								</h4>
								<p class="text-[11px] sm:text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed font-sans">
									{article.subtitle}
								</p>
							</button>
						{/each}
					</div>

					<!-- Article Reading Panel Right (pure API content) -->
					<div id="article-reader" class="lg:col-span-7 bg-[#fafaf9] rounded-none border border-slate-200 p-5 sm:p-7 lg:p-8 space-y-6 shadow-xs scroll-mt-20">
						<!-- Article Header -->
						<div class="border-b border-slate-200 pb-4">
							<div class="flex items-center justify-between font-mono text-xs text-slate-500 mb-2">
								<span class="font-mono uppercase text-slate-800 font-semibold">{activeArticle.category || 'Article'}</span>
								<div class="flex items-center gap-2 text-slate-500">
									<span>{activeArticle.date}</span>
									<span>•</span>
									<span>{activeArticle.readTime}</span>
								</div>
							</div>

							<h3 class="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-900 leading-tight">
								{activeArticle.title}
							</h3>

							{#if activeArticle.subtitle}
								<p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
									{activeArticle.subtitle}
								</p>
							{/if}
						</div>

						<!-- Article Body from API -->
						<div class="space-y-4 text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
							{#if activeArticle.fullContent && activeArticle.fullContent.length > 0}
								{#each activeArticle.fullContent as paragraph}
									<p class="leading-relaxed">{paragraph}</p>
								{/each}
							{:else if activeArticle.summary}
								<p class="leading-relaxed">{activeArticle.summary}</p>
							{/if}
						</div>

						<!-- Article Link -->
						{#if activeArticle.url}
							<div class="pt-4 border-t border-slate-200">
								<a
									href={activeArticle.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-900 hover:underline min-h-[44px]"
								>
									<span>Read on LinkedIn</span>
									<ExternalLink class="w-3.5 h-3.5" />
								</a>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>