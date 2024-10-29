<script lang="ts">
	import '@fontsource-variable/sofia-sans';
	import '@fontsource-variable/nunito';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />
{@render children()}
