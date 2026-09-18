<script lang="ts">
	import { ArrowUpRight, Menu, X } from '@lucide/svelte';
	import { PROFILE_DATA } from '$lib/data/profile';
	import LinkedInConnectButton from '$lib/components/LinkedInConnectButton.svelte';

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full border-b border-[#262626] bg-black/95 backdrop-blur-md transition-all">
	<div class="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<a href="/" class="flex flex-col group py-1">
			<span class="text-xs sm:text-sm font-bold tracking-widest text-white uppercase font-display">
				{PROFILE_DATA.name}
			</span>
			<span class="text-[9px] sm:text-[10px] text-[#A3A3A3] font-mono tracking-wider uppercase">
				Principal Technical Consultant & Systems Architect
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-[#CCCCCC]">
			<a href="#offerings" class="transition-colors duration-150 hover:text-white">Offerings</a>
			<a href="#case-studies" class="transition-colors duration-150 hover:text-white">Case Studies</a>
			<a href="#blog" class="transition-colors duration-150 hover:text-white">Perspectives</a>
			<a href="#lab" class="transition-colors duration-150 hover:text-white">Lab</a>
			<a href="#connect" class="transition-colors duration-150 hover:text-white">Connect</a>
		</nav>

		<div class="hidden sm:flex items-center gap-4">
			<LinkedInConnectButton variant="navbar" text="Connect" showArrow={true} />
		</div>

		<!-- Mobile Menu Button with 44px touch target -->
		<button
			type="button"
			onclick={toggleMenu}
			class="inline-flex lg:hidden items-center justify-center rounded-none p-2 text-white hover:bg-[#141414] min-h-[44px] min-w-[44px]"
			aria-label="Toggle navigation menu"
			aria-expanded={mobileMenuOpen}
		>
			{#if mobileMenuOpen}
				<X class="w-6 h-6 text-white" />
			{:else}
				<Menu class="w-6 h-6 text-white" />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu Dropdown -->
	{#if mobileMenuOpen}
		<div class="lg:hidden border-b border-[#262626] bg-black px-4 pt-3 pb-6 space-y-3 shadow-2xl">
			<nav class="flex flex-col space-y-1 font-mono text-xs uppercase tracking-wider text-[#CCCCCC]">
				<a href="#offerings" onclick={closeMenu} class="py-2.5 px-3 min-h-[44px] flex items-center rounded-none hover:bg-[#141414] hover:text-white transition-colors">Offerings</a>
				<a href="#case-studies" onclick={closeMenu} class="py-2.5 px-3 min-h-[44px] flex items-center rounded-none hover:bg-[#141414] hover:text-white transition-colors">Case Studies</a>
				<a href="#blog" onclick={closeMenu} class="py-2.5 px-3 min-h-[44px] flex items-center rounded-none hover:bg-[#141414] hover:text-white transition-colors">Perspectives</a>
				<a href="#lab" onclick={closeMenu} class="py-2.5 px-3 min-h-[44px] flex items-center rounded-none hover:bg-[#141414] hover:text-white transition-colors">Lab</a>
				<a href="#connect" onclick={closeMenu} class="py-2.5 px-3 min-h-[44px] flex items-center rounded-none hover:bg-[#141414] hover:text-white transition-colors">Connect</a>
			</nav>
			<div class="pt-2">
				<LinkedInConnectButton variant="navbar" class="w-full justify-center" text="Connect on LinkedIn" showArrow={true} />
			</div>
		</div>
	{/if}
</header>