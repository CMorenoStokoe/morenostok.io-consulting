<script lang="ts">
	import { onMount } from 'svelte';
	import { Mail, ArrowUpRight } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
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
</script>

<section id="connect" class="py-12 sm:py-16 md:py-20 bg-white text-black relative">
	<!-- Hidden anchor for legacy engage links -->
	<div id="engage" class="absolute -top-20 left-0 pointer-events-none" aria-hidden="true"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
			<div class="max-w-2xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Get in Touch
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-black tracking-tight">
					Let's Discuss Your AI Initiatives
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed">
					Available for executive advisory retainers, architectural roadmaps, and rapid proof-of-concept sprints.
				</p>
			</div>

			<!-- Status Badges -->
			<div class="flex flex-wrap items-center gap-2 font-mono text-xs">
				<span class="bg-black text-white px-2.5 py-1 font-bold">
					[OUTSIDE IR35 COMPLIANT]
				</span>
			</div>
		</div>

		<!-- Commercial Model Summary Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 font-mono text-xs border-t border-b border-black py-6">
			<div class="space-y-1">
				<div class="text-black font-bold">[FRACTIONAL ADVISORY]</div>
				<div class="text-black text-[11px]">Strategic board retainers &amp; executive alignment.</div>
			</div>
			<div class="space-y-1">
				<div class="text-black font-bold">[SYSTEMS ARCHITECTURE]</div>
				<div class="text-black text-[11px]">Outcome-based milestones &amp; architectural deliverables.</div>
			</div>
			<div class="space-y-1">
				<div class="text-black font-bold">[RAPID POC PODS]</div>
				<div class="text-black text-[11px]">2-to-4-week high-velocity engineering sprints.</div>
			</div>
		</div>

		<!-- Direct Channels Contact Block -->
		<div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-2">
			<div class="flex flex-col sm:flex-row items-start gap-5">
				<div class="shrink-0">
					<img
						src="/images/chris-moreno-stokoe.jpg"
						alt="Dr. Chris Moreno-Stokoe"
						class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-none grayscale contrast-[1.10]"
					/>
				</div>
				<div class="space-y-2 max-w-xl">
					<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
						// Direct Contact
					</div>
					<h3 class="text-xl sm:text-2xl font-sans font-bold text-black tracking-tight">
						Dr. Chris Moreno-Stokoe
					</h3>
					<p class="text-xs sm:text-sm text-black leading-relaxed">
						Direct inquiries for C-suite leaders, investment partners, and engineering directors.
					</p>
				</div>
			</div>

			<!-- Action Buttons: Primary LinkedIn + Secondary Direct Email Stacked -->
			<div class="flex flex-col gap-2.5 w-full sm:w-auto min-w-[240px]">
				<a
					href={PROFILE_DATA.channels.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2.5 rounded-none bg-[#3300FF] text-white hover:bg-black hover:text-white border border-[#3300FF] hover:border-black px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-all min-h-[44px] w-full shadow-xs"
				>
					<LinkedinIcon class="w-4 h-4 shrink-0 text-white" />
					<span>Connect on LinkedIn</span>
					<ArrowUpRight class="w-4 h-4 text-white" />
				</a>

				{#if email}
					<button
						type="button"
						onclick={handleEmailClick}
						class="inline-flex items-center justify-center gap-2.5 rounded-none bg-white text-black hover:bg-black hover:text-white border border-black px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] w-full cursor-pointer"
					>
						<Mail class="w-4 h-4 shrink-0" />
						<span>{emailCopied ? '[ EMAIL COPIED! ]' : 'Direct Email'}</span>
					</button>
				{:else}
					<span class="text-center font-mono text-[11px] text-black/60 italic py-1">
						[Loading protected email...]
					</span>
				{/if}
			</div>
		</div>
	</div>
</section>