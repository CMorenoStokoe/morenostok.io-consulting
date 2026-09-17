<script lang="ts">
	import { Check } from '@lucide/svelte';
	import { PROFILE_DATA, DAUNTLESS_HERITAGE } from '$lib/data/profile';
</script>

<section id="case-studies" class="py-14 sm:py-20 bg-[#fafaf9] border-b border-slate-200">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<div class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
				// Track Record
			</div>
			<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight">
				Case Studies
			</h2>
			<p class="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
				Selected high-stakes technical engagements delivering audited capital efficiency, workflow acceleration, and institutional transformation.
			</p>
		</div>

		<!-- 3 in a row on desktop, 1 on mobile -->
		<div class="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
			{#each PROFILE_DATA.caseStudies as study, index}
				<div class="bg-white rounded-none border border-slate-200 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
					<div class="space-y-3.5">
						<!-- Top Meta Bar -->
						<div class="border-b border-slate-100 pb-3">
							<div class="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-1">
								<span class="text-slate-900 font-mono font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">{study.organization}</span>
								<span class="font-mono text-[11px] text-slate-500">{study.period}</span>
							</div>
							<h3 class="text-base font-display font-semibold text-slate-900 leading-snug">
								{study.title}
							</h3>
						</div>

						<!-- Challenge & Solution -->
						<div class="space-y-2.5 text-xs">
							<div class="space-y-1">
								<div class="font-mono font-bold uppercase tracking-wider text-slate-500 text-[10px]">The Challenge</div>
								<p class="text-slate-700 leading-relaxed">{study.challenge}</p>
							</div>
							<div class="space-y-1">
								<div class="font-mono font-bold uppercase tracking-wider text-slate-500 text-[10px]">The Solution</div>
								<p class="text-slate-700 leading-relaxed">{study.solution}</p>
							</div>
						</div>

						<!-- Audited Impact -->
						<div class="pt-2.5 border-t border-slate-100 space-y-1.5">
							<div class="font-mono font-bold uppercase tracking-wider text-slate-500 text-[10px]">
								Measurable Impact
							</div>
							<ul class="space-y-1">
								{#each study.impact as outcome}
									<li class="flex items-start gap-1.5 text-xs text-slate-800">
										<Check class="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
										<span class="leading-snug">{outcome}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Bottom Footer with Stack -->
					<div class="mt-4 pt-3 border-t border-slate-100">
						<div class="flex flex-wrap items-center gap-1">
							{#each study.techStack as tech}
								<span class="rounded-none bg-[#fafaf9] border border-slate-200 px-1.5 py-0.5 text-[10px] font-mono text-slate-600">
									{tech}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Foundational Contracting Heritage (Formerly Dauntless R&D) -->
		<div class="mt-6 sm:mt-8">
			<div class="mb-4">
				<div class="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
					// Formerly traded under Dauntless R&D
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each DAUNTLESS_HERITAGE.contracts as contract}
					<div class="rounded-none border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
						<div class="space-y-2">
							<div class="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500">
								<span class="text-slate-900 font-mono font-bold text-[11px] uppercase tracking-wider">{contract.client}</span>
								<span class="font-mono text-[11px] text-slate-500">{contract.period}</span>
							</div>

							<h4 class="text-sm font-display font-semibold text-slate-900 leading-snug">
								{contract.title}
							</h4>

							<p class="text-xs text-slate-700 leading-relaxed">
								{contract.description}
							</p>
						</div>

						<div class="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
							{#each contract.stack as item}
								<span class="rounded-none bg-[#fafaf9] border border-slate-200 px-1.5 py-0.5 text-[10px] font-mono text-slate-600">
									{item}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>