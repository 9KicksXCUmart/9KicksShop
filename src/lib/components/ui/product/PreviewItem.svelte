<script>
	export let id;
	export let productImage;
	export let productName;
	export let category;
	export let price;
	export let rating = 0;
	export let ratingCount = 0;
	export let scale;

	let styling = `transform:scale(${scale})`;
</script>

<!-- Product Preview Item-->
<div {id} class="flex flex-col place-items-center w-[210px]" style={styling}>
	<!-- Product Image -->
	<div class="flex flex-col h-[200px] w-full bg-[#ffffff]">
		<img src={productImage} alt="Dunk Low" />
	</div>
	<div
		class="flex flex-col w-full place-items-start space-y-[6px] pt-[8px] pb-[20px] px-[10px] bg-[#f8fbf6]"
	>
		<!-- Product Name -->
		<span class="text-sm font-bold max-w-[200px] whitespace-nowrap truncate"> {productName} </span>
		<!-- Product category -->
		<span class="text-xs"> {category} </span>
		<!-- Product Price -->
		<span class="text-sm"> US ${price} </span>
		<!-- Product Rating & Rating Count -->
		<div class="flex flex-row justify-start space-x-[2px]">
			<!-- Product Rating -->
			<div class="flex flex-row place-items-center space-x-[2px]">
				{#each { length: rating } as _, i}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
						<path
							d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
							fill="black"
						/>
					</svg>
				{/each}
				{#each { length: 5 - rating } as _, i}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
						<path
							d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
							fill="#d9d9d9"
						/>
					</svg>
				{/each}
			</div>
			<!-- Rating Count-->
			<span style="font-size:10px"> ({ratingCount}) </span>
		</div>
	</div>
</div>
