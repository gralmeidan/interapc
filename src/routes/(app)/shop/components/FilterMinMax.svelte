<script lang="ts">
	import FilterCard from './FilterCard.svelte';

	let { title, max, min = 0 }: { title: string; max: number; min?: number } = $props();

	let minPrice = $state(min);
	let maxPrice = $state(max);
</script>

<FilterCard {title}>
	<div class="flex items-center">
		<label class="label flex-col items-start">
			<span class="label-text">Min</span>
			<input type="number" name="" id="" class="input h-fit w-full p-1" bind:value={minPrice} />
		</label>
		<span class="mx-1">-</span>
		<label class="label flex-col">
			<span class="label-text">Max</span>
			<input type="number" name="" id="" class="input h-fit w-full p-1" bind:value={maxPrice} />
		</label>
	</div>
</FilterCard>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		appearance: textfield;
		-moz-appearance: textfield;
	}
</style>
