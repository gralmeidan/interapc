<script lang="ts">
	import Select from '$lib/components/Select.svelte';
	import type { Question } from '$lib/mocks';

	let {
		question,
		onSelect
	}: { question: Question; onSelect: (val: Question['selected']) => void } = $props();

	const _handleSelect = (option: string) => {
		if (option === question.selected) onSelect(null);
		else onSelect(option);
	};

	let id = $derived(`op-${question.id}`);
</script>

<h2 class="text-lg">{question.title}</h2>
<div class="flex flex-wrap gap-3 py-2">
	{#if question.type == 'radio'}
		{#each question.options as option}
			<label
				class:btn-outline={question.selected !== option}
				class:btn-primary={question.selected === option}
				for="{id}-{option}"
				class="btn btn-primary hover:btn-primary"
			>
				<input
					checked={question.selected === option}
					onclick={() => _handleSelect(option)}
					class="hidden"
					type="radio"
					name={option}
					value={option}
					id="{id}-{option}"
				/>
				{option}
			</label>
		{/each}
	{:else}
		<Select options={question.options} name={id} {onSelect} selected={question.selected ?? ''} />
	{/if}
</div>
