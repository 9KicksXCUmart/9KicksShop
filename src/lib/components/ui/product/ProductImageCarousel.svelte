<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let id = 'undefined';
	export let productImages;
</script>

<!-- Product Preview Carousel -->
<div {id} class="flex items-center w-[620px] h-fit">
	{#if browser}
		<Carousel 
			autoplay
			autoplayDuration={5000}
			particlesToShow={1} 
		>
			<!-- Remove Dot -->
			<div slot="dots" class="custom-dots"></div>

			<!-- Custom Arrow -->
			<div let:showPrevPage slot="prev" on:click={showPrevPage} class="group flex place-items-center pl-[5px] custom-arrow custom-arrow-prev">
				<i />
				<svg class="group-hover:opacity-90" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ececec" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="arcs"><path d="M15 18l-6-6 6-6"/></svg>
			</div>
			
			<div let:showNextPage slot="next" on:click={showNextPage} class="group flex place-items-center pl-[5px] custom-arrow custom-arrow-next">
				<i />
				<svg class="group-hover:opacity-90" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ececec" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="arcs"><path d="M9 18l6-6-6-6"/></svg>
			</div>

			<!-- Carousel Items -->
			{#each productImages as productImage}
				<div class="w-full overflow-hidden">
					<img src={productImage} alt={productImage} align="w-[540px] h-[450px] center" />
				</div>
			{/each}
		</Carousel>
	{/if}
</div>
