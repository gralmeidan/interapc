<script lang="ts">
	import Header from '$lib/components/Header/Header.svelte';

	let { children } = $props();
</script>

<div class="mobile-nav-key">
	<Header />
	{@render children()}
</div>

<style lang="postcss">
	root {
		@apply scroll-smooth bg-base-100;
	}
</style>
