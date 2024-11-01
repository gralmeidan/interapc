<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />
{@render children()}

<style>
	root {
		@apply scroll-smooth bg-base-100;
	}
</style>
