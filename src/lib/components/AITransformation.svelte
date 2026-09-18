<script lang="ts">
	import { Check, ArrowRight } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
</script>

<section id="offerings" class="py-12 sm:py-16 md:py-20 bg-black border-b border-[#262626] relative">
	<!-- Hidden anchor for legacy links -->
	<div id="ai-transformation" class="absolute -top-20 left-0 pointer-events-none" aria-hidden="true"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#262626] pb-6 sm:pb-8">
			<div class="max-w-3xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
					// Core Architecture & Offerings
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
					Three Distinct Consulting Pillars
				</h2>
				<p class="text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
					Outcome-driven engagements operating strictly Outside IR35. Available as fractional executive advisory, milestone-based architectural specifications, or rapid hands-on validation pods.
				</p>
			</div>

			<div class="shrink-0 font-mono text-xs text-[#A3A3A3] flex items-center gap-2">
				<span class="inline-block w-2 h-2 bg-white"></span>
				<span>OUTSIDE-IR35 COMPLIANT</span>
			</div>
		</div>

		<!-- 3-Column Wireframe Technical Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
			{#each PROFILE_DATA.coreOfferings as pillar}
				<div class="border border-[#262626] bg-[#0A0A0A] p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-white transition-all shadow-2xs">
					<div class="space-y-5">
						<!-- Top Pillar Badge & Commercial Rate -->
						<div class="flex items-center justify-between gap-3 border-b border-[#1C1C1C] pb-4">
							<span class="font-mono text-xs tracking-widest text-white font-bold uppercase">
								[ PILLAR {pillar.pillarNumber} ]
							</span>
							<div class="text-right">
								<span class="inline-block border border-white bg-white text-black font-mono text-xs font-bold px-2.5 py-1 uppercase tracking-wider">
									{pillar.commercialModel}
								</span>
							</div>
						</div>

						<!-- Title & Description -->
						<div class="space-y-2">
							<h3 class="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug">
								{pillar.title}
							</h3>
							<p class="text-xs text-[#E5E5E5] leading-relaxed">
								{pillar.tagline}
							</p>
							<p class="text-[11px] font-mono text-[#A3A3A3]">
								Model: {pillar.rateDetail}
							</p>
						</div>

						<!-- Scope Wireframe Box -->
						<div class="border-t border-[#1C1C1C] pt-4 space-y-2.5">
							<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">
								[ TECHNICAL SCOPE ]
							</div>
							<ul class="space-y-2">
								{#each pillar.scope as item}
									<li class="flex items-start gap-2 text-xs text-[#D4D4D4] leading-relaxed">
										<span class="font-mono text-white shrink-0 mt-0.5">+</span>
										<span>{item}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Concrete Deliverables Box -->
						<div class="border-t border-[#1C1C1C] pt-4 space-y-2.5">
							<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-[#A3A3A3]">
								[ AUDITABLE DELIVERABLES ]
							</div>
							<ul class="space-y-2">
								{#each pillar.deliverables as deliv}
									<li class="flex items-start gap-2 text-xs text-white leading-relaxed font-mono">
										<span class="font-mono text-white shrink-0 font-bold">•</span>
										<span>{deliv}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Segmented Technical CTA -->
					<div class="pt-4 border-t border-[#1C1C1C]">
						<a
							href="#connect"
							class="inline-flex items-center justify-center w-full rounded-none bg-white text-black font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 border border-white hover:bg-black hover:text-white transition-all min-h-[44px]"
						>
							{pillar.ctaLabel}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
