<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import CartItem from '$lib/components/ui/shopping-cart/CartItem.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import { onMount } from 'svelte';

	let itemData = {};
	onMount(async () => {
		itemData = await getShoppingCartItems();
	});

	async function getShoppingCartItems() {
		const response = await fetch(
			'http://localhost:8080/api/v1/shopping-cart?' +
				new URLSearchParams({ userId: '120499e3-fdfd-440c-1204-bdcd954f4891' }).toString(),
			{
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			}
		);
		const result = await response.json();
		return result.data.shoppingCartItemDetail;
	}
</script>

<div class="flex flex-col items-center w-full h-fit">
	<TextBanner text="Shopping Cart" />
	<div class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]">
		<!-- Cart Item List -->
		{#each Object.entries(itemData) as [shoppingCartId, itemsDetail]}
			<div class="w-[40%] h-[1300px]">
				<CartItem
					productImage={itemsDetail.imageUrl}
					price={itemsDetail.price}
					productName={itemsDetail.productName}
					productCategory={itemsDetail.productCategory}
					size={itemsDetail.productSize}
					quantity={itemsDetail.productQuantity}
					id={shoppingCartId}
				/>
			</div>
		{/each}
		<!-- Summary -->
		<SummaryPanel />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
