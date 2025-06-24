<script lang="ts">
	import { onMount } from 'svelte';
	import ShopGrid from '$lib/components/ShopGrid/ShopGrid.svelte';
	import { filters } from '$lib/state';

	onMount(() => {
		filters.retrieveUrl();
	});
</script>

<main class="container mx-auto px-4">
	<h1 class="mb-10 mt-16 text-xl font-bold md:text-3xl">
		Mostrando resultados para "{filters.query}"
	</h1>
	<ShopGrid />
	<div class="h-96"></div>
</main>
