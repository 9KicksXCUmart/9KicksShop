<script lang="ts">
	import ImageBannerCarousel from '$lib/components/ui/homepage/ImageBannerCarousel.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import MainBannerImage1 from '$lib/client/images/reebok_green_shoes_1.jpg';
	import MainBannerImage2 from '$lib/client/images/reebok_green_shoes_2.jpg';
	import MainBannerImage4 from '$lib/client/images/reebok_green_shoes_4.jpg';
	import MainBannerImage5 from '$lib/client/images/reebok_green_shoes_5.jpg';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	const images = [MainBannerImage1, MainBannerImage2, MainBannerImage4];

	let carouselProducts: any = [];
	let newArrivalProducts: any = [];
	let mostPopularProducts: any = [];

	onMount(async () => {
		const newArrivalRand = Math.floor(Math.random() * 25) + 1;
		const mostPopularRand = Math.floor(Math.random() * 25) + 1;

		const result = await Promise.all([
			getProductForCarousel(newArrivalRand),
			getProductForCarousel(mostPopularRand)
		]);
		const newArrivalData = result[0];
		const mostPopularData = result[1];

		let newArrivalExtract: any = [];
		let mostPopularExtract: any = [];

		newArrivalData.forEach((product: any) => {
			newArrivalExtract.push({
				id: product.id,
				imageUrl: product.imageUrl,
				productName: product.name,
				category: product.category,
				price: product.price,
				rating: Math.floor(Math.random() * 5) + 1,
				ratingCount: Math.floor(Math.random() * 100) + 5,
				scale: '0.97'
			});
		});

		newArrivalProducts = newArrivalExtract;

		mostPopularData.forEach((product: any) => {
			mostPopularExtract.push({
				id: product.id,
				imageUrl: product.imageUrl,
				productName: product.name,
				category: product.category,
				price: product.price,
				rating: Math.floor(Math.random() * 5) + 1,
				ratingCount: Math.floor(Math.random() * 100) + 5,
				scale: '0.97'
			});
		});
		mostPopularProducts = mostPopularExtract;
		console.log(mostPopularProducts)

		// carouselProducts = products;
	});

	async function getProductForCarousel(pageNum: number) {
		const response = await fetch(
			`${PUBLIC_GO_BACKEND_URL}/v1/products?` +
				new URLSearchParams({ pageNum: pageNum.toString() }).toString(),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const result = await response.json();
		return result.data.products;
	}

	// const products = Array(10).fill({
	// 	productImage: ProductImage,
	// 	productName: 'Dunk Low B/W',
	// 	gender: "Men's",
	// 	price: 'US$115',
	// 	rating: 4,
	// 	ratingCount: '84',
	// 	scale: '0.97'
	// });
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<ImageBannerCarousel id="BannerCarousel" bannerImages={images} />
		<SectionHeader text="New Arrivals" />
		<div class="flex flex-col items-center w-full px-[17%] pb-[20px]">
			{#if newArrivalProducts.length !== 0}
				<PreviewItemCarousel products={newArrivalProducts} />
			{:else}
				<LoadingCircle />
			{/if}
		</div>
		<!-- Subsection Image Banner -->
		<div class="w-full h-[472px] overflow-hidden py-[20px]">
			<img src={MainBannerImage5} alt="Banner" align="center" class="-mt-[120px] banner-image" />
		</div>
		<SectionHeader text="Most Popular" />
		<div class="flex flex-col items-center w-full px-[17%] pb-[50px]">
			{#if mostPopularProducts.length !== 0}
				<PreviewItemCarousel products={mostPopularProducts} />
			{:else}
				<LoadingCircle />
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}

	.banner-image {
		transform: translateY(-250px);
	}
</style>
