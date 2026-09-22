import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json().catch(() => ({}));
	const query = (body.query || '').toLowerCase().trim();

	let responseText = '';

	if (
		query.includes('verition') ||
		query.includes('hedge fund') ||
		query.includes('visor') ||
		query.includes('duckdb')
	) {
		responseText = `[LANGGRAPH // NODE: BUY_SIDE_SYNTHESIS]
Identified verified case study: <a href="#case-studies" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Verition Fund Management</a>.
Dr. Chris Moreno-Stokoe served as Sole Founding AI Engineer (2023 - 2026).
• Replaced legacy enterprise BI tooling ($1M+/yr displaced software costs) via in-memory DuckDB OLAP engine.
• Reduced portfolio query latency from 30+ seconds down to <250ms for front-office trading desks.
• Built firm-wide Sovereign AI Chat & Model Garden serving 60,000+ messages with 99.5% uptime.`;
	} else if (
		query.includes('pwc') ||
		query.includes('linkedin') ||
		query.includes('staffing') ||
		query.includes('talent')
	) {
		responseText = `[LANGGRAPH // NODE: ENTERPRISE_PRACTICE_RETRIEVAL]
Identified verified case study: <a href="#case-studies" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">PwC Operate AI Engineering</a>.
Dr. Chris Moreno-Stokoe founded the AI Engineering team at PwC UK (2022).
• Engineered the PwC Resource Searcher ("PwC LinkedIn"), indexing 4,000+ practitioners.
• Slashed engagement staffing turnaround by 75% (8 hours down to 2 hours per role).
• Scaled firm-wide AI community from scratch to 200+ practitioners across London and Belfast.`;
	} else if (
		query.includes('ir35') ||
		query.includes('rate') ||
		query.includes('pricing') ||
		query.includes('cost') ||
		query.includes('pillar') ||
		query.includes('offering') ||
		query.includes('contract')
	) {
		responseText = `[LANGGRAPH // NODE: COMMERCIAL_OPERATING_MODEL]
Commercial Operating Standard: <a href="#connect" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Outside IR35 compliant</a> via outcome-driven Statements of Work (SOWs).
• Pillar 01: GenAI Strategy & Advisory (Nominal £1,000/day fractional retainers).
• Pillar 02: Production Architecture (Nominal £1,000/day milestone SOWs).
• Pillar 03: Rapid PoCs & Build-Out (£500/day blended rate for 2 to 4 week validation pods).
Review full engagement options in <a href="#offerings" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Core Consulting Pillars</a> or initiate inquiry via <a href="#connect" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Direct Channels</a>.`;
	} else if (
		query.includes('astrojson') ||
		query.includes('space') ||
		query.includes('lab') ||
		query.includes('research') ||
		query.includes('phd') ||
		query.includes('paper') ||
		query.includes('lancet')
	) {
		responseText = `[LANGGRAPH // NODE: ACADEMIC_AND_LAB_ROUTER]
Doctoral Pedigree & Lab Inventions:
• PhD in Human-Computer Interaction / Data Intelligence, University of Bristol (ESRC Funded).
• Published lead author in <a href="#lab" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">The Lancet</a> and Public Health Wales governmental epidemiology reports.
• Inventions: <a href="#lab" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">AstroJSON</a> (4-D celestial data standard) and Terminus (Deterministic financial ontologies).`;
	} else {
		responseText = `[LANGGRAPH // NODE: AGENT_ORCHESTRATOR]
Processed query: "${body.query || 'status'}".
Executive Profile Summary:
Dr. Chris Moreno-Stokoe is a Principal Technical Consultant & Systems Architect operating <a href="#connect" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Outside IR35 compliant</a>.
He established zero-to-one AI engineering capabilities at Verition Fund Management and PwC UK, and holds a PhD in Human-Computer Interaction from the University of Bristol.
Recommended static navigation:
- <a href="#offerings" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Three Consulting Pillars & Rate Cards</a>
- <a href="#case-studies" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Verified Buy-Side & Enterprise Case Studies</a>
- <a href="#blog" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Engineering Field Notes & Dossiers</a>
- <a href="#connect" class="text-white border-b border-[#3300FF] hover:text-[#3300FF]">Initiate Direct SOW Engagement</a>`;
	}

	const encoder = new TextEncoder();
	const stream = new ReadableStream({
		async start(controller) {
			const words = responseText.split(' ');
			for (let i = 0; i < words.length; i++) {
				const chunk = words[i] + (i === words.length - 1 ? '' : ' ');
				controller.enqueue(encoder.encode(chunk));
				await new Promise((resolve) => setTimeout(resolve, 15));
			}
			controller.close();
		}
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Transfer-Encoding': 'chunked',
			'Cache-Control': 'no-cache'
		}
	});
};
