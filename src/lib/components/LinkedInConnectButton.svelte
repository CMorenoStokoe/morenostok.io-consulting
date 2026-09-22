<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import { PROFILE_DATA } from '$lib/data/profile';

	let {
		text = 'Connect on LinkedIn',
		variant = 'primary',
		size = 'md',
		class: klass = '',
		showArrow = false,
		href = PROFILE_DATA.channels.linkedIn
	}: {
		text?: string;
		variant?: 'primary' | 'navbar' | 'hero' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		showArrow?: boolean;
		href?: string;
	} = $props();

	const variantStyles = {
		primary:
			'bg-[#3300FF] text-white font-semibold border border-[#3300FF] hover:bg-black hover:text-white hover:border-black transition-all duration-150 shadow-xs',
		navbar:
			'bg-[#3300FF] text-white font-semibold border border-[#3300FF] hover:bg-black hover:text-white hover:border-black transition-all duration-150 shadow-xs',
		hero:
			'bg-[#3300FF] text-white font-semibold border border-[#3300FF] hover:bg-black hover:text-white hover:border-black transition-all duration-150 shadow-xs',
		outline:
			'bg-transparent text-[#3300FF] border border-[#3300FF] hover:bg-[#3300FF] hover:text-white transition-all duration-150'
	};

	const sizeStyles = {
		sm: 'px-3.5 py-2 text-xs min-h-[36px] gap-2 font-mono uppercase tracking-wider',
		md: 'px-5 py-2.5 text-xs min-h-[44px] gap-2.5 font-mono uppercase tracking-wider',
		lg: 'px-7 py-3.5 text-xs sm:text-sm min-h-[48px] gap-3 font-mono uppercase tracking-widest'
	};

	const iconSizes = {
		sm: 'w-4 h-4',
		md: 'w-4.5 h-4.5',
		lg: 'w-5 h-5'
	};
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="inline-flex items-center justify-center rounded-none font-mono uppercase transition-all duration-150 cursor-pointer {variantStyles[variant]} {sizeStyles[size]} {klass}"
	aria-label={text}
>
	<LinkedinIcon class="{iconSizes[size]} shrink-0" />
	<span>{text}</span>
	{#if showArrow}
		<ArrowUpRight class={size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
	{/if}
</a>
