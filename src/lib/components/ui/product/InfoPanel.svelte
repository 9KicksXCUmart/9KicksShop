<script>
	import SizeOption from '$lib/components/ui/dropdown/SizeOption.svelte';
	import QuantityOption from '$lib/components/ui/dropdown/QuantityOption.svelte';
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';

	export let sizeStock;
	export let productSize;
	export let quantitys;
	export let rating;
	export let price;
	export let isDiscount;
	export let discountPrice;

	export let selectedSize;
	export let selectedQuantity;
	export let addCartMessage;
</script>

<!-- InfoPanel-->
<div class="flex flex-col w-[400px] h-fit space-y-[12px] p-6 bg-[#f8fbf6] items-center pt-10 pb-20">
	<div class="flex flex-col items-start w-full">
		{#if isDiscount}
			<!-- InfoPanel/DiscountPrice -->
			<div class="flex flex-col gap-2 pb-2">
				<span class="text-4xl text-orange-600"> US${discountPrice}</span>
				<span class="line-through text-gray-400 text-2xl"> US${price}</span>
			</div>
		{:else}
			<!-- InfoPanel/Price -->
			<span class="text-4xl"> US${price}</span>
		{/if}
		<!-- InfoPanel/Rating -->
		<div class="flex flex-row place-items-center space-x-[2px]">
			{#each { length: rating } as _, i}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
					<path
						d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
						fill="black"
					/>
				</svg>
			{/each}
			{#each { length: 5 - rating } as _, i}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
					<path
						d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
						fill="#d9d9d9"
					/>
				</svg>
			{/each}
		</div>
	</div>
	<!-- InfoPanel/SizeMenu -->
	<div class="z-20">
		<SizeOption id="size" menuItems={sizeStock} bind:selectedSize />
	</div>
	<!-- InfoPanel/Quantity -->
	<div class="z-10">
		<QuantityOption id="quantity" menuItems={quantitys} bind:selectedQuantity />
	</div>
	<!-- InfoPanel/AddtoCartButton-->
	<div class="flex flex-row justify-center content-start w-full pt-[20px]">
		{#if productSize[selectedSize] != 0}
			<RightArrowButton buttonType="Add To Cart" scale="0.9" on:handleOnClick />
		{:else}
			<div
				class="flex flex-row place-content-center items-center w-[200px] h-[60px] bg-[#a6a6a6]"
				style="transform: scale(0.9)"
			>
				<span class="text-xl font-semibold text-white"> Sold Out </span>
			</div>
		{/if}
	</div>

	{#if addCartMessage !== '' || addCartMessage !== typeof undefined}
		<div class="text-xl flex flex-row items-center justify-center">
			<div class="mt-3 p-3 text-base font-semibold">{addCartMessage}</div>
		</div>
	{/if}
</div>
