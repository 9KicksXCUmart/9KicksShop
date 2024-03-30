<script>
	export let id="undefined";
	export let productImage;
	export let productName;
	export let gender;
	export let price;
	export let size;
	export let quantity;
</script>

<!-- OrderItem -->
<div id={id} class="flex flex-row w-full space-x-[20px]">
	<!-- OrderItem/ProductImage -->
	<div class="flex place-items-center w-[250px] h-[200px] px-[10px] bg-[#ffffff]">
		<img src={productImage} alt="Product" class="w-[250px] h-[200px]"/>
	</div>
	<!-- OrderItem/ProductInfo -->
	<div class="flex flex-col w-full space-y-[15px]">
		<div class="flex flex-row justify-between w-full">
			<span class="text-xl font-bold"> {productName} </span>
			<span class="text-xl font-bold"> {price} </span>
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
