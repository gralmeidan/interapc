<script lang="ts">
	import HelpCircle from '~icons/mdi/help-circle';
	import ShopGrid from '$lib/components/ShopGrid/ShopGrid.svelte';
	import { productsMock } from '$lib/mocks';
	import { priceFormat } from '$lib/utils';
	import { onMount } from 'svelte';
	import { filters } from '$lib/state';

	const tabs = [
		'Placa Mãe',
		'Placa de Vídeo',
		'Processador',
		'Memória',
		'Armazenamento',
		'Fonte',
		'Gabinete',
		'Monitor',
		'Periféricos'
	];

	const selected = productsMock.cat['MLB-COMPUTER_MOTHERBOARDS'].at(1)!;

	type ProductDetail = {
		title: string;
		label: string;
		info?: string;
		warn?: string;
	};

	const importantDetails: ProductDetail[] = [
		{
			title: 'Socket',
			label: 'AM4',
			info: 'Essa placa é compatível apenas com processadores AMD Ryzen.'
		},
		{
			title: 'Memória',
			label: '4 slots DDR4',
			info: 'Suporta até 128GB de memória RAM.'
		},
		{
			title: 'Armazenamento',
			label: '2 slots SATA4',
			warn: 'Não possui suporte para M.2.'
		}
	];

	const otherDetails: ProductDetail[] = [
		{
			title: 'Chipset',
			label: 'AMD A520'
		},
		{
			title: 'Formato',
			label: 'mATX'
		},
		{
			title: 'Slots de expansão',
			label: '2x PCIe x16, 2x PCIe x1'
		},
		{
			title: 'Conectores',
			label: '1x HDMI, 1x DisplayPort, 1x USB-C'
		},
		{
			title: 'Áudio',
			label: 'Realtek ALC892'
		},
		{
			title: 'Rede',
			label: 'Realtek 8111H'
		},
		{
			title: 'Garantia',
			label: '1 ano'
		},
		{
			title: 'Marca',
			label: 'Gigabyte'
		}
	];

	onMount(() => {
		filters.retrieveUrl();
	});
</script>

<main class="container mx-auto">
	<section
		class="card my-16
	 shadow-md"
	>
		<div role="tablist" class="tabs tabs-bordered overflow-x-auto overflow-y-hidden">
			{#each tabs as tab, i}
				<span
					role="tab"
					aria-selected="false"
					aria-controls="panel-1"
					class:tab-active={i === 0}
					class="tab"
				>
					{tab}
				</span>
			{/each}
		</div>

		<div class="p-4">
			<h1 class="mb-6 text-xl font-semibold">
				{selected.title}
			</h1>

			<div class="details flex">
				<img src={selected.thumbnail} class="w-1/4" alt="" />

				<div class="mx-12 w-2/4">
					<div class="mx-12">
						{#each importantDetails as detail}
							<div class="info-item flex w-full items-center gap-2 text-xl">
								{#if detail.info || detail.warn}
									<abbr title={detail.info ?? detail.warn}>
										<HelpCircle class={detail.info ? 'text-info' : 'text-warning'} />
									</abbr>
								{/if}
								<div class="flex w-full items-center justify-between">
									<p class="w-1/4 font-semibold">{detail.title}</p>
									<p class="w-3/4 text-end">{detail.label}</p>
								</div>
							</div>
						{/each}
					</div>
					<ul class="mt-6 flex flex-wrap gap-3">
						{#each otherDetails as detail}
							<li class="card rounded-sm border px-4 py-1 text-sm">
								{detail.title}: {detail.label}
							</li>
						{/each}
					</ul>
				</div>

				<div class="w-1/4">
					{#each selected.prices as price}
						<div
							class="relative mb-5 flex cursor-pointer items-center justify-between rounded-md border p-3 py-4"
							class:_selected={price.amount === selected.displayPrice.amount}
						>
							{#if price.amount === selected.displayPrice.amount}
								<div class="badge badge-success absolute -top-2 right-4 rounded-sm">
									Melhor Preço
								</div>
							{/if}
							{#if price.seller === 'Mercado Livre'}
								<div class="badge badge-info absolute -top-2 right-4 rounded-sm">Frete Grátis</div>
							{/if}
							<p>{price.seller}</p>
							<div class="flex items-center gap-2 font-nunito">
								{#if price.discount}
									<p class="badge bg-emerald-100 font-light text-emerald-800 opacity-70">
										{price.discount}% OFF
									</p>
								{/if}
								<p class="text-lg font-semibold">{priceFormat.format(price.amount)}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	{#if filters.query}
		<h1 class="mb-6 text-lg font-bold md:text-3xl">
			Mostrando resultados para "{filters.query}"
		</h1>
	{/if}
	<ShopGrid productsList={productsMock.cat['MLB-COMPUTER_MOTHERBOARDS']} />
	<div class="h-96"></div>
</main>

<style>
	._selected {
		@apply cursor-default border-primary text-primary;
	}

	@media (max-width: 1024px) {
		.info-item > div {
			flex-direction: column;
			align-items: flex-start;
		}

		.info-item > div p {
			width: 100%;
		}

		.info-item > div > p:last-child {
			text-align: left;
		}
	}

	@media (max-width: 768px) {
		.details {
			flex-direction: column;
			gap: 2rem;
		}

		.details > * {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
		}
	}
</style>
