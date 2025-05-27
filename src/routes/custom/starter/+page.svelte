<script lang="ts">
	import { mQuestions } from '$lib/mocks';
	import StarterQuestion from './components/StarterQuestion.svelte';
	import MdiChevronLeftCircleOutline from '~icons/mdi/chevron-left-circle-outline';
	import MdiArrowRight from '~icons/mdi/arrow-right';

	let questions = $state(mQuestions);
</script>

<div class="flex h-lvh w-full flex-row justify-end">
	<div
		class="_bg flex grow flex-col justify-between rounded-br-3xl rounded-tr-3xl bg-cover bg-right"
	>
		<a href="/" class="btn btn-ghost m-6 flex w-fit items-center text-xl font-semibold text-white">
			<MdiChevronLeftCircleOutline class="h-10 w-10 text-white" />
			Voltar para a home
		</a>
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
		<div class="continue-button absolute bottom-0 right-0 p-6">
			<button
				class="btn btn-primary font-bold"
				onclick={() => (window.location.href = '/custom/shop')}
			>
				Continuar
				<MdiArrowRight class="h-4 w-4 text-white" />
			</button>
		</div>
	</main>
</div>

<style>
	._bg {
		background-image: url('$lib/assets/img/build-a-pc-background.jpg');
	}

	@media (max-width: 768px) {
		._bg {
			display: none;
		}

		main {
			width: 100%;
			padding: 1rem;
			padding-bottom: 60px;
		}

		.continue-button {
			left: 0;
		}

		.continue-button button {
			width: 100%;
		}
	}
</style>
