<script lang="ts">
	import { DAUNTLESS_HERITAGE } from '$lib/data/profile';
</script>

<section id="case-studies" class="py-8 sm:py-12 bg-white text-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-2 border-b border-black">
			<div class="max-w-3xl space-y-1">
				<div class="font-mono text-xs uppercase tracking-widest text-black font-semibold">
					// Track Record & Systems Architecture
				</div>
				<h2 class="text-xl sm:text-2xl lg:text-3xl font-sans font-bold text-black tracking-tight">
					Verified Case Studies
				</h2>
			</div>

			<div class="shrink-0 font-mono text-xs text-black font-semibold">
				[AUDITED PRODUCTION METRICS]
			</div>
		</div>

		<!-- Uniform Muted Sector List Directly Below the Line -->
		<div class="-mt-4 font-mono text-[10px] sm:text-[11px] text-black/40 tracking-widest uppercase flex flex-wrap items-center gap-x-2.5 gap-y-1">
			<span>AI</span>
			<span>/</span>
			<span>HEDGE FUND</span>
			<span>/</span>
			<span>FINANCE</span>
			<span>/</span>
			<span>CONSULTING</span>
			<span>/</span>
			<span>HEALTHCARE</span>
			<span>/</span>
			<span>BUSINESS</span>
			<span>/</span>
			<span>TECH</span>
		</div>

		<!-- 1. Executive Anchor Studies (Verition + PwC) -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Card 1: Verition Fund Management (2/3 Width) -->
			<div class="lg:col-span-2 bg-white border border-black p-5 sm:p-6 flex flex-col justify-between space-y-4">
				<div>
					<div class="font-mono text-[11px] text-black tracking-wider uppercase mb-1.5 font-bold">
						VERITION FUND MANAGEMENT // 2023 - 2026
					</div>

					<h3 class="font-sans text-xl sm:text-2xl font-bold text-black mb-3 leading-tight">
						Scaling a Sovereign AI Division &amp; Delivering £1M+ in Annual Savings
					</h3>

					<p class="font-sans text-xs sm:text-sm text-black leading-relaxed">
						Engineered a sovereign enterprise AI platform and ultra-low-latency DuckDB analytics engine across Risk, PnL, and front-office trading. Displaced bloated legacy BI software stacks, delivering over £1M in annual licensing efficiency while compressing queries from 30+ seconds down to sub-second execution.
					</p>
				</div>

				<div class="pt-2 border-t border-black/15 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px]">
					<span class="text-black font-bold">£1M+ SAVED/YR</span>
					<span class="text-black/30">/</span>
					<span class="text-black font-bold">&lt; 250MS QUERIES</span>
					<span class="text-black/30">/</span>
					<span class="text-black font-bold">ZERO CLOUD DATA LEAKAGE</span>
				</div>
			</div>

			<!-- Card 2: PwC UK (1/3 Width) -->
			<div class="lg:col-span-1 bg-white border border-black p-5 sm:p-6 flex flex-col justify-between space-y-4">
				<div>
					<div class="font-mono text-[11px] text-black tracking-wider uppercase mb-1.5 font-bold">
						PWC UK // GCP AMBASSADOR // 2022
					</div>

					<h3 class="font-sans text-xl sm:text-2xl font-bold text-black mb-3 leading-tight">
						Accelerating Enterprise Staffing by 75%
					</h3>

					<p class="font-sans text-xs sm:text-sm text-black leading-relaxed">
						Served as GCP Ambassador for PwC, driving firm-wide Google Cloud integration by founding a 200+ member global community for cloud AI adoption and knowledge sharing. Led partner workshops representing the firm, spurred multiple internal developments, and built algorithmic resource matching that slashed staffing times from 8h to 2h across 4,000 practitioners.
					</p>
				</div>

				<div class="pt-2 border-t border-black/15 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px]">
					<span class="text-black font-bold">75% TIME REDUCTION</span>
					<span class="text-black/30">/</span>
					<span class="text-black font-bold">200+ MEMBER AI COMMUNITY</span>
				</div>
			</div>
		</div>

		<!-- 2. Deployed Systems & Core Infrastructure (3-Column Dense Grid) -->
		<div class="space-y-3">
			<div class="font-mono text-[11px] text-black tracking-widest uppercase font-bold">
				// DEPLOYED SYSTEMS &amp; CORE INFRASTRUCTURE
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<!-- System 1: Verition VISOR -->
				<div class="bg-white border border-black p-4 space-y-2">
					<div class="font-mono text-[10px] text-black uppercase font-bold">
						VERITION // FRONT-OFFICE VISOR
					</div>
					<h4 class="font-sans text-sm font-bold text-black leading-snug">
						Sub-Second Analytics &amp; SEC EDGAR AI
					</h4>
					<p class="font-sans text-xs text-black/85 leading-relaxed">
						Full-stack Tableau replacement ingesting Bloomberg chat and SEC EDGAR filings for sub-250ms query processing over 1M+ daily market transactions.
					</p>
				</div>

				<!-- System 2: Verition Platform -->
				<div class="bg-white border border-black p-4 space-y-2">
					<div class="font-mono text-[10px] text-black uppercase font-bold">
						VERITION // ENTERPRISE AI GATEWAY
					</div>
					<h4 class="font-sans text-sm font-bold text-black leading-snug">
						Connected MCPs &amp; Model Garden
					</h4>
					<p class="font-sans text-xs text-black/85 leading-relaxed">
						Sovereign LLM infrastructure serving 60k+ queries with 99.5% uptime, permissioned proxy bridges, and zero enterprise data leakage.
					</p>
				</div>

				<!-- System 3: PwC Searcher -->
				<div class="bg-white border border-black p-4 space-y-2">
					<div class="font-mono text-[10px] text-black uppercase font-bold">
						PWC UK // TALENT ENGINE
					</div>
					<h4 class="font-sans text-sm font-bold text-black leading-snug">
						Algorithmic Resource Allocator
					</h4>
					<p class="font-sans text-xs text-black/85 leading-relaxed">
						Replaced manual spreadsheet operations with high-speed talent search pipelines across 4,000 consultants, reducing matching time from 8h to 2h.
					</p>
				</div>
			</div>
		</div>

		<!-- 3. Foundational Contracting Heritage (Dauntless R&D) -->
		<div class="pt-2 space-y-3">
			<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-black pt-4">
				<div class="font-mono text-xs font-bold uppercase tracking-widest text-black">
					// CONTRACTING HERITAGE (DAUNTLESS R&amp;D)
				</div>
				<span class="text-[11px] text-black/70 font-mono">
					Healthcare, epidemiological simulation &amp; data intelligence
				</span>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each DAUNTLESS_HERITAGE.contracts as contract}
					<div class="bg-white border border-black/40 p-3.5 space-y-1.5 text-xs">
						<div class="flex items-center justify-between gap-2 font-mono text-[10px] font-bold">
							<span class="text-black uppercase tracking-wider">{contract.client}</span>
							<span class="text-black/60 font-normal">{contract.period}</span>
						</div>
						<h4 class="font-sans font-bold text-black text-xs leading-snug">
							{contract.title}
						</h4>
						<p class="font-sans text-[11px] text-black/80 leading-relaxed">
							{contract.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>