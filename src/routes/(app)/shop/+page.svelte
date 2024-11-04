<script lang="ts">
	import { onMount } from 'svelte';
	import ShopGrid from '$lib/components/ShopGrid/ShopGrid.svelte';

	let search = $state<string | null>(null);

	onMount(() => {
		search = new URLSearchParams(window.location.search).get('q');
	});
</script>

<main class="container mx-auto">
	<h1 class="mb-10 mt-16 text-3xl font-bold">
		Mostrando resultados para "{search}"
	</h1>
	<ShopGrid />
	<div class="h-96"></div>
</main>
