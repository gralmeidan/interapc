<script lang="ts">
	import { onMount } from 'svelte';
	import ShopGrid from '$lib/components/ShopGrid/ShopGrid.svelte';

	let search = $state<string | null>(null);

	onMount(() => {
		search = new URLSearchParams(window.location.search).get('q');
	});
</script>

<main class="container mx-auto px-4">
	<h1 class="mb-10 mt-16 text-xl font-bold md:text-3xl">
		Mostrando resultados para "{search}"
	</h1>
	<ShopGrid />
	<div class="h-96"></div>
</main>
