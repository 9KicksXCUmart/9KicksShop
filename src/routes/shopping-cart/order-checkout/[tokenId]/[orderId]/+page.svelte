<script>
	export let data;
	import OrderItem from '$lib/components/ui/order/OrderItem.svelte';
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';
	import { goto } from '$app/navigation';
	import DeliveryOptionButton from '$lib/components/ui/button/DeliveryOptionButton.svelte';

	function handlleGoHomePage() {
		goto('/');
	}
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
						<span class="text-lg text-[#7d7d7d]">{data.orderDetailData.orderId.slice(9, 14)}</span>
					</div>
					<!-- Order Date -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Order Date </span>
						<span class="text-lg text-[#7d7d7d]"> {data.orderDetailData.orderDate}</span>
					</div>
					<!-- Order Status -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Order Status </span>
						{#if data.orderDetailData.deliveryStatus === 'PENDING'}
							<span class="text-lg text-[#7d7d7d]"> Ready for Delivery </span>
						{:else}
							<span class="text-lg text-[#7d7d7d]"> COMPLETED </span>
						{/if}
					</div>
					<!-- Total Price -->
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Total Price </span>
						<span class="text-lg text-[#7d7d7d]"> ${data.orderDetailData.totalPrice}</span>
					</div>
					<div class="flex flex-col justify-start w-[300px] space-y-[10px]">
						<span class="text-xl font-bold"> Delivery Type </span>
						<span class="text-lg text-[#7d7d7d]"> {data.orderDetailData.deliveryType}</span>
					</div>
				</div>
				<hr />
				{#each data.orderDetailData.orderItemDetail as item}
					<OrderItem
						productImage={item.productImage}
						productName={item.productName}
						gender={item.productCategory}
						price={item.productPrice}
						size={item.productSize}
						quantity={item.productQuantity}
					/>
					<hr />
				{/each}
			</div>
			<!-- Return to Home Page-->
			<div class="flex flex-row place-content-center w-full py-[20px]">
				<RightArrowButton buttonType="Home Page" on:handleGoHomePage={handlleGoHomePage} />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
