<script lang="ts">
	import { PROFILE_DATA } from '$lib/data/profile';
</script>

<section id="offerings" class="py-12 sm:py-16 md:py-20 bg-white text-black relative">
	<!-- Hidden anchor for legacy links -->
	<div id="ai-transformation" class="absolute -top-20 left-0 pointer-events-none" aria-hidden="true"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
			<div class="max-w-3xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// EXECUTIVE OFFERINGS & DELIVERY MODELS
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-black tracking-tight">
					Executive Offerings & Delivery Models
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed">
					High-conviction engagements operating strictly Outside-IR35.
				</p>
			</div>

			<div class="shrink-0 font-mono text-xs text-black flex items-center gap-2 font-semibold">
				<span class="inline-block w-2 h-2 bg-black"></span>
				<span>OUTSIDE-IR35 COMPLIANT</span>
			</div>
		</div>

		<!-- 3-Column Clean Technical Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
			{#each PROFILE_DATA.coreOfferings as pillar}
				<div class="bg-white flex flex-col justify-between space-y-6">
					<div class="space-y-5">
						<!-- Top Pillar Badge & Tag -->
						<div class="flex items-center justify-between gap-3">
							<span class="font-mono text-xs tracking-widest text-black font-bold uppercase">
								[ PILLAR {pillar.pillarNumber} ]
							</span>
							<div class="text-right">
								<span class="inline-block font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-black">
									{pillar.commercialModel}
								</span>
							</div>
						</div>

						<!-- Title, Focus & Value -->
						<div class="space-y-3">
							<h3 class="text-xl sm:text-2xl font-sans font-bold text-black tracking-tight leading-snug">
								{pillar.title}
							</h3>
							<p class="font-sans text-sm text-black leading-relaxed font-semibold">
								{pillar.tagline}
							</p>
							<p class="font-sans text-xs text-black leading-relaxed">
								{pillar.scope[0]}
							</p>
						</div>

						<!-- Concrete Deliverables Box -->
						<div class="pt-2 space-y-2.5">
							<div class="font-mono text-[10px] font-bold uppercase tracking-widest text-black">
								[ AUDITABLE DELIVERABLES ]
							</div>
							<ul class="space-y-2">
								{#each pillar.deliverables as deliv}
									<li class="flex items-start gap-2 text-xs text-black leading-relaxed font-mono">
										<span class="font-mono text-black shrink-0 font-bold">•</span>
										<span>{deliv}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>

					<!-- Segmented Technical CTA -->
					<div class="pt-4">
						<a
							href="#connect"
							class="inline-flex items-center justify-center w-full rounded-none bg-black text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 hover:bg-white hover:text-black border border-black transition-all min-h-[44px]"
						>
							{pillar.ctaLabel}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

