import { writable } from 'svelte/store';

export const selectedAreaStore = writable<string>('Financial AI & Quantitative Tooling');

export function selectAndScroll(areaTitle: string) {
	selectedAreaStore.set(areaTitle);
	const target = document.getElementById('connect') || document.getElementById('engage') || document.getElementById('contact');
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
}