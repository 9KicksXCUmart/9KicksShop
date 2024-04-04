<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let cardTitle: string;
	export let subTitleList: string[];
	export let orderList: any;

	function handleClick(orderId: string) {
		dispatch('routeToOrderDetail', {
			orderId: orderId.replace('ORDER#', ''),
			replaceState: false
		});
	}
</script>

<div class="flex p-5 flex-col items-start gap-4 self-stretch bg-[#f8fbf6]">
	<div class="flex w-[279px] py-1.5 items-center gap-2">
		<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate">{cardTitle}</span>
	</div>
	<div class="flex flex-col gap-0.5">
		<div class="flex items-start gap-5">
			{#each subTitleList as title}
				<div class="flex w-[16.5rem] flex-col justify-center items-start gap-0.5">
					<div class="text-base text-[#7D7D7D]">{title}</div>
				</div>
			{/each}
		</div>
		<div class="flex flex-col items-start gap-0.5">
			{#each orderList as orderItem}
				<div class="flex flex-row gap-5 items-baseline">
					<button
						on:click={() => handleClick(orderItem.orderId)}
						class="text-xs w-[16.5rem] inline-block"
					>
						<div class="w-max group text-sky-600 transition duration-300 cursor-pointer">
							{orderItem.orderId.replace('ORDER#', '')}
							<span
								class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
							></span>
						</div>
					</button>
					<div class="text-lg w-[16.5rem]">{orderItem.orderDate.replace('T', ' ')}</div>
					<div class="text-lg w-[16.5rem]">{orderItem.orderStatus}</div>
					<div class="text-lg w-[16.5rem]">{orderItem.totalPrice}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
