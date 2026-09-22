export interface TerminalMessage {
	id: string;
	role: 'user' | 'system';
	content: string;
	timestamp: string;
}

class TerminalState {
	isOpen = $state(false);
	isLoading = $state(false);
	query = $state('');
	messages = $state<TerminalMessage[]>([
		{
			id: 'init-1',
			role: 'system',
			content: 'System ready. Query portfolio telemetry, case studies, or operational parameters. Quick navigation links:\n- <a href="#offerings" class="text-white border-b border-[#DDEBFB] hover:border-white">[01] Core Consulting Pillars</a>\n- <a href="#case-studies" class="text-white border-b border-[#DDEBFB] hover:border-white">[02] Verified Buy-Side Case Studies</a>\n- <a href="#connect" class="text-white border-b border-[#DDEBFB] hover:border-white">[03] Outside-IR35 Engagement Scope</a>',
			timestamp: new Date().toLocaleTimeString()
		}
	]);

	open() {
		this.isOpen = true;
	}

	close() {
		this.isOpen = false;
	}

	toggle() {
		this.isOpen = !this.isOpen;
	}

	async sendQuery(inputQuery?: string) {
		const text = (inputQuery ?? this.query).trim();
		if (!text || this.isLoading) return;

		this.query = '';
		const userMsgId = 'user-' + Date.now();
		this.messages.push({
			id: userMsgId,
			role: 'user',
			content: text,
			timestamp: new Date().toLocaleTimeString()
		});

		const systemMsgId = 'sys-' + Date.now();
		this.messages.push({
			id: systemMsgId,
			role: 'system',
			content: '',
			timestamp: new Date().toLocaleTimeString()
		});

		this.isLoading = true;

		try {
			const res = await fetch('/api/terminal/query', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ query: text })
			});

			if (!res.ok) {
				throw new Error(`Server returned HTTP ${res.status}`);
			}

			if (!res.body) {
				throw new Error('No response stream received from terminal endpoint.');
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder('utf-8');

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value, { stream: true });
				const idx = this.messages.findIndex((m) => m.id === systemMsgId);
				if (idx !== -1) {
					this.messages[idx].content += chunk;
				}
			}
		} catch (err: any) {
			const idx = this.messages.findIndex((m) => m.id === systemMsgId);
			if (idx !== -1) {
				this.messages[idx].content = `> SYSTEM ERROR: ${err?.message || 'Uplink timeout'}. Please check query syntax or review static portfolio sections directly.`;
			}
		} finally {
			this.isLoading = false;
		}
	}
}

export const terminalState = new TerminalState();
