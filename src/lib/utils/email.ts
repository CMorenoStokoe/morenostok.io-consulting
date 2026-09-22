// ROT13 obfuscation: hides cmorenostokoe+consulting@gmail.com from web scrapers
// Evaluated client-side only so static HTML never leaks the raw address.

const ROT13_CIPHER = 'pzberabfgbxbr+pbafhygvat@tznvy.pbz';

function decodeRot13(str: string): string {
	return str.replace(/[a-zA-Z]/g, (char) => {
		const base = char <= 'Z' ? 65 : 97;
		return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
	});
}

export function getEmail(): string {
	return decodeRot13(ROT13_CIPHER);
}

export function getMailtoUrl(subject = '', body = ''): string {
	const email = getEmail();
	const params = new URLSearchParams();
	if (subject) params.set('subject', subject);
	if (body) params.set('body', body);
	const query = params.toString();
	return `mailto:${email}${query ? '?' + query : ''}`;
}