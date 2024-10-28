<!-- <script lang="ts">
	let options = ['Escritório', 'Jogos', 'Workstation'];
	let selected = $state<string | null>(null);

	const _handleSelect = (option: string) => {
		if (option === selected) selected = null;
		else selected = option;
	};
</script>

<div class="flex h-lvh w-full flex-row justify-end">
	<div class="_bg grow bg-cover bg-right"></div>
	<main class="w-5/12 px-6 pt-16">
		<h1 class="mb-4 text-2xl font-bold">Monte seu PC</h1>
		<h2 class="text-lg">Para que você vai usá-lo?</h2>
		<div class="flex gap-3 py-2">
			{#each options as option}
				<label
					class:btn-outline={selected !== option}
					class:btn-primary={selected === option}
					for={`option-${option}`}
					class="btn btn-primary hover:btn-primary"
				>
					<input
						checked={selected === option}
						onclick={() => _handleSelect(option)}
						class="hidden"
						type="radio"
						name={option}
						value={option}
						id={`option-${option}`}
					/>
					{option}
				</label>
			{/each}
		</div>
	</main>
</div>

<style>
	h1 {
		font-family: 'Sofia Sans Variable', sans-serif;
	}

	._bg {
		background-image: url('$lib/assets/img/build-a-pc-.jpg');
	}
</style> -->
