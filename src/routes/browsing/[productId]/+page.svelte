<script lang="ts">
	import ProductHeader from '$lib/components/ui/banner/ProductHeader.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import LeftArrowButton from '$lib/components/ui/button/LeftArrowButton.svelte';
	import InfoPanel from '$lib/components/ui/product/InfoPanel.svelte';
	import ProductImageCarousel from '$lib/components/ui/product/ProductImageCarousel.svelte';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';
	import ProductImage1 from '$lib/client/images/dunklow_bw_preview.png';
	import DisChart from '$lib/components/ui/review/DistributionChart.svelte';
	import RatingBox from '$lib/components/ui/review/RatingBox.svelte';
	import SortOption from '$lib/components/ui/dropdown/SortOption.svelte';

	import { PUBLIC_KOTLIN_BACKEND_URL, PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	interface data {
		jwtToken: string;
	}

	let productId = $page.params.productId;

	let productDetail;
	let productImages = [ProductImage1];
	let productName;
	let productCat;
	let productPrice;
	let productDiscount;
	let productDisPrice;
	let productSize;
	let sizeStock = [];

	let reviewData;
	let rating = 0;
	let ratingPercent;
	let ratingDistri;
	let reviewList;
	let ratingCount;

	onMount(async () => {
		productDetail = await getProductDetail();
		productImages = [productDetail.imageUrl];
		productSize = productDetail.size;
		productName = productDetail.name.toUpperCase();
		productCat = productDetail.category;
		productPrice = productDetail.price.toString();
		productDiscount = productDetail.isDiscount;
		productDisPrice = productDetail.discountPrice.toString();

		for (var i of Object.keys(productSize)) {
			sizeStock.push({ size: i, quantity: productSize[i] });
		}

		reviewData = await getReviewByProduct();
		rating = reviewData.averageRating.toString();
		ratingDistri = Object.values(reviewData.ratingPercentage)
			.map((x) => x.toString() + '%')
			.reverse();
		reviewList = reviewData.reviews;
		ratingCount = reviewData.reviews.length;
	});

	async function getProductDetail() {
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/products/${productId}`, {
			method: 'GET'
		});
		const result = await response.json();
		console.log(result.data);
		return result.data;
	}

	let asd = 'd0dfc9f3-8dfc-4c26-aa6a-6f81b4a7d52c';

	async function getReviewByProduct() {
		const response = await fetch(
			`${PUBLIC_GO_BACKEND_URL}/v1/reviews?` +
				new URLSearchParams({ productId: productId }).toString(),
			{ method: 'GET' }
		);
		const result = await response.json();
		return result.data;
	}

	async function addToCart() {
		if (data.jwtToken === undefined) {
			alert('Please sign in to add cart item!');
			return 1;
		}
		let response;
		if (productDiscount) {
			response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart/update`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				},
				body: JSON.stringify({
					imageUrl: productDetail.imageUrl,
					price: Number(productDisPrice),
					originalPrice: Number(productPrice),
					productCategory: productCat,
					productId: productId,
					productName: productName,
					productQuantity: selectedQuantity,
					productSize: selectedSize
				})
			});
		} else {
			response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart/update`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				},
				body: JSON.stringify({
					imageUrl: productDetail.imageUrl,
					price: Number(productPrice),
					originalPrice: Number(productPrice),
					productCategory: productCat,
					productId: productId,
					productName: productName,
					productQuantity: selectedQuantity,
					productSize: selectedSize
				})
			});	
		}

		const result = await response.json();
		if (result.data) {
			alert('Added to shopping cart.');
		} else {
			alert('Action failed.');
		}
	}

	const sortBy = ['Time (New to Old)', 'Time (Old to New)'];

	const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const products = Array(10).fill({
		productImage: ProductImage1,
		productName: 'Dunk Low B/W',
		gender: "Men's",
		price: 'US$115',
		rating: 4,
		ratingCount: '84',
		scale: '0.97'
	});

	const reviews = Array(10).fill({
		email: '3452345@gmail.com',
		rating: 4,
		reviewDateTime: '2024-04-06',
		comment:
			'I recently got my hands on the Nike Dunk Low "Panda", and it\'s safe to say, I\'m in love! Right out of the box!'
	});

	let selectedSize;
	let selectedQuantity;
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		{#if productDetail != undefined}
			<!-- Return to Previous Page-->
			<div class="flex w-full h-fit px-[17%] pt-[10px]">
				<div class="flex flex-row justify-start w-full -py-[30px]">
					<LeftArrowButton buttonType="Previous Page" />
				</div>
			</div>
			<ProductHeader {productName} gender={productCat} />

			<div class="flex flex-col items-start w-full h-fit px-[17%] py-[1%]">
				<div class="flex flex-row w-full justify-between items-center px-[20px]">
					<ProductImageCarousel {productImages} />
					<!-- InfoPanel-->
					<InfoPanel
						{sizeStock}
						{quantitys}
						{rating}
						price={productPrice}
						isDiscount={productDiscount}
						discountPrice={productDisPrice}
						bind:selectedSize
						bind:selectedQuantity
						on:handleOnClick={addToCart}
					/>
				</div>
			</div>

			<SectionHeader text="Similar Items" />
			<div class="flex flex-col items-start w-full h-fit px-[17%]">
				<PreviewItemCarousel {products} />
			</div>

			<SectionHeader text="Reviews" />
			{#if reviewData != undefined && reviewData != null}
				<div class="flex flex-row items-center w-full justify-between px-[17%]">
					<RatingBox averageRating={rating} {ratingCount} />
					<DisChart {ratingDistri} />
				</div>

				<div class="flex flex-row justify-end w-full h-fit z-10 px-[17%] pt-[30px] pb-[15px]">
					<SortOption menuItems={sortBy} />
				</div>
				<!-- Review list -->
				<div class="flex w-full h-[600px] px-[17%] mb-50px">
					<div
						class="flex flex-col justify-start items-start w-full max-h-[600px] space-y-[10px] overflow-auto"
					>
						{#each reviewList as { reviewId, email, comment, rating, reviewDateTime, anonymous }}
							<!-- Review Item -->
							<div class="flex flex-col w-full p-[20px] space-y-[10px] bg-[#f8fbf6]">
								<span class="text-base"> {email} </span>
								<div class="flex flex-row place-items-center space-x-[2px]">
									{#each { length: rating } as _, j}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											width="20"
											height="20"
										>
											<path
												d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
												fill="#a6a6a6"
											/>
										</svg>
									{/each}
									{#each { length: 5 - rating } as _, j}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											width="20"
											height="20"
										>
											<path
												d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
												fill="#d9d9d9"
											/>
										</svg>
									{/each}
								</div>
								<span class="text-base text-[#7d7d7d]"> Reviewed on {reviewDateTime} </span>
								<p class="text-xl">{comment}</p>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<div class="flex flex-col w-full px-[17%]">
					<div class="flex flex-col w-full items-center py-[5%]">
						<span class="text-3xl font-bold"> No related review yet </span>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
