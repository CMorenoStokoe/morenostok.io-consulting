<script lang="ts">
	import { terminalState } from '$lib/state/terminal.svelte';

	let inputEl = $state<HTMLInputElement | null>(null);
	let outputLogEl = $state<HTMLDivElement | null>(null);

	$effect(() => {
		if (terminalState.isOpen) {
			setTimeout(() => {
				inputEl?.focus();
			}, 50);
		}
	});

	$effect(() => {
		// Auto scroll to bottom as messages stream
		if (terminalState.messages.length > 0 || terminalState.isLoading) {
			if (outputLogEl) {
				outputLogEl.scrollTop = outputLogEl.scrollHeight;
			}
		}
	});

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		terminalState.sendQuery();
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			terminalState.close();
		}
	}

	function handleLinkClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const anchor = target.closest('a');
		if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
			terminalState.close();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			terminalState.close();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if terminalState.isOpen}
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Global Command Palette Terminal"
		tabindex="-1"
		class="fixed inset-0 z-50 bg-[#012148]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
	>
		<div
			class="w-full max-w-3xl bg-[#012148] border border-[#C6D7EA] shadow-2xl flex flex-col rounded-none overflow-hidden"
		>
			<!-- Header / Telemetry Bar -->
			<div
				class="border-b border-[#C6D7EA] px-4 py-2.5 flex items-center justify-between font-mono text-[10px] text-[#C6D7EA] uppercase tracking-widest bg-[#012148]"
			>
				<div class="flex items-center gap-2">
					<span class="inline-block w-2 h-2 {terminalState.isLoading ? 'bg-[#3300FF] animate-pulse' : 'bg-[#3300FF]'}"></span>
					<span>// SECURE UPLINK ESTABLISHED // LLM_ROUTING_ACTIVE</span>
				</div>
				<div class="flex items-center gap-3">
					{#if terminalState.isLoading}
						<span class="text-[#3300FF] font-bold">[STREAMING...]</span>
					{:else}
						<span class="text-[#C6D7EA]">[READY]</span>
					{/if}
					<button
						type="button"
						onclick={() => terminalState.close()}
						class="text-[#C6D7EA] hover:text-[#3300FF] transition-colors cursor-pointer"
						aria-label="Close terminal"
					>
						[ESC]
					</button>
				</div>
			</div>

			<!-- Output Log (Message History) -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				bind:this={outputLogEl}
				onclick={handleLinkClick}
				class="h-[400px] overflow-y-auto p-4 space-y-4 flex-1 font-mono select-text"
			>
				{#each terminalState.messages as msg (msg.id)}
					{#if msg.role === 'user'}
						<div class="flex flex-col items-end space-y-1">
							<div class="flex items-center gap-2 text-[10px] text-[#C6D7EA] uppercase">
								<span>{msg.timestamp}</span>
								<span>&gt; USER:</span>
							</div>
							<div class="font-mono text-xs text-[#C6D7EA] bg-[#012148] border border-[#C6D7EA] px-3 py-2 max-w-xl text-right">
								{msg.content}
							</div>
						</div>
					{:else}
						<div class="flex flex-col items-start space-y-1">
							<div class="flex items-center gap-2 text-[10px] text-[#C6D7EA] uppercase">
								<span>&gt; SYSTEM:</span>
								<span>{msg.timestamp}</span>
							</div>
							<div class="font-sans text-sm text-[#C6D7EA] leading-relaxed whitespace-pre-wrap max-w-2xl bg-[#012148] border-l-2 border-[#3300FF] pl-3 py-1">
								{@html msg.content}
								{#if terminalState.isLoading && msg.id === terminalState.messages[terminalState.messages.length - 1].id}
									<span class="inline-block w-2 h-4 bg-[#3300FF] ml-1 animate-pulse align-middle"></span>
								{/if}
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<!-- Input Field -->
			<form
				onsubmit={handleSubmit}
				class="border-t border-[#C6D7EA] p-4 flex items-center gap-3 bg-[#012148]"
			>
				<span class="text-[#3300FF] font-mono text-base font-bold shrink-0">&gt;</span>
				<input
					bind:this={inputEl}
					bind:value={terminalState.query}
					type="text"
					placeholder="Enter query or operational parameter..."
					class="w-full bg-transparent text-[#C6D7EA] font-mono text-sm outline-none placeholder:text-[#C6D7EA]/40"
					disabled={terminalState.isLoading}
					aria-label="Terminal query input"
				/>
				<button
					type="submit"
					disabled={terminalState.isLoading || !terminalState.query.trim()}
					class="font-mono text-xs uppercase px-3 py-1.5 border border-[#3300FF] text-[#C6D7EA] bg-[#3300FF] hover:bg-[#012148] hover:text-[#C6D7EA] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
				>
					[EXEC]
				</button>
			</form>
		</div>
	</div>
{/if}
