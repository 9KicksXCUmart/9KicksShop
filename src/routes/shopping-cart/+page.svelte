<script lang="ts">
	// disable client side rendering
	export const csr = false;
	// server side rendering
	export const ssr = true;

	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import CartItem from '$lib/components/ui/shopping-cart/CartItem.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	interface shoppingCartItemDetail {
		shoppingCartItemDetail: {
			imageUrl: string;
			price: number;
			productName: string;
			productCategory: string;
			productSize: string;
			productQuantity: number;
		};
	}

	let itemDatas = {} as shoppingCartItemDetail;
	let orderSummaryData: any;

	onMount(async () => {
		orderSummaryData = await getOrderSummary();
		itemDatas = await getShoppingCartItems();
	});

	async function getShoppingCartItems() {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart?` +
				new URLSearchParams({ userId: '120499e3-fdfd-440c-1204-bdcd954f4891' }).toString(),
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		);
		const result = await response.json();
		return result.data.shoppingCartItemDetail;
	}

	async function getOrderSummary() {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/payment/order-summary?` +
				new URLSearchParams({ userId: '120499e3-fdfd-440c-1204-bdcd954f4891' }).toString(),
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		);
		const result = await response.json();
		return result.data;
	}

	async function deleteCartItem(e: CustomEvent<{ itemId: string }>) {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart/delete?` +
				new URLSearchParams({
					userId: '120499e3-fdfd-440c-1204-bdcd954f4891',
					itemId: e.detail.itemId
				}).toString(),
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' }
			}
		);
		orderSummaryData = await getOrderSummary();
		itemDatas = await getShoppingCartItems();
	}
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Shopping Cart" />
		<div
			class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]"
		>
			<!-- Cart Item List -->
			<div class="flex flex-col space-y-[15px] w-[40%] h-[1300px]">
				{#each Object.entries(itemDatas) as [id, itemDetail]}
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
			{#if orderSummaryData}
				<SummaryPanel
					totalPrice={orderSummaryData.actualPrice}
					itemCount={orderSummaryData.itemCount}
					shippingFee={orderSummaryData.shippingFee}
					totalItemPrice={orderSummaryData.totalPrice}
					discount={orderSummaryData.discount}
				/>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
