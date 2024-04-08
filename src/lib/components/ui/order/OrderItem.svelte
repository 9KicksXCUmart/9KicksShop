<script>
	export let id = 'undefined';
	export let productImage;
	export let productName;
	export let gender;
	export let price;
	export let size;
	export let quantity;
	export let originalPrice;
</script>

<!-- OrderItem -->
<div {id} class="flex flex-row w-full space-x-[20px]">
	<!-- OrderItem/ProductImage -->
	<div class="flex place-items-center w-[250px] h-[200px] px-[10px]">
		<img src={productImage} alt="Product" class="object-contain w-80 h-64" />
	</div>
	<!-- OrderItem/ProductInfo -->
	<div class="flex flex-col w-full space-y-[15px]">
		<div class="flex flex-row justify-between w-full">
			<span class="text-xl font-bold"> {productName} </span>
			{#if price === originalPrice || originalPrice === -1}
				<span class="text-xl font-bold"> US${price} </span>
			{:else if originalPrice !== 0 && price !== originalPrice}
				<div class="flex gap-3 items-end">
					<span class="text-xl font-bold"> US${price} </span>
					<span class="text-gl line-through text-gray-400"> US${originalPrice} </span>
				</div>
			{:else}
				<span class="text-xl font-bold"> US$0</span>
			{/if}
		</div>
		<span class="text-lg"> {gender} </span>
		<div class="flex flex-col">
			<span class="text-sm text-[#7d7d7d]"> Size </span>
			<span class="text-lg"> {size} </span>
		</div>
		<div class="flex flex-col">
			<span class="text-sm text-[#7d7d7d]"> Quantity </span>
			<span class="text-lg"> {quantity} </span>
		</div>
	</div>
</div>
