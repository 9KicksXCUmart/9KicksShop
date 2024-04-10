<script lang="ts">
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	export let data: data;
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import CartItem from '$lib/components/ui/shopping-cart/CartItem.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import { PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	import { goto, invalidateAll } from '$app/navigation';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	interface data {
		jwtToken: string;
		orderSummaryData: {
			actualPrice: number;
			itemCount: number;
			shippingFee: number;
			totalPrice: number;
			discount: number;
		};
		itemDatas: {
			shoppingCartItemDetail: {
				imageUrl: string;
				productName: string;
				productCategory: string;
				price: number;
				productSize: string;
				productQuantity: number;
				originalPrice: number;
			};
		};
	}

	let isLoading: Record<string, boolean> = {};

	async function deleteCartItem(e: CustomEvent<{ itemId: string }>) {
		isLoading[e.detail.itemId] = true;
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart/delete?` +
				new URLSearchParams({
					itemId: e.detail.itemId
				}).toString(),
			{
				method: 'PATCH',

				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				}
			}
		);
		invalidateAll();
	}

	async function processCheckOut() {
		// const response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart/validCheck`, {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${data.jwtToken}`
		// 	}
		// });
		// console.log(response.body);
		goto('shopping-cart/order-checkout');
	}
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Shopping Cart" />
		<div class="flex flex-row justify-between items-start w-full h-fit px-[17%] pb-[1%]">
			<div class="flex flex-col space-y-[15px]">
				{#each Object.entries(data.itemDatas) as [id, itemDetail], index}
					<Motion
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.25 * index, duration: 1, ease: 'easeInOut' }}
						let:motion
					>
						<div use:motion>
							<CartItem
								isLoading={isLoading[id]}
								on:deleteCartItem={deleteCartItem}
								productImage={itemDetail.imageUrl}
								price={itemDetail.price}
								productName={itemDetail.productName}
								productCategory={itemDetail.productCategory}
								size={itemDetail.productSize}
								quantity={itemDetail.productQuantity}
								{id}
								originalPrice={itemDetail.originalPrice}
							/>
						</div>
					</Motion>
				{/each}
			</div>

			<Motion
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0, duration: 1, ease: 'easeInOut' }}
				let:motion
			>
				<div use:motion>
					<SummaryPanel
						totalPrice={data.orderSummaryData.actualPrice}
						itemCount={data.orderSummaryData.itemCount}
						shippingFee={data.orderSummaryData.shippingFee}
						totalItemPrice={data.orderSummaryData.totalPrice}
						discount={data.orderSummaryData.discount}
						buttonType="Checkout"
						on:handleOnClick={processCheckOut}
					/>
				</div>
			</Motion>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
