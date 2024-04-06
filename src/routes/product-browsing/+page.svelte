<script>
	import PageHeader from '$lib/components/ui/banner/PageHeader.svelte';
	import SortOption from '$lib/components/ui/dropdown/SortOption.svelte';
	import FilterPanel from '$lib/components/ui/product-browsing/FilterPanel.svelte';
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import ProductPreviewItem from '$lib/components/ui/product/PreviewItem.svelte';


	const menuItems = [
		'Alphabetical (A to Z)',
		'Price (Low to High)',
		'Price (High to Low)',
		'Rating (Low to High)',
		'Rating (High to Low)'
	];

	const products = Array(16).fill({
		productImage: ProductImage,
		productName: 'Dunk Low B/W',
		gender: "Men's",
		price: 'US$115',
		rating: 4,
		ratingCount: '84',
		scale: '1.05'
	});

</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<PageHeader text="Sneakers" />

		<div class="flex flex-row justify-end w-full h-fit z-10 px-[17%]">
			<SortOption {menuItems} />
		</div>

		<div
			class="flex flex-row items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]"
		>
			<!-- Product Filters-->
			<FilterPanel/>

			<!-- Display Products -->
			<div class="grid grid-cols-4 w-full justify-between gap-y-[20px]">
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
			</div>
		</div>
	</div>
</div>
