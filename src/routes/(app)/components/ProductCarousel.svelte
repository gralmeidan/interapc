<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import type { Product } from '$lib/types';

	let {
		products,
		title,
		subtitle,
		id
	}: { products: Product[]; title: string; subtitle?: string; id?: string } = $props();
</script>

<section class="my-4">
	<h1 class="text-3xl font-bold" {id}>{title}</h1>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
	<div class="carousel carousel-start max-w-full gap-6 space-x-4 p-4">
		{#each products as product}
			<ProductCard {product} className="carousel-item !shadow-sm" />
		{/each}
	</div>
</section>

<style>
	@media (max-width: 640px) {
		div.carousel {
			padding-left: 0;
			padding-right: 0;
		}

		div.carousel {
			overflow-x: scroll;
			scrollbar-width: thin;
			scrollbar-color: #888 #f1f1f1;
		}
	}
</style>
