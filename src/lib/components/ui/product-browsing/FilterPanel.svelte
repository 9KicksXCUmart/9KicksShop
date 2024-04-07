<script>
	let genders = [
		{ gender: 'Men', check: false },
		{ gender: 'Women', check: false },
		{ gender: 'Kid', check: false }
	];

	let sizes = [
		{ size: 1, check: false },
		{ size: 1.5, check: false },
		{ size: 2, check: false },
		{ size: 2.5, check: false },
		{ size: 3, check: false },
		{ size: 3.5, check: false },
		{ size: 4, check: false },
		{ size: 4.5, check: false },
		{ size: 5, check: false },
		{ size: 5.5, check: false },
		{ size: 6, check: false },
		{ size: 6.5, check: false },
		{ size: 7, check: false },
		{ size: 7.5, check: false },
		{ size: 8, check: false },
		{ size: 8.5, check: false },
		{ size: 9, check: false },
		{ size: 9.5, check: false },
		{ size: 10, check: false },
		{ size: 10.5, check: false },
		{ size: 11, check: false },
		{ size: 12, check: false },
		{ size: 13, check: false },
		{ size: 14, check: false }
	];

	let prices = [
		{ price: 'Under $100', check: false },
		{ price: '$100 - $200', check: false },
		{ price: '$200 - $300', check: false },
		{ price: '$300 - $400', check: false },
		{ price: '$400 - $500', check: false },
		{ price: 'Over $500', check: false }
	];

	let brands = [
		{ brand: 'Nike', check: false },
		{ brand: 'Adidas', check: false },
		{ brand: 'New Balance', check: false }
	];
</script>

<div class="flex flex-col h-fit w-[250px] space-y-[20px]">
	<!-- Brand -->
	<div class="flex flex-col">
		<span class="text-2xl font-bold py-[5px]"> Brand </span>
		{#each brands as { brand, check }}
			<label class="flex items-center px-[6px] py-[5px]">
				<input
					type="checkbox"
					class="appearance-none w-[20px] h-[18px] border-2 border-[#ececec] checked:bg-black"
					bind:checked={check}
				/>
				<span class="px-[6px] font-xs"> {brand} </span>
			</label>
		{/each}
	</div>

	<!-- Gender -->
	<div class="flex flex-col">
		<span class="text-2xl font-bold py-[5px]"> Gender </span>
		{#each genders as { gender, check }}
			<label class="flex items-center px-[6px] py-[5px]">
				<input
					type="checkbox"
					class="appearance-none w-[20px] h-[18px] border-2 border-[#ececec] checked:bg-black"
					bind:checked={check}
				/>
				<span class="px-[6px] font-xs"> {gender} </span>
			</label>
		{/each}
	</div>

	<!-- Size -->
	<div class="flex flex-col">
		<span class="text-2xl font-bold py-[5px] pb-[6px]"> Size </span>
		<div class="grid grid-cols-4 gap-y-[15px] gap-x-[10px] place-items-center">
			{#each sizes as { size, check }}
				<button>
					<div
						class="group w-[45px] h-[36px] border border-[#ececec] bg-[#ffffff] transition duration-150 hover:bg-[#000000]"
					>
						<span class="font-xs transition duration-150 group-hover:text-white">{size}</span>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Price -->
	<div class="flex flex-col">
		<span class="text-2xl font-bold py-[5px]"> Price </span>
		{#each prices as { price, check }}
			<label class="flex items-center px-[6px] py-[5px]">
				<input
					type="checkbox"
					class="appearance-none w-[20px] h-[18px] border-2 border-[#ececec] checked:bg-black"
					bind:checked={check}
				/>
				<span class="px-[6px] font-xs"> {price} </span>
			</label>
		{/each}
	</div>
</div>
