<script lang="ts">
	import { ExternalLink, Check, GraduationCap, BookOpen, FlaskConical } from '@lucide/svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	let activeTab = $state<'products' | 'research'>('products');
</script>

<section id="lab" class="py-14 sm:py-20 bg-[#fafaf9] border-b border-slate-200">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
			<div class="max-w-2xl">
				<div class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
					// Innovation & Pedigree
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight">
					Lab
				</h2>
				<p class="mt-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
					Combining personal AI product engineering with doctoral research in human-computer interaction and causal data intelligence.
				</p>
			</div>

			<div class="flex items-center gap-2.5">
				<a
					href={PROFILE_DATA.channels.github}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-1.5 rounded-none border border-slate-300 bg-white px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-slate-50 min-h-[44px]"
				>
					<GithubIcon class="w-3.5 h-3.5" />
					GitHub
				</a>
				<a
					href={PROFILE_DATA.channels.portfolio}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-1.5 rounded-none bg-slate-900 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 min-h-[44px]"
				>
					<ExternalLink class="w-3.5 h-3.5" />
					Portfolio
				</a>
			</div>
		</div>

		<!-- Lab Sub-Navigation Tabs: Touch-friendly wrapping -->
		<div class="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
			<button
				type="button"
				onclick={() => (activeTab = 'products')}
				class="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all min-h-[44px] {activeTab === 'products' ? 'bg-slate-900 text-white border border-slate-900' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}"
			>
				<FlaskConical class="w-3.5 h-3.5" />
				Independent AI Software Lab
			</button>

			<button
				type="button"
				onclick={() => (activeTab = 'research')}
				class="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all min-h-[44px] {activeTab === 'research' ? 'bg-slate-900 text-white border border-slate-900' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}"
			>
				<GraduationCap class="w-3.5 h-3.5" />
				Doctoral Research & Publications
			</button>
		</div>

		<!-- View 1: Independent AI Software Lab -->
		{#if activeTab === 'products'}
			<div class="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each PROFILE_DATA.portfolioProjects as project}
					<div class="rounded-none border border-slate-200 bg-white p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
						<div>
							<div class="flex items-center justify-between gap-2 mb-2">
								<span class="font-mono text-[10px] sm:text-[11px] uppercase font-semibold tracking-wider text-slate-500">
									{project.category}
								</span>
								<span class="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-none border border-slate-200 bg-[#fafaf9] text-slate-700">
									{project.status}
								</span>
							</div>

							<h3 class="text-base font-display font-semibold text-slate-900">
								{project.title}
							</h3>
							<div class="text-xs font-mono text-slate-500 mt-0.5 mb-2">
								{project.tagline}
							</div>

							<p class="text-xs text-slate-700 leading-relaxed mb-3">
								{project.description}
							</p>

							<ul class="space-y-1 border-t border-slate-100 pt-2.5">
								{#each project.highlights as highlight}
									<li class="flex items-start gap-1.5 text-xs text-slate-700">
										<Check class="w-3 h-3 text-slate-900 shrink-0 mt-0.5" />
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>

							{#if project.links && project.links.length > 0}
								<div class="border-t border-slate-100 pt-3 mt-2 space-y-1.5">
									<div class="font-mono text-[10px] uppercase tracking-wider text-slate-400">
										Project Links:
									</div>
									<div class="flex flex-col gap-1.5">
										{#each project.links as link}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inline-flex items-center justify-between p-2 rounded-none border border-slate-200 bg-[#fafaf9] hover:bg-slate-100 hover:border-slate-300 text-slate-800 hover:text-slate-900 transition-all text-xs font-mono group"
											>
												<span class="font-medium truncate mr-2">{link.name}</span>
												<span class="inline-flex items-center gap-1 text-[11px] text-slate-500 group-hover:text-slate-900 shrink-0">
													Launch
													<ExternalLink class="w-3 h-3" />
												</span>
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>

						<div class="pt-3 mt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
							<div class="flex flex-wrap items-center gap-3">
								{#if project.url && (!project.links || project.links.length === 0)}
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-slate-900 hover:text-slate-600 min-h-[44px]"
									>
										Launch App
										<ExternalLink class="w-3 h-3" />
									</a>
								{/if}
								{#if project.githubUrl}
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-600 hover:text-slate-900 min-h-[44px]"
									>
										<GithubIcon class="w-3.5 h-3.5" />
										GitHub
									</a>
								{/if}
							</div>
							{#if !project.url && !project.githubUrl && (!project.links || project.links.length === 0)}
								<span class="font-mono text-xs text-slate-400 italic">
									{project.status === 'Coming Soon' ? 'In Development' : 'Private Repository'}
								</span>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- View 2: Doctoral Research & Publications -->
		{#if activeTab === 'research'}
			<div class="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
				<!-- Degrees Left -->
				<div class="lg:col-span-5 space-y-4">
					<div class="rounded-none border border-slate-200 bg-white p-5 sm:p-6 space-y-3 shadow-xs">
						<div class="font-mono text-xs uppercase tracking-wider text-slate-500">
							Doctoral Pedigree
						</div>
						<h3 class="text-lg sm:text-xl font-display font-semibold text-slate-900">
							University of Bristol
						</h3>
						<p class="text-xs text-slate-600 leading-relaxed">
							Doctoral-level research in Human-Computer Interaction, statistical experimental design, and large-scale data intelligence systems.
						</p>

						<div class="space-y-2.5 pt-1">
							{#each PROFILE_DATA.education as edu}
								<div class="rounded-none border border-slate-200 bg-[#fafaf9] p-3.5 space-y-1">
									<div class="flex items-center justify-between">
										<span class="text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5">
											<GraduationCap class="w-3.5 h-3.5 text-slate-700" />
											{edu.degree}
										</span>
										<span class="font-mono text-[11px] text-slate-500">{edu.year}</span>
									</div>
									<div class="font-mono text-[11px] text-slate-700">{edu.institution}</div>
									<p class="text-[11px] text-slate-500 leading-snug pt-0.5">{edu.notes}</p>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Publications Right -->
				<div class="lg:col-span-7 rounded-none border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-xs">
					<div class="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
						<div>
							<div class="font-mono text-xs uppercase tracking-wider text-slate-500">
								Research Output
							</div>
							<h3 class="text-base sm:text-lg font-display font-semibold text-slate-900">
								9 Peer-Reviewed Academic Papers & Theses
							</h3>
						</div>

						<a
							href={PROFILE_DATA.channels.orcid}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-slate-900 hover:text-slate-600 min-h-[44px]"
						>
							<BookOpen class="w-3.5 h-3.5" />
							ORCID
							<ExternalLink class="w-3 h-3" />
						</a>
					</div>

					<div class="space-y-3">
						{#each PROFILE_DATA.publications as pub}
							<div class="rounded-none border border-slate-200 bg-[#fafaf9] p-3.5 space-y-1.5">
								<div class="flex items-center justify-between gap-2">
									<span class="font-mono text-xs text-slate-500">{pub.year} • {pub.journal}</span>
									{#if pub.featured}
										<span class="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-none bg-slate-200 text-slate-800">
											Featured
										</span>
									{/if}
								</div>
								<h4 class="text-sm font-display font-semibold text-slate-900 leading-snug">
									{pub.title}
								</h4>
								<p class="text-xs text-slate-600">
									{pub.authors}
								</p>
								{#if pub.doi}
									<div class="pt-0.5">
										<a
											href={pub.url}
											target="_blank"
											rel="noopener noreferrer"
											class="inline-flex items-center gap-1 font-mono text-[11px] text-slate-800 hover:underline min-h-[32px]"
										>
											DOI: {pub.doi}
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