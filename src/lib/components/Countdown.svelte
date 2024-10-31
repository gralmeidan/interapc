<script lang="ts">
	import { onMount } from 'svelte';

	let { date }: { date: Date } = $props();

	let timeRemaining = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	function updateCountdown() {
		const difference = date.getTime() - new Date().getTime();

		if (difference <= 0) {
			timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
			return;
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		timeRemaining = { days, hours, minutes, seconds };
	}

	let interval: number;

	onMount(() => {
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval); // Cleanup on component destroy
	});
</script>

{#if timeRemaining}
	<span class="countdown font-mono text-2xl">
		<span style="--value:{timeRemaining.days};">{timeRemaining.days}</span> :
		<span style="--value:{timeRemaining.hours};">{timeRemaining.hours}</span> :
		<span style="--value:{timeRemaining.minutes};">{timeRemaining.minutes}</span> :
		<span style="--value:{timeRemaining.seconds};">{timeRemaining.seconds}</span>
	</span>
{/if}
