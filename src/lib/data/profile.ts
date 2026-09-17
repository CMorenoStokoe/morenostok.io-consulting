export interface Metric {
	label: string;
	value: string;
	detail: string;
}

export interface PracticeArea {
	id: string;
	title: string;
	badge: string;
	shortDesc: string;
	fullDesc: string;
	targetClients: string[];
	concreteDeliverables: string[];
	keyTech: string[];
	iconName: string;
}

export interface CaseStudy {
	id: string;
	organization: string;
	role: string;
	period: string;
	location: string;
	title: string;
	challenge: string;
	solution: string;
	impact: string[];
	techStack: string[];
}

export interface ProjectLink {
	name: string;
	url: string;
}

export interface PortfolioProject {
	title: string;
	tagline: string;
	description: string;
	category: string;
	status: 'Live' | 'Coming Soon' | 'Private Repository';
	url?: string;
	githubUrl?: string;
	links?: ProjectLink[];
	highlights: string[];
}

export interface Publication {
	title: string;
	authors: string;
	journal: string;
	year: number;
	doi?: string;
	url?: string;
	featured?: boolean;
}

export interface EngagementTier {
	id: string;
	name: string;
	tagline: string;
	duration: string;
	idealFor: string;
	deliverables: string[];
}

export const PROFILE_DATA = {
	name: 'Dr. Chris Moreno-Stokoe',
	title: 'C-Suite AI Advisory & Global Engineering Leadership',
	shortBio:
		'Pioneering AI systems since the very beginning of GenAI in 2022.',
	extendedBio:
		'Operating at the leading edge of Generative AI since 2022. Known for embedded Forward-Deployed Engineering - parachuting into complex front-office, trading, and mission-critical teams to build observable, auditable AI platforms that turn high-latency bottlenecks into sub-second advantages.',
	location: 'London, UK / Global Remote',
	credentialsHighlight: 'Lead AI Engineer @ Verition Fund Management • AI Team Founder @ PwC • Digital Transformation & Research @ NHS • PhD Human-Computer Engineering',
	education: [
		{
			degree: 'PhD Human-Computer Interaction',
			institution: 'University of Bristol',
			year: '2023',
			notes: 'Focus on Data Intelligence system design & engineering. Economic & Social Research Council (ESRC) full scholarship award.'
		},
		{
			degree: 'MSc Statistical Research Methods',
			institution: 'University of Bristol',
			year: '2018',
			notes: 'Advanced quantitative inference, experimental design, and data modelling.'
		},
		{
			degree: 'BSc Psychology (1st Class Hons)',
			institution: 'University of Bristol',
			year: '2017',
			notes: 'Cognitive systems & human performance. Valedictorian-equivalent award recipient.'
		}
	],
	channels: {
		linkedIn: 'https://www.linkedin.com/in/cmorenostokoe',
		linkedInArticles: 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/articles/',
		github: 'https://github.com/CMorenoStokoe',
		orcid: 'https://orcid.org/0000-0002-2865-0940',
		portfolio: 'https://morenostok-io.vercel.app'
	},
	headlineStats: [
		{
			value: '$1M+/yr',
			label: 'Average Annual Savings',
			detail: 'Delivered through custom AI replacements and process efficiencies.'
		},
		{
			value: '2 Teams',
			label: '100% Retention',
			detail: 'Built 2 global AI capabilities from the ground up with zero attrition.'
		},
		{
			value: '15+',
			label: 'Products Under Management',
			detail: 'Production GenAI workflows, financial data tools, and agent pipelines.'
		},
		{
			value: '4 Years',
			label: 'GenAI Leadership',
			detail: 'Continually evaluating and preparing for the future of AI.'
		}
	] as Metric[],

	practiceAreas: [
		{
			id: 'financial-ai',
			title: 'Financial AI & Buy-Side Tooling',
			badge: 'Hedge Funds & Asset Management',
			iconName: 'TrendingUp',
			shortDesc: 'Front-office GenAI architectures engineered for buy-side speed, precision, and zero-hallucination data intelligence.',
			fullDesc: 'Hedge funds and asset managers cannot tolerate hallucinations or query latency. Drawing on hands-on delivery at Verition Fund Management, I architect financial AI systems that ingest live SEC filings, synthesize Bloomberg market feeds, generate personalized PM morning audio podcasts, and execute sub-second DuckDB OLAP queries.',
			targetClients: [
				'Multi-Strategy Hedge Funds & Asset Managers',
				'Chief Investment Officers (CIOs) & Heads of Trading',
				'Quantitative Research Desks needing sub-second analytics',
				'Risk Managers requiring automated cross-portfolio context'
			],
			concreteDeliverables: [
				'SEC EDGAR filing intelligence pipelines with auditable citations',
				'Automated PM morning audio summaries digesting Bloomberg and email flows',
				'Sub-second in-memory DuckDB analytics replacing heavy cloud queries',
				'Deterministic financial ontologies (Terminus) eliminating model hallucinations'
			],
			keyTech: ['DuckDB', 'Python', 'TypeScript', 'LangChain', 'Svelte', 'D3.js', 'AWS', 'SEC EDGAR']
		},
		{
			id: 'fde-delivery',
			title: 'Forward-Deployed AI Engineering',
			badge: 'Embedded Rapid Delivery',
			iconName: 'Zap',
			shortDesc: 'Parachuting directly into front-line desks to diagnose bottlenecks and ship production-hardened AI tools in 2-to-6 week cycles.',
			fullDesc: 'Centralized corporate AI labs often produce disconnected prototypes that fail in production. Using the "Behind-Enemy-Lines" playbook, I embed directly alongside traders, analysts, and operators to cut through friction, build custom workflow automation, and deliver verified business value with immediate velocity.',
			targetClients: [
				'Front-Office Desks requiring immediate workflow velocity',
				'Private Equity Portfolio Companies needing rapid operational margin expansion',
				'Fast-growing scaleups facing critical GenAI engineering bottlenecks',
				'Enterprises seeking to replace stalled centralized AI lab initiatives'
			],
			concreteDeliverables: [
				'Rapid 2-to-6 week POC-to-Production sprints with zero bureaucratic drag',
				'Workflow automation cutting manual operational turnaround by 75%+',
				'Production agent prototypes hardened for mission-critical operations',
				'Telemetry harnesses measuring real agent latency, accuracy, and ROI'
			],
			keyTech: ['TypeScript', 'FastAPI', 'Vite', 'LangChain', 'OpenAI/Anthropic', 'Docker', 'Vercel']
		},
		{
			id: 'observable-ai',
			title: 'Observable AI & Secure Architecture',
			badge: 'Platform Governance & MCP',
			iconName: 'Cpu',
			shortDesc: 'Enterprise AI platforms where every token, tool call, retrieved citation, and model decision is plain, interrogable, and secure.',
			fullDesc: 'Informed by doctoral research in Human-Computer Interaction and data intelligence, I architect observable enterprise AI platforms with strict data sovereignty, custom Model Context Protocol (MCP) servers, memory-augmented RAG, and air-tight audit logging delivering >99.5% operational uptime.',
			targetClients: [
				'Chief Information Security Officers (CISOs) & Enterprise Architects',
				'Engineering Leadership managing sensitive enterprise data boundaries',
				'Regulated entities requiring strict audit trails and compliance',
				'Organizations unifying internal AI tooling through secure proxy architectures'
			],
			concreteDeliverables: [
				'Centralized enterprise AI gateway (Verition AI Platform) with 99.5%+ uptime',
				'Custom Model Context Protocol (MCP) servers connecting proprietary data',
				'Zero-leakage telemetry recording prompt tokens, outputs, and tool calls',
				'Permissioned proxy architectures (Model Garden) establishing firm-wide standards'
			],
			keyTech: ['Model Context Protocol (MCP)', 'DuckDB', 'PostgreSQL', 'Langfuse', 'Docker', 'AWS']
		},
		{
			id: 'ai-leadership',
			title: 'Global AI Leadership & Board Advisory',
			badge: 'Executive Advisory & Retainers',
			iconName: 'Users',
			shortDesc: 'Advising C-suites and boards on CapEx strategy, paired with a proven playbook that built 2 global AI teams with 100% retention.',
			fullDesc: 'Having built global AI capabilities from scratch at both PwC UK and Verition Fund Management with zero employee attrition, I advise CEOs, CTOs, and boards on build-vs-buy decisions, CapEx/OpEx allocation, high-autonomy team culture, and evaluating candidate AI-readiness.',
			targetClients: [
				'CEOs and CTOs establishing or restructuring an internal AI capability',
				'Boards of Directors and Investment Committees evaluating AI investments',
				'Heads of Engineering transitioning from isolated labs to agile FDE squads',
				'Organizations seeking high-impact executive masterclasses and keynotes'
			],
			concreteDeliverables: [
				'Practical AI engineering candidate assessment rubrics ("Leetcode for AI")',
				'0-to-1 global team building playbook with verified 100% retention',
				'Confidential build-vs-buy diligence and enterprise vendor audits',
				'Executive briefings on "The Real Economics of Production GenAI"'
			],
			keyTech: ['Org Design', 'Hiring Rubrics', 'Executive Roadmaps', 'CapEx Strategy']
		}
	] as PracticeArea[],

		caseStudies: [
		{
			id: 'verition-visor',
			organization: 'Verition Fund Management',
			role: 'Lead Engineer, AI Team',
			period: '2023 - Present',
			location: 'London',
			title: 'Verition VISOR: Front-Office Data Intelligence & Sub-Second Analytics',
			challenge: 'Portfolio managers, risk officers, and executive desks faced severe data bottlenecks from overnight Bloomberg chats, SEC filings, and 30-to-60 second relational query latencies.',
			solution: 'Engineered Visor: a full-stack "Tableau replacement" data intelligence app deployed across Risk, PnL, Treasury & front-office. Architected front-office equity market data AI retrieving and processing SEC EDGAR filings with citations, automated PM email and Bloomberg chat synthesis flows (including morning audio podcast catch-ups), and high-performance DuckDB pipelines.',
			impact: [
				'Slashed total query latency from 30s to 0.4s (<250ms) for instant conversational AI response',
				'Displaced legacy enterprise BI vendor tooling, delivering $1M+/yr in efficiency gains',
				'Full buy-side adoption across Risk, PnL, Treasury, and executive decision-makers'
			],
			techStack: ['DuckDB', 'D3.js', 'SvelteKit', 'Electron', 'Python', 'AWS']
		},
		{
			id: 'verition-chat',
			organization: 'Verition Fund Management',
			role: 'Lead Engineer & AI Architecture Lead',
			period: '2023 - Present',
			location: 'London',
			title: 'Verition AI Platform: Enterprise LLM Infrastructure, Connected MCPs & Model Garden',
			challenge: 'The firm needed secure, multi-model LLM access with strict auditability, deterministic guardrails, centralized tool discovery (Model Garden), and role-based connectivity to internal market data without cloud data leakage.',
			solution: 'Engineered the firm\'s internal ChatGPT application and centralized enterprise AI platform API (Verition Chat & Model Garden) with connected Model Context Protocol (MCP) servers and permissioned HTTP/S proxy iFrames, giving quantitative analysts and operators private, compliant access to proprietary tools, models, and internal AI agents.',
			impact: [
				'Handled 60,000 messages in first 3 months of deployment with 0.5% downtime (vs. 5% company average)',
				'Integrated Model Garden boosting internal AI tool discovery and staff awareness from 5% to 75%',
				'Zero cloud data leakage with comprehensive audit logging across prompts, tokens, and MCP tool calls',
				'Established firm-wide AI documentation, UI design standards, and high-availability deployment across trading, risk, and operations'
			],
			techStack: ['LibreChat', 'React', 'DocumentDB', 'MCP', 'FastAPI', 'GenAI', 'AWS']
		},
		{
			id: 'pwc-linkedin',
			organization: 'PwC UK',
			role: 'Founder & Lead Engineer, AI Team',
			period: '2022 - 2023',
			location: 'London & Belfast',
			title: 'PwC "LinkedIn": Enterprise Resource Searcher & Talent Matching',
			challenge: 'PwC Operate partners and resource managers spent up to 8 hours per project role manually combing through spreadsheets and CV repositories to staff engagements across thousands of practitioners.',
			solution: 'Engineered the PwC Resource Searcher (PwC "LinkedIn"): an enterprise-grade data product used by a 4,000-person business unit to match appropriate resources with client projects using talent intelligence algorithms and high-velocity search pipelines.',
			impact: [
				'Reduced time to fill a project role from 8 hours down to 2 hours (75% faster staffing turnaround)',
				'Generated ~$1M in annual billed revenue by building AI apps focusing on streamlining human processes',
				'Scaled internal AI community from scratch to 200+ active practitioners across the firm'
			],
			techStack: ['React', 'GCP', 'BigQuery', 'Google Apps Script', 'JavaScript']
		}
	] as CaseStudy[],

	portfolioProjects: [
		{
			title: '“Leetcode for AI Coding”',
			tagline: 'Testing Engineer AI-Readiness in the Modern Era',
			category: 'AI Evaluation',
			status: 'Coming Soon',
			description: 'Engineering is dead. Test the AI-readiness of engineers and assess their value in modern AI-led development environments.',
			highlights: [
				'Evaluates orchestration, prompt debugging, and code critique over syntax memorization',
				'Simulates edge cases and model failure modes in production workflows',
				'High-conviction engineering hiring rubric'
			]
		},
		{
			title: 'Terminus: Ontological Foundations for Financial AI',
			tagline: 'Eliminating Hallucination in Buy-Side AI',
			category: 'Financial AI',
			status: 'Private Repository',
			description: 'Ontologies are the future of Financial AI. This project starts with Equities, organising market, master & alt data for one industry.',
			highlights: [
				'Unifies tickers, parent companies, subsidiaries, and supply chains',
				'Deterministic knowledge graph feeding LLM reasoning engines',
				'Buy-side quantitative architecture for high-conviction research'
			]
		},
		{
			title: 'Archive AI',
			tagline: 'Heritage Archival Processing AI for HM Government of Gibraltar',
			category: 'Computer Vision & Agents',
			status: 'Live',
			url: 'https://time-portals.vercel.app',
			githubUrl: 'https://github.com/CMorenoStokoe/time-portals',
			description: 'Developed a multi-modal agent flow which brings historical archives to life, labelling & generating reconstructions of landmarks.',
			highlights: [
				'Multi-modal agent flow for historical paper record extraction and indexing',
				'Automated landmark labeling and interactive 3D spatial reconstructions',
				'Accessible via modern high-performance web interface'
			]
		},
		{
			title: 'Rethinking GeoJSON (AstroJSON)',
			tagline: 'Network Graph-Based Structures for Massive Spatial Datasets',
			category: 'Spatial Graphs & Visualisation',
			status: 'Live',
			url: 'https://astro-json-chi.vercel.app/',
			githubUrl: 'https://github.com/CMorenoStokoe/astroJSON',
			description: 'Exploring network graph-based structures for extremely large datasets. Developed a Neo4J schema for storing, retrieving, and visualising extremely large and sparse spatial data (Maps of Space).',
			highlights: [
				'Replaces flat, bloated GeoJSON with high-performance graph traversals',
				'Interactive WebGL and Three.js 3D visualization of discovered exoplanets',
				'Open specification for astronomical and celestial GIS mapping'
			]
		},
		{
			title: 'AI-Driven Generators',
			tagline: 'Websites, Social Media Profiles & Runtime Logic Engines',
			category: 'Generative Systems',
			status: 'Live',
			url: 'https://zyzyx-quadrant.vercel.app',
			githubUrl: 'https://github.com/CMorenoStokoe/Dauntless-AI',
			links: [
				{ name: 'Meteor Shower (AI Website Builder)', url: 'https://meteor-shower.vercel.app' },
				{ name: 'Live Another Life (Synthetic Footprint)', url: 'https://live-another-life.vercel.app' },
				{ name: 'Zyzyx Quadrant (Runtime Logic Engine)', url: 'https://zyzyx-quadrant.vercel.app' }
			],
			description: 'Developed a series of multi-modal PoCs exploring the capabilities for GenAI to entirely generate content and drive logic flows.',
			highlights: [
				'Meteor Shower: Dynamic AI website builder',
				'Live Another Life: Synthetic persona and footprint generator',
				'Zyzyx Quadrant: Runtime UI and game logic engine'
			]
		}
	] as PortfolioProject[],

	publications: [
		{
			title: 'COVID-19 Outcomes Among People with Lived Experience of Homelessness in Wales: A National Data Linkage Study',
			authors: 'Moreno-Stokoe, C., et al.',
			journal: 'The Lancet',
			year: 2021,
			url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02624-6/fulltext',
			featured: true
		},
		{
			title: 'Visual and Gamified Approaches to Understanding Complex Causal Networks in Human Health',
			authors: 'Moreno-Stokoe, C.',
			journal: 'University of Bristol Doctoral Thesis (ESRC Funded)',
			year: 2023,
			url: 'https://hdl.handle.net/1983/fe220f65-ae14-4067-9825-ab53e6db3c3b',
			featured: true
		},
		{
			title: 'Mapping Population Vulnerability and Community Support During COVID-19: A National Case Study of Wales',
			authors: 'DiCara, N., Moreno-Stokoe, C., et al.',
			journal: 'International Journal of Population Data Science',
			year: 2021,
			doi: '10.23889/ijpds.v5i4.1409',
			url: 'https://doi.org/10.23889/ijpds.v5i4.1409',
			featured: true
		},
		{
			title: 'Health of Individuals with Lived Experience of Homelessness in Wales During the COVID-19 Pandemic',
			authors: 'Public Health Wales & Moreno-Stokoe, C.',
			journal: 'Public Health Wales Governmental Report',
			year: 2022,
			url: 'https://phw.nhs.wales/publications/publications1/health-of-individuals-with-lived-experience-of-homelessness-in-wales-during-the-covid-19-pandemic-report/'
		},
		{
			title: 'Transparency and Reporting Standards in Two-Sample Summary-Data Mendelian Randomisation Research',
			authors: 'Moreno-Stokoe, C., et al.',
			journal: 'International Journal of Epidemiology / MedRxiv',
			year: 2021,
			url: 'https://www.medrxiv.org/content/10.1101/2021.10.15.21264972.abstract'
		}
	] as Publication[],

	engagementTiers: [
		{
			id: 'fractional-leader',
			name: 'Strategic Operating Partner / Fractional Head of AI',
			tagline: 'Executive AI leadership driving enterprise strategy and GenAI data intelligence transformation',
			duration: '3 to 12 Months (1-2 Days / Week)',
			idealFor: 'Hedge funds, PE portfolio firms, and scaleups looking to build, scale, or govern their AI capability',
			deliverables: [
				'Direct C-Suite and Board advisory on enterprise AI strategy, build-vs-buy diligence, and CapEx',
				'Architectural roadmaps embedding GenAI directly into core data intelligence and research workflows',
				'Elite AI engineering team building, hiring rubrics, and high-velocity squad operating models',
				'Observable governance, model risk management, and vendor displacement frameworks'
			]
		},
		{
			id: 'fde-sprint',
			name: 'Forward-Deployed AI Sprint',
			tagline: 'Embedded engineering integrating GenAI into core data intelligence products and research workflows in weeks',
			duration: '4 to 8 Weeks (Full-Time Embedded)',
			idealFor: 'Research desks, quantitative teams, and product orgs needing production GenAI integration',
			deliverables: [
				'Direct embedding alongside researchers, analysts, and operators to eliminate analytical bottlenecks',
				'Production integration of GenAI into data intelligence platforms, sub-second DuckDB pipelines, and MCP servers',
				'End-to-end multi-modal research synthesis across filings, live feeds, and internal repositories',
				'Measurable ROI: slashing research turnaround latency from hours to seconds with full auditability'
			]
		},
		{
			id: 'architecture-audit',
			name: 'AI Stack & Data Readiness Diagnostic',
			tagline: 'Rigorous technical audit evaluating data intelligence architecture, research workflows, and GenAI ROI',
			duration: '2 Weeks Intensive',
			idealFor: 'Firms evaluating AI stack maturity, analytical bottlenecks, or vendor data platforms',
			deliverables: [
				'Comprehensive evaluation of research workflows, data pipelines, and GenAI integration opportunities',
				'Technical audit of data intelligence latency, retrieval precision, and hallucination guardrails',
				'Vendor spend optimization identifying legacy BI and data tools ready for custom GenAI displacement',
				'Executive delivery: prioritized 90-day architectural roadmap and data intelligence blueprint'
			]
		},
		{
			id: 'keynote-masterclass',
			name: 'Executive Masterclass & Strategic Workshop',
			tagline: 'Executive masterclasses bridging global AI leadership with the reality of GenAI data intelligence',
			duration: 'Half-Day or Full-Day',
			idealFor: 'Boards, C-suites, and research directors navigating GenAI strategy and operational execution',
			deliverables: [
				'Tailored executive keynote: "The Real Economics of GenAI in Data Intelligence & Research"',
				'Strategic C-suite workshop: identifying high-conviction GenAI use cases across your data assets',
				'Operating model transition: moving from isolated research POCs to frontline data intelligence products',
				'Executive action playbook covering governance, team retention, and model evaluation standards'
			]
		}
	] as EngagementTier[]
};
export interface DauntlessContract {
	client: string;
	period: string;
	location: string;
	title: string;
	description: string;
	stack: string[];
}

export interface LinkedInArticle {
	id?: string;
	title: string;
	subtitle: string;
	category?: string;
	date: string;
	readTime: string;
	summary: string;
	fullContent?: string[];
	keyTakeaways: string[];
	url: string;
}

export const DAUNTLESS_HERITAGE = {
	company: 'Dauntless R&D',
	period: 'Mar 2015 - May 2021 (6 yrs 3 mos)',
	location: 'Gloucestershire & Bristol, UK',
	role: 'Founder & Self-Employed Digitisation Contractor',
	summary:
		'Founded an NHS engineering consultancy alongside academic studies. Won client contracts across healthcare trusts, global research collaborations, and educational organizations to streamline staff workflows with custom automation and software digitisation.',
	contracts: [
		{
			client: 'Flourishing Education Ltd',
			period: 'Dec 2021 - Aug 2022',
			location: 'Bristol, UK',
			title: 'Clinical Assessment Tool & Custom Data Visualization',
			description:
				'Engineered an interactive online mental health assessment platform featuring custom clinical data visualizations with D3.js and React, alongside commercial monetization infrastructure.',
			stack: ['React', 'D3.js', 'JavaScript', 'AdSense', 'LMS']
		},
		{
			client: 'Endcoronavirus.org',
			period: 'Sept 2021 - May 2022',
			location: 'Global Collaboration',
			title: 'Interactive Policy Simulation Games for Global Decision-Makers',
			description:
				'Led a multidisciplinary global team of 7 designers and engineers to create interactive policy simulation games enabling US, Irish, and Israeli policymakers to stress-test COVID-19 epidemiological data and understand non-pharmaceutical interventions.',
			stack: ['React', 'AWS', 'Epidemiological Modelling', 'CI/CD']
		},
		{
			client: 'Bristol Science Museum',
			period: '2021',
			location: 'Bristol, UK',
			title: 'Artificial Intelligence Public Science Exhibit',
			description:
				'Collaborated within a specialist team to engineer an interactive, hands-on science museum installation educating the public on artificial intelligence fundamentals.',
			stack: ['Azure ML', 'JavaScript', 'Interactive Displays']
		},
		{
			client: 'Bounce Technologies Ltd',
			period: 'March 2019',
			location: 'Bristol, UK',
			title: 'Mobile App Store Intelligence & Architecture Scraper',
			description:
				'Built automated web-scraping and data mining pipelines across Google Play and Apple App Stores to evaluate and benchmark user engagement designs for digital wellbeing applications.',
			stack: ['Node.js', 'Web Scraping', 'App Store Analytics']
		},
		{
			client: 'NHS Aspen Medical Practice',
			period: 'Nov 2017 - May 2018',
			location: 'Gloucester, UK',
			title: 'Primary Care Online Medical Triage System',
			description:
				'Pioneered an automated web-first triage service that streamlined GP practice workflows and automated intake handling 10% of the practice\'s total patient load.',
			stack: ['JavaScript', 'Web Triage', 'NHS Systems', 'Process Automation']
		},
		{
			client: 'NHS Gloucestershire Trust',
			period: 'June 2015 - May 2018',
			location: 'Gloucester, UK',
			title: 'Area-Wide Medical Practice Digital Signage Transition',
			description:
				'Led an area-wide transition program for NHS medical practices to modernize communication patterns through centralized, web-managed digital signage infrastructure.',
			stack: ['Digital Signage', 'Hardware Infrastructure', 'Network Deployment']
		}
	] as DauntlessContract[]
};

export const LINKEDIN_ARTICLES: LinkedInArticle[] = [
	{
		id: 'engineering-is-dead',
		title: 'Engineering is dead. So how do we now hire Engineers?',
		subtitle: 'Evaluating, interviewing and training engineers of the future in the age of generative AI.',
		category: 'Engineering Leadership & Tech Hiring',
		date: 'Recent',
		readTime: '2 min read',
		summary:
			'46% of code is already produced by AI and this will only increase (Github Statistics 2025). How will we evaluate, interview and train engineers of the future, engineers who might never write a single line of code?',
		fullContent: [
			'Engineering is dead. So how do we now hire Engineers? Call to action below.',
			'I first started thinking about this when a top-tier hedge fund interviewed me without ever asking about AI. Bizarre!',
			'46% of code is already produced by AI and this will only increase (Github Statistics 2025). My question to you is simple: How will we evaluate, interview and train engineers of the future, engineers who might never write a single line of code?',
			'So that\'s what I am doing. I am trialling a "Leetcode for AI", and I need your help! Recruiters, managers, engineers please reach out to be part of a Beta program.',
			'#EngineeringLeadership #TechHiring #GenerativeAI #SoftwareEngineering #FutureOfWork',
			'About: Dr. Chris Moreno-Stokoe has been leading GenAI since ChatGPT 3.5, and has built two AI teams at PwC and Verition Fund Management.'
		],
		keyTakeaways: [
			'46% of code is already produced by AI and rising rapidly',
			'Evaluating engineers must shift away from syntax recall towards agent orchestration',
			'Trialling a "Leetcode for AI" beta evaluation framework'
		],
		url: 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/'
	},
	{
		id: 'trading-ai-coming-faster',
		title: 'Trading AI is coming faster than any of us (in finance) wants to admit.',
		subtitle: '3 cornerstones for deploying autonomous trading and reasoning agents in institutional finance.',
		category: 'Financial AI & Architecture',
		date: 'Recent',
		readTime: '3 min read',
		summary:
			'Trading AI is coming faster than any of us (in finance) wants to admit. Three cornerstones: 1. Build Financial Ontologies, 2. Leverage LLM Data Connectors, 3. Observable Agents.',
		fullContent: [
			'Trading AI is coming faster than any of us (in finance) wants to admit. 3 corner stones:',
			'1. Build Financial Ontologies\nFrom my time with Palantir, I learned to think about "knowledge" as the phenomenon which occurs when we organise data in clear and intuitive ways. Organise your data into a clear dictionary, or ontology, and provide your agent the ability to look up definitions, database schemas, asset classes, and more.',
			'2. Leverage LLM Data Connectors\nPerhaps the greatest strength of GenAI for trading is its ability to autonomously research and investigate. For precisely this reason connectors have already been designed for LLMs to directly query market data and news, and in turn be able to reason about live events and prices.',
			'3. Observable Agents\nI am an observability nut but nowhere is this more important than in the design of an agent flow. Start with emulating a human process as it exists at the moment, such as idea generation, or risk management. Run that agent, read its reasoning, log its actions, and provide more and more context (prompts, ontology) until it succeeds at a hand-crafted battery of typical tasks.',
			'Enjoy my full-take in the infographic below.'
		],
		keyTakeaways: [
			'Organize financial ontologies and schemas so agents understand domain concepts',
			'Connect LLMs directly to live market data and news for autonomous research',
			'Observable agent flows: log reasoning and actions against a battery of hand-crafted tasks'
		],
		url: 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/'
	},
	{
		id: 'map-the-universe-astrojson',
		title: "We've mapped the Earth. Now, it's time to map the Universe.",
		subtitle: 'Developing AstroJSON: A standard Data Interchange Format for 4-D celestial space data.',
		category: 'Data Engineering & SpaceTech',
		date: 'Recent',
		readTime: '3 min read',
		summary:
			"We don't have a 'GPS' for space because celestial bodies are constantly in relative motion. Developing AstroJSON as a standard Data Interchange Format for 4-D space data.",
		fullContent: [
			"We've mapped the Earth. Now, it's time to map the Universe. Share with anyone in GIS, astrodynamics, mapping, or data visualisation for their thoughts...",
			'I am an avid map builder, but when I tried to start on a map of space I realised there\'s a huge problem: We don\'t have a "GPS" for space. You can\'t just say "Mars is 1.5au north of Earth" - not only is Mars constantly in motion, so is Earth, and so is the Sun... and our entire Galaxy... and ITS containing galactic cluster... The main problem is that everything is in motion.',
			"So, Astronomers use formulaic vectors which can be resolved to determine where a planetary body is at any given time. That's just one of the surprising issues we face in developing a standard Data Interchange Format for 4-D space data (like GeoJSON for Earth maps).",
			"I started developing one so that I can build my own web app, combining multiple astronomical data sources for a real-time, fully explorable view of the galaxy. Let me know if you're interested in hearing more.",
			'You can find all my ideas in my RFC-style white-paper: https://lnkd.in/dPvMuiRc',
			'#SpaceTech #DataScience #GIS #Astrodynamics #DataEngineering #AstroJSON #SpaceExploration #GeoJSON'
		],
		keyTakeaways: [
			'Space lacks static coordinates: relative orbital motion requires resolved formulaic vectors',
			'AstroJSON standardizes 4-D spatial data interchange like GeoJSON does for Earth maps',
			'Unifies multi-source astronomical feeds for real-time celestial visualization'
		],
		url: 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/'
	}
];
