<script lang="ts">
	import AmdPromo from '$lib/assets/img/amd-promo.jpg';
	import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<img src={AmdPromo} class="h-96 w-full" alt="" />

<main class=" container mx-auto bg-base-200 p-6 py-10">
	<h1>Destaques</h1>
	<ProductCard
		product={{
			thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_935110-MLU72605877381_102023-O.webp',
			title:
				'Placa de Vídeo AMD Radeon RX 570 Power Color 4GB VRAM Pci-E Express Lorem Ipsum Dolor Sit Amet',
			id: 'mlb',
			prices: [
				{
					amount: 690,
					seller: 'Mercado Livre'
				}
			],
			displayPrice: {
				amount: 690,
				seller: 'Mercado Livre',
				originalPrice: 780,
				discount: 11,
				endsAt: new Date(new Date().getTime() + 60 * 1000)
			}
		}}
	/>
</main>
