<script lang="ts">
	let {
		label,
		name,
		options,
		selected,
		onSelect
	}: {
		label?: string;
		name?: string;
		options: string[];
		onSelect: (option: string) => void;
		selected: string;
	} = $props();

	let filter = $state<string | null>(null);

	let base: HTMLLabelElement;

	let display = $derived(
		options.filter((v) => v.toLowerCase().includes(filter?.toLowerCase() ?? '')).slice(0, 5)
	);

	function getFirstElement() {
		const focusableElements =
			base?.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			) ?? [];

		const firstEl = focusableElements[0] as HTMLElement;

		return firstEl;
	}

	function closeList() {
		const firstEl = getFirstElement();
		firstEl?.focus();
		firstEl?.blur();
	}
</script>

<label bind:this={base} class="dropdown">
	{#if label}
		<div class="label label-text">{label}</div>
	{/if}
	<div
		class="input input-bordered flex cursor-pointer items-center gap-2 border-slate-500 focus-within:border-primary"
	>
		<input
			type="text"
			class="min-w-0 grow bg-transparent"
			placeholder={selected}
			value={filter ?? selected ?? ''}
			onkeyup={(e) => (filter = e.currentTarget.value)}
			onfocus={() => (filter = '')}
			autocomplete="off"
			spellcheck="false"
			{name}
		/>
	</div>
	<ul class="menu dropdown-content z-[1] w-fit bg-base-100 p-2 shadow focus:outline-2">
		{#each display as val}
			<li>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<!-- svelte-ignore a11y_missing_attribute -->
				<a
					tabindex={1}
					onclick={(e) => {
						e.preventDefault();
						closeList();
						onSelect(val);
					}}
					onkeydown={({ key }) => {
						if (key === 'Enter') {
							closeList();
							onSelect(val);
						}
					}}
				>
					{val}
				</a>
			</li>
		{/each}
	</ul>
</label>
