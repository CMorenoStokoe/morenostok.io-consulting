<script lang="ts">
	import { DAUNTLESS_HERITAGE } from '$lib/data/profile';
</script>

<section id="case-studies" class="py-12 sm:py-16 md:py-20 bg-[#0B0C0E] border-b border-[#22252A]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#22252A] pb-6 sm:pb-8 mb-10">
			<div class="max-w-3xl space-y-2">
				<div class="font-mono text-xs uppercase tracking-widest text-[#8A919E]">
					// Track Record & Systems Architecture
				</div>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#F4F5F6] tracking-tight">
					Verified Case Studies
				</h2>
				<p class="text-sm sm:text-base text-[#8A919E] leading-relaxed">
					Selected high-stakes technical engagements delivering audited capital efficiency, workflow acceleration, and institutional transformation.
				</p>
			</div>

			<div class="shrink-0 font-mono text-xs text-[#8A919E]">
				[AUDITED PRODUCTION METRICS]
			</div>
		</div>

		<!-- 1. Executive Foundation (2/3 + 1/3 Grid) -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
			<!-- Card 1: Verition AI Founding (2/3 Width) -->
			<div class="lg:col-span-2 border border-[#22252A] bg-[#131518] p-8 flex flex-col justify-between">
				<div>
					<div class="font-mono text-xs text-[#8A919E] tracking-widest uppercase mb-2">
						VERITION FUND MANAGEMENT // 2023 - PRESENT
					</div>

					<h3 class="font-sans text-2xl font-semibold text-[#F4F5F6] mb-4 leading-tight">
						Founding & Scaling the Multi-Strategy AI Engineering Division
					</h3>

					<p class="font-sans text-sm text-[#8A919E] mb-6 leading-relaxed">
						Architected and built the firm's sovereign AI engineering capability from the ground up. Tasked with operationalizing frontier GenAI across front-office portfolio desks, multi-manager risk operations, and treasury infrastructure.
					</p>

					<!-- Execution Vector -->
					<div class="mb-6">
						<div class="font-mono text-xs text-[#F4F5F6] uppercase tracking-wider mb-2">
							// EXECUTION VECTOR
						</div>
						<ul class="font-sans text-xs text-[#8A919E] space-y-1.5">
							<li class="flex items-start gap-2">
								<span class="font-mono text-[#F4F5F6] mt-0.5">•</span>
								<span>Embedded forward-deployed engineering teams directly inside trading desks and executive risk operations.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="font-mono text-[#F4F5F6] mt-0.5">•</span>
								<span>Deployed zero-data-leakage sovereign architecture, high-throughput private inference gateways, and connected Model Context Protocol (MCP) ecosystems.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="font-mono text-[#F4F5F6] mt-0.5">•</span>
								<span>Built ultra-low-latency analytics engines converting multi-minute portfolio intelligence routines into sub-second execution loops.</span>
							</li>
						</ul>
					</div>

					<!-- Institutional Impact -->
					<div class="mb-6">
						<div class="font-mono text-xs text-[#F4F5F6] uppercase tracking-wider mb-2">
							// MEASURABLE IMPACT
						</div>
						<ul class="font-sans text-xs text-[#F4F5F6] space-y-1.5 font-mono">
							<li class="flex items-start gap-2">
								<span class="text-white font-bold">✓</span>
								<span>Scaled firmwide usage across front-office portfolio desks, risk officers, and treasury operations.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-white font-bold">✓</span>
								<span>Displaced legacy third-party BI software stacks, achieving $1M+/yr in audited recurring savings.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-white font-bold">✓</span>
								<span>Slashed critical query latency from 30+ seconds down to &lt;250ms for real-time portfolio reasoning.</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- Stack Pills -->
				<div class="flex flex-wrap gap-2 pt-4 border-t border-[#22252A]">
					{#each ['Autonomous Agents', 'MCP Servers', 'DuckDB', 'Model Garden', 'Private Cloud', 'Python'] as badge}
						<span class="px-2 py-1 bg-[#0B0C0E] border border-[#22252A] font-mono text-[10px] text-[#8A919E] uppercase">
							{badge}
						</span>
					{/each}
				</div>
			</div>

			<!-- Card 2: PwC AI Practice Founding (1/3 Width) -->
			<div class="lg:col-span-1 border border-[#22252A] bg-[#131518] p-8 flex flex-col justify-between">
				<div>
					<div class="font-mono text-xs text-[#8A919E] tracking-widest uppercase mb-2">
						PWC UK // 2022 - 2023
					</div>

					<h3 class="font-sans text-2xl font-semibold text-[#F4F5F6] mb-4 leading-tight">
						Founding the Enterprise AI & Web Applications Practice
					</h3>

					<p class="font-sans text-sm text-[#8A919E] mb-6 leading-relaxed">
						Stood up the dedicated internal AI engineering team to convert manual enterprise consultancy workflows into algorithmic, high-velocity internal data platforms.
					</p>

					<!-- Execution Vector -->
					<div class="mb-6">
						<div class="font-mono text-xs text-[#F4F5F6] uppercase tracking-wider mb-2">
							// EXECUTION VECTOR
						</div>
						<ul class="font-sans text-xs text-[#8A919E] space-y-1.5">
							<li class="flex items-start gap-2">
								<span class="font-mono text-[#F4F5F6] mt-0.5">•</span>
								<span>Founded and directed the cross-disciplinary AI engineering and web application team.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="font-mono text-[#F4F5F6] mt-0.5">•</span>
								<span>Built enterprise talent intelligence and allocation search engines servicing a 4,000-person division.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="font-mono text-[#F4F5F6] mt-0.5">•</span>
								<span>Founded and organized the firmwide AI adoption community across London and national offices.</span>
							</li>
						</ul>
					</div>

					<!-- Institutional Impact -->
					<div class="mb-6">
						<div class="font-mono text-xs text-[#F4F5F6] uppercase tracking-wider mb-2">
							// MEASURABLE IMPACT
						</div>
						<ul class="font-sans text-xs text-[#F4F5F6] space-y-1.5 font-mono">
							<li class="flex items-start gap-2">
								<span class="text-white font-bold">✓</span>
								<span>Drove ~$1M in annual billed efficiency gains and client-facing technology engagements.</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-white font-bold">✓</span>
								<span>Cut engagement staffing cycles by 75% (reducing search routines from 8 hours to 2 hours).</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-white font-bold">✓</span>
								<span>Scaled internal AI literacy community from 0 to 200+ active enterprise practitioners.</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- Stack Pills -->
				<div class="flex flex-wrap gap-2 pt-4 border-t border-[#22252A]">
					{#each ['Enterprise LLMs', 'GCP', 'BigQuery', 'React', 'Cloud Run'] as badge}
						<span class="px-2 py-1 bg-[#0B0C0E] border border-[#22252A] font-mono text-[10px] text-[#8A919E] uppercase">
							{badge}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- 2. Middle Section: Modular Product Systems Grid -->
		<div class="font-mono text-xs text-[#8A919E] tracking-widest uppercase mb-6">
			// DEPLOYED SYSTEMS & CORE INFRASTRUCTURE
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
			<!-- Compact Card 1: Verition VISOR -->
			<div class="border border-[#22252A] bg-[#131518] p-6 flex flex-col justify-between">
				<div>
					<div class="font-mono text-[11px] text-[#8A919E] uppercase mb-1">
						VERITION FUND MANAGEMENT // 2023 - PRESENT
					</div>
					<h4 class="font-sans text-base font-semibold text-[#F4F5F6] mb-3 leading-snug">
						VISOR: Front-Office Data Intelligence & Sub-Second Analytics
					</h4>
					<p class="font-sans text-xs text-[#8A919E] leading-relaxed mb-6">
						Full-stack Tableau replacement application deployed across Risk, PnL, Treasury, and portfolio desks. Ingests live Bloomberg market chat and SEC EDGAR filings, executing complex relational analytical queries in sub-250ms via high-performance DuckDB pipelines.
					</p>
				</div>
				<div class="flex flex-wrap gap-1.5 pt-4 border-t border-[#22252A]">
					{#each ['DuckDB', 'D3.js', 'SvelteKit', 'Electron', 'Python', 'AWS'] as badge}
						<span class="px-2 py-0.5 bg-[#0B0C0E] border border-[#22252A] font-mono text-[10px] text-[#8A919E] uppercase">
							{badge}
						</span>
					{/each}
				</div>
			</div>

			<!-- Compact Card 2: Verition Sovereign AI Platform -->
			<div class="border border-[#22252A] bg-[#131518] p-6 flex flex-col justify-between">
				<div>
					<div class="font-mono text-[11px] text-[#8A919E] uppercase mb-1">
						VERITION FUND MANAGEMENT // 2023 - PRESENT
					</div>
					<h4 class="font-sans text-base font-semibold text-[#F4F5F6] mb-3 leading-snug">
						Enterprise AI Platform, Connected MCPs & Model Garden
					</h4>
					<p class="font-sans text-xs text-[#8A919E] leading-relaxed mb-6">
						Centralized sovereign AI gateway offering multi-model access with complete cloud data privacy. Connects Model Context Protocol (MCP) tool servers and permissioned proxy bridges for quantitative research and automated operational analysis.
					</p>
				</div>
				<div class="flex flex-wrap gap-1.5 pt-4 border-t border-[#22252A]">
					{#each ['LibreChat', 'React', 'FastAPI', 'MCP', 'DocumentDB', 'AWS'] as badge}
						<span class="px-2 py-0.5 bg-[#0B0C0E] border border-[#22252A] font-mono text-[10px] text-[#8A919E] uppercase">
							{badge}
						</span>
					{/each}
				</div>
			</div>

			<!-- Compact Card 3: PwC Enterprise Resource Searcher -->
			<div class="border border-[#22252A] bg-[#131518] p-6 flex flex-col justify-between">
				<div>
					<div class="font-mono text-[11px] text-[#8A919E] uppercase mb-1">
						PWC UK // 2022 - 2023
					</div>
					<h4 class="font-sans text-base font-semibold text-[#F4F5F6] mb-3 leading-snug">
						PwC "LinkedIn": Enterprise Resource Searcher
					</h4>
					<p class="font-sans text-xs text-[#8A919E] leading-relaxed mb-6">
						Algorithmic talent-matching engine serving a 4,000-person operating unit. Replaced manual spreadsheet analysis with high-velocity search pipelines, slashing deployment turnaround times from 8 hours to 2 hours per role.
					</p>
				</div>
				<div class="flex flex-wrap gap-1.5 pt-4 border-t border-[#22252A]">
					{#each ['React', 'GCP', 'BigQuery', 'JavaScript', 'Apps Script'] as badge}
						<span class="px-2 py-0.5 bg-[#0B0C0E] border border-[#22252A] font-mono text-[10px] text-[#8A919E] uppercase">
							{badge}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- 3. Foundational Contracting Heritage (Preserved Dauntless R&D) -->
		<div class="pt-8 border-t border-[#22252A] space-y-6">
			<div>
				<div class="font-mono text-xs font-bold uppercase tracking-widest text-[#8A919E]">
					// FORMERLY TRADED UNDER DAUNTLESS R&D
				</div>
				<p class="text-xs text-[#8A919E] font-mono mt-1">
					Contract software engineering delivered across digital health, epidemiological research, and data visualization.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each DAUNTLESS_HERITAGE.contracts as contract}
					<div class="border border-[#22252A] bg-[#131518] p-6 flex flex-col justify-between space-y-4">
						<div class="space-y-2">
							<div class="flex items-center justify-between gap-2 text-xs font-semibold">
								<span class="text-[#F4F5F6] font-mono font-bold text-[11px] uppercase tracking-wider">
									{contract.client}
								</span>
								<span class="font-mono text-[11px] text-[#8A919E]">{contract.period}</span>
							</div>

							<h4 class="text-sm font-sans font-bold text-[#F4F5F6] leading-snug">
								{contract.title}
							</h4>

							<p class="text-xs text-[#8A919E] leading-relaxed">
								{contract.description}
							</p>
						</div>

						<div class="pt-3 border-t border-[#22252A] flex flex-wrap items-center gap-1.5">
							{#each contract.stack as item}
								<span class="px-2 py-0.5 bg-[#0B0C0E] border border-[#22252A] font-mono text-[10px] text-[#8A919E] uppercase">
									{item}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>