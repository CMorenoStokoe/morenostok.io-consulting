<script lang="ts">
	import { PROFILE_DATA } from '$lib/data/profile';
</script>

<section class="relative pt-10 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 bg-black border-b border-[#262626]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Outside-IR35 Status & Compliance Badges -->
		<div class="flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-[10px] sm:text-xs tracking-wider mb-6 sm:mb-8">
			<span class="border border-white bg-white text-black px-2.5 py-1 font-bold">
				[STATUS: OUTSIDE-IR35]
			</span>
			<span class="border border-[#333333] bg-[#0A0A0A] text-[#CCCCCC] px-2.5 py-1">
				[MODEL: SOW / DELIVERABLES]
			</span>
			<span class="border border-[#333333] bg-[#0A0A0A] text-[#CCCCCC] px-2.5 py-1">
				[CAPACITY: FRACTIONAL & SPRINT]
			</span>
		</div>

		<div class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
			<!-- Photo to the left of title section in stark Palantir wireframe style -->
			<div class="shrink-0 border border-[#333333] bg-[#0A0A0A] p-1 shadow-2xs">
				<img
					src="/images/chris-moreno-stokoe.jpg"
					alt="Dr. Chris Moreno-Stokoe"
					class="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-cover rounded-none grayscale contrast-[1.10]"
				/>
			</div>

			<div class="max-w-4xl space-y-4 sm:space-y-5 flex-1">
				<div class="space-y-2">
					<h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.12] sm:leading-[1.06] tracking-tight">
						Principal Technical Consultant & Systems Architect
					</h1>
					<p class="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#A3A3A3]">
						Dr. Chris Moreno-Stokoe • PhD Human-Computer Interaction
					</p>
				</div>

				<p class="text-base sm:text-lg lg:text-xl text-[#E5E5E5] leading-relaxed font-normal max-w-3xl">
					Advising executive leadership on GenAI strategy while actively architecting and deploying observable, high-throughput systems.
				</p>

				<div class="pt-1 text-xs sm:text-sm font-mono text-[#CCCCCC] flex flex-wrap items-center gap-x-3 gap-y-1.5 leading-snug">
					<span>Lead AI Engineer @ Verition Fund Management</span>
					<span class="text-[#404040] hidden sm:inline">•</span>
					<span>AI Team Founder @ PwC</span>
					<span class="text-[#404040] hidden sm:inline">•</span>
					<span>Digital Transformation & Research @ NHS</span>
					<span class="text-[#404040] hidden sm:inline">•</span>
					<span>Bristol PhD Data Intelligence</span>
				</div>

				<div class="pt-1 text-xs font-mono text-[#A3A3A3]">
					Engagements operate strictly Outside IR35 via milestone-based Statements of Work (SOWs) and concrete architectural deliverables.
				</div>

				<!-- Segmented Technical CTAs -->
				<div class="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
					<a
						href="#connect"
						class="inline-flex items-center justify-center gap-2 rounded-none bg-white text-black font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 border border-white hover:bg-black hover:text-white transition-all min-h-[48px]"
					>
						[ INITIATE STRATEGIC REVIEW ]
					</a>

					<a
						href="#connect"
						class="inline-flex items-center justify-center gap-2 rounded-none bg-transparent text-white font-mono text-xs font-semibold uppercase tracking-widest px-6 py-3.5 border border-[#404040] hover:border-white hover:bg-[#111111] transition-all min-h-[48px]"
					>
						[ SCOPE RAPID POC SPRINT (OUTSIDE IR35) ]
					</a>
				</div>
			</div>
		</div>

		<!-- Contextualized Operational Scale Metric Bar (Wireframe Grid) -->
		<div class="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
			{#each PROFILE_DATA.headlineStats as stat}
				<div class="border border-[#262626] bg-[#0A0A0A] p-4 sm:p-5 flex flex-col justify-between space-y-2">
					<div class="space-y-1">
						<div class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
							{stat.value}
						</div>
						<div class="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#CCCCCC]">
							{stat.label}
						</div>
					</div>
					<div class="text-[11px] sm:text-xs text-[#A3A3A3] leading-relaxed border-t border-[#1C1C1C] pt-2">
						{stat.detail}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>