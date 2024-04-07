<script>
	import SizeOption from '$lib/components/ui/dropdown/SizeOption.svelte';
	import QuantityOption from '$lib/components/ui/dropdown/QuantityOption.svelte';
	import RightArrowButton from '$lib/components/ui/button/RightArrowButton.svelte';

	export let sizeStock;
	export let quantitys;
	export let rating;
	export let price;
</script>

<!-- InfoPanel-->
<div class="flex flex-col w-[400px] h-[360px] space-y-[12px] p-[20px] bg-[#f8fbf6]">
	<!-- InfoPanel/Price -->
	<span style="font-size:40px"> US ${price}</span>
	<!-- InfoPanel/Rating -->
	<div class="flex flex-row place-items-center space-x-[2px]">
		{#each { length: rating } as _, i}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
				<path
					d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
					fill="black"
				/>
			</svg>
		{/each}
		{#each { length: 5 - rating } as _, i}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
				<path
					d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
					fill="#d9d9d9"
				/>
			</svg>
		{/each}
	</div>
	<!-- InfoPanel/SizeMenu -->
	<div class="z-20">
		<SizeOption id="size" menuItems={sizeStock} />
	</div>
	<!-- InfoPanel/Quantity -->
	<div class="z-10">
		<QuantityOption id="quantity" menuItems={quantitys} />
	</div>
	<!-- InfoPanel/AddtoCartButton-->
	<div class="flex flex-row place-content-center w-full pt-[20px] pb-[30px]">
		<RightArrowButton text="Add To Cart" scale="0.9" />
	</div>
</div>
