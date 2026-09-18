<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="border-t border-[#262626] bg-black py-10 sm:py-12 text-[#A3A3A3] text-xs font-mono">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1C1C1C]">
			<div class="space-y-1">
				<div class="text-white font-bold text-sm uppercase tracking-widest font-display">
					{PROFILE_DATA.name}
				</div>
				<p class="text-xs text-[#888888] font-normal font-mono">
					London, United Kingdom • Principal Technical Consultant & Systems Architect
				</p>
			</div>

			<div class="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono uppercase tracking-wider text-[#CCCCCC]">
				<a href="#offerings" class="hover:text-white py-1">Offerings</a>
				<a href="#case-studies" class="hover:text-white py-1">Case Studies</a>
				<a href="#blog" class="hover:text-white py-1">Perspectives</a>
				<a href="#lab" class="hover:text-white py-1">Lab</a>
				<a href="#connect" class="hover:text-white py-1">Connect</a>
			</div>

			<div>
				<button
					type="button"
					onclick={scrollToTop}
					class="inline-flex items-center gap-1.5 rounded-none border border-[#333333] hover:border-white bg-[#0A0A0A] hover:bg-white text-white hover:text-black px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer"
				>
					Top
					<ArrowUp class="w-3 h-3" />
				</button>
			</div>
		</div>

		<div class="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#888888]">
			<div>© {new Date().getFullYear()} Dr. Chris Moreno-Stokoe. Operating strictly Outside IR35.</div>
			<div class="flex items-center gap-3 sm:gap-4 font-medium">
				<a href="/sitemap.xml" class="hover:text-white py-1">Sitemap</a>
				<span class="text-[#333333]">•</span>
				<a href="/robots.txt" class="hover:text-white py-1">Robots</a>
				<span class="text-[#333333]">•</span>
				<a href={PROFILE_DATA.channels.github} target="_blank" rel="noopener noreferrer" class="hover:text-white py-1">GitHub</a>
				<span class="text-[#333333]">•</span>
				<a href={PROFILE_DATA.channels.linkedIn} target="_blank" rel="noopener noreferrer" class="hover:text-white py-1">LinkedIn</a>
			</div>
		</div>
	</div>
</footer>