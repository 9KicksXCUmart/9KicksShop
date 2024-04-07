<script lang="ts">
	import EditButton from '$lib/components/ui/button/EditButton.svelte';
	import ConfirmButton from '$lib/components/ui/button/ConfirmButton.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { UpdateValueMap } from '$lib/model/UpdateValueMap';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	export let cardTitle: string;
	export let cardItemMap: Map<string, any>;
	export let isEditable: boolean;
	export let isLoading: boolean;

	const dispatch = createEventDispatcher();

	let isEdit: boolean = false;

	let updateValueMap: UpdateValueMap = {
		'First Name': '',
		'Last Name': '',
		'Email Address': '',
		'Password ': '',
		'Street Address': '',
		'District ': '',
		'Card Type': '',
		'Card Number': ''
	};

	function handleUpdate() {
		dispatch('updateProfile', updateValueMap);
	}
</script>

<div class="w-full flex p-5 flex-col items-start gap-4 self-stretch bg-[#f8fbf6]">
	{#if cardTitle !== ''}
		<div class="flex w-[279px] py-1.5 gap-2 items-baseline">
			<span class="max-w-[200px] text-xl font-bold whitespace-nowrap truncate">{cardTitle}</span>
			{#if isEditable}
				{#if isEdit}
					<ConfirmButton
						on:click={() => {
							isEdit = !isEdit;
							handleUpdate();
						}}
					/>
				{:else}
					<EditButton on:click={() => (isEdit = !isEdit)} />
				{/if}
			{/if}
		</div>
	{/if}

	<div class="flex items-start gap-5">
		{#each cardItemMap as [key, value]}
			<div class="flex w-[18rem] flex-col justify-center items-start gap-0.5">
				<div class="text-base text-[#7D7D7D]">{key}</div>
				{#if isLoading}
					<LoadingCircle />
				{:else if isEdit}
					<Input
						bind:value={updateValueMap[key]}
						placeholder={value}
						class="text-lg"
						type={key === 'Password ' ? 'password' : 'text'}
					/>
				{:else}
					<div class="text-lg">{value}</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
