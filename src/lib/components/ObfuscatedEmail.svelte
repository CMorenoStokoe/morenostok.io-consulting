<script lang="ts">
	import { onMount } from 'svelte';
	import { getEmail } from '$lib/utils/email';

	let { class: klass = '', text = '' } = $props();
	let email = $state('');

	onMount(() => {
		// Decode only on client - never in SSR HTML
		email = getEmail();
	});
</script>

{#if email}
	<a
		href="mailto:{email}"
		class={klass}
		rel="noopener noreferrer"
	>
		{text || email}
	</a>
{:else}
	<span class={klass + ' opacity-0 select-none'} aria-hidden="true">contact</span>
{/if}