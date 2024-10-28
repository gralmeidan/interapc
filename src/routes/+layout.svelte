<script lang="ts">
	import '@fontsource-variable/sofia-sans';
	import '@fontsource-variable/nunito';

	import '../app.css';
	let { children } = $props();
</script>

<!-- <header class="absolute w-full bg-primary p-3">
	<span class="text-primary-content">InteraPC</span>
</header> -->
{@render children()}
