<script lang="ts">
	import type { Product } from '$lib/model/Product';
	import OrderProductItem from '$lib/components/ui/account-summary/OrderProductItem.svelte';

	// export let products: Product[];
	export let products: any;
</script>

<div class="flex p-5 flex-col items-start gap-4 self-stretch bg-[#f8fbf6] divide-y divide-gray-300">
	<div class="flex w-[279px] py-1.5 items-center gap-2 items-baseline">
		<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate">Purchased Items</span>
	</div>
	<!-- <div class="w-full"> -->
	{#if products !== undefined}
		{#each Object.entries(products) as [id, itemDetail]}
			<OrderProductItem product={itemDetail} {id} />
		{/each}
	{/if}
	<!-- </div> -->

	<div class="flex flex-col w-full text-right items-end pt-[1rem]">
		<div>Total Price</div>
		<div class="text-xl font-medium">$999.8</div>
	</div>
</div>
