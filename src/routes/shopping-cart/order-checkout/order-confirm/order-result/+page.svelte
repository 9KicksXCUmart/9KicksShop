<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import OrderItem from '$lib/components/ui/order/OrderItem.svelte';
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<div class="flex flex-col place-items-center w-full h-fit px-[17%] py-[12px]">
			<span class="text-7xl font-extrabold"> Order Confirmed </span>
		</div>
		<div class="flex flex-col w-full h-fit px-[17%] py-[1%] space-y-[30px]">
			<!-- Purchased Items -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<div class="flex flex-row place-content-between">
					<!-- Order ID -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Order No. </span>
						<span class="text-lg text-[#7d7d7d]"> #19881234 </span>
					</div>
					<!-- Order Date -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Order Date </span>
						<span class="text-lg text-[#7d7d7d]"> 03-03-2024 </span>
					</div>
					<!-- Order Status -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Order Status </span>
						<span class="text-lg text-[#7d7d7d]"> Ready for delivery </span>
					</div>
					<!-- Total Price -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Total Price </span>
						<span class="text-lg text-[#7d7d7d]"> $345 </span>
					</div>
				</div>
				<hr>
				<OrderItem
					productImage={ProductImage}
					productName="Nike Dunk Low B/W"
					gender="Men's"
					price="US$115"
					size="US 10"
					quantity="1"
				/>
				<hr>
				<OrderItem
					productImage={ProductImage}
					productName="Nike Dunk Low B/W"
					gender="Men's"
					price="US$115"
					size="US 10"
					quantity="1"
				/>
			</div>
			<!-- Return to Home Page-->
			<div class="flex flex-row place-content-center w-full py-[20px]">
				<RightArrowButton
					text="Home Page"
				/>
			</div>
		</div>
	</div>
</div>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
