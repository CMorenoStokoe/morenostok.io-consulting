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
	let emailCopied = $state(false);

	onMount(() => {
		email = getEmail();
	});

	function handleEmailClick() {
		if (!email) return;
		// 1. Try launching default email client
		window.location.href = `mailto:${email}`;

		// 2. Also copy to clipboard so if client has no default mail app configured, they have the email
		if (navigator.clipboard) {
			navigator.clipboard.writeText(email).then(() => {
				emailCopied = true;
				setTimeout(() => {
					emailCopied = false;
				}, 3000);
			});
		}
	}
</script>

<section class="relative pt-4 sm:pt-16 md:pt-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12 pb-12 sm:pb-16">
			<!-- Left Column: Dawnbreak Dotmatrix Insignia + Dynamic Typewriter Impact Metrics -->
			<div class="shrink-0 w-full sm:w-48 md:w-52 lg:w-60 flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-5 relative md:-mt-6 lg:-mt-10">
				<div class="w-24 h-24 min-w-[96px] sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0">
					<DawnbreakMatrix />
				</div>
				<div class="flex-1 w-full min-w-0">
					<TypewriterMetric />
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
				<p class="font-sans text-lg text-black leading-relaxed max-w-3xl mb-8">
					Positioning enterprise leadership for an AI-driven future. I advise executive boards on AI strategy, manage proprietary intelligence build-outs, and drive enterprise transformations with a specialization in expert agents.
				</p>

				<!-- CTA Actions -->
				<div class="pt-2 flex flex-wrap items-center gap-4">
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