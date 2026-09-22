<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { LINKEDIN_ARTICLES, type LinkedInArticle } from '$lib/data/profile';

	let articles = $state<LinkedInArticle[]>(LINKEDIN_ARTICLES);
	let latestArticle = $derived(articles[0] || LINKEDIN_ARTICLES[0]);

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

	onMount(() => {
		fetchLatestFeed();
	});
</script>

<section id="blog" class="py-12 sm:py-16 md:py-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
		<!-- Section Header / Tracking Label -->
		<div class="space-y-2">
			<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
				// Thought Leadership
			</div>
			<div class="flex items-center gap-3 font-mono text-xs text-black font-semibold">
				<span class="bg-black text-white px-2 py-0.5 uppercase tracking-wider text-[10px]">
					[LATEST POST]
				</span>
				<span>// Blog</span>
			</div>
		</div>

		<!-- Post Headline -->
		<div class="space-y-3 max-w-4xl">
			<h2 class="font-sans text-2xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
				{latestArticle.title}
			</h2>
			{#if latestArticle.subtitle}
				<p class="text-sm sm:text-base md:text-lg text-black leading-relaxed font-sans">
					{latestArticle.subtitle}
				</p>
			{/if}
		</div>

		<!-- Link to read blog on LinkedIn -->
		<div class="pt-2">
			<a
				href={latestArticle.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2.5 rounded-none bg-[#3300FF] text-white hover:bg-black hover:text-white border border-[#3300FF] hover:border-black px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px]"
			>
				<LinkedinIcon class="w-4 h-4 shrink-0" />
				<span>Read My Blog</span>
				<ArrowUpRight class="w-4 h-4" />
			</a>
		</div>
	</div>
</section>