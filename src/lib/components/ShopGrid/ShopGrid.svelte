<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { productsMock } from '$lib/mocks';
	import type { Product } from '$lib/types';
	import FilterCheckboxes, {
		type FilterCheckboxesProps
	} from './components/FilterCheckboxes.svelte';
	import FilterMinMax from './components/FilterMinMax.svelte';

	let { productsList = productsMock.all }: { productsList?: Product[] } = $props();

	const filters: FilterCheckboxesProps[] = [
		{
			title: 'Vendido por',
			options: ['Kabum', 'Terabyte', 'Mercado Livre', 'Pichau', 'Amazon']
		},
		{
			title: 'Memória',
			options: ['2GB', '4GB', '8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB']
		},
		{
			title: 'Marcas',
			options: ['Asus', 'MSI', 'Gigabyte', 'EVGA', 'Galax', 'Zotac', 'PNY', 'Colorful']
		},
		{
			title: 'Plataforma',
			options: ['AMD', 'Intel']
		},
		{
			title: 'Tipo de memória',
			options: ['DDR3', 'DDR4', 'DDR5', 'GDDR5', 'GDDR6', 'GDDR6X']
		},
		{
			title: 'Armazenamento',
			options: ['SSD', 'HDD', 'NVMe', 'M.2']
		},
		{
			title: 'Socket',
			options: ['AM4', 'LGA1200', 'LGA1151', 'TR4', 'LGA2066']
		},
		{
			title: 'Frequência',
			options: ['2133MHz', '2400MHz', '2666MHz', '3000MHz', '3200MHz', '3600MHz', '4000MHz']
		}
	];

	const pageSize = 16;

	let pages = $derived.by(() => {
		const cur = 1;
		const total = Math.ceil(productsList.length / pageSize);

		if (total <= 5) {
			return Array.from({ length: total }, (_, i) => i + 1);
		}

		if (cur <= 3) {
			return [1, 2, 3, 4, '...', total];
		}

		if (cur > total - 2) {
			return [1, '...', total - 3, total - 2, total - 1, total];
		}

		return [1, '...', cur - 1, cur, cur + 1, '...', total];
	});
</script>

<div class="flex items-start gap-4">
	<aside class="flex w-48 flex-col gap-4">
		<h2 class="text-xl">Filtros</h2>
		<FilterMinMax title="Preço" min={0} max={productsMock.highestPrice} />
		{#each filters as filter}
			<FilterCheckboxes {...filter} />
		{/each}
	</aside>
	<section>
		<div class="my-2 flex items-end justify-between">
			<p class="text-primary">Mostrando 1-{pageSize} de {productsList.length} resultados</p>
			<label class="label gap-4">
				<span class="label-text">Ordenar por: </span>
				<select class="select" placeholder="Ordenar por">
					<option value="mais vendidos">Mais vendidos</option>
					<option value="menor preço">Menor preço</option>
					<option value="maior preço">Maior preço</option>
					<option value="melhor avaliados">Melhor avaliados</option>
				</select>
			</label>
		</div>
		<div class="grid-sp grid grid-cols-4 gap-6">
			{#each productsList.slice(0, pageSize) as product}
				<ProductCard {product} />
			{/each}
		</div>
		<div>
			<nav class="mt-8 flex justify-center gap-4">
				{#each pages as page}
					<button
						class="text-lg font-bold"
						disabled={page === '...'}
						class:underline={page !== '...'}
						class:text-primary={page === 1}>{page}</button
					>
				{/each}
			</nav>
		</div>
	</section>
</div>
