<script module lang="ts">
	import { filters, type FiltersState } from '$lib/state';

	export type FilterCheckboxesProps = {
		title: string;
		options: string[];
		key: {
			[K in keyof FiltersState]: FiltersState[K] extends string[] ? K : never;
		}[keyof FiltersState];
	};
</script>

<script lang="ts">
	import FilterCard from './FilterCard.svelte';

	let { title, options, key }: FilterCheckboxesProps = $props();

	let isHidden = $state(true);

	let isUnderLimit = $derived.by(() => options.length <= 6);

	let display = $derived.by(() => {
		if (isUnderLimit) return options;

		if (isHidden) {
			return options.slice(0, 4);
		}

		return options;
	});
</script>

<FilterCard {title}>
	{#each display as option}
		<label class="label flex cursor-pointer justify-normal gap-2 py-1">
			<input
				type="checkbox"
				class="checkbox-primary"
				checked={filters[key].includes(option.toLowerCase())}
				onchange={(event) => {
					const name = option.toLowerCase();

					if (!filters[key].includes(name)) {
						filters[key] = [...filters[key], name];
					} else {
						filters[key] = filters[key].filter((el) => el !== name);
					}
				}}
			/>
			<span class="label-text">{option}</span>
		</label>
	{/each}
	{#if !isUnderLimit}
		<button
			onclick={() => (isHidden = !isHidden)}
			class="px-2 pt-1 text-start text-primary transition-colors hover:text-secondary"
		>
			{#if isHidden}
				Ver mais
			{:else}
				Ver menos
			{/if}
		</button>
	{/if}
</FilterCard>
