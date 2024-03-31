<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import ProductPreviewItem from '$lib/components/ui/product/PreviewItem.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
</script>

<!-- Product Preview Carousel -->
<div id="assburger" class="flex items-center w-full">
	{#if browser}
		<Carousel
			particlesToShow={5}
			particlesToScroll={3}
		>						
			<!-- Remove Dot -->
			<div slot="dots" class="custom-dots"></div>

			<!-- Carousel Items -->
			<ProductPreviewItem
				productImage={ProductImage}
				productName="Dunk Low B/W 1"
				gender="Men's"
				price="US$115"
				rating=4
				ratingCount="84"
			/>
			<ProductPreviewItem
				productImage={ProductImage}
				productName="Dunk Low B/W 2"
				gender="Men's"
				price="US$115"
				rating=4
				ratingCount="84"
			/>
			<ProductPreviewItem
				productImage={ProductImage}
				productName="Dunk Low B/W 3"
				gender="Men's"
				price="US$115"
				rating=4
				ratingCount="84"
			/>
			<ProductPreviewItem
				productImage={ProductImage}
				productName="Dunk Low B/W 4"
				gender="Men's"
				price="US$115"
				rating=4
				ratingCount="84"
			/>					
			<ProductPreviewItem
				productImage={ProductImage}
				productName="Dunk Low B/W 5"
				gender="Men's"
				price="US$115"
				rating=4
				ratingCount="84"
			/>
		</Carousel>
	{/if}
</div>
