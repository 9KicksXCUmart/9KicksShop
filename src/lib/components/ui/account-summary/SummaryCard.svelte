<script lang="ts">
	import EditButton from '../button/EditButton.svelte';
	export let cardTitle: string;
	export let cardItemMap: Map<string, any>;
	export let isEditable: boolean;
</script>

<div class="flex p-5 flex-col items-start gap-4 self-stretch bg-[#f8fbf6]">
	{#if cardTitle !== ''}
		<div class="flex w-[279px] py-1.5 items-center gap-2 items-baseline">
			<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate">{cardTitle}</span>
			{#if isEditable}
				<EditButton />
			{/if}
		</div>
	{/if}

	<div class="flex items-start gap-5">
		{#each cardItemMap as [key, value]}
			<div class="flex w-[16.5rem] flex-col justify-center items-start gap-0.5">
				<div class="text-base text-[#7D7D7D]">{key}</div>
				<div class="text-lg">{value}</div>
			</div>
		{/each}
	</div>
</div>
