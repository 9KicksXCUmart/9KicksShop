<script>
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';
	export let id;
	export let totalItemPrice;
	export let itemCount;
	export let shippingFee;
	export let totalPrice;
	export let buttonText='Checkout';
</script>


<!-- ShoppingCartSummary -->
<div id={id} class="relative flex flex-col w-[411px] h-fit p-[20px] space-y-[15px] bg-[#f8fbf6]">
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
	<hr>
	<div class="flex flex-row w-full place-content-between">
		<span class="text-xl font-bold"> Shipping </span>
		<span class="text-lg"> {shippingFee} </span>
	</div>
	<hr>
	<div class="flex flex-row w-full place-content-between">
		<span class="text-xl font-bold"> Estimated Total </span>
		<span class="text-lg"> US${totalPrice} </span>
	</div>
	<div class="flex flex-row w-full place-content-center py-[20px]">
		<RightArrowButton text={buttonText} scale="0.85"/>
	</div>

</div>
