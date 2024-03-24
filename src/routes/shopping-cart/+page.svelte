<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
</script>

<div class="flex flex-col items-center place w-1920px h-fit">
	<!-- ShoppingCartSummary -->
	<div class="relative flex flex-col w-[410px] h-[360px] p-[20px] space-y-[15px] bg-[#f8fbf6]">
		<div class="flex pb-[10px]">
			<span class="text-3xl font-semibold"> Order Summary </span>
		</div>
		<div class="flex flex-row w-full place-content-between">
			<span class="text-xl font-semibold"> Subtotal </span>
			<span class="text-lg"> US$69420 </span>
		</div>
		<div>
			<span class="text-base text-[#7d7d7d]"> 0 item(s) </span>
		</div>
		<hr>
		<div class="flex flex-row w-full place-content-between">
			<span class="text-xl font-semibold"> Shipping </span>
			<span class="text-lg"> TBD </span>
		</div>
		<hr>
		<div class="flex flex-row w-full place-content-between">
			<span class="text-xl font-semibold"> Estimated Total </span>
			<span class="text-lg"> US$69420 </span>
		</div>
	</div>
	<!-- ShoppingCartItem -->
	<div class="relative flex flex-row items-center w-[775px] px-[17px] space-x-[75px] bg-[#f8fbf6]">
		<!-- ShoppingCartItem/Image -->
		<div>
			<img src={ProductImage} alt="Product" class="w-[290px] h-[270px]"/>
		</div>
		<!-- ShoppingCartItem/CartInfo -->
		<div class="flex flex-col w-[370px] space-y-[16px]">
			<div class="flex flex-row w-[260px] place-content-between">
				<div class="flex flex-col space-y-[8px]">
					<span class="text-xl font-semibold"> Product Name </span>
					<span class="text-lg"> Gender </span>
				</div>
				<span class="text-lg">US$69</span>
			</div>
			<div class="flex flex-col h-[75px] space-y-[8px] py-[8px]">
				<div class="flex flex-row space-x-[25px]">
					<span class="text-base text-[#7d7d7d]"> Size </span>
					<span class="text-xl font-semibold"> US 10 </span>
				</div>

				<div class="flex flex-row space-x-[25px]">
					<span class="text-base text-[#7d7d7d]"> Quantity </span>
					<span class="text-xl font-semibold"> 1 </span>
				</div>
			</div>
		</div>
		<div class="absolute top-[20px] right-[20px]">
			<svg class="hover:stroke-[#7d7d7d]" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
		</div>
	</div>
	<!-- MenuItem -->
	<button id="button-bar-button" class="flex items-center transition duration-150 border-b-4 border-transparent hover:border-black hover:font-semibold px-0px py-10px w-fit">
		Menu Item
	</button>

	<!-- RightArrowButton -->
	<button id="right-arrow-button"> 
		<div class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] transition duration-200 bg-[#f8fbf6] hover:bg-[#a7a6a4] -space-x-[5px] hover:space-x-[5px]">
			<span class="font-semibold text-lg text-black group-hover:text-white"> BUTTON TEXT </span>
			<svg class="flex place-items-center group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M9 18l6-6-6-6"/></svg>
		</div>
	</button>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
