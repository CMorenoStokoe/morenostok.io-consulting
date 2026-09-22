<script lang="ts">
	interface Organization {
		id: string;
		name: string;
		logoSrc: string;
	}

	const organizations: Organization[] = [
		{
			id: 'verition',
			name: 'Verition Fund Management',
			logoSrc: '/images/logos/verition.svg'
		},
		{
			id: 'pwc',
			name: 'PricewaterhouseCoopers',
			logoSrc: '/images/logos/pwc.svg'
		},
		{
			id: 'google',
			name: 'Google',
			logoSrc: '/images/logos/google.svg'
		},
		{
			id: 'palantir',
			name: 'Palantir Technologies',
			logoSrc: '/images/logos/palantir.svg'
		},
		{
			id: 'royal-navy',
			name: 'HM Royal Navy',
			logoSrc: '/images/logos/royal-navy.svg'
		},
		{
			id: 'nhs',
			name: 'National Health Service',
			logoSrc: '/images/logos/nhs.svg'
		},
		{
			id: 'us-gov',
			name: 'United States Government',
			logoSrc: '/images/logos/us-gov.svg'
		},
		{
			id: 'israel-gov',
			name: 'State of Israel',
			logoSrc: '/images/logos/israel-gov.svg'
		},
		{
			id: 'ireland-gov',
			name: 'Government of Ireland',
			logoSrc: '/images/logos/ireland-gov.svg'
		},
		{
			id: 'phw',
			name: 'Public Health Wales',
			logoSrc: '/images/logos/phw.svg'
		},
		{
			id: 'mrc-ieu',
			name: 'MRC Integrative Epidemiology Unit',
			logoSrc: '/images/logos/mrc-ieu.svg'
		}
	];
</script>

<div class="bg-white py-6 sm:py-8 overflow-hidden select-none">
	<div class="marquee-container relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
		<div class="flex w-full">
			<!-- First Track -->
			<div class="marquee-content pr-12 sm:pr-16">
				{#each organizations as org (org.id)}
					<div class="flex items-center justify-center h-10 w-28 sm:w-36 shrink-0" title={org.name}>
						<img
							src={org.logoSrc}
							alt={org.name}
							class="h-7 sm:h-8 max-h-8 max-w-full w-auto object-contain saturation-0 saturate-0 opacity-80 hover:opacity-100 hover:saturation-100 hover:saturate-100 transition-all duration-300"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>

			<!-- Duplicate Track for Seamless Infinite Scrolling -->
			<div class="marquee-content pr-12 sm:pr-16" aria-hidden="true">
				{#each organizations as org (`${org.id}-dup`)}
					<div class="flex items-center justify-center h-10 w-28 sm:w-36 shrink-0" title={org.name}>
						<img
							src={org.logoSrc}
							alt={org.name}
							class="h-7 sm:h-8 max-h-8 max-w-full w-auto object-contain saturation-0 saturate-0 opacity-80 hover:opacity-100 hover:saturation-100 hover:saturate-100 transition-all duration-300"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.marquee-content {
		display: flex;
		align-items: center;
		gap: 3rem;
		flex-shrink: 0;
		animation: marquee 28s linear infinite;
	}

	.marquee-container:hover .marquee-content {
		animation-play-state: paused;
	}

	@media (min-width: 640px) {
		.marquee-content {
			gap: 4rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-content {
			animation-play-state: paused;
		}
	}
</style>
