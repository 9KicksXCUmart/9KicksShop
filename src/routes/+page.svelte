<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let carousel;

	const handleNextClick = () => {
		carousel.goToNext()
	}
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		{#if browser}
			<Carousel bind:this={carousel}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</Carousel>
		{/if}
		<button on:click={handleNextClick}>Next</button>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
