<script lang="ts">
	import type { K, V } from 'vitest/dist/reporters-MmQN-57K.js';

	export let cardTitle: string;
	export let cardItemMap: Map<string, string>;
</script>

<div class="relative flex flex-row items-center w-[775px] px-[17px] space-x-[75px] bg-[#f8fbf6] my-[10px]">
	<div class="flex flex-col w-[370px] space-y-[16px]">
		<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate">{cardTitle}</span>
		<div class="flex flex-col space-y-[8px] py-[8px]">
			<div class="flex flex-row space-x-[25px]">
				{#each cardItemMap as [key, value]}
					<div>
						<div class="text-lg">{key}</div>
						<div class="text-lg">{value}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
