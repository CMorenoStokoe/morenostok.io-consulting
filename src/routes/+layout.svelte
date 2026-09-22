<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import { dev } from '$app/environment';

	onMount(async () => {
		try {
			const [{ injectAnalytics }, { injectSpeedInsights }] = await Promise.all([
				import('@vercel/analytics/sveltekit'),
				import('@vercel/speed-insights/sveltekit')
			]);
			injectAnalytics({ mode: dev ? 'development' : 'production' });
			injectSpeedInsights();
		} catch (error) {
			console.debug('Telemetry initialization skipped or blocked:', error);
		}
	});

	let { children } = $props();

	const siteUrl = 'https://morenostok.io';
	const pageTitle = 'Dr. Chris Moreno-Stokoe | C-Suite AI Advisory & Global Engineering Leadership';
	const pageDescription = 'Senior AI executive advising C-suites, hedge fund leadership, and institutional partners. Proven track record scaling global AI teams, reducing software costs by $3.5M+, and deploying observable financial GenAI systems. PhD Human-Computer Interaction, University of Bristol.';

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: PROFILE_DATA.name,
		jobTitle: PROFILE_DATA.title,
		description: PROFILE_DATA.shortBio,
		url: siteUrl,
		sameAs: [
			PROFILE_DATA.channels.linkedIn,
			PROFILE_DATA.channels.github,
			PROFILE_DATA.channels.orcid,
			PROFILE_DATA.channels.portfolio
		],
		alumniOf: [
			{
				'@type': 'EducationalOrganization',
				name: 'University of Bristol'
			}
		],
		hasCredential: [
			{
				'@type': 'EducationalOccupationalCredential',
				name: 'PhD Human-Computer Interaction (Data Intelligence System Design)',
				recognizedBy: 'University of Bristol'
			}
		],
		knowsAbout: [
			'Generative AI',
			'Financial AI Architecture',
			'Forward-Deployed Engineering',
			'DuckDB In-Memory OLAP',
			'Model Context Protocol (MCP)',
			'Risk AI Contextualization',
			'Epidemiological Simulation',
			'Observable AI Systems'
		]
	};

	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: 'Dr. Chris Moreno-Stokoe - Strategic AI Advisory',
		url: siteUrl,
		founder: {
			'@type': 'Person',
			name: PROFILE_DATA.name
		},
		serviceType: [
			'Financial AI Architecture & Quantitative Tooling',
			'Forward-Deployed AI Engineering (FDE)',
			'Observable AI & Enterprise Architecture',
			'AI Leadership, Team Building & Board Advisory'
		],
		areaServed: ['Global', 'United Kingdom', 'United States', 'Europe']
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="author" content={PROFILE_DATA.name} />
	<link rel="canonical" href={siteUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="profile" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:site_name" content="Dr. Chris Moreno-Stokoe - Strategic AI Advisory" />
	<meta property="og:locale" content="en_GB" />

	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>`}
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-black selection:bg-black selection:text-white font-sans">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>