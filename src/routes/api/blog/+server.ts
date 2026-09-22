import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';
import { LINKEDIN_ARTICLES, type LinkedInArticle } from '$lib/data/profile';

interface CacheEntry {
	articles: LinkedInArticle[];
	syncedAt: string;
	isLive: boolean;
	source: string;
	timestamp: number;
}

// In-memory cache with 5-minute TTL
let feedCache: CacheEntry | null = null;
const CACHE_TTL_MS = 5 * 60 * 1000;

/**
 * Strip HTML tags and normalize whitespace
 */
function cleanHtml(html: string): string {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, '')
		.replace(/<style[\s\S]*?<\/style>/gi, '')
		.replace(/<br\s*[\/]?>/gi, '\n')
		.replace(/<\/p>/gi, '\n\n')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/[ \t]+/g, ' ')
		.replace(/\n\s*\n/g, '\n\n')
		.trim();
}

/**
 * Parse an RSS or Atom XML string into LinkedInArticle objects
 */
function parseXmlFeed(xml: string): LinkedInArticle[] {
	const articles: LinkedInArticle[] = [];

	// Match RSS <item> or Atom <entry>
	const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
	let match: RegExpExecArray | null;

	while ((match = itemRegex.exec(xml)) !== null) {
		const itemXml = match[1];

		// Extract Title
		const titleMatch = itemXml.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
		const rawTitle = titleMatch ? cleanHtml(titleMatch[1]) : 'Untitled Perspective';

		// Extract Link
		const linkMatch =
			itemXml.match(/<link[^>]*href=["']([^"']+)["']/i) ||
			itemXml.match(/<link[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/i);
		const rawUrl = linkMatch ? cleanHtml(linkMatch[1]).trim() : 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/';

		// Extract Date
		const dateMatch =
			itemXml.match(/<(?:pubDate|published|updated)[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/(?:pubDate|published|updated)>/i);
		let formattedDate = 'Recent';
		if (dateMatch) {
			const parsed = new Date(cleanHtml(dateMatch[1]));
			if (!isNaN(parsed.getTime())) {
				formattedDate = parsed.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric'
				});
			}
		}

		// Extract Description / Content
		const descMatch =
			itemXml.match(/<content:encoded[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/content:encoded>/i) ||
			itemXml.match(/<description[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i) ||
			itemXml.match(/<summary[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/summary>/i);
		const rawContent = descMatch ? cleanHtml(descMatch[1]) : '';

		if (!rawTitle || rawTitle === 'Untitled Perspective') continue;

		// Derive takeaways and paragraphs
		const paragraphs = rawContent
			.split(/\n\n+/)
			.map((p) => p.trim())
			.filter((p) => p.length > 0);

		const summary = paragraphs[0] || rawTitle;
		const words = rawContent.split(/\s+/).filter(Boolean).length;
		const readTime = `${Math.max(1, Math.ceil(words / 180))} min read`;

		// Infer category from content keywords
		let category = 'Engineering Leadership & AI';
		const lower = (rawTitle + ' ' + rawContent).toLowerCase();
		if (lower.includes('trading') || lower.includes('hedge fund') || lower.includes('alpha') || lower.includes('finance')) {
			category = 'Financial AI & Architecture';
		} else if (lower.includes('data engineering') || lower.includes('gis') || lower.includes('space') || lower.includes('astrojson')) {
			category = 'Data Engineering & Systems';
		} else if (lower.includes('evaluation') || lower.includes('hiring') || lower.includes('talent') || lower.includes('leadership')) {
			category = 'Engineering Leadership & Tech Hiring';
		}

		const slug = rawTitle
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '')
			.slice(0, 40);

		articles.push({
			id: `live-${slug}`,
			title: rawTitle,
			subtitle: paragraphs[1] ? paragraphs[1].slice(0, 140) + '...' : rawTitle,
			category,
			date: formattedDate,
			readTime,
			summary,
			fullContent: paragraphs.length > 0 ? paragraphs : [summary],
			keyTakeaways: paragraphs.slice(0, 3).map((p) => (p.length > 100 ? p.slice(0, 97) + '...' : p)),
			url: rawUrl
		});
	}

	return articles;
}

/**
 * Fetch feed from configured environment URL or syndication proxy
 */
async function fetchLiveFeed(): Promise<{ articles: LinkedInArticle[]; source: string } | null> {
	// Strategy 1: Environment-specified feed (e.g. self-hosted RSSHub, n8n, Make, or custom RSS endpoint)
	const feedUrl =
		env.LINKEDIN_FEED_URL ||
		env.BLOG_RSS_URL ||
		env.FEED_URL;

	if (feedUrl) {
		try {
			const res = await fetch(feedUrl, {
				headers: {
					'User-Agent': 'Mozilla/5.0 (compatible; MorenoStokoePortfolioBot/1.0)',
					Accept: 'application/rss+xml, application/atom+xml, application/xml, application/json, text/xml'
				},
				signal: AbortSignal.timeout(4000)
			});

			if (res.ok) {
				const contentType = res.headers.get('content-type') || '';
				if (contentType.includes('json')) {
					const data = await res.json();
					const rawItems = Array.isArray(data) ? data : data.items || data.articles || [];
					if (Array.isArray(rawItems) && rawItems.length > 0) {
						const normalized: LinkedInArticle[] = rawItems.map((item, idx) => ({
							id: item.id || `live-json-${idx}`,
							title: item.title || 'Live LinkedIn Note',
							subtitle: item.subtitle || item.summary?.slice(0, 120) || 'Field note from Dr. Chris Moreno-Stokoe',
							category: item.category || 'AI Systems & Architecture',
							date: item.date || 'Recent',
							readTime: item.readTime || '3 min read',
							summary: item.summary || item.content || item.description || '',
							fullContent: Array.isArray(item.fullContent)
								? item.fullContent
								: [item.summary || item.content || ''],
							keyTakeaways: Array.isArray(item.keyTakeaways) ? item.keyTakeaways : [],
							url: item.url || 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/'
						}));
						return { articles: normalized, source: 'Configured Live JSON Feed' };
					}
				} else {
					const xml = await res.text();
					const parsed = parseXmlFeed(xml);
					if (parsed.length > 0) {
						return { articles: parsed, source: 'Configured RSS/Atom Feed' };
					}
				}
			}
		} catch (err) {
			console.warn('[Feed] Error fetching from configured feedUrl:', err);
		}
	}

	// Strategy 2: RapidAPI LinkedIn Post Fetcher if credentials exist
	const rapidApiKey = env.RAPIDAPI_KEY;
	if (rapidApiKey) {
		try {
			const rapidHost = env.RAPIDAPI_LINKEDIN_HOST || 'linkedin-data-api.p.rapidapi.com';
			const res = await fetch(
				`https://${rapidHost}/get-profile-posts?username=cmorenostokoe`,
				{
					headers: {
						'X-RapidAPI-Key': rapidApiKey,
						'X-RapidAPI-Host': rapidHost
					},
					signal: AbortSignal.timeout(4000)
				}
			);

			if (res.ok) {
				const data = await res.json();
				const posts = data.data || data.posts || [];
				if (Array.isArray(posts) && posts.length > 0) {
					const articles: LinkedInArticle[] = posts.slice(0, 5).map((p, idx) => {
						const text = cleanHtml(p.text || p.commentary || '');
						const lines = text.split('\n').filter(Boolean);
						const title = lines[0] ? lines[0].slice(0, 90) : 'Live LinkedIn Update';
						return {
							id: `rapid-${idx}-${p.id || Date.now()}`,
							title,
							subtitle: lines[1] ? lines[1].slice(0, 140) : title,
							category: 'Engineering Leadership & AI',
							date: p.postedDate || 'Recent',
							readTime: `${Math.max(1, Math.ceil(text.split(' ').length / 180))} min read`,
							summary: text.slice(0, 300) + '...',
							fullContent: lines,
							keyTakeaways: lines.slice(1, 4),
							url: p.postUrl || 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/'
						};
					});
					return { articles, source: 'RapidAPI Live Sync' };
				}
			}
		} catch (err) {
			console.warn('[Feed] Error querying RapidAPI:', err);
		}
	}

	// Strategy 3: Public Syndication Probe / Verification
	// Test if LinkedIn public profile/activity endpoint is accessible
	try {
		const probe = await fetch('https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/', {
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
			},
			signal: AbortSignal.timeout(2500)
		});

		if (probe.ok) {
			const html = await probe.text();
			if (!html.includes('authwall') && !html.includes('Sign In | LinkedIn')) {
				const itemMatches = html.match(/<span class="break-words[^"]*"[^>]*>([\s\S]*?)<\/span>/gi);
				if (itemMatches && itemMatches.length > 0) {
					const scraped: LinkedInArticle[] = [];
					for (let i = 0; i < Math.min(itemMatches.length, 3); i++) {
						const text = cleanHtml(itemMatches[i]);
						if (text.length > 50) {
							const lines = text.split('\n').filter(Boolean);
							scraped.push({
								id: `scraped-${i}`,
								title: lines[0].slice(0, 90),
								subtitle: lines[1] ? lines[1].slice(0, 140) : lines[0],
								category: 'Systems Architecture & GenAI',
								date: 'Recent',
								readTime: '2 min read',
								summary: text.slice(0, 280) + '...',
								fullContent: lines,
								keyTakeaways: lines.slice(1, 4),
								url: 'https://www.linkedin.com/in/cmorenostokoe/recent-activity/all/'
							});
						}
					}
					if (scraped.length > 0) {
						return { articles: scraped, source: 'LinkedIn Direct Live Stream' };
					}
				}
			}
		}
	} catch {
		// Network timeout or anti-scraping wall expected for unauthenticated servers
	}

	return null;
}

export const GET: RequestHandler = async ({ url }) => {
	const forceRefresh = url.searchParams.get('refresh') === 'true';
	const now = Date.now();

	// Return cached feed if still fresh
	if (!forceRefresh && feedCache && now - feedCache.timestamp < CACHE_TTL_MS) {
		return json(
			{
				success: true,
				isLive: feedCache.isLive,
				source: feedCache.source,
				syncedAt: feedCache.syncedAt,
				count: feedCache.articles.length,
				articles: feedCache.articles
			},
			{
				headers: {
					'Cache-Control': 'public, max-age=60, stale-while-revalidate=300'
				}
			}
		);
	}

	// Attempt active live fetch
	const liveResult = await fetchLiveFeed();

	let mergedArticles: LinkedInArticle[];
	let isLive = false;
	let source = 'Verified Curated Portfolio Dossiers';

	if (liveResult && liveResult.articles.length > 0) {
		isLive = true;
		source = liveResult.source;

		// Deduplicate incoming live articles against baseline
		const existingTitles = new Set(LINKEDIN_ARTICLES.map((a) => a.title.toLowerCase().trim()));
		const novelLive = liveResult.articles.filter(
			(item) => !existingTitles.has(item.title.toLowerCase().trim())
		);

		// Prepend novel live articles at the top of the feed
		mergedArticles = [...novelLive, ...LINKEDIN_ARTICLES];
	} else {
		// Baseline articles
		mergedArticles = LINKEDIN_ARTICLES;
	}

	const syncedAt = new Date().toISOString();

	// Update in-memory cache
	feedCache = {
		articles: mergedArticles,
		syncedAt,
		isLive,
		source,
		timestamp: now
	};

	return json(
		{
			success: true,
			isLive,
			source,
			syncedAt,
			count: mergedArticles.length,
			articles: mergedArticles
		},
		{
			headers: {
				'Cache-Control': 'no-cache, no-store, must-revalidate'
			}
		}
	);
};
