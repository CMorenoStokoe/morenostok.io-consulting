<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Check, Download, BookOpen, ExternalLink, Mail, ShieldCheck } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import { getEmail, getMailtoUrl } from '$lib/utils/email';

	let email = $state('');

	onMount(() => {
		email = getEmail();
	});

	const reviewMailto = $derived(
		getMailtoUrl(
			'Strategic Review Inquiry // Dr. Chris Moreno-Stokoe',
			'Dr. Chris Moreno-Stokoe,\n\nWe would like to initiate an executive advisory / architectural review engagement.\n\nContext & Objectives:\n'
		)
	);

	const pocMailto = $derived(
		getMailtoUrl(
			'Rapid PoC Sprint Inquiry (Outside IR35) // Dr. Chris Moreno-Stokoe',
			'Dr. Chris Moreno-Stokoe,\n\nWe would like to scope a 2 to 4 week Rapid PoC Sprint (Outside IR35).\n\nHypothesis & Target Tech Stack:\n'
		)
	);

	function downloadVCard() {
		if (!email) return;
		const vcard = `BEGIN:VCARD
VERSION:3.0
N:Moreno-Stokoe;Chris;;Dr.;
FN:Dr. Chris Moreno-Stokoe
TITLE:Principal Technical Consultant & Systems Architect
EMAIL;TYPE=INTERNET,PREF:${email}
URL;TYPE=WORK:https://morenostok.io
URL;TYPE=PORTFOLIO:${PROFILE_DATA.channels.portfolio}
URL;TYPE=GITHUB:${PROFILE_DATA.channels.github}
URL;TYPE=LINKEDIN:${PROFILE_DATA.channels.linkedIn}
NOTE:Lead AI Engineer @ Verition Fund Management. AI Team Founder @ PwC. Digital Transformation & Research @ NHS. PhD Human-Computer Interaction.
END:VCARD`;

		const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'Dr_Chris_Moreno_Stokoe.vcf');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}
</script>

<section id="connect" class="py-12 sm:py-16 md:py-20 bg-white text-black relative">
	<!-- Hidden anchor for legacy engage links -->
	<div id="engage" class="absolute -top-20 left-0 pointer-events-none" aria-hidden="true"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<!-- Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
			<div class="max-w-3xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Direct Channels & Engagement Architecture
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-black tracking-tight">
					Initiate Direct Engagement
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed">
					Engagements operate strictly Outside IR35 via outcome-driven Statements of Work, clearly defined milestones, and concrete architectural deliverables.
				</p>
			</div>

			<!-- Status Badges -->
			<div class="flex flex-wrap items-center gap-2 font-mono text-xs">
				<span class="bg-black text-white px-2.5 py-1 font-bold">
					[STATUS: OUTSIDE-IR35]
				</span>
				<span class="text-black px-2.5 py-1 font-semibold">
					[MODEL: SOW / DELIVERABLES]
				</span>
			</div>
		</div>

		<!-- Commercial Architecture: Strictly Outside-IR35 Prominent Section -->
		<div class="bg-white space-y-4">
			<div class="flex items-center gap-2.5 font-mono text-xs font-bold text-black uppercase tracking-wider">
				<ShieldCheck class="w-4 h-4 text-black shrink-0" />
				<span>Commercial Architecture: Strictly Outside-IR35</span>
			</div>
			<p class="font-sans text-sm text-black leading-relaxed max-w-4xl">
				All engagements are structured around formal Statements of Work (SOWs), distinct milestones, and concrete architectural deliverables. This operating model ensures zero employer-substitution ambiguity, providing complete UK tax compliance and risk mitigation for your enterprise.
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 font-mono text-xs">
				<div class="space-y-1">
					<div class="text-black font-bold">[FRACTIONAL ADVISORY]</div>
					<div class="text-black text-[11px]">Nominal £1,000/day strategic retainers</div>
				</div>
				<div class="space-y-1">
					<div class="text-black font-bold">[SYSTEMS ARCHITECTURE]</div>
					<div class="text-black text-[11px]">Nominal £1,000/day milestone SOWs</div>
				</div>
				<div class="space-y-1">
					<div class="text-black font-bold">[RAPID POC PODS]</div>
					<div class="text-black text-[11px]">£500/day blended rate (2-4 week sprints)</div>
				</div>
			</div>
		</div>

		<!-- Direct Channels Card & Segmented CTAs -->
		<div class="bg-white space-y-6 pt-4">
			<div class="flex flex-col sm:flex-row items-start gap-5">
				<div class="shrink-0">
					<img
						src="/images/chris-moreno-stokoe.jpg"
						alt="Dr. Chris Moreno-Stokoe"
						class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-none grayscale contrast-[1.10]"
					/>
				</div>
				<div class="space-y-2 flex-1">
					<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
						// Direct Channels & Action Triggers
					</div>
					<h3 class="text-xl sm:text-2xl font-sans font-bold text-black tracking-tight">
						Direct Inquiries & Executive Channels
					</h3>
					<p class="text-xs sm:text-sm text-black leading-relaxed max-w-2xl">
						Direct communication channels with Dr. Chris Moreno-Stokoe for C-suite leaders, investment partners, and engineering directors.
					</p>
				</div>
			</div>

			<!-- Segmented Action Buttons -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
				<a
					href={reviewMailto}
					class="inline-flex items-center justify-center gap-2 rounded-none bg-black text-white font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 border border-black hover:bg-white hover:text-black transition-all min-h-[48px] text-center"
				>
					<span>[ INITIATE STRATEGIC REVIEW ]</span>
				</a>

				<a
					href={pocMailto}
					class="inline-flex items-center justify-center gap-2 rounded-none bg-white text-black font-mono text-xs font-bold uppercase tracking-wider py-4 px-6 border border-black hover:bg-black hover:text-white transition-all min-h-[48px] text-center"
				>
					<span>[ SCOPE RAPID POC SPRINT (OUTSIDE IR35) ]</span>
				</a>
			</div>

			<!-- Secondary Direct Links -->
			<div class="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
				<div class="flex flex-wrap items-center gap-3">
					{#if email}
						<a
							href={reviewMailto}
							class="inline-flex items-center gap-1.5 py-1.5 text-black hover:underline transition-all"
						>
							<Mail class="w-3.5 h-3.5 shrink-0" />
							<span>{email}</span>
						</a>
					{/if}

					<button
						type="button"
						onclick={downloadVCard}
						class="inline-flex items-center gap-1.5 py-1.5 text-black hover:underline transition-all cursor-pointer"
					>
						<Download class="w-3.5 h-3.5 shrink-0" />
						<span>Save Contact (.vcf)</span>
					</button>
				</div>

				<div class="flex items-center gap-3 text-xs">
					<a
						href={PROFILE_DATA.channels.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-[#3300FF] font-bold hover:underline transition-colors"
					>
						<LinkedinIcon class="w-4 h-4 shrink-0 text-[#3300FF]" />
						<span>LinkedIn</span>
					</a>
					<span class="text-black">•</span>
					<a
						href={PROFILE_DATA.channels.github}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 text-black hover:underline transition-colors"
					>
						<GithubIcon class="w-4 h-4 shrink-0" />
						<span>GitHub</span>
					</a>
					<span class="text-black">•</span>
					<a
						href={PROFILE_DATA.channels.orcid}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 text-black hover:underline transition-colors"
					>
						<BookOpen class="w-3.5 h-3.5" />
						<span>ORCID</span>
					</a>
				</div>
			</div>
		</div>

		<!-- 4 Structured Framework Cards (clean, unboxed layout) -->
		<div class="space-y-4 pt-4">
			<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
				// Advisory Retainers & Operating Frameworks
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
				{#each PROFILE_DATA.engagementTiers as tier}
					<div class="bg-white flex flex-col justify-between space-y-4">
						<div class="space-y-3">
							<div class="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-black">
								<Clock class="w-3.5 h-3.5 text-black" />
								<span>{tier.duration}</span>
							</div>

							<h3 class="text-base font-sans font-bold text-black leading-snug">
								{tier.name}
							</h3>

							<p class="text-xs text-black leading-relaxed">
								{tier.tagline}
							</p>

							<div class="pt-2 space-y-1">
								<div class="font-mono text-[10px] uppercase tracking-widest text-black font-semibold">
									Ideal For:
								</div>
								<p class="text-xs text-black leading-relaxed">
									{tier.idealFor}
								</p>
							</div>

							<div class="pt-2 space-y-2">
								<div class="font-mono text-[10px] uppercase tracking-widest text-black font-semibold">
									Deliverables:
								</div>
								{#each tier.deliverables as deliv}
									<div class="flex items-start gap-2 text-xs text-black leading-relaxed font-mono">
										<span class="text-black font-bold shrink-0 mt-0.5">•</span>
										<span>{deliv}</span>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>