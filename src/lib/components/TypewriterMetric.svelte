<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Metric {
		headline: string;
		label: string;
		description: string;
	}

	const METRICS: Metric[] = [
		{
			headline: '£1M+',
			label: 'ANNUAL CAPITAL EFFICIENCY',
			description: 'Displaced bloated legacy software with custom data architecture.'
		},
		{
			headline: '< 250ms',
			label: 'ZERO-FRICTION DECISIONS',
			description: 'Compressed quantitative risk queries from 30+ seconds to sub-second execution.'
		},
		{
			headline: '100%',
			label: 'TEAM RETENTION',
			description: 'Built and scaled elite AI engineering divisions from 0-to-1.'
		},
		{
			headline: '4+ Years',
			label: 'LEADING GENAI TEAMS',
			description: 'Founding and leading elite AI divisions at the forefront of next-gen solutions.'
		}
	];

	let currentIndex = $state(0);
	let displayedHeadline = $state('');
	let showDetails = $state(false);
	let timeoutId: ReturnType<typeof setTimeout> | null = null;
	let isDestroyed = false;

	function typeOut(text: string, charIdx: number, onComplete: () => void) {
		if (isDestroyed) return;
		if (charIdx <= text.length) {
			displayedHeadline = text.slice(0, charIdx);
			timeoutId = setTimeout(() => {
				typeOut(text, charIdx + 1, onComplete);
			}, 70);
		} else {
			onComplete();
		}
	}

	function erase(onComplete: () => void) {
		if (isDestroyed) return;
		if (displayedHeadline.length > 0) {
			displayedHeadline = displayedHeadline.slice(0, -1);
			timeoutId = setTimeout(() => {
				erase(onComplete);
			}, 30);
		} else {
			onComplete();
		}
	}

	function runCycle() {
		if (isDestroyed) return;
		const current = METRICS[currentIndex];
		showDetails = false;

		// 1. Type out headline
		typeOut(current.headline, 1, () => {
			if (isDestroyed) return;
			// 2. Headline typed: fade in details below
			showDetails = true;

			// 3. Hold for reading
			timeoutId = setTimeout(() => {
				if (isDestroyed) return;
				// 4. Fade out details below
				showDetails = false;

				// Wait for fade-out transition before erasing
				timeoutId = setTimeout(() => {
					if (isDestroyed) return;
					// 5. Erase headline
					erase(() => {
						if (isDestroyed) return;
						// 6. Switch to next metric & loop
						currentIndex = (currentIndex + 1) % METRICS.length;
						timeoutId = setTimeout(runCycle, 200);
					});
				}, 400);
			}, 3500);
		});
	}

	onMount(() => {
		runCycle();
	});

	onDestroy(() => {
		isDestroyed = true;
		if (timeoutId) clearTimeout(timeoutId);
	});
</script>

<div class="w-full bg-white border border-black p-3 sm:p-4 space-y-2 sm:space-y-3 font-mono text-black">
	<!-- Header Telemetry Row -->
	<div class="flex items-center justify-between gap-2 border-b border-black/20 pb-1.5 sm:pb-2">
		<span class="text-[9px] uppercase font-bold tracking-widest text-black">
			// AUDITED METRICS
		</span>
		<span class="text-[9px] font-bold text-[#3300FF]">
			[0{currentIndex + 1}/04]
		</span>
	</div>

	<!-- Headline with Typewriter Cursor -->
	<div class="min-h-[32px] sm:min-h-[40px] flex items-center font-sans font-bold text-xl sm:text-3xl text-black tracking-tight">
		<span>{displayedHeadline}</span>
		<span class="inline-block w-2 sm:w-2.5 h-5 sm:h-6 bg-[#3300FF] ml-1.5 animate-pulse"></span>
	</div>

	<!-- Fading Details: Label & Description -->
	<div
		class="space-y-1 sm:space-y-1.5 transition-opacity duration-500 ease-in-out min-h-[58px] sm:min-h-[72px]"
		class:opacity-100={showDetails}
		class:opacity-0={!showDetails}
	>
		<div class="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-black">
			{METRICS[currentIndex].label}
		</div>
		<p class="font-sans text-[11px] sm:text-xs text-black/90 leading-relaxed">
			{METRICS[currentIndex].description}
		</p>
	</div>

	<!-- Progress Indicators -->
	<div class="flex items-center gap-1.5 pt-1">
		{#each METRICS as _, idx}
			<div
				class="h-1 transition-all duration-300 {idx === currentIndex ? 'w-6 bg-[#3300FF]' : 'w-2 bg-black/20'}"
			></div>
		{/each}
	</div>
</div>
