<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Metric {
		id: string;
		headline: string;
		label: string;
		shortLabel: string;
		description: string;
	}

	const METRICS: Metric[] = [
		{
			id: 'capital',
			headline: '£1M+',
			label: 'ANNUAL CAPITAL EFFICIENCY',
			shortLabel: '£1M+ EFFICIENCY',
			description: 'Leading projects to deliver AI efficiencies and eliminate legacy software costs.'
		},
		{
			id: 'latency',
			headline: '< 250ms',
			label: 'ZERO-FRICTION DECISIONS',
			shortLabel: '< 250ms QUERY',
			description: 'Compressed quantitative risk queries from 30+ seconds to sub-second execution.'
		},
		{
			id: 'retention',
			headline: '100%',
			label: 'TEAM RETENTION',
			shortLabel: '100% RETENTION',
			description: 'Built and scaled elite AI engineering divisions from 0-to-1.'
		},
		{
			id: 'leadership',
			headline: '4+ Years',
			label: 'LEADING GENAI TEAMS',
			shortLabel: '4+ YRS LEAD',
			description: 'Founding and leading elite AI divisions at the forefront of next-gen solutions.'
		}
	];

	let currentIndex = $state(0);
	let isPaused = $state(false);
	let intervalId: ReturnType<typeof setInterval> | null = null;

	function nextMetric() {
		currentIndex = (currentIndex + 1) % METRICS.length;
	}

	function selectMetric(index: number) {
		currentIndex = index;
	}

	onMount(() => {
		intervalId = setInterval(() => {
			if (!isPaused) {
				nextMetric();
			}
		}, 4200);
	});

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});
</script>

<div
	class="w-full bg-white border border-black p-3 sm:p-3.5 space-y-2.5 font-mono text-black select-none"
	onmouseenter={() => (isPaused = true)}
	onmouseleave={() => (isPaused = false)}
	role="region"
	aria-label="Audited Performance Metrics"
>
	<!-- Static Titles as Interactive Tabs -->
	<div class="grid grid-cols-2 gap-1 sm:gap-1.5" role="tablist">
		{#each METRICS as metric, idx}
			<button
				type="button"
				role="tab"
				aria-selected={idx === currentIndex}
				onclick={() => selectMetric(idx)}
				class="text-left px-2 py-1 sm:py-1.5 border transition-all duration-150 cursor-pointer flex flex-col {idx === currentIndex
					? 'border-black bg-black text-white'
					: 'border-black/20 bg-white text-black/60 hover:text-black hover:border-black/50'}"
			>
				<span class="text-[8px] sm:text-[9px] tracking-tight uppercase font-mono font-bold leading-none truncate w-full">
					{metric.shortLabel}
				</span>
			</button>
		{/each}
	</div>

	<!-- Dynamic Active Metric Content Card -->
	<div class="pt-0.5 space-y-1">
		<div class="flex items-baseline gap-2">
			<div class="font-sans font-bold text-2xl sm:text-3xl text-black tracking-tight leading-none">
				{METRICS[currentIndex].headline}
			</div>
			<div class="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#3300FF]">
				{METRICS[currentIndex].label}
			</div>
		</div>

		<p class="font-sans text-xs text-black/80 leading-relaxed min-h-[40px] sm:min-h-[44px]">
			{METRICS[currentIndex].description}
		</p>
	</div>

	<!-- Footer: Progress / Scroller Indicator Strip & Pagecount -->
	<div class="flex items-center justify-between gap-2 pt-1 border-t border-black/10">
		<div class="flex items-center gap-1">
			{#each METRICS as _, idx}
				<button
					type="button"
					aria-label="Switch to metric {idx + 1}"
					onclick={() => selectMetric(idx)}
					class="h-1 transition-all duration-300 rounded-none cursor-pointer {idx === currentIndex ? 'w-8 bg-[#3300FF]' : 'w-2 bg-black/20 hover:bg-black/50'}"
				></button>
			{/each}
		</div>
		<span class="text-[9px] font-mono font-bold text-[#3300FF]">
			[0{currentIndex + 1}/0{METRICS.length}]
		</span>
	</div>
</div>
