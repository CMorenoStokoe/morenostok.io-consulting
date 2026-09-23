<script lang="ts">
	interface TechItem {
		id: string;
		name: string;
		logoSrc: string;
	}

	const technologies: TechItem[] = [
		{ id: 'duckdb', name: 'DuckDB', logoSrc: '/images/tech/duckdb.svg' },
		{ id: 'langchain', name: 'LangChain', logoSrc: '/images/tech/langchain.svg' },
		{ id: 'vercel', name: 'Vercel AI SDK', logoSrc: '/images/tech/vercel.svg' },
		{ id: 'mcp', name: 'MCP', logoSrc: '/images/tech/mcp.svg' },
		{ id: 'python', name: 'Python', logoSrc: '/images/tech/python.svg' },
		{ id: 'typescript', name: 'TypeScript', logoSrc: '/images/tech/typescript.svg' },
		{ id: 'openai', name: 'OpenAI', logoSrc: '/images/tech/openai.svg' },
		{ id: 'anthropic', name: 'Anthropic', logoSrc: '/images/tech/anthropic.svg' },
		{ id: 'fastapi', name: 'FastAPI', logoSrc: '/images/tech/fastapi.svg' },
		{ id: 'bedrock', name: 'Bedrock', logoSrc: '/images/tech/bedrock.svg' },
		{ id: 'svelte', name: 'Svelte', logoSrc: '/images/tech/svelte.svg' },
		{ id: 'react', name: 'React', logoSrc: '/images/tech/react.svg' },
		{ id: 'neo4j', name: 'Neo4j', logoSrc: '/images/tech/neo4j.svg' },
		{ id: 'postgresql', name: 'PostgreSQL', logoSrc: '/images/tech/postgresql.svg' },
		{ id: 'aws', name: 'AWS', logoSrc: '/images/tech/aws.svg' },
		{ id: 'gcp', name: 'Google Cloud', logoSrc: '/images/tech/gcp.svg' },
		{ id: 'docker', name: 'Docker', logoSrc: '/images/tech/docker.svg' },
		{ id: 'kubernetes', name: 'Kubernetes', logoSrc: '/images/tech/kubernetes.svg' },
		{ id: 'd3', name: 'D3.js', logoSrc: '/images/tech/d3.svg' },
		{ id: 'electron', name: 'Electron', logoSrc: '/images/tech/electron.svg' }
	];
</script>

<div class="border border-black bg-black/[0.06] p-4 sm:p-6 space-y-4">
	<!-- Header Telemetry Bar -->
	<div class="flex items-center justify-between border-b border-black/20 pb-2.5 font-mono text-xs">
		<span class="font-bold uppercase tracking-widest text-black text-[11px]">
			// Core Systems &amp; Model Engineering Stack
		</span>
	</div>

	<!-- High Density Multi-line Grid -->
	<div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-2.5">
		{#each technologies as tech (tech.id)}
			<div
				class="flex flex-col items-center justify-center gap-1.5 p-2 sm:p-2.5 border border-black/15 bg-white/60 hover:bg-white hover:border-[#3300FF] transition-all group cursor-default"
				title={tech.name}
			>
				<div class="flex items-center justify-center h-6 w-full">
					<img
						src={tech.logoSrc}
						alt={tech.name}
						class="tech-logo h-5 max-h-5 max-w-full w-auto object-contain saturation-0 saturate-0 contrast-150 opacity-75 group-hover:opacity-100 group-hover:saturation-100 group-hover:saturate-100 group-hover:contrast-100 transition-all duration-200"
						loading="lazy"
					/>
				</div>
				<span class="font-mono text-[9px] sm:text-[10px] text-black tracking-wider uppercase font-semibold text-center truncate w-full leading-tight transition-colors group-hover:text-[#3300FF]">
					{tech.name}
				</span>
			</div>
		{/each}
	</div>
</div>
