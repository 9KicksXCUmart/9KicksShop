<script lang="ts">
	import PageHeader from '$lib/components/ui/banner/PageHeader.svelte';
	import SortOption from '$lib/components/ui/dropdown/SortOption.svelte';
	import FilterPanel from '$lib/components/ui/product-browsing/FilterPanel.svelte';
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import ProductPreviewItem from '$lib/components/ui/product/PreviewItem.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';
	import { goto } from '$app/navigation';
	import { categoryStore, searchKeywordStore } from '$store/searchKeywordStore';
	import { paymentMethodId } from '$store/paymentStore';
	import { Input } from '$lib/components/ui/input';

	//Sort Options for Products
	const menuItems = [
		'Alphabetical (A to Z)',
		'Price (Low to High)',
		'Price (High to Low)',
		'Rating (Low to High)',
		'Rating (High to Low)'
	];

	//Gender Filter Options
	let genders = [
		{ gender: "Men's", check: false },
		{ gender: "Women's", check: false },
		{ gender: "Kid's", check: false }
	];

	//Size Filter Options
	let sizes = [
		{ size: 5, check: false },
		{ size: 5.5, check: false },
		{ size: 6, check: false },
		{ size: 6.5, check: false },
		{ size: 7, check: false },
		{ size: 7.5, check: false },
		{ size: 8, check: false },
		{ size: 8.5, check: false },
		{ size: 9, check: false },
		{ size: 9.5, check: false },
		{ size: 10, check: false },
		{ size: 10.5, check: false },
		{ size: 11, check: false },
		{ size: 11.5, check: false },
		{ size: 12, check: false },
		{ size: 12.5, check: false },
		{ size: 13, check: false },
		{ size: 13.5, check: false },
		{ size: 14, check: false },
		{ size: 14.5, check: false }
	];

	//Price Filter Options (Deprecated)
	let prices = [
		{ price: 'Under $100', check: false },
		{ price: '$100 - $200', check: false },
		{ price: '$200 - $300', check: false },
		{ price: '$300 - $400', check: false },
		{ price: '$400 - $500', check: false },
		{ price: 'Over $500', check: false }
	];

	//Brand Filter Options
	let brands = [
		{ brand: 'Nike', check: false },
		{ brand: 'Adidas', check: false },
		{ brand: 'New Balance', check: false }
	];

	//Price Thresholds for Filtering
	let minPrice: string;
	let maxPrice: string;

	let products = [];
	let isLoading = true;
	let searchKeyword: string;

	onMount(async () => {
		await handleFilterProducts();
	});

	//Get Filtered Products
	async function handleFilterProducts() {
		isLoading = true;
		//Search Product By Related Filters
		const result = await searchProducts();
		if (result.amount === 0) {
			products = [];
		} else {
			products = result.products;
		}
		isLoading = false;
	}

	//Obtain Current Active Filters
	function checkFilter() {
		let filter: any = {};

		filter.pageNum = 1;
		//Get Brand Active Filters
		let selectedBrand: string = '';
		brands.forEach((brand) => {
			if (brand.check === true) {
				selectedBrand = brand.brand;
			}
		});
		if (selectedBrand !== '') filter.brand = selectedBrand;

		//Get Gender Active Filters
		let selectedGender: string = '';
		genders.forEach((gender) => {
			if (gender.check === true) {
				selectedGender = gender.gender;
			}
		});

		//Get Category Active Filters
		filter.category = tempCategory;
		if (selectedGender !== '') filter.category = selectedGender;

		//Get Price Active Filters
		if (minPrice && maxPrice) {
			filter.minPrice = minPrice;
			filter.maxPrice = maxPrice;
		}
		return filter;
	}

	// $: {
	// 	handleFilterProducts();
	// 	tempKw;
	// }

	// let tempKw: string;
	// searchKeywordStore.subscribe((keyword) => (tempKw = keyword));
	let tempCategory: string;
	categoryStore.subscribe((cat) => (tempCategory = cat));

	//Search For Products
	async function searchProducts() {
		const filter = checkFilter();

		filter.keyword = searchKeyword;
		console.log('filter');
		console.log(filter);
		if (!filter.keyword) delete filter.keyword;
		const url = new URL(`${PUBLIC_GO_BACKEND_URL}/v1/products`);
		url.search = new URLSearchParams(filter).toString();

		console.log(`url ${url.search}`);
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();
		console.log(result);
		return result.data;
	}

	//Dynamic Routing
	function routeToProductDetail(productId: string) {
		setTimeout(() => goto(`/browsing/${productId}`), 0);
	}

	//Update Active Filters
	function handleEnterPress(event) {
		if (event.key === 'Enter') {
			console.log('ENTER PRESSED');
			// handleSearchKeyword();
			handleFilterProducts();
		}
	}
	// function handleSearchKeyword() {
	// 	// searchKeywordStore.set(searchKeyword);
	// 	console.log("search keyword", $searchKeywordStore);
	// }

	function handleOnBlur() {
		searchKeywordStore.set('');
		searchKeyword = '';
	}
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<PageHeader text="Sneakers" />
		<div class="">
			<Input
				placeholder="Search"
				class="font-semibold placeholder-gray-500 text-black bg-gray-100 w-96"
				bind:value={searchKeyword}
				on:keydown={handleEnterPress}
				on:blur={handleOnBlur}
			/>
		</div>
		<div class="flex flex-row justify-end w-full h-fit z-10 px-[17%]">
			<SortOption {menuItems} />
		</div>

		<div class="flex flex-row items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]">
			<!-- Product Filters-->
			<FilterPanel
				{sizes}
				{brands}
				{prices}
				{genders}
				bind:minPrice
				bind:maxPrice
				filterProducts={handleFilterProducts}
			/>

			<!-- Display Products -->
			{#if isLoading}
				<div class="w-full flex flex-col items-center">
					<LoadingCircle size="60" />
				</div>
			{:else if products.length === 0}
				<div class="w-full text-3xl text-center">No Results</div>
			{:else}
				<div class="grid grid-cols-4 w-full justify-between gap-y-[20px]">
					{#each products as { id, imageUrl, name, category, price, isDiscount, discountPrice }}
						<button
							on:click={() => {
								routeToProductDetail(id);
							}}
							class="hover:scale-105 duration-300"
						>
							<ProductPreviewItem
								{isDiscount}
								{discountPrice}
								productImage={imageUrl}
								productName={name}
								{category}
								{price}
								rating={Math.floor(Math.random() * 5) + 1}
								ratingCount={Math.floor(Math.random() * 100) + 5}
								scale="1.05"
							/>
						</button>
						<!--{rating}-->
						<!--{ratingCount}-->
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
