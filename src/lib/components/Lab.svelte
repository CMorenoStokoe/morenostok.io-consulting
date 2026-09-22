<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { ExternalLink, GraduationCap, BookOpen, ChevronDown, ChevronUp } from '@lucide/svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import TechMarquee from '$lib/components/TechMarquee.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	let scrollContainer = $state<HTMLDivElement | null>(null);
	let userInteracted = $state(false);
	let showAcademicPedigree = $state(false);

	let scrollDirection = 1; // 1 = right, -1 = left
	let animId: number | null = null;
	let lastTimestamp = 0;

	function autoScrollStep(timestamp: number) {
		if (userInteracted || !scrollContainer) return;

		if (!lastTimestamp) lastTimestamp = timestamp;
		const delta = timestamp - lastTimestamp;
		lastTimestamp = timestamp;

		// Slightly faster smooth drift (~75px per second)
		const speed = 0.075;
		const move = delta * speed;

		const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
		if (maxScroll > 10) {
			if (scrollDirection === 1) {
				scrollContainer.scrollLeft += move;
				if (scrollContainer.scrollLeft >= maxScroll - 2) {
					scrollDirection = -1;
				}
			} else {
				scrollContainer.scrollLeft -= move;
				if (scrollContainer.scrollLeft <= 2) {
					scrollDirection = 1;
				}
			}
		}

		animId = requestAnimationFrame(autoScrollStep);
	}

	function handleUserInteraction() {
		if (!userInteracted) {
			userInteracted = true;
			if (animId) {
				cancelAnimationFrame(animId);
				animId = null;
			}
		}
	}

	onMount(() => {
		animId = requestAnimationFrame(autoScrollStep);
	});

	onDestroy(() => {
		if (animId) {
			cancelAnimationFrame(animId);
		}
	});
</script>

<section id="lab" class="py-12 sm:py-16 md:py-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
		<!-- Header -->
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
			<div class="max-w-2xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Innovation & Technical Pedigree
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight">
					Independent AI Lab
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed">
					Self-published AI systems, foundational developer frameworks, and quantitative reasoning engines.
				</p>
			</div>
		</div>

		<!-- Academic Pedigree & Research Integration -->
		<div class="pb-2 border-b border-black space-y-4">
			<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
				<div class="flex items-center gap-2.5 text-black font-semibold">
					<GraduationCap class="w-4 h-4 shrink-0" />
					<span>Academic Pedigree & Research: University of Bristol Ph.D. // 9 Peer-Reviewed Publications & Theses</span>
				</div>

				<div class="flex items-center gap-3">
					<a
						href={PROFILE_DATA.channels.orcid}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 text-black hover:underline font-semibold"
					>
						<span>[ ORCID ]</span>
						<ExternalLink class="w-3 h-3" />
					</a>
					<button
						type="button"
						onclick={() => (showAcademicPedigree = !showAcademicPedigree)}
						class="inline-flex items-center gap-1 text-black hover:underline font-bold cursor-pointer"
					>
						<span>{showAcademicPedigree ? '[- COLLAPSE PAPERS]' : '[+ EXPAND PAPERS]'}</span>
						{#if showAcademicPedigree}
							<ChevronUp class="w-3.5 h-3.5" />
						{:else}
							<ChevronDown class="w-3.5 h-3.5" />
						{/if}
					</button>
				</div>
			</div>

			<!-- Collapsible Academic Papers Drawer -->
			{#if showAcademicPedigree}
				<div class="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-black p-6">
					<div class="space-y-3">
						<div class="font-mono text-xs font-bold uppercase tracking-wider text-black">
							// Academic Degrees & Training
						</div>
						{#each PROFILE_DATA.education as edu}
							<div class="space-y-1 font-mono text-xs">
								<div class="font-bold text-black flex items-center gap-1.5">
									<GraduationCap class="w-3.5 h-3.5" />
									<span>{edu.degree}</span>
									<span class="font-normal text-black/70">({edu.year})</span>
								</div>
								<div class="text-black/80">{edu.institution}</div>
								<p class="text-[11px] text-black/70 font-sans">{edu.notes}</p>
							</div>
						{/each}
					</div>

					<div class="space-y-3">
						<div class="font-mono text-xs font-bold uppercase tracking-wider text-black">
							// Peer-Reviewed Publications & Theses
						</div>
						<div class="space-y-3 max-h-72 overflow-y-auto pr-2">
							{#each PROFILE_DATA.publications as pub}
								<div class="space-y-1">
									<div class="flex items-center justify-between gap-2 font-mono text-[11px]">
										<span class="text-black">{pub.year} • {pub.journal}</span>
										{#if pub.featured}
											<span class="bg-black text-white px-1.5 py-0.2 text-[9px] font-bold">
												FEATURED
											</span>
										{/if}
									</div>
									<h4 class="text-xs font-display font-bold text-black leading-snug">
										{pub.title}
									</h4>
									{#if pub.doi}
										<a
											href={pub.url}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center gap-1 font-mono text-[10px] text-black hover:underline"
										>
											<span>DOI: {pub.doi}</span>
											<ExternalLink class="w-2.5 h-2.5" />
										</a>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Horizontal Carousel Gallery Container -->
		<div class="space-y-2">
			<div class="font-mono text-[10px] text-black/50 uppercase tracking-widest font-semibold">
				[SWIPE / SCROLL TO EXPLORE]
			</div>

			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<div
				bind:this={scrollContainer}
				onmouseenter={handleUserInteraction}
				ontouchstart={handleUserInteraction}
				onpointerdown={handleUserInteraction}
				onwheel={handleUserInteraction}
				tabindex="0"
				role="region"
				aria-label="Product gallery carousel"
				class="flex gap-6 overflow-x-auto pb-6 pt-1 scroll-smooth no-scrollbar focus:outline-none"
				style="scrollbar-width: none; -ms-overflow-style: none;"
			>
			{#each PROFILE_DATA.portfolioProjects as project, idx}
				<article
					class="w-[300px] sm:w-[380px] md:w-[440px] shrink-0 bg-white border border-black p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-[#3300FF] transition-all group"
				>
					<!-- Top Details: Category, Status, Title, Tagline -->
					<div class="space-y-3">
						<div class="flex items-center justify-between gap-2">
							<span class="font-mono text-[10px] sm:text-[11px] uppercase font-semibold tracking-wider text-black">
								// 0{idx + 1} • {project.category}
							</span>
							<span
								class="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 font-bold {project.status === 'Live' ? 'bg-[#3300FF] text-white' : 'bg-black text-white'}"
							>
								[{project.status}]
							</span>
						</div>

						<div>
							<h3 class="text-lg sm:text-xl font-display font-bold text-black group-hover:text-[#3300FF] transition-colors leading-tight">
								{project.title}
							</h3>
							<div class="text-xs font-mono text-black font-medium mt-1">
								{project.tagline}
							</div>
						</div>
					</div>

					<!-- Landscape Picture: Consistent 16:9 Dimension -->
					<div class="aspect-video w-full overflow-hidden border border-black bg-black">
						{#if project.image}
							<img
								src={project.image}
								alt="{project.title} landscape preview"
								class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
								loading="lazy"
							/>
						{:else}
							<div class="w-full h-full flex items-center justify-center font-mono text-xs text-white">
								[LANDSCAPE PREVIEW]
							</div>
						{/if}
					</div>

					<!-- Bottom Details: Description, Highlights, Action Links -->
					<div class="space-y-4 flex-1 flex flex-col justify-between">
						<div class="space-y-3">
							<p class="text-xs sm:text-sm text-black leading-relaxed font-sans">
								{project.description}
							</p>

							<ul class="space-y-1.5 pt-1">
								{#each project.highlights as highlight}
									<li class="flex items-start gap-2 text-xs text-black leading-relaxed font-mono">
										<span class="font-bold text-[#3300FF] shrink-0">•</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>

							{#if project.links && project.links.length > 0}
								<div class="pt-2 space-y-1.5">
									<div class="font-mono text-[10px] uppercase tracking-widest text-black font-semibold">
										[ SUB-ENGINES ]
									</div>
									<div class="flex flex-col gap-1">
										{#each project.links as link}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center justify-between py-1 text-black hover:text-[#3300FF] hover:underline transition-all text-xs font-mono"
											>
												<span class="font-semibold truncate mr-2">{link.name}</span>
												<span class="inline-flex items-center gap-1 text-[11px] shrink-0 font-bold">
													[LAUNCH]
													<ExternalLink class="w-3 h-3" />
												</span>
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>

						<!-- Action Footer -->
						<div class="pt-3 border-t border-black/15 flex flex-wrap items-center justify-between gap-3">
							<div class="flex flex-wrap items-center gap-3">
								{#if project.url && (!project.links || project.links.length === 0)}
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-[#3300FF] text-white px-3 py-1.5 hover:bg-black transition-colors min-h-[36px]"
									>
										<span>[LAUNCH LIVE]</span>
										<ExternalLink class="w-3 h-3" />
									</a>
								{/if}
								{#if project.githubUrl}
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black hover:underline min-h-[36px]"
									>
										<GithubIcon class="w-3.5 h-3.5" />
										<span>Source</span>
									</a>
								{/if}
							</div>
							{#if !project.url && !project.githubUrl && (!project.links || project.links.length === 0)}
								<span class="font-mono text-xs text-black italic">
									{project.status === 'Coming Soon' ? '[IN DEVELOPMENT]' : '[PRIVATE REPOSITORY]'}
								</span>
							{/if}
						</div>
					</div>
				</article>
			{/each}
			</div>
		</div>

		<!-- Static High-Density Tech Stack Display -->
		<div class="pt-2 pb-2">
			<TechMarquee />
		</div>
	</div>
</section>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>