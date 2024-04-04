<script lang="ts">
	import type { Product } from '$lib/model/Product';

	// export let product: Product;
	export let product: any;
	export let id: string;
</script>

<div {id} class="relative flex flex-row items-center w-full px-[17px] space-x-[75px] bg-[#f8fbf6]">
	<img src={product.productImage} alt="Product" class="w-[290px] h-[270px]" />
	<div class="flex flex-col space-y-[16px] w-full">
		<div class="flex flex-row place-content-between">
			<div class="flex flex-col space-y-[8px]">
				<span class=" text-xl font-medium whitespace-nowrap truncate">
					{product.productName}
				</span>
				<span class="text-lg"> {product.productCategory} </span>
			</div>
			<span class="text-lg">US${product.price}</span>
		</div>
		<div class="flex flex-col h-[75px] space-y-[8px] py-[8px]">
			<div class="flex flex-row space-x-[25px]">
				<span class="text-base text-[#7d7d7d]"> Size </span>
				<span class="text-xl font-medium"> {product.size} </span>
			</div>

			<div class="flex flex-row space-x-[25px]">
				<span class="text-base text-[#7d7d7d]"> Quantity </span>
				<span class="text-xl font-medium"> {product.quantity} </span>
			</div>
		</div>
	</div>
</div>
