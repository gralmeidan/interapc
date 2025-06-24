<script lang="ts">
	import { goto } from '$app/navigation';
	import { filters } from '$lib/state';
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
				if (!window.location.pathname.includes('shop')) {
					goto('/shop', {});
				}

				filters.query = (e.target as HTMLInputElement)?.value.trim();
			}
		}}
	/>
	<Magnify />
</label>
