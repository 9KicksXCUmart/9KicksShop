<script lang="ts">
	import type { OrderItemDetail } from '$lib/model/OrderItemDetail';

	export let itemDetail: OrderItemDetail;
	export let id: string;
</script>

<div {id} class="relative flex flex-row items-center w-full px-[17px] space-x-[75px] bg-[#f8fbf6]">
	<img src={itemDetail.productImage} alt="Product" class="w-[290px] h-[270px]" />
	<div class="flex flex-col space-y-[16px] w-full">
		<div class="flex flex-row place-content-between">
			<div class="flex flex-col space-y-[8px]">
				<span class=" text-xl font-medium whitespace-nowrap truncate">
					{itemDetail.productName}
				</span>
				<span class="text-lg"> {itemDetail.productCategory} </span>
			</div>
			<span class="text-lg">US${itemDetail.productPrice}</span>
		</div>
		<div class="flex flex-col h-[75px] space-y-[8px] py-[8px]">
			<div class="flex flex-row space-x-[25px]">
				<span class="text-base text-[#7d7d7d]"> Size </span>
				<span class="text-xl font-medium"> {itemDetail.productSize} </span>
			</div>

			<div class="flex flex-row space-x-[25px]">
				<span class="text-base text-[#7d7d7d]"> Quantity </span>
				<span class="text-xl font-medium"> {itemDetail.productQuantity} </span>
			</div>
		</div>
	</div>
</div>
