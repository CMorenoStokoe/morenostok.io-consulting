<script lang="ts">
	import { onMount } from 'svelte';
	import { Mail } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import DawnbreakMatrix from '$lib/components/DawnbreakMatrix.svelte';
	import CredibilityLogos from '$lib/components/CredibilityLogos.svelte';
	import LinkedInConnectButton from '$lib/components/LinkedInConnectButton.svelte';
	import { getEmail } from '$lib/utils/email';

	let email = $state('');
	let emailCopied = $state(false);

	onMount(() => {
		email = getEmail();
	});

	function handleEmailClick() {
		if (!email) return;
		window.location.href = `mailto:${email}`;

		if (navigator.clipboard) {
			navigator.clipboard.writeText(email).then(() => {
				emailCopied = true;
				setTimeout(() => {
					emailCopied = false;
				}, 3000);
			});
		}
	}

	const METRICS = [
		{ value: '£1M+', label: 'Annual AI Efficiency' },
		{ value: '< 250ms', label: 'Query Latency' },
		{ value: '100%', label: 'Team Retention' },
		{ value: '4+ Yrs', label: 'Leading GenAI Teams' }
	];
</script>

<section class="relative pt-4 sm:pt-16 md:pt-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12 pb-12 sm:pb-16">
			<!-- Left Column: Dawnbreak Dotmatrix Insignia -->
			<div class="shrink-0 flex items-start justify-center md:justify-start relative md:-mt-6 lg:-mt-10">
				<div class="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60">
					<DawnbreakMatrix />
				</div>
			</div>

			<div class="flex-1 max-w-4xl">
				<!-- Kicker -->
				<div class="font-mono text-[11px] text-black tracking-widest uppercase mb-4 font-semibold">
					// VETERAN GENAI ADVISORY
				</div>

				<!-- Headline -->
				<h1 class="font-sans text-5xl md:text-7xl font-bold text-black leading-[1.05] tracking-tight mb-6">
					Over-the-Horizon AI Strategy & Execution.
				</h1>

				<!-- Sub-headline -->
				<p class="font-sans text-lg text-black leading-relaxed max-w-3xl mb-6">
					Positioning enterprise leadership for an AI-driven future. I advise executive boards on AI strategy, manage proprietary intelligence build-outs, and drive enterprise transformations with a specialization in expert agents.
				</p>

				<!-- Static Metric Badges -->
				<div class="flex flex-wrap gap-3 mb-8">
					{#each METRICS as metric}
						<div class="border border-black px-3 py-2 font-mono flex flex-col">
							<span class="text-xl sm:text-2xl font-bold text-black leading-none">{metric.value}</span>
							<span class="text-[9px] uppercase tracking-widest text-black/60 mt-0.5">{metric.label}</span>
						</div>
					{/each}
				</div>

				<!-- CTA Actions -->
				<div class="flex flex-wrap items-center gap-4">
					<LinkedInConnectButton
						text="[ CONNECT ON LINKEDIN ]"
						size="lg"
						variant="hero"
					/>
					{#if email}
						<button
							type="button"
							onclick={handleEmailClick}
							class="inline-flex items-center justify-center gap-2 rounded-none bg-white text-black hover:bg-black hover:text-white border border-black px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all min-h-[48px] cursor-pointer"
						>
							<Mail class="w-4 h-4 shrink-0" />
							<span>{emailCopied ? '[ EMAIL COPIED! ]' : '[ DIRECT EMAIL ]'}</span>
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Previous Client & Institutional Track Record Logos -->
	<CredibilityLogos />
</section>