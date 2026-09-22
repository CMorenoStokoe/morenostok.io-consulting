<script lang="ts">
	import { PROFILE_DATA } from '$lib/data/profile';
	import DawnbreakMatrix from '$lib/components/DawnbreakMatrix.svelte';
	import CredibilityLogos from '$lib/components/CredibilityLogos.svelte';
	import LinkedInConnectButton from '$lib/components/LinkedInConnectButton.svelte';
</script>

<section class="relative pt-12 sm:pt-16 md:pt-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12 pb-12 sm:pb-16">
			<!-- Dawnbreak Dotmatrix Insignia container (borderless black dots) -->
			<div class="shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-transparent p-0 relative">
				<DawnbreakMatrix />
			</div>

			<div class="flex-1 max-w-4xl">
				<!-- Kicker -->
				<div class="font-mono text-[11px] text-black tracking-widest uppercase mb-4 font-semibold">
					// INDEPENDENT STRATEGIC AI ADVISORY
				</div>

				<!-- Headline -->
				<h1 class="font-sans text-5xl md:text-7xl font-bold text-black leading-[1.05] tracking-tight mb-6">
					Translating Generative AI into Institutional Execution.
				</h1>

				<!-- Sub-headline -->
				<p class="font-sans text-lg text-black leading-relaxed max-w-3xl mb-8">
					I advise executive boards on AI strategy and build the secure, high-performance systems that drive them. From strategic alignment to sovereign data architecture, I turn complex technological ambition into measurable commercial reality.
				</p>

				<!-- Credentials Bar -->
				<div class="font-mono text-[10px] text-black tracking-widest uppercase mb-8 flex flex-wrap gap-4 font-semibold">
					<span>[01] LEADING AI @ VERITION FUND & PWC</span>
					<span>[02] PHD DATA INTELLIGENCE</span>
					<span>[03] FOUNDING GENAI TEAMS SINCE 2022</span>
				</div>

				<!-- Primary CTA Button -->
				<div class="pt-2">
					<LinkedInConnectButton
						text="[ CONNECT ON LINKEDIN ]"
						size="lg"
						variant="hero"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Audited Impact Metrics Section (4-column clean layout, no harsh cell borders) -->
	<div class="bg-white py-6 sm:py-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
			<!-- Metric 1 -->
			<div class="flex flex-col gap-2">
				<div class="text-3xl font-sans text-black font-bold tracking-tight">
					£1M+
				</div>
				<div class="font-mono text-[10px] text-black uppercase tracking-wider font-semibold">
					ANNUAL CAPITAL EFFICIENCY
				</div>
				<div class="font-sans text-xs text-black leading-relaxed">
					Displaced bloated legacy software with custom data architecture.
				</div>
			</div>

			<!-- Metric 2 -->
			<div class="flex flex-col gap-2">
				<div class="text-3xl font-sans text-black font-bold tracking-tight">
					&lt; 250ms
				</div>
				<div class="font-mono text-[10px] text-black uppercase tracking-wider font-semibold">
					ZERO-FRICTION DECISIONS
				</div>
				<div class="font-sans text-xs text-black leading-relaxed">
					Compressed quantitative risk queries from 30+ seconds to sub-second execution.
				</div>
			</div>

			<!-- Metric 3 -->
			<div class="flex flex-col gap-2">
				<div class="text-3xl font-sans text-black font-bold tracking-tight">
					100%
				</div>
				<div class="font-mono text-[10px] text-black uppercase tracking-wider font-semibold">
					TEAM RETENTION
				</div>
				<div class="font-sans text-xs text-black leading-relaxed">
					Built and scaled elite AI engineering divisions from 0-to-1.
				</div>
			</div>

			<!-- Metric 4 -->
			<div class="flex flex-col gap-2">
				<div class="text-3xl font-sans text-black font-bold tracking-tight">
					4+ Years
				</div>
				<div class="font-mono text-[10px] text-black uppercase tracking-wider font-semibold">
					DATA SOVEREIGNTY
				</div>
				<div class="font-sans text-xs text-black leading-relaxed">
					Deploying secure, private AI infrastructure preventing cloud leakage.
				</div>
			</div>
		</div>
	</div>

	<!-- Previous Client & Institutional Track Record Logos -->
	<CredibilityLogos />
</section>