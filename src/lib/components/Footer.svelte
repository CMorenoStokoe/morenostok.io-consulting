<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="border-t border-slate-200 bg-white py-10 sm:py-12 text-slate-600 text-xs font-mono">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
			<div class="space-y-1">
				<div class="text-slate-900 font-bold text-sm uppercase tracking-wider font-display">
					{PROFILE_DATA.name}
				</div>
				<p class="text-xs text-slate-500 font-normal font-mono">
					London, United Kingdom • Strategic AI Advisory & Forward-Deployed Practice
				</p>
			</div>

			<div class="flex flex-wrap items-center gap-4 sm:gap-5 text-xs font-mono uppercase tracking-wider text-slate-600">
				<a href="#ai-transformation" class="hover:text-slate-900 py-1">AI Transformation</a>
				<a href="#case-studies" class="hover:text-slate-900 py-1">Case Studies</a>
				<a href="#blog" class="hover:text-slate-900 py-1">Blog</a>
				<a href="#lab" class="hover:text-slate-900 py-1">Lab</a>
				<a href="#connect" class="hover:text-slate-900 py-1">Connect</a>
			</div>

			<div>
				<button
					type="button"
					onclick={scrollToTop}
					class="inline-flex items-center gap-1.5 rounded-none border border-slate-200 bg-[#fafaf9] px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 hover:bg-slate-100 transition-all min-h-[44px]"
				>
					Top
					<ArrowUp class="w-3 h-3" />
				</button>
			</div>
		</div>

		<div class="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
			<div>© {new Date().getFullYear()} Dr. Chris Moreno-Stokoe. All rights reserved.</div>
			<div class="flex items-center gap-3 sm:gap-4 font-medium">
				<a href="/sitemap.xml" class="hover:text-slate-900 py-1">Sitemap</a>
				<span class="text-slate-300">•</span>
				<a href="/robots.txt" class="hover:text-slate-900 py-1">Robots</a>
				<span class="text-slate-300">•</span>
				<a href={PROFILE_DATA.channels.github} target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 py-1">GitHub</a>
				<span class="text-slate-300">•</span>
				<a href={PROFILE_DATA.channels.linkedIn} target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 py-1">LinkedIn</a>
			</div>
		</div>
	</div>
</footer>