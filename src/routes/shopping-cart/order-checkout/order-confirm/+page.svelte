<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import OrderItem from '$lib/components/ui/order/OrderItem.svelte';
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';
	import LeftArrowButton from '$lib/components/ui/button/LeftArrowButton.svelte';
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Order Checkout"/>
		<!-- Return to Previous Page-->
		<div class="flex w-full h-fit px-[17%]">
			<div class="flex flex-row justify-start w-full -py-[30px]">
				<LeftArrowButton
					text="Previous Page"
				/>
			</div>
		</div>
		<div class="flex flex-col w-full h-fit px-[17%] py-[1%] space-y-[30px]">
			<!-- Delivery Information -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Delivery Information </span>
				<hr>
				<div class="flex flex-col w-full">
					<span class="text-xl font-semibold"> Chi Fung Lam </span>
					<span class="text-lg text-[#7d7d7d]"> The Chinese University of Hong Kong, Kowloon, Hong Kong SAR, China </span>
				</div>
			</div>

			<!-- Payment Method -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Payment Method </span>
				<hr>
				<div class="flex flex-col w-full">
					<span class="text-xl font-semibold"> Chi Fung Lam </span>
					<span class="text-lg text-[#7d7d7d]"> VISA **** 7890 </span>
				</div>
			</div>

			<!-- Delivery Option -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Delivery Option </span>
				<hr>
				<div class="flex flex-row justify-between w-full">
					<span class="text-lg font-bold"> Normal Delivery </span>
					<span class="text-lg font-bold"> FREE </span>
				</div>
			</div>

			<!-- Discount -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Discount </span>
				<hr>
				<div class="flex flex-row justify-end w-full">
					<span class="text-lg font-bold"> US$0 </span>
				</div>
			</div>

			<!-- Purchased Items -->
			<div class="flex flex-col justify-start w-full p-[20px] space-y-[15px] bg-[#f8fbf6]">
				<span class="text-2xl font-bold"> Purchased Items </span>
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
				<hr>
				<!-- Totoal Price -->
				<div class="flex flex-row justify-end w-full">
					<div class="flex flex-col justify-end">
						<span class="text-lg"> Total Price </span>
						<span class="text-2xl font-bold"> US$230</span>
					</div>
				</div>
			</div>
			<!-- Place Order -->
			<div class="flex flex-row justify-end w-full">
				<RightArrowButton
					text="Place Order"	
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
