<script lang="ts">
	import { TrendingUp, Zap, Cpu, Users } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	function getIcon(name: string) {
		switch (name) {
			case 'TrendingUp': return TrendingUp;
			case 'Zap': return Zap;
			case 'Cpu': return Cpu;
			case 'Users': return Users;
			default: return Zap;
		}
	}
</script>

<section id="ai-transformation" class="py-12 sm:py-16 bg-white border-b border-slate-200">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
		<!-- Section Header -->
		<div>
			<div class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
				// Core Practice
			</div>
			<h2 class="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-slate-900 tracking-tight">
				Capabilities & Practice Areas
			</h2>
			<p class="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
				Strategic advisory and hands-on engineering across four core disciplines, turning complex data bottlenecks into production advantages.
			</p>
		</div>

		<!-- 4-Capability Single Row on Desktop -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
			{#each PROFILE_DATA.practiceAreas as area, index}
				{@const IconComponent = getIcon(area.iconName)}
				<div class="rounded-none border border-slate-200 bg-[#fafaf9] p-5 sm:p-6 space-y-3.5 hover:border-slate-400 transition-colors flex flex-col justify-between">
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<div class="w-7 h-7 rounded-none bg-slate-900 text-white flex items-center justify-center shrink-0">
								<IconComponent class="w-3.5 h-3.5 text-white" />
							</div>
							<span class="font-mono text-xs text-slate-400">0{index + 1}</span>
						</div>

						<div>
							<div class="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-1">
								{area.badge}
							</div>
							<h3 class="text-base sm:text-lg font-display font-semibold text-slate-900 leading-snug">
								{area.title}
							</h3>
						</div>

						<p class="text-xs text-slate-600 leading-relaxed">
							{area.shortDesc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
