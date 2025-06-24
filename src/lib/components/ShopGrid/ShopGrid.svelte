<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { productsMock } from '$lib/mocks';
	import { filters, FiltersState } from '$lib/state';
	import type { Product } from '$lib/types';
	import FilterCheckboxes, {
		type FilterCheckboxesProps
	} from './components/FilterCheckboxes.svelte';
	import FilterMinMax from './components/FilterMinMax.svelte';

	let { productsList = productsMock.all }: { productsList?: Product[] } = $props();

	function toggleListHandler(
		key: {
			[K in keyof FiltersState]: FiltersState[K] extends string[] ? K : never;
		}[keyof FiltersState]
	) {
		return (name: string, checked: boolean) => {
			const noName = filters[key].filter((el) => el !== name.toLowerCase());

			if (checked) {
				filters[key] = [...noName, name.toLowerCase()];
			} else {
				filters[key] = noName;
			}
		};
	}

	const filterOptions: FilterCheckboxesProps[] = [
		{
			title: 'Vendido por',
			options: ['Kabum', 'Terabyte', 'Mercado Livre', 'Pichau', 'Amazon'],
			key: 'seller'
		},
		{
			title: 'Memória',
			options: ['2GB', '4GB', '8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB'],
			key: 'mem'
		},
		{
			title: 'Marcas',
			options: ['Asus', 'MSI', 'Gigabyte', 'EVGA', 'Galax', 'Zotac', 'PNY', 'Colorful'],
			key: 'brand'
		},
		{
			title: 'Plataforma',
			options: ['AMD', 'Intel'],
			key: 'platform'
		},
		{
			title: 'Tipo de memória',
			options: ['DDR3', 'DDR4', 'DDR5', 'GDDR5', 'GDDR6', 'GDDR6X'],
			key: 'memType'
		},
		{
			title: 'Armazenamento',
			options: ['SSD', 'HDD', 'NVMe', 'M.2'],
			key: 'storageType'
		},
		{
			title: 'Socket',
			options: ['AM4', 'LGA1200', 'LGA1151', 'TR4', 'LGA2066'],
			key: 'socket'
		},
		{
			title: 'Frequência',
			options: ['2133MHz', '2400MHz', '2666MHz', '3000MHz', '3200MHz', '3600MHz', '4000MHz'],
			key: 'frequency'
		}
	];

	const pageSize = 16;

	function noMatchList(name: string, list: string[]): boolean {
		return list.length > 0 && !list.some((el) => name.includes(el.toLowerCase()));
	}

	let results = $derived.by(() => {
		const results: Product[] = [];

		for (const el of productsList) {
			const name = el.title.toLowerCase();

			if (filters.query && !name.includes(filters.query.toLowerCase())) {
				continue;
			}

			if (noMatchList(el.displayPrice.seller.toLowerCase(), filters.seller)) {
				continue;
			}

			if (noMatchList(name, filters.mem)) {
				continue;
			}

			if (noMatchList(name, filters.brand)) {
				continue;
			}

			if (noMatchList(name, filters.platform)) {
				continue;
			}

			if (noMatchList(name, filters.memType)) {
				continue;
			}

			if (noMatchList(name, filters.storageType)) {
				continue;
			}

			if (noMatchList(name, filters.socket)) {
				continue;
			}

			if (noMatchList(name, filters.frequency)) {
				continue;
			}

			results.push(el);
		}

		return results;
	});

	let pages = $derived.by(() => {
		const cur = 1;
		const total = Math.ceil(results.length / pageSize);

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
		<button
			onclick={() => {
				filters.reset();
			}}
			class="px-0 text-primary"
		>
			Limpar filtros
		</button>
		{#each filterOptions as filter}
			<FilterCheckboxes {...filter} />
		{/each}
	</aside>
	<section>
		<div class="my-2 flex items-end justify-between">
			<p class="text-primary">Mostrando 1-{pageSize} de {results.length} resultados</p>
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
			{#each results.slice(0, pageSize) as product}
				<ProductCard {product} className="!w-full" />
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

<style>
	@media (max-width: 1536px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 1280px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 1024px) {
		aside {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.grid {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
</style>
