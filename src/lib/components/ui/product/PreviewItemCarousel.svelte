<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import ProductPreviewItem from '$lib/components/ui/product/PreviewItem.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	
	export let id='undefined';
	export let products;
</script>

<!-- Product Preview Carousel -->
<div id={id} class="flex items-center w-full">
	{#if browser}
		<Carousel
			particlesToShow={5}
			particlesToScroll={3}
		>						
			<!-- Remove Dot -->
			<div slot="dots" class="custom-dots"></div>

			<!-- Carousel Items -->
			{#each products as {
				productImage,
				productName,
				gender,
				price,
				rating,
				ratingCount,
				scale
			}}
				<ProductPreviewItem
					productImage={productImage}
					productName={productName}
					gender={gender}
					price={price}
					rating={rating}
					ratingCount={ratingCount}
					scale={scale}
				/>
			{/each}
		</Carousel>
	{/if}
</div>
