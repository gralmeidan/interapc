<script lang="ts">
	import AmdPromo from '$lib/assets/img/amd-promo.jpg';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { productsMock } from '$lib/mocks';
	import ProductCarousel from './components/ProductCarousel.svelte';
</script>

<img src={AmdPromo} class="h-96 w-full" alt="" />

<main class="container mx-auto p-6 py-10">
	<ProductCarousel
		title="Destaques"
		id="ofertas"
		subtitle="Confira as melhores ofertas que nosso time selecionou para você!"
		products={productsMock.all.slice(0, 12)}
	/>
	<ProductCarousel
		title="Placas de Vídeo"
		products={productsMock.cat['MLB-GRAPHICS_CARDS'].slice(0, 12)}
	/>
	<ProductCarousel
		title="Processadores"
		products={productsMock.cat['MLB-COMPUTER_PROCESSORS'].slice(0, 12)}
	/>
	<ProductCarousel title="Notebooks" products={productsMock.cat['MLB-NOTEBOOKS'].slice(0, 12)} />
	<ProductCarousel
		title="Monitores"
		products={productsMock.cat['MLB-COMPUTER_MONITORS'].slice(0, 12)}
	/>
	<section class="my-4">
		<h1 class="text-2xl font-bold">Outras ofertas imperdíveis</h1>
		<div class="flex flex-wrap justify-between gap-4">
			{#each productsMock.all.slice(12, 12 + 16) as product}
				<ProductCard {product} className="my-2" />
			{/each}
		</div>
	</section>
</main>
