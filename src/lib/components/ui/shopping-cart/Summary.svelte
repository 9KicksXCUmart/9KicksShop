<script lang="ts">
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';
	export let totalItemPrice: number;
	export let itemCount: number;
	export let shippingFee: number;
	export let totalPrice: number;
	export let discount: number;
</script>

<!-- ShoppingCartSummary -->
<div class="relative flex flex-col w-[411px] h-fit p-[20px] space-y-[15px] bg-[#f8fbf6]">

	<div class="flex pb-[10px]">
		<span class="text-3xl font-extrabold"> Order Summary </span>
	</div>
	<div class="flex flex-row w-full place-content-between">
		<span class="text-xl font-bold"> Subtotal </span>
		<span class="text-lg"> US${totalItemPrice} </span>
	</div>
	<div>
		<span class="text-base text-[#7d7d7d]"> {itemCount} item(s) </span>
	</div>
	<hr />
	<div class="flex flex-row w-full place-content-between">
		<span class="text-xl font-bold"> Shipping </span>
		{#if shippingFee != 0}
			<span class="text-lg"> {shippingFee} </span>
		{:else if !shippingFee}
			<span class="text-lg">0</span>
		{:else}
			<span class="text-lg">TBC</span>
		{/if}
	</div>
	<hr />
	<div class="flex flex-row w-full place-content-between">
		<span class="text-xl font-bold"> Discount </span>
		<span class="text-lg"> {discount} </span>

	</div>
	<hr />
	<div class="flex flex-row w-full place-content-between">
		<span class="text-xl font-bold"> Estimated Total </span>
		<span class="text-lg"> US${totalPrice} </span>
	</div>
	<div class="flex flex-row w-full place-content-center py-[20px]">
		<RightArrowButton text="Checkout" scale="0.85" />

	</div>
</div>
