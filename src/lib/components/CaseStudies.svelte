<script lang="ts">
	import { DAUNTLESS_HERITAGE } from '$lib/data/profile';
</script>

<section id="case-studies" class="py-12 sm:py-16 md:py-20 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 mb-10">
			<div class="max-w-3xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Track Record & Systems Architecture
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-black tracking-tight">
					Verified Case Studies
				</h2>
				<p class="text-sm sm:text-base text-black leading-relaxed">
					Selected high-stakes technical engagements delivering audited capital efficiency, workflow acceleration, and institutional transformation.
				</p>
			</div>

			<div class="shrink-0 font-mono text-xs text-black font-semibold">
				[AUDITED PRODUCTION METRICS]
			</div>
		</div>

		<!-- 1. Executive Foundation (2/3 + 1/3 Grid) -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
			<!-- Card 1: Verition Fund Management (2/3 Width) -->
			<div class="lg:col-span-2 bg-white flex flex-col justify-between space-y-6">
				<div>
					<div class="font-mono text-xs text-black tracking-widest uppercase mb-2 font-semibold">
						VERITION FUND MANAGEMENT // 2023 - PRESENT
					</div>

					<h3 class="font-sans text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight">
						Scaling a Sovereign AI Division & Delivering £1M+ in Savings
					</h3>

					<!-- The Mandate -->
					<div class="mb-5">
						<div class="font-mono text-xs text-black uppercase tracking-wider mb-1.5 font-bold">
							// THE MANDATE
						</div>
						<p class="font-sans text-sm text-black leading-relaxed">
							Build a dedicated, secure AI capability for a multi-strategy fund to modernize front-office trading and risk operations.
						</p>
					</div>

					<!-- The Outcome -->
					<div class="mb-5">
						<div class="font-mono text-xs text-black uppercase tracking-wider mb-1.5 font-bold">
							// THE OUTCOME
						</div>
						<p class="font-sans text-sm text-black font-medium leading-relaxed">
							Scaled firmwide usage across executive desks, replacing legacy software stacks to deliver over £1M in annual savings. Created ultra-low-latency analytics engines that reduced critical portfolio intelligence routines to sub-second execution.
						</p>
					</div>
				</div>

				<!-- Stack Pills in clean monospace format -->
				<div class="flex flex-wrap gap-2 text-[11px] font-mono uppercase text-black font-semibold">
					{#each ['DuckDB', 'Model Context Protocol (MCP)', 'FastAPI', 'LibreChat', 'AWS DocumentDB', 'Python'] as badge}
						<span class="text-black">
							[{badge}]
						</span>
					{/each}
				</div>
			</div>

			<!-- Card 2: PwC UK (1/3 Width) -->
			<div class="lg:col-span-1 bg-white flex flex-col justify-between space-y-6">
				<div>
					<div class="font-mono text-xs text-black tracking-widest uppercase mb-2 font-semibold">
						PWC UK // 2022 - 2023
					</div>

					<h3 class="font-sans text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight">
						Accelerating Enterprise Talent Allocation by 75%
					</h3>

					<!-- The Mandate -->
					<div class="mb-5">
						<div class="font-mono text-xs text-black uppercase tracking-wider mb-1.5 font-bold">
							// THE MANDATE
						</div>
						<p class="font-sans text-sm text-black leading-relaxed">
							Transform manual consultancy staffing workflows into high-velocity, software-driven operations for a 4,000-person division.
						</p>
					</div>

					<!-- The Outcome -->
					<div class="mb-5">
						<div class="font-mono text-xs text-black uppercase tracking-wider mb-1.5 font-bold">
							// THE OUTCOME
						</div>
						<p class="font-sans text-sm text-black font-medium leading-relaxed">
							Built an algorithmic search engine that reduced role allocation times from 8 hours to 2 hours. Drove ~$1M in billed efficiency gains and established an internal AI community of over 200 practitioners.
						</p>
					</div>
				</div>

				<!-- Stack Pills in clean monospace format -->
				<div class="flex flex-wrap gap-2 text-[11px] font-mono uppercase text-black font-semibold">
					{#each ['React', 'GCP', 'BigQuery', 'App Engine', 'Talent Intelligence Algorithms'] as badge}
						<span class="text-black">
							[{badge}]
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- 2. Middle Section: Modular Product Systems Grid -->
		<div class="font-mono text-xs text-black tracking-widest uppercase mb-6 font-semibold">
			// DEPLOYED SYSTEMS & CORE INFRASTRUCTURE
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
			<!-- Compact Card 1: Verition VISOR -->
			<div class="bg-white flex flex-col justify-between space-y-4">
				<div>
					<div class="font-mono text-[11px] text-black uppercase mb-1 font-semibold">
						VERITION FUND MANAGEMENT // 2023 - PRESENT
					</div>
					<h4 class="font-sans text-base font-bold text-black mb-3 leading-snug">
						VISOR: Front-Office Data Intelligence & Sub-Second Analytics
					</h4>
					<p class="font-sans text-xs text-black leading-relaxed mb-4">
						Full-stack Tableau replacement application deployed across Risk, PnL, Treasury, and portfolio desks. Ingests live Bloomberg market chat and SEC EDGAR filings, executing complex relational analytical queries in sub-250ms via high-performance DuckDB pipelines.
					</p>
				</div>
				<div class="flex flex-wrap gap-2 text-[10px] font-mono uppercase text-black font-semibold">
					{#each ['DuckDB', 'D3.js', 'SvelteKit', 'Electron', 'Python', 'AWS'] as badge}
						<span class="text-black">
							[{badge}]
						</span>
					{/each}
				</div>
			</div>

			<!-- Compact Card 2: Verition Sovereign AI Platform -->
			<div class="bg-white flex flex-col justify-between space-y-4">
				<div>
					<div class="font-mono text-[11px] text-black uppercase mb-1 font-semibold">
						VERITION FUND MANAGEMENT // 2023 - PRESENT
					</div>
					<h4 class="font-sans text-base font-bold text-black mb-3 leading-snug">
						Enterprise AI Platform, Connected MCPs & Model Garden
					</h4>
					<p class="font-sans text-xs text-black leading-relaxed mb-4">
						Centralized sovereign AI gateway offering multi-model access with complete cloud data privacy. Connects Model Context Protocol (MCP) tool servers and permissioned proxy bridges for quantitative research and automated operational analysis.
					</p>
				</div>
				<div class="flex flex-wrap gap-2 text-[10px] font-mono uppercase text-black font-semibold">
					{#each ['LibreChat', 'React', 'FastAPI', 'MCP', 'DocumentDB', 'AWS'] as badge}
						<span class="text-black">
							[{badge}]
						</span>
					{/each}
				</div>
			</div>

			<!-- Compact Card 3: PwC Enterprise Resource Searcher -->
			<div class="bg-white flex flex-col justify-between space-y-4">
				<div>
					<div class="font-mono text-[11px] text-black uppercase mb-1 font-semibold">
						PWC UK // 2022 - 2023
					</div>
					<h4 class="font-sans text-base font-bold text-black mb-3 leading-snug">
						PwC "LinkedIn": Enterprise Resource Searcher
					</h4>
					<p class="font-sans text-xs text-black leading-relaxed mb-4">
						Algorithmic talent-matching engine serving a 4,000-person operating unit. Replaced manual spreadsheet analysis with high-velocity search pipelines, slashing deployment turnaround times from 8 hours to 2 hours per role.
					</p>
				</div>
				<div class="flex flex-wrap gap-2 text-[10px] font-mono uppercase text-black font-semibold">
					{#each ['React', 'GCP', 'BigQuery', 'JavaScript', 'Apps Script'] as badge}
						<span class="text-black">
							[{badge}]
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- 3. Foundational Contracting Heritage (Preserved Dauntless R&D) -->
		<div class="pt-8 space-y-6">
			<div>
				<div class="font-mono text-xs font-bold uppercase tracking-widest text-black">
					// FORMERLY TRADED UNDER DAUNTLESS R&D
				</div>
				<p class="text-xs text-black font-mono mt-1">
					Contract software engineering delivered across digital health, epidemiological research, and data visualization.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
				{#each DAUNTLESS_HERITAGE.contracts as contract}
					<div class="bg-white flex flex-col justify-between space-y-4">
						<div class="space-y-2">
							<div class="flex items-center justify-between gap-2 text-xs font-semibold">
								<span class="text-black font-mono font-bold text-[11px] uppercase tracking-wider">
									{contract.client}
								</span>
								<span class="font-mono text-[11px] text-black">{contract.period}</span>
							</div>

							<h4 class="text-sm font-sans font-bold text-black leading-snug">
								{contract.title}
							</h4>

							<p class="text-xs text-black leading-relaxed">
								{contract.description}
							</p>
						</div>

						<div class="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase text-black font-semibold">
							{#each contract.stack as item}
								<span class="text-black">
									[{item}]
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>