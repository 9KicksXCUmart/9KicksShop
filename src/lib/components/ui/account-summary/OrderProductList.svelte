<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import OrderProductItem from '$lib/components/ui/account-summary/OrderProductItem.svelte';
	import StarRating from '@ernane/svelte-star-rating';
	import type { OrderItemDetail } from '$lib/model/OrderItemDetail';
	import type { ReviewResponse } from '$lib/model/ReviewResponse';
	import type { ReviewDTO } from '$lib/model/ReviewDTO';
	import { onMount } from 'svelte';
	import { Icon } from 'svelte-icons-pack';
	import { IoSendSharp } from 'svelte-icons-pack/io';
	import type { UserReviewMap } from '$lib/model/UserReviewMap';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	export let orderItemDetails: OrderItemDetail[];
	export let reviewList: Record<string, ReviewResponse>;
	export let jwtToken: string;

	let config = {
		readOnly: false,
		countStars: 5,
		range: {
			min: 0,
			max: 5,
			step: 1
		},
		score: 0,
		showScore: false,
		name: '',
		starConfig: {
			size: 20,
			fillColor: '#7D7D7D',
			unfilledColor: '#FFF',
			strokeUnfilledColor: '#7D7D7D'
		}
	};

	let productConfigs: Record<string, typeof config> = {};
	let ratingMap: Record<string, number> = {};
	let commentMap: Record<string, string> = {};
	let userReviewMap: Record<string, UserReviewMap> = {};

	onMount(() => {
		orderItemDetails.forEach((item) => {
			if (!reviewList[item.productId]) {
				productConfigs[item.productId] = createProductConfig();
			}
		});
	});

	function createProductConfig(): typeof config {
		return {
			...config,
			score: 0
		};
	}

	function combineMapsIntoUserReviewMap() {
		orderItemDetails.forEach((item) => {
			if (!reviewList[item.productId]) {
				userReviewMap[item.productId] = {
					rating: ratingMap[item.productId] || 0,
					comment: commentMap[item.productId] || '',
					isLoading: false
				};
			} else {
				delete userReviewMap[item.productId];
			}
		});
	}

	async function createReview(productId: string) {
		let tokens = jwtToken.split('.');
		const email = JSON.parse(atob(tokens[1])).email;
		const reviewDTO: ReviewDTO = {
			email: email,
			productId: productId,
			comment: userReviewMap[productId].comment,
			rating: userReviewMap[productId].rating,
			anonymous: false
		};

		userReviewMap[productId].isLoading = true;
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/reviews/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			},
			body: JSON.stringify(reviewDTO)
		});
		const result = await response.json();
		const reviewData = await getReviewData();
		reviewList[productId] = reviewData.reviews.find((r: ReviewDTO) => r.productId === productId);
		return result.data;
	}

	async function getReviewData() {
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/user-reviews`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			}
		});
		const result = await response.json();
		return result.data;
	}

	$: {
		if (productConfigs) {
			orderItemDetails.forEach((item) => {
				if (!reviewList[item.productId]) {
					ratingMap[item.productId] = productConfigs[item.productId]?.score || 0;
				} else {
					delete ratingMap[item.productId];
				}
			});
		}
		commentMap;
		combineMapsIntoUserReviewMap();
	}
</script>

<div class="flex p-5 flex-col items-start gap-4 self-stretch bg-[#f8fbf6] divide-y divide-gray-300">
	<div class="flex w-[279px] py-1.5 items-center gap-2">
		<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate">Purchased Items</span>
	</div>
	{#if orderItemDetails !== undefined}
		{#each Object.entries(orderItemDetails) as [id, itemDetail]}
			<div class="w-full">
				<OrderProductItem {itemDetail} {id} />
				<div class="flex flex-row items-center gap-5 pl-5">
					{#if reviewList[itemDetail.productId] !== undefined}
						<div class="cursor-default star">
							<StarRating
								config={{
									...config,
									score: reviewList[itemDetail.productId].rating,
									readOnly: 'Enable'
								}}
							/>
						</div>
						{reviewList[itemDetail.productId].comment}
					{:else}
						<div class="cursor-default star">
							<StarRating
								bind:config={productConfigs[itemDetail.productId]}
								class="cursor-default star"
							/>
						</div>
						<Input
							bind:value={commentMap[itemDetail.productId]}
							class="my-[5px] text-base"
							placeholder="Add a Review..."
						/>
						{#if !userReviewMap[itemDetail.productId].isLoading}
							<button
								on:click={() => {
									createReview(itemDetail.productId);
								}}
								class="send-button"
							>
								<Icon src={IoSendSharp} size="24" color="#7D7D7D" className="cursor-pointer " />
							</button>
						{:else}
							<div>
								<LoadingCircle size="24" />
							</div>
						{/if}
					{/if}
				</div>
			</div>
		{/each}
	{/if}

	<div class="flex flex-col w-full text-right items-end pt-[1rem]">
		<div>Total Price</div>
		<div class="text-xl font-medium">$999.8</div>
	</div>
</div>

<style>
	.star {
		stroke-width: 10px; /* Adjust the stroke width as needed */
	}

	.send-button {
		transition: 0.3s ease-in-out;
	}

	.send-button:hover {
		scale: 1.2;
		color: #3b82f6;
		transition: 0.3s ease-in-out;
	}
</style>
