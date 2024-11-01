<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import type { Product } from '$lib/types';

	let { products, title, subtitle }: { products: Product[]; title: string; subtitle?: string } =
		$props();
</script>

<section class="my-4">
	<h1 class="text-3xl font-bold">{title}</h1>
	{#if subtitle}
		<p>{subtitle}</p>
	{/if}
	<div class="carousel carousel-start max-w-full gap-6 space-x-4 p-4">
		{#each products as product}
			<ProductCard {product} className="carousel-item shadow-sm" />
		{/each}
	</div>
</section>
