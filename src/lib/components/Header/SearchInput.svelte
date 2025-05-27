<script lang="ts">
	import Magnify from '~icons/mdi/magnify';
</script>

<label
	class="input mx-auto flex h-fit w-full max-w-screen-lg items-center bg-neutral-content py-2 text-neutral"
>
	<input
		type="text"
		class="grow placeholder:text-neutral placeholder:opacity-40"
		placeholder="Pesquise seu produto"
		autocorrect="off"
		spellcheck="false"
		onkeydown={(e) => {
			if (e.key === 'Enter') {
				window.location.href = `/shop?q=${(e.target as HTMLInputElement)?.value}`;
			}
		}}
	/>
	<Magnify />
</label>
