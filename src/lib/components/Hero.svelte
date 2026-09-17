<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import LinkedInConnectButton from '$lib/components/LinkedInConnectButton.svelte';
</script>

<section class="relative pt-12 pb-14 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24 bg-[#0B0C0E] border-b border-[#22252A]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
			<!-- Photo to the left of title section in Palantir style -->
			<div class="shrink-0 border border-[#22252A] bg-[#131518] p-1">
				<img
					src="/images/chris-moreno-stokoe.jpg"
					alt="Dr. Chris Moreno-Stokoe"
					class="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-none grayscale contrast-[1.05]"
				/>
			</div>

			<div class="max-w-4xl space-y-4 sm:space-y-6 flex-1">
				<h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-[#F4F5F6] leading-[1.14] sm:leading-[1.08] tracking-tight">
					C-Suite AI Advisory & Global Engineering Leadership
				</h1>

				<p class="text-base sm:text-lg lg:text-xl text-[#8A919E] leading-relaxed font-normal max-w-3xl pt-1">
					Pioneering AI systems since the very beginning of GenAI in 2022.
				</p>

				<div class="pt-2 text-xs sm:text-sm font-mono text-[#8A919E] flex flex-wrap items-center gap-x-3 gap-y-1.5 leading-snug">
					<span>Lead AI Engineer @ Verition Fund Management</span>
					<span class="text-[#22252A] hidden sm:inline">•</span>
					<span>AI Team Founder @ PwC</span>
					<span class="text-[#22252A] hidden sm:inline">•</span>
					<span>Digital Transformation & Research @ NHS</span>
					<span class="text-[#22252A] hidden sm:inline">•</span>
					<span>PhD Human-Computer Engineering</span>
				</div>

				<!-- Mobile: full-width buttons; Desktop: inline -->
				<div class="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
					<LinkedInConnectButton size="lg" variant="hero" text="Connect on LinkedIn" showArrow={true} />

					<a
						href="#case-studies"
						class="inline-flex items-center justify-center gap-2 rounded-none border border-[#22252A] bg-transparent px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F5F6] transition-all hover:border-white hover:text-white min-h-[48px]"
					>
						View Case Studies
					</a>
				</div>
			</div>
		</div>

		<!-- 4-Metric Bar: 2 cols on mobile, 4 on desktop -->
		<div class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#22252A] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
			<div class="space-y-1">
				<div class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F4F5F6]">$1M+/yr</div>
				<div class="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A919E]">Average Annual Savings</div>
				<div class="text-[11px] sm:text-xs text-[#8A919E]/80 leading-snug">Delivered through custom AI replacements and process efficiencies.</div>
			</div>
			<div class="space-y-1">
				<div class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F4F5F6]">2 Teams</div>
				<div class="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A919E]">100% Retention</div>
				<div class="text-[11px] sm:text-xs text-[#8A919E]/80 leading-snug">Built 2 global AI capabilities from the ground up with zero attrition.</div>
			</div>
			<div class="space-y-1">
				<div class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F4F5F6]">15+</div>
				<div class="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A919E]">Products Under Management</div>
				<div class="text-[11px] sm:text-xs text-[#8A919E]/80 leading-snug">Production GenAI workflows, financial data tools, and agent pipelines.</div>
			</div>
			<div class="space-y-1">
				<div class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F4F5F6]">4 Years</div>
				<div class="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8A919E]">GenAI Leadership</div>
				<div class="text-[11px] sm:text-xs text-[#8A919E]/80 leading-snug">Continually evaluating and preparing for the future of AI.</div>
			</div>
		</div>
	</div>
</section>