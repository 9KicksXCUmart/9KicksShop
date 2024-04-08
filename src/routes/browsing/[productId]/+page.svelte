<script lang="ts">
	import ProductHeader from '$lib/components/ui/banner/ProductHeader.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import LeftArrowButton from '$lib/components/ui/button/LeftArrowButton.svelte';
	import InfoPanel from '$lib/components/ui/product/InfoPanel.svelte';
	import ProductImageCarousel from '$lib/components/ui/product/ProductImageCarousel.svelte';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';
	import ProductImage1 from '$lib/client/images/dunklow_bw_preview.png';
	import ProductImage2 from '$lib/client/images/dunklow_bw_preview_2.webp';
	import ProductImage3 from '$lib/client/images/dunklow_bw_preview_3.webp';
	import ProductImage4 from '$lib/client/images/dunklow_bw_preview_4.webp';
	import ProductImage5 from '$lib/client/images/dunklow_bw_preview_5.webp';
	import DisChart from '$lib/components/ui/review/DistributionChart.svelte';
	import RatingBox from '$lib/components/ui/review/RatingBox.svelte';
	import SortOption from '$lib/components/ui/dropdown/SortOption.svelte';

	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;

	const productId: string = $page.params.productId;
	const sortBy = ['Time (New to Old)', 'Time (Old to New)'];

	let sizeStock = [
		{ size: 1, quantity: 13 },
		{ size: 1.5, quantity: 0 },
		{ size: 2, quantity: 34 },
		{ size: 2.5, quantity: 2 },
		{ size: 3, quantity: 35 },
		{ size: 3.5, quantity: 58 },
		{ size: 4, quantity: 98 },
		{ size: 4.5, quantity: 4567 },
		{ size: 5, quantity: 654 },
		{ size: 5.5, quantity: 4 },
		{ size: 6, quantity: 3 },
		{ size: 6.5, quantity: 2 },
		{ size: 7, quantity: 6 },
		{ size: 7.5, quantity: 39 },
		{ size: 8, quantity: 234 },
		{ size: 8.5, quantity: 3 },
		{ size: 9, quantity: 2 },
		{ size: 9.5, quantity: 1 },
		{ size: 10, quantity: 3 },
		{ size: 10.5, quantity: 6 },
		{ size: 11, quantity: 0 },
		{ size: 12, quantity: 0 },
		{ size: 13, quantity: 23 },
		{ size: 14, quantity: 34 }
	];

	const productImages = [ProductImage1, ProductImage2, ProductImage3, ProductImage4, ProductImage5];

	const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const ratingDistri = ['13%', '32%', '54%', '75%', '13%'];

	let selectedSize;
	let rating = 3;
	let price = 115.0;

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
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<!-- Return to Previous Page-->
		<div class="flex w-full h-fit px-[17%] pt-[10px]">
			<div class="flex flex-row justify-start w-full -py-[30px]">
				<LeftArrowButton text="Previous Page" />
			</div>
		</div>
		{productId}

		<ProductHeader productName="Nike Dunk Low BW" gender="Men's" />

		<div class="flex flex-col items-start w-full h-fit px-[17%] py-[1%]">
			<div class="flex flex-row w-full justify-between items-center px-[20px]">
				<ProductImageCarousel {productImages} />
				<!-- InfoPanel-->
				<InfoPanel {sizeStock} {quantitys} {selectedSize} {rating} {price} />
			</div>
		</div>

		<SectionHeader text="Similar Items" />
		<div class="flex flex-col items-start w-full h-fit px-[17%]">
			<PreviewItemCarousel {products} />
		</div>

		<SectionHeader text="Reviews" />
		<div class="flex flex-row items-center w-full justify-between px-[17%]">
			<RatingBox averageRating={rating} ratingCount="12" />
			<DisChart {ratingDistri} />
		</div>

		<div class="flex flex-row justify-end w-full h-fit z-10 px-[17%] py-[10px]">
			<SortOption menuItems={sortBy} />
		</div>
		<!-- Review list -->
		<div class="flex w-full h-[600px] px-[17%] mb-50px">
			<div
				class="flex flex-col justify-center items-start w-full max-h-[600px] space-y-[10px] overflow-auto"
			>
				{#each reviews as { email, rating, reviewDateTime, comment }}
					<!-- Review Item -->
					<div class="flex flex-col w-full p-[20px] space-y-[10px] bg-[#f8fbf6]">
						<span class="text-base"> {email} </span>
						<div class="flex flex-row place-items-center space-x-[2px]">
							{#each { length: rating } as _, j}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
									<path
										d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
										fill="#a6a6a6"
									/>
								</svg>
							{/each}
							{#each { length: 5 - rating } as _, j}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
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
	</div>
</div>
