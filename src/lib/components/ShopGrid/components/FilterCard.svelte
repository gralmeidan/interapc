<script lang="ts">
	let { title, children }: { title: string; children: any } = $props();
</script>

<div class="card rounded-md border p-3">
	<h3 class="text-lg font-bold">{title}</h3>
	{@render children()}
</div>
