<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';

	export let genders;
	export let sizes;
	export let prices;
	export let minPrice: string;
	export let maxPrice: string;
	export let brands;
	export let filterProducts = () => {};
</script>

<div class="flex flex-col h-fit w-[250px] space-y-[20px]">
	<!-- Brand -->
	<div class="flex flex-col">
		<span class="text-2xl font-bold py-[5px]"> Brand </span>
		{#each brands as { brand, check }}
			<label class="flex items-center px-[6px] py-[5px]">
				<input
					type="checkbox"
					class="appearance-none w-[20px] h-[20px] border-2 border-[#ececec] checked:bg-[#ececec]"
					bind:checked={check}
					on:change={filterProducts}
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
					class="appearance-none w-[20px] h-[20px] border-2 border-[#ececec] checked:bg-[#ececec]"
					bind:checked={check}
					on:change={filterProducts}
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
				<button
					class="group flex items-center justify-center w-[45px] h-[45px] border border-[#ececec] bg-[#ffffff] transition duration-150 hover:bg-gray-100"
				>
					<span class="font-xs transition duration-150">{size}</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- Price -->
	<div class="flex flex-col">
		<span class="text-2xl font-bold py-[5px]"> Price </span>
		<div class="flex flex-row gap-3">
			<div class="flex flex-col items-center">
				<Input class="bg-gray-100 box-border h-8" bind:value={minPrice}/>
				<div class="text-sm">Min Price</div>
			</div>
			<div>-</div>
			<div class="flex flex-col items-center">
				<Input class="bg-gray-100 box-border h-8" bind:value={maxPrice}/>
				<div class="text-sm">Max Price</div>
			</div>
		</div>
		<div class="flex flex-col items-center p-5">
		<button class="bg-gray-100 px-3 py-1 text-sm" on:click={filterProducts}>Set Price</button>
		</div>
	</div>
</div>
