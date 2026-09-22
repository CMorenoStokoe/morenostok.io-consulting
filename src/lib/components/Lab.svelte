<script lang="ts">
	import { ExternalLink, Check, GraduationCap, BookOpen, FlaskConical } from '@lucide/svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	let activeTab = $state<'products' | 'research'>('products');
</script>

<section id="lab" class="py-12 sm:py-16 md:py-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
			<div class="max-w-2xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Innovation & Technical Pedigree
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black tracking-tight">
					Independent AI Lab & Research
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed">
					Combining self-published AI products with doctoral research in Human-Computer Interaction and causal data intelligence.
				</p>
			</div>

			<div class="flex items-center gap-2.5">
				<a
					href={PROFILE_DATA.channels.github}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-1.5 rounded-none border border-black hover:border-black bg-white px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all min-h-[44px]"
				>
					<GithubIcon class="w-3.5 h-3.5" />
					GitHub
				</a>
				<a
					href={PROFILE_DATA.channels.portfolio}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-1.5 rounded-none bg-black border border-black px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all min-h-[44px]"
				>
					<ExternalLink class="w-3.5 h-3.5" />
					Portfolio
				</a>
			</div>
		</div>

		<!-- Lab Sub-Navigation Tabs (clean toggle without bottom rule) -->
		<div class="flex flex-wrap items-center gap-3 pb-2">
			<button
				type="button"
				onclick={() => (activeTab = 'products')}
				class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all min-h-[44px] cursor-pointer {activeTab === 'products' ? 'bg-black text-white font-bold' : 'bg-white text-black hover:bg-black hover:text-white'}"
			>
				<FlaskConical class="w-3.5 h-3.5" />
				Independent AI Software Lab
			</button>

			<button
				type="button"
				onclick={() => (activeTab = 'research')}
				class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all min-h-[44px] cursor-pointer {activeTab === 'research' ? 'bg-black text-white font-bold' : 'bg-white text-black hover:bg-black hover:text-white'}"
			>
				<GraduationCap class="w-3.5 h-3.5" />
				Doctoral Pedigree & Publications
			</button>
		</div>

		<!-- View 1: Independent AI Software Lab (clean, unboxed layout) -->
		{#if activeTab === 'products'}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
				{#each PROFILE_DATA.portfolioProjects as project}
					<div class="bg-white flex flex-col justify-between space-y-4">
						<div class="space-y-3">
							<div class="flex items-center justify-between gap-2">
								<span class="font-mono text-[10px] sm:text-[11px] uppercase font-semibold tracking-wider text-black">
									{project.category}
								</span>
								<span class="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-black font-semibold">
									[{project.status}]
								</span>
							</div>

							<div>
								<h3 class="text-base font-display font-bold text-black">
									{project.title}
								</h3>
								<div class="text-xs font-mono text-black mt-0.5">
									{project.tagline}
								</div>
							</div>

							<p class="text-xs text-black leading-relaxed">
								{project.description}
							</p>

							<ul class="space-y-1.5 pt-2">
								{#each project.highlights as highlight}
									<li class="flex items-start gap-2 text-xs text-black leading-relaxed font-mono">
										<span class="font-bold text-black shrink-0">•</span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>

							{#if project.links && project.links.length > 0}
								<div class="pt-2 space-y-2">
									<div class="font-mono text-[10px] uppercase tracking-widest text-black font-semibold">
										[ PROJECT ENGINES ]
									</div>
									<div class="flex flex-col gap-1.5">
										{#each project.links as link}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center justify-between py-1 text-black hover:underline transition-all text-xs font-mono group"
											>
												<span class="font-semibold truncate mr-2">{link.name}</span>
												<span class="inline-flex items-center gap-1 text-[11px] shrink-0">
													[LAUNCH]
													<ExternalLink class="w-3 h-3" />
												</span>
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>

						<div class="pt-3 flex flex-wrap items-center justify-between gap-3">
							<div class="flex flex-wrap items-center gap-3">
								{#if project.url && (!project.links || project.links.length === 0)}
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black hover:underline min-h-[40px]"
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
										class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black hover:underline min-h-[40px]"
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
				{/each}
			</div>
		{/if}

		<!-- View 2: Doctoral Research & Publications (clean, unboxed layout) -->
		{#if activeTab === 'research'}
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
				<!-- Degrees Left -->
				<div class="lg:col-span-5 space-y-4">
					<div class="bg-white space-y-4">
						<div class="flex items-start gap-4">
							<div class="shrink-0">
								<img
									src="/images/chris-moreno-stokoe.jpg"
									alt="Dr. Chris Moreno-Stokoe"
									class="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-none grayscale contrast-[1.10]"
								/>
							</div>
							<div class="space-y-1 flex-1">
								<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
									// Doctoral Pedigree
								</div>
								<h3 class="text-lg sm:text-xl font-display font-bold text-black">
									University of Bristol
								</h3>
							</div>
						</div>
						<p class="text-xs text-black leading-relaxed">
							Doctoral-level research in Human-Computer Interaction, statistical experimental design, and large-scale data intelligence systems.
						</p>

						<div class="space-y-4 pt-2">
							{#each PROFILE_DATA.education as edu}
								<div class="space-y-1">
									<div class="flex items-center justify-between gap-2">
										<span class="text-xs font-mono font-bold text-black flex items-center gap-1.5">
											<GraduationCap class="w-3.5 h-3.5 text-black" />
											{edu.degree}
										</span>
										<span class="font-mono text-[11px] text-black">{edu.year}</span>
									</div>
									<div class="font-mono text-[11px] text-black">{edu.institution}</div>
									<p class="text-[11px] text-black leading-snug">{edu.notes}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Publications Right -->
				<div class="lg:col-span-7 bg-white space-y-5">
					<div class="flex items-center justify-between gap-3 pb-2">
						<div>
							<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
								// Academic Research Output
							</div>
							<h3 class="text-base sm:text-lg font-display font-bold text-black">
								9 Peer-Reviewed Papers & Theses
							</h3>
						</div>

						<a
							href={PROFILE_DATA.channels.orcid}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black hover:underline min-h-[44px]"
						>
							<BookOpen class="w-3.5 h-3.5" />
							<span>ORCID</span>
							<ExternalLink class="w-3 h-3" />
						</a>
					</div>

					<div class="space-y-4">
						{#each PROFILE_DATA.publications as pub}
							<div class="space-y-1.5 group transition-all">
								<div class="flex items-center justify-between gap-2">
									<span class="font-mono text-xs text-black">{pub.year} • {pub.journal}</span>
									{#if pub.featured}
										<span class="font-mono text-[10px] uppercase tracking-wider bg-black text-white px-2 py-0.5 font-bold">
											FEATURED
										</span>
									{/if}
								</div>
								<h4 class="text-sm font-display font-bold text-black leading-snug">
									{pub.title}
								</h4>
								<p class="text-xs text-black">
									{pub.authors}
								</p>
								{#if pub.doi}
									<div class="pt-0.5">
										<a
											href={pub.url}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center gap-1 font-mono text-[11px] text-black hover:underline min-h-[32px]"
										>
											<span>DOI: {pub.doi}</span>
											<ExternalLink class="w-2.5 h-2.5" />
										</a>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>