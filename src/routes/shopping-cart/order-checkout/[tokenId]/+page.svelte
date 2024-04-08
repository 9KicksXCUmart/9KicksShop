<script lang="ts">
	export let data: data;
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import OrderItem from '$lib/components/ui/order/OrderItem.svelte';
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';
	import LeftArrowButton from '$lib/components/ui/button/LeftArrowButton.svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY, PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import { goto, invalidateAll } from '$app/navigation';

	interface data {
		paymentDetail: {
			imageUrl: string;
			price: number;
			name: string;
			country: string;
			state: string;
			line1: string;
			line2: string;
			brand: string;
			last4: string;
			client_secret: string;
		};
		orderSummaryDetail: {
			actualPrice: number;
			discount: number;
		};
		purchaseItemDetails: {
			purchaseItemDetail: {
				productId: string;
				imageUrl: string;
				productName: string;
				productCategory: string;
				price: number;
				originalPrice: number;
				productSize: string;
				productQuantity: string;
			};
		};
		jwtToken: string;
	}
	let orderItemDetail: Array<Object> = [];
	let stripe: any = null;
	let clientSecret: string = data.paymentDetail.client_secret;
	let price: number;
	let deliveryType: string;

	async function handlePlaceOrder() {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
		const stripeResponse = await stripe.confirmPayment({
			clientSecret,
			confirmParams: {
				confirmation_token: $page.params.tokenId
			},
			redirect: 'if_required'
		});
		if (stripeResponse.paymentIntent.status === 'succeeded') {
			for (const [key, value] of Object.entries(data.purchaseItemDetails)) {
				orderItemDetail.push({
					productId: value.productId,
					productName: value.productName,
					productSize: value.productSize,
					productQuantity: value.productQuantity,
					productImage: value.imageUrl,
					productCategory: value.productCategory,
					productPrice: value.price
				});
			}
			if (data.paymentDetail.line2 === 'Express Delivery') {
				price = data.orderSummaryDetail.actualPrice + 15;
				deliveryType = 'EXPRESS';
			} else {
				price = data.orderSummaryDetail.actualPrice;
				deliveryType = 'NORMAL';
			}
			const response = await fetch(
				`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/payment/create-order-record`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${data.jwtToken}`
					},
					body: JSON.stringify({
						orderId: stripeResponse.paymentIntent.id,
						orderStatus: 'INCOMPLETE',
						deliveryStatus: 'PENDING',
						totalPrice: price,
						orderItemDetail: orderItemDetail,
						shippingAddress: {
							streetAddress: data.paymentDetail.line1,
							district: data.paymentDetail.state
						},
						deliveryType: deliveryType
					})
				}
			);
			const result = await response.json();
			if (result.data) {
				goto(
					`/shopping-cart/order-checkout/${$page.params.tokenId}/${stripeResponse.paymentIntent.id}`
				);
			}
		} else {
			invalidateAll();
		}
	}

	function handleBackPage() {
		goto('/shopping-cart/order-checkout');
	}
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Order Checkout" />
		<!-- Return to Previous Page-->
		<div class="flex w-full h-fit px-[17%]">
			<div class="flex flex-row justify-start w-full -py-[30px]">
				<LeftArrowButton buttonType="Previous Page" on:handleBackPage={handleBackPage} />
			</div>
		</div>
		<div class="flex flex-col w-full h-fit px-[17%] py-[1%] space-y-[30px]">
			<!-- Delivery Information -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Delivery Information </span>
				<hr />
				<div class="flex flex-col w-full">
					<span class="text-xl font-semibold">{data.paymentDetail.name}</span>
					<span class="text-lg text-[#7d7d7d]">
						{data.paymentDetail.line1},{data.paymentDetail.state}, {data.paymentDetail.country}
					</span>
				</div>
			</div>
			<!-- Payment Method -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Payment Method </span>
				<hr />
				<div class="flex flex-col w-full">
					<span class="text-xl font-semibold"> Credit Card</span>
					<span class="text-lg text-[#7d7d7d]">
						{data.paymentDetail.brand} **** {data.paymentDetail.last4}
					</span>
				</div>
			</div>
			<!-- Delivery Option -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Delivery Option </span>
				<hr />
				<div class="flex flex-row justify-between w-full">
					<span class="text-lg font-bold"> {data.paymentDetail.line2}</span>
					{#if data.paymentDetail.line2 === 'Express Delivery'}
						<span class="text-xl font-bold"> US$15 </span>
					{:else}
						<span class="text-xl font-bold"> FREE </span>
					{/if}
				</div>
			</div>

			<!-- Discount -->
			<!-- <div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Discount </span>
				<hr />
				<div class="flex flex-row justify-end w-full">
					<span class="text-lg font-bold"> US$ {data.orderSummaryDetail.discount}</span>
				</div>
			</div> -->

			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Purchased Items </span>
				<hr />
				{#each Object.entries(data.purchaseItemDetails) as [id, purchaseItemDetail]}
					<OrderItem
						productImage={purchaseItemDetail.imageUrl}
						productName={purchaseItemDetail.productName}
						gender={purchaseItemDetail.productCategory}
						price={purchaseItemDetail.price}
						size={purchaseItemDetail.productSize}
						quantity={purchaseItemDetail.productQuantity}
						originalPrice={purchaseItemDetail.originalPrice}
					/>
					<hr />
				{/each}
				<!-- Totoal Price -->
				<div class="flex flex-row justify-end w-full">
					<div class="flex flex-col justify-end">
						<span class="text-lg"> Total Price </span>
						{#if data.paymentDetail.line2 === 'Express Delivery'}
							<span class="text-2xl font-bold">
								US${data.orderSummaryDetail.actualPrice + 15}
							</span>
						{:else}
							<span class="text-2xl font-bold"> US${data.orderSummaryDetail.actualPrice}</span>
						{/if}
					</div>
				</div>
			</div>
			<!-- Place Order -->
			<div class="flex flex-row justify-end w-full">
				<RightArrowButton buttonType="Place Order" on:handleOnClick={handlePlaceOrder} />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
