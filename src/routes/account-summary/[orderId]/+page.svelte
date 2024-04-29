<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_KOTLIN_BACKEND_URL, PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { OrderDetail } from '$lib/model/OrderDetail';
	import SummaryCard from '$lib/components/ui/account-summary/SummaryCard.svelte';
	import OrderProductList from '$lib/components/ui/account-summary/OrderProductList.svelte';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import type { ReviewResponse } from '$lib/model/ReviewResponse';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	const orderId: string = $page.params.orderId;
	export let data: PageData;

	let orderDetails: OrderDetail;
	let reviewList: Record<string, ReviewResponse> = {};

	// get order details and review details from API on load
	onMount(async () => {
		orderDetails = await getOrderDetails();
		const reviewData = await getReviewData();
		reviewData.reviews.forEach((review: ReviewResponse) => {
			reviewList[review.productId] = review;
		});
	});

	async function getOrderDetails() {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/account-summary/order-details?` +
				new URLSearchParams({ orderId: orderId }).toString(),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				}
			}
		);
		const result = await response.json();
		return result.data;
	}

	async function getReviewData() {
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/user-reviews`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${data.jwtToken}`
			}
		});
		const result = await response.json();
		return result.data;
	}
</script>

<div>
	<div class="flex items-center w-full h-fit px-[17%] py-[1%] gap-4 justify-between">
		<div class="flex flex-row gap-4">
			<div class="text-black text-center text-3xl font-bold leading-normal">Order Detail</div>
			<div class="text-black text-center text-3xl font-extralight leading-normal">
				#{orderId.replace('pi_', '').slice(0, 20)}
			</div>
		</div>
		{#if orderDetails}
			<div class="text-gray-500 text-center text-3xl font-light leading-normal">
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						{orderDetails.orderStatus}
					</div>
				</Motion>
			</div>
		{/if}
	</div>

	<div class="flex flex-col place-items-center w-full h-fit px-[17%]">
		<div class="flex flex-col justify-center items-center gap-5 flex-grow self-stretch mb-5">
			{#if orderDetails}
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<SummaryCard
							isLoading={false}
							isEditable={false}
							cardTitle=""
							cardItemMap={new Map([
								['Order No.', orderDetails.orderId.replace('ORDER#pi_', '').slice(0, 20)],
								['Order Date', orderDetails.orderDate.replace('T', ' ')],
								['Delivery Status', orderDetails.deliveryStatus],
								['Total Price', orderDetails.totalPrice]
							])}
						/>
					</div>
				</Motion>
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.25, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<SummaryCard
							isLoading={false}
							isEditable={false}
							cardTitle="Delivery Info"
							cardItemMap={new Map([
								['Street Address', orderDetails.shippingAddress.streetAddress],
								['District', orderDetails.shippingAddress.district]
							])}
						/>
					</div>
				</Motion>
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<OrderProductList
							jwtToken={data.jwtToken || ''}
							totalPrice={orderDetails.totalPrice}
							{reviewList}
							orderItemDetails={orderDetails.orderItemDetail}
						/>
					</div>
				</Motion>
			{:else}
				<LoadingCircle />
			{/if}
		</div>
	</div>
</div>
