<script module lang="ts">
	export type FilterCheckboxesProps = {
		title: string;
		options: string[];
	};
</script>

<script lang="ts">
	import FilterCard from './FilterCard.svelte';

	let { title, options }: FilterCheckboxesProps = $props();

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
			<input type="checkbox" class="checkbox-primary" />
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
