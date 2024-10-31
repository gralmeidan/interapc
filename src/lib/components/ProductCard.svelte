<script lang="ts">
	import CartPlus from '~icons/mdi/cart-plus';
	import type { Product } from '$lib/types';
	import { priceFormat } from '$lib/utils';
	import Countdown from './Countdown.svelte';

	let {
		product
	}: {
		product: Product;
	} = $props();
</script>

<div class="card relative w-80 shadow-xl">
	{#if product.displayPrice.endsAt}
		<div
			class="absolute left-0 top-0 flex w-full justify-between rounded-b-md rounded-tl-box rounded-tr-box bg-neutral px-4 py-1 text-neutral-content"
		>
			<Countdown date={product.displayPrice.endsAt} />
			{#if product.displayPrice.seller}
				<span>{product.displayPrice.seller}</span>
			{/if}
		</div>
	{:else if product.displayPrice.seller}
		<div
			class=" absolute right-0 top-0 rounded-bl-box rounded-tr-box bg-neutral px-4 py-1 text-neutral-content"
		>
			{product.displayPrice.seller}
		</div>
	{/if}
	<img src={product.thumbnail} class="h-56 w-full bg-cover" aria-hidden="true" alt="" />
	<div class="p-4 pt-6">
		{#if product.displayPrice.originalPrice}
			<p class="text-sm line-through opacity-70">
				{priceFormat.format(product.displayPrice.originalPrice)}
			</p>
		{/if}
		<p class="text-2xl font-semibold">
			{priceFormat.format(product.displayPrice.amount)}
			{#if product.displayPrice.discount}
				<span class="text-sm text-emerald-700">{product.displayPrice.discount}% OFF</span>
			{/if}
		</p>
		<p class="text-sm opacity-80">
			à vista no pix, ou até <br />
			12x de {priceFormat.format((product.displayPrice.amount * 1.1) / 12)}
		</p>
		<h2 class="_line-clamp-title my-2 text-lg">{product.title}</h2>
		<button class="btn btn-primary w-full font-bold"><CartPlus />ADICIONAR AO CARRINHO</button>
	</div>
</div>

<style>
	._line-clamp-title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
