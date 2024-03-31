<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let id='undefined';
	export let bannerImage1;
	export let bannerImage2;

</script>

<!-- Main Banner -->
<div id={id} class="flex items-center w-full h-[772px]">
	{#if browser}
		<Carousel
			autoplay
			autoplayDuration={5000}
			autoplayProgressVisible
		>
			<!-- Remove Arrow-->
			<div slot="prev" class="custom-arrow custom-arrow-prev"></div>
			<div slot="next" class="custom-arrow custom-arrow-next"></div>
			
			<!-- Remove Dot -->
			<div slot="dots" class="custom-dots"></div>

			<!-- Carousel Items -->
			<div class="w-full overflow-hidden">
				<img src={bannerImage1} alt="Product" align="center"/>
			</div>
			<div class="w-full overflow-hidden">
				<img src={bannerImage2} alt="Product" align="center">
			</div>
		</Carousel>
	{/if}
</div>
