<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock, Check, Download, BookOpen, ExternalLink, Mail } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import { getEmail, getMailtoUrl } from '$lib/utils/email';

	let email = $state('');

	onMount(() => {
		email = getEmail();
	});

	const mailtoHref = $derived(
		getMailtoUrl(
			'Advisory Inquiry: Dr. Chris Moreno-Stokoe',
			'Dr. Chris Moreno-Stokoe,\n\nI would like to discuss strategic advisory / engineering collaboration.\n\nContext & Objectives:\n'
		)
	);

	function downloadVCard() {
		if (!email) return;
		const vcard = `BEGIN:VCARD
VERSION:3.0
N:Moreno-Stokoe;Chris;;Dr.;
FN:Dr. Chris Moreno-Stokoe
TITLE:Strategic AI Leader & Forward-Deployed Engineer
EMAIL;TYPE=INTERNET,PREF:${email}
URL;TYPE=WORK:https://morenostok.io
URL;TYPE=PORTFOLIO:${PROFILE_DATA.channels.portfolio}
URL;TYPE=GITHUB:${PROFILE_DATA.channels.github}
URL;TYPE=LINKEDIN:${PROFILE_DATA.channels.linkedIn}
NOTE:Lead AI Engineer @ Verition Fund Management. AI Team Founder @ PwC. Digital Transformation & Research @ NHS. PhD Human-Computer Engineering.
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

<section id="connect" class="py-14 sm:py-20 bg-white border-b border-slate-200 relative">
	<!-- Hidden anchor for legacy engage links -->
	<div id="engage" class="absolute -top-20 left-0 pointer-events-none" aria-hidden="true"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<!-- Single Unified Section Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
			<div class="max-w-3xl">
				<div class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
					// Connect
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight">
					Connect
				</h2>
				<p class="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
					Direct inquiries and battle-tested engagement models combining executive AI leadership with deep technical expertise in data intelligence products and research workflows.
				</p>
			</div>
		</div>

		<!-- Direct Inquiries & Executive Channels (Moved to Top) -->
		<div class="rounded-none border border-slate-200 bg-[#fafaf9] p-6 sm:p-8 md:p-10 shadow-xs">
			<div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
				<!-- Left: Identity & Info -->
				<div class="space-y-3 max-w-2xl">
					<h3 class="text-xl sm:text-2xl font-display font-semibold text-slate-900 tracking-tight">
						Direct Inquiries & Executive Channels
					</h3>
					<p class="text-slate-600 text-sm sm:text-base leading-relaxed">
						Connect directly with Dr. Chris Moreno-Stokoe for executive advisory, confidential buy-side architecture reviews, and keynote presentations.
					</p>

					<!-- Direct Email & Address Book -->
					<div class="pt-2 flex flex-wrap items-center gap-3 text-xs">
						{#if email}
							<a
								href={mailtoHref}
								class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-none border border-slate-300 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 font-mono transition-colors min-h-[44px]"
							>
								<Mail class="w-3.5 h-3.5 text-slate-700" />
								<span>{email}</span>
							</a>
						{/if}

						<button
							type="button"
							onclick={downloadVCard}
							class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-none border border-slate-300 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-400 font-mono text-xs uppercase tracking-wider transition-colors min-h-[44px]"
						>
							<Download class="w-3.5 h-3.5 text-slate-500" />
							<span>Save Contact (.vcf)</span>
						</button>
					</div>
				</div>

				<!-- Right: Verified Channels -->
				<div class="flex flex-col justify-center shrink-0 lg:w-72">
					<div class="grid grid-cols-2 gap-2 text-xs font-mono font-semibold uppercase tracking-wider">
						<a
							href={PROFILE_DATA.channels.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 p-2.5 rounded-none border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors min-h-[44px]"
						>
							<LinkedinIcon class="w-4 h-4 text-slate-700 shrink-0" />
							<span>LinkedIn</span>
						</a>

						<a
							href={PROFILE_DATA.channels.github}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 p-2.5 rounded-none border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors min-h-[44px]"
						>
							<GithubIcon class="w-4 h-4 shrink-0 text-slate-700" />
							<span>GitHub</span>
						</a>

						<a
							href={PROFILE_DATA.channels.orcid}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 p-2.5 rounded-none border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors min-h-[44px]"
						>
							<BookOpen class="w-4 h-4 text-slate-500 shrink-0" />
							<span>ORCID</span>
						</a>

						<a
							href={PROFILE_DATA.channels.portfolio}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 p-2.5 rounded-none border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors min-h-[44px]"
						>
							<ExternalLink class="w-4 h-4 text-slate-500 shrink-0" />
							<span>Portfolio</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- 4 Structured Framework Cards (Advisory Models) -->
		<div class="space-y-4">
			<div class="font-mono text-xs uppercase tracking-wider text-slate-500">
				Advisory Retainers & Operating Models
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
				{#each PROFILE_DATA.engagementTiers as tier}
					<div class="rounded-none border border-slate-200 bg-[#fafaf9] p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
						<div>
							<div class="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 mb-2">
								<Clock class="w-3.5 h-3.5 text-slate-500" />
								<span>{tier.duration}</span>
							</div>

							<h3 class="text-base font-display font-semibold text-slate-900 leading-snug">
								{tier.name}
							</h3>

							<p class="text-xs text-slate-600 mt-2 mb-3 leading-relaxed font-sans">
								{tier.tagline}
							</p>

							<div class="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">
								Ideal For:
							</div>
							<p class="text-xs text-slate-700 mb-3 leading-relaxed font-sans">
								{tier.idealFor}
							</p>

							<div class="border-t border-slate-200 pt-3 space-y-2">
								<div class="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">
									Scope & Deliverables:
								</div>
								{#each tier.deliverables as deliv}
									<div class="flex items-start gap-1.5 text-xs text-slate-700">
										<Check class="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
										<span class="leading-snug">{deliv}</span>
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