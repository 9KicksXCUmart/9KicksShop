<script lang="ts">
	export let data: data;
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import CartItem from '$lib/components/ui/shopping-cart/CartItem.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import { PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	import { goto, invalidateAll } from '$app/navigation';
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
			};
		};
	}

	async function deleteCartItem(e: CustomEvent<{ itemId: string }>) {
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

	function processChcekOut() {
		goto('shopping-cart/order-checkout');
	}
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Shopping Cart" />
		<div
			class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]"
		>
			<div class="flex flex-col space-y-[15px] w-[40%] h-[1300px]">
				{#each Object.entries(data.itemDatas) as [id, itemDetail]}
					<CartItem
						on:deleteCartItem={deleteCartItem}
						productImage={itemDetail.imageUrl}
						price={itemDetail.price}
						productName={itemDetail.productName}
						productCategory={itemDetail.productCategory}
						size={itemDetail.productSize}
						quantity={itemDetail.productQuantity}
						{id}
					/>
				{/each}
			</div>
			<SummaryPanel
				totalPrice={data.orderSummaryData.actualPrice}
				itemCount={data.orderSummaryData.itemCount}
				shippingFee={data.orderSummaryData.shippingFee}
				totalItemPrice={data.orderSummaryData.totalPrice}
				discount={data.orderSummaryData.discount}
				buttonType="checkout"
				on:processChcekOut={processChcekOut}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
