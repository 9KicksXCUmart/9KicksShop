<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let id = 'undefined';
	export let bannerImages;
</script>

<!-- Main Banner -->
<div {id} class="flex items-center w-full h-[500px]">
	{#if browser}
		<Carousel arrows={false} dots={false} autoplay autoplayDuration={5000} autoplayProgressVisible>
			<!-- Carousel Items -->
			{#each bannerImages as url}
				<div class="w-full h-[500px] overflow-hidden">
					<img src={url} alt={url} align="center" />
				</div>
			{/each}
		</Carousel>
	{/if}
</div>

<style>
	.banner-image {
		transform: translateY(-250px);
	}
</style>
