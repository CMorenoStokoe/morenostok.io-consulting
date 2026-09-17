import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { LINKEDIN_ARTICLES } from '$lib/data/profile';

export const GET: RequestHandler = async () => {
	return json(
		{
			articles: LINKEDIN_ARTICLES
		},
		{
			headers: {
				'Cache-Control': 'no-cache, no-store, must-revalidate'
			}
		}
	);
};
