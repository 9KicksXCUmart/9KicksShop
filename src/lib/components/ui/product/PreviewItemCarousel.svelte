<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import ProductPreviewItem from '$lib/components/ui/product/PreviewItem.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let id = 'undefined';
	export let products;
</script>

<!-- Product Preview Carousel -->
<div {id} class="flex items-center w-full">
	{#if browser}
		<Carousel particlesToShow={5} particlesToScroll={3}>
			<!-- Custom Next Arrow-->
			<div
				slot="next"
				let:showNextPage
				on:click={showNextPage}
				class="group flex place-items-center pl-[5px] custom-arrow custom-arrow-next"
			>
				<i />
				<svg
					class="group-hover:opacity-90"
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#7d7d7d"
					stroke-width="1.5"
					stroke-linecap="square"
					stroke-linejoin="arcs"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg
				>
			</div>

			<!-- Custom Prev Arrow-->
			<div
				slot="prev"
				let:showPrevPage
				on:click={showPrevPage}
				class="group flex place-items-center pr-[5px] custom-arrow custom-arrow-prev"
			>
				<i />
				<svg
					class="group-hover:opacity-90"
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#7d7d7d"
					stroke-width="1.5"
					stroke-linecap="square"
					stroke-linejoin="arcs"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg
				>
			</div>

			<!-- Remove Dot -->
			<div slot="dots" class="custom-dots"></div>

			<!-- Carousel Items -->
			{#each products as { productImage, productName, gender, price, rating, ratingCount, scale }}
				<ProductPreviewItem
					{productImage}
					{productName}
					{gender}
					{price}
					{rating}
					{ratingCount}
					{scale}
				/>
			{/each}
		</Carousel>
	{/if}
</div>
