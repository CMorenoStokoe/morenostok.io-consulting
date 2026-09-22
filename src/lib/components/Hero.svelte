<script lang="ts">
	import { onMount } from 'svelte';
	import { Mail } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import DawnbreakMatrix from '$lib/components/DawnbreakMatrix.svelte';
	import TypewriterMetric from '$lib/components/TypewriterMetric.svelte';
	import CredibilityLogos from '$lib/components/CredibilityLogos.svelte';
	import LinkedInConnectButton from '$lib/components/LinkedInConnectButton.svelte';
	import { getEmail } from '$lib/utils/email';

	let email = $state('');

	onMount(() => {
		email = getEmail();
	});
</script>

<section class="relative pt-12 sm:pt-16 md:pt-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12 pb-12 sm:pb-16">
			<!-- Left Column: Dawnbreak Dotmatrix Insignia + Dynamic Typewriter Impact Metrics -->
			<div class="shrink-0 w-full sm:w-48 md:w-52 lg:w-60 flex flex-col gap-5 relative md:-mt-6 lg:-mt-10">
				<div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
					<DawnbreakMatrix />
				</div>
				<TypewriterMetric />
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
				<p class="font-sans text-lg text-black leading-relaxed max-w-3xl mb-6">
					I advise executive boards on AI strategy and build the secure, high-performance systems that drive them. From strategic alignment to sovereign data architecture, I turn complex technological ambition into measurable commercial reality.
				</p>

				<!-- Credentials Bar -->
				<div class="font-mono text-[10px] text-black tracking-widest uppercase mb-8 flex flex-wrap gap-4 font-semibold">
					<span>[01] LEADING AI @ VERITION FUND & PWC</span>
					<span>[02] PHD DATA INTELLIGENCE</span>
					<span>[03] FOUNDING GENAI TEAMS SINCE 2022</span>
				</div>

				<!-- CTA Actions -->
				<div class="pt-2 flex flex-wrap items-center gap-4">
					<LinkedInConnectButton
						text="[ CONNECT ON LINKEDIN ]"
						size="lg"
						variant="hero"
					/>
					{#if email}
						<a
							href="mailto:{email}"
							class="inline-flex items-center justify-center gap-2 rounded-none bg-white text-black hover:bg-black hover:text-white border border-black px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all min-h-[48px]"
						>
							<Mail class="w-4 h-4 shrink-0" />
							<span>[ DIRECT EMAIL ]</span>
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Previous Client & Institutional Track Record Logos -->
	<CredibilityLogos />

	<!-- Muted Industries / Sector Coverage Below Client Ticker -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-2">
		<div class="font-mono text-[10px] sm:text-[11px] text-black/60 tracking-widest uppercase flex flex-wrap items-center gap-x-2.5 gap-y-1">
			<span class="font-bold text-black/75">// INDUSTRIES:</span>
			<span>AI</span>
			<span class="text-black/30">/</span>
			<span>HEDGE FUND</span>
			<span class="text-black/30">/</span>
			<span>FINANCE</span>
			<span class="text-black/30">/</span>
			<span>CONSULTING</span>
			<span class="text-black/30">/</span>
			<span>HEALTHCARE</span>
			<span class="text-black/30">/</span>
			<span>BUSINESS</span>
			<span class="text-black/30">/</span>
			<span>TECH</span>
		</div>
	</div>
</section>