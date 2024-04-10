<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';
	const dispatch = createEventDispatcher();
	export let productImage: string;
	export let productName: string;
	export let productCategory: string;
	export let price: number;
	export let size: string;
	export let quantity: number;
	export let id: string;
	export let originalPrice: number;

	export let isLoading: boolean;

	const handleClick = () => {
		dispatch('deleteCartItem', { itemId: id });
	};
</script>

<!-- ShoppingCartItem -->
<div
	{id}
	class="relative flex flex-row items-center w-[52rem] px-3 pr-16 space-x-[2rem] bg-[#f8fbf6]"
>
	<!-- ShoppingCartItem/Image -->
	<div>
		<img src={productImage} alt="Product" class="object-contain w-80 h-64" />
		<!--		<img src={productImage} alt="Product" class="w-[290px] h-[270px]" />-->
	</div>
	<!-- ShoppingCartItem/CartInfo -->
	<div class="flex flex-col w-full space-y-[16px]">
		<div class="flex flex-row place-content-between">
			<div class="flex flex-col space-y-[8px]">
				<span class="w-full text-xl font-bold">
					{productName}
				</span>
				<span class="text-lg"> {productCategory} </span>
			</div>
			{#if price === originalPrice}
				<span class="text-lg">US${price}</span>
			{:else}
				<div class="flex flex-col">
					<span class="text-lg text-orange-600">US${price}</span>
					<span class="text-lg line-through text-gray-400">US${originalPrice}</span>
				</div>
			{/if}
		</div>
		<div class="flex flex-col h-[75px] space-y-[8px] py-[8px]">
			<div class="flex flex-row space-x-[25px]">
				<span class="text-base text-[#7d7d7d]"> Size </span>
				<span class="text-xl font-bold"> {size} </span>
			</div>

			<div class="flex flex-row space-x-[25px]">
				<span class="text-base text-[#7d7d7d]"> Quantity </span>
				<span class="text-xl font-bold"> {quantity} </span>
			</div>
		</div>
	</div>
	<!-- ShoppingCartItem/DeleteItemButton-->
	{#if isLoading}
		<div class="absolute top-[19px] right-[20px]">
			<LoadingCircle size="33" />
		</div>
	{:else}
		<button class="absolute top-[19px] right-[20px] duration-500" on:click={handleClick}>
			<svg
				class="hover:stroke-[#6d7d7d] duration-500"
				xmlns="http://www.w3.org/2000/svg"
				width="33"
				height="33"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="square"
				stroke-linejoin="arcs"
				><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg
			>
		</button>
	{/if}
</div>
