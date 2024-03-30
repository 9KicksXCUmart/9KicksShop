<script>
	export let productImage;
	export let productName;
	export let gender;
	export let price;
	export let size;
	export let quantity;
	export let id;
</script>

<!-- ShoppingCartItem -->
<div id={id} class="relative flex flex-row items-center w-[775px] px-[17px] space-x-[75px] bg-[#f8fbf6]">
	<!-- ShoppingCartItem/Image -->
	<div>
		<img src={productImage} alt="Product" class="w-[290px] h-[270px]"/>
	</div>
	<!-- ShoppingCartItem/CartInfo -->
	<div class="flex flex-col w-[370px] space-y-[16px]">
		<div class="flex flex-row w-[304px] place-content-between">
			<div class="flex flex-col space-y-[8px]">
				<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate"> {productName} </span>
				<span class="text-lg"> {gender} </span>
			</div>
			<span class="text-lg">US${price}</span>
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
	<button class="absolute top-[19px] right-[20px]">
		<svg class="hover:stroke-[#6d7d7d]" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
	</button>
</div>
