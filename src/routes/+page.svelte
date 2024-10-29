<script lang="ts">
	let options = ['Escritório', 'Jogos', 'Workstation'];
	let selected = $state<string | null>(null);

	const _handleSelect = (option: string) => {
		if (option === selected) selected = null;
		else selected = option;
	};
</script>

<div class="h-[400px] w-full bg-black">Banner</div>
