<script lang="ts">
	import { mQuestions } from '$lib/mocks';
	import StarterQuestion from './components/StarterQuestion.svelte';

	let questions = $state(mQuestions);
</script>

<div class="flex h-lvh w-full flex-row justify-end">
	<div class="_bg flex grow flex-col-reverse rounded-br-3xl rounded-tr-3xl bg-cover bg-right">
		<div aria-hidden="true" class="mx-auto w-fit py-2 text-[60px] font-semibold text-white">
			InteraPC
		</div>
	</div>
	<main class="h-full w-5/12 overflow-auto px-10 pt-16">
		<h1 class="mb-4 text-2xl font-bold">Monte seu PC</h1>
		{#each questions as question, i}
			<StarterQuestion
				{question}
				onSelect={(selected) => {
					questions[i] = { ...question, selected };
				}}
			/>
		{/each}
	</main>
</div>

<style>
	._bg {
		background-image: url('$lib/assets/img/build-a-pc-background.jpg');
	}
</style>
