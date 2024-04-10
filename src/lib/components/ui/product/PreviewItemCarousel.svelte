<script lang="ts">
	import ProductPreviewItem from '$lib/components/ui/product/PreviewItem.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let id = 'undefined';
	export let products;
</script>

<!-- Product Preview Carousel -->
<div {id} class="flex items-center w-full">
	{#if browser}
		<Carousel particlesToShow={5} particlesToScroll={1}>
			<!-- Custom Next Arrow-->
			<button
				slot="next"
				let:showNextPage
				on:click={showNextPage}
				class="group flex place-items-center pl-[30px] custom-arrow custom-arrow-next cursor-pointer right-arrow"
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
			</button>

			<!-- Custom Prev Arrow-->
			<button
				slot="prev"
				let:showPrevPage
				on:click={showPrevPage}
				class="group flex place-items-center pr-[30px] custom-arrow custom-arrow-prev cursor-pointer left-arrow"
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
			</button>

			<!-- Remove Dot -->
			<div slot="dots" class="custom-dots"></div>

			<!-- Carousel Items -->
			{#each products as product}
				<ProductPreviewItem
					productImage={product.imageUrl}
					productName={product.productName}
					category={product.category}
					price={product.price}
					rating={product.rating}
					ratingCount={product.ratingCount}
					scale={product.scale}
				/>
			{/each}
		</Carousel>
	{/if}
</div>

<style>
	.right-arrow {
		transition: 0.75s;
	}
	.right-arrow:hover {
		transform: translate(10px, 0px);
		transition: 0.5s;
		opacity: 50%;
	}

	.left-arrow {
		transition: 0.75s;
	}
	.left-arrow:hover {
		transform: translate(-10px, 0px);
		opacity: 50%;
		transition: 0.5s;
	}
</style>
