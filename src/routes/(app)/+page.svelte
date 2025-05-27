<script lang="ts">
	import AmdPromoDesktop from '$lib/assets/img/amd-promo-desktop.jpg';
	import AmdPromoTablet from '$lib/assets/img/amd-promo-tablet.jpg';
	import AmdPromoMobile from '$lib/assets/img/amd-promo-mobile.jpg';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { productsMock } from '$lib/mocks';
	import ProductCarousel from './components/ProductCarousel.svelte';
</script>

<img src={AmdPromoDesktop} class="desktop h-96 w-full" alt="" />
<img src={AmdPromoTablet} class="tablet h-96 w-full" alt="" />
<img src={AmdPromoMobile} class="mobile h-96 w-full" alt="" />

<main class="carousel-container mx-auto p-6 py-10">
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
		<div class="flex flex-wrap gap-4">
			{#each productsMock.all.slice(12, 12 + 15) as product}
				<ProductCard {product} className="flex-grow basis-80 max-w-full !w-auto" />
			{/each}
		</div>
	</section>
</main>

<style>
	.desktop,
	.tablet {
		display: none;
	}

	.mobile {
		display: block;
	}

	.carousel-container {
		width: 100%;
	}

	@media (min-width: 512px) {
		.carousel-container {
			max-width: 1280px;
		}

		.tablet {
			display: block;
		}

		.mobile,
		.desktop {
			display: none;
		}
	}

	@media (min-width: 1100px) {
		.desktop {
			display: block;
		}

		.mobile,
		.tablet {
			display: none;
		}
	}
</style>
