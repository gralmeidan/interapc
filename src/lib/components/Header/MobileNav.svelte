<script module>
	export const navView = tweened(0, {
		duration: 300,
		easing: cubicOut
	});
</script>

<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Menu from '~icons/mdi/menu';

	let {
		items
	}: {
		items: { label: string; href: string }[];
	} = $props();

	const toggleVisible = () => {
		$navView = $navView > 0 ? 0 : 200;
	};

	const KEY = 'mobile-nav-key';

	$effect(() => {
		(document.querySelector(`.${KEY}`) as any)?.style.setProperty(
			'transform',
			`translateX(-${$navView}px)`
		);
	});
</script>

<button onclick={toggleVisible} class="no-highlight">
	<Menu class="text-3xl" />
</button>

<nav
	style:width={`${$navView}px`}
	style:right={`-${$navView}px`}
	class="inset-shadow absolute right-0 top-0 h-[100vh] overflow-hidden bg-neutral-200"
>
	{#each items as item}
		<a href={item.href} class="line-clamp-link block py-2 pl-2 text-neutral" onclick={toggleVisible}
			>{item.label}</a
		>
	{/each}
</nav>

<style>
	.inset-shadow {
		-webkit-box-shadow: inset 10px 1px 20px 2px rgba(14, 14, 14, 0.199);
		box-shadow: inset 10px 1px 20px 2px rgba(14, 14, 14, 0.199);
	}

	.line-clamp-link {
		overflow: hidden;
		text-overflow: clip;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>
