<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';

	export let id: string = '';
	export let panelName: string;
	export let shortColumnName_1: string;
	export let shortColumnName_2: string;
	export let longColumnName: string;
	export let shortColumnPrefilled_1: string;
	export let shortColumnPrefilled_2: string;
	export let longColumnPrefilled: string;

	interface touchedFields {
		firstName: boolean;
		country: boolean;
		lastName: boolean;
		state: boolean;
		email: boolean;
		address: boolean;
	}
	interface errors {
		firstName: string;
		country: string;
		lastName: string;
		state: string;
		email: string;
		address: string;
	}

	let touchedFields = { firstName: false } as touchedFields;
	$: touchedFields;
	$: errors = validate(
		touchedFields,
		shortColumnPrefilled_1,
		shortColumnPrefilled_2,
		longColumnPrefilled
	);
	const validate = (
		touchedFields: touchedFields,
		shortColumnPrefilled_1: string,
		shortColumnPrefilled_2: string,
		longColumnPrefilled: string
	) => {
		const errors = {} as errors;
		if (
			touchedFields.firstName &&
			(shortColumnPrefilled_1 === '' || !shortColumnPrefilled_1) &&
			shortColumnName_1 === 'First Name'
		)
			errors.firstName = 'First Name is required';
		else if (
			touchedFields.country &&
			(shortColumnPrefilled_1 === '' || !shortColumnPrefilled_1) &&
			shortColumnName_1 === 'Country'
		)
			errors.country = 'Country is required';

		if (
			touchedFields.lastName &&
			(shortColumnPrefilled_2 === '' || !shortColumnPrefilled_2) &&
			shortColumnName_2 === 'Last Name'
		)
			errors.lastName = 'Last Name is required';
		else if (
			touchedFields.state &&
			(shortColumnPrefilled_2 === '' || !shortColumnPrefilled_2) &&
			shortColumnName_2 === 'State/District'
		)
			errors.state = 'State/District is required';
		if (
			touchedFields.email &&
			(longColumnPrefilled === '' || !longColumnPrefilled) &&
			longColumnName === 'Email Address'
		)
			errors.email = 'Email is required';
		else if (
			touchedFields.address &&
			(longColumnPrefilled === '' || !longColumnPrefilled) &&
			longColumnName === 'Street Address'
		)
			errors.address = 'Address is required';
		return errors;
	};
</script>

<!-- Input Panel -->
<div {id} class="flex flex-col space-y-[15px]">
	<span class="text-3xl font-bold"> {panelName} </span>
	<div class="flex flex-row space-x-[60px]">
		<!-- Short Column 1 -->
		<div class="flex flex-col space-y-[10px] w-[100%]">
			<span class="text-lg font-semibold"> {shortColumnName_1} </span>
			{#if shortColumnName_1 === 'First Name'}
				<Input
					class="w-[100%] h-[35px] text-lg bg-[#f8fbf6]"
					bind:value={shortColumnPrefilled_1}
					on:blur={() => (touchedFields.firstName = true)}
					error={errors.firstName}
				/>
			{:else}
				<Input
					class="w-[100%] h-[35px] text-lg bg-[#f8fbf6]"
					bind:value={shortColumnPrefilled_1}
					on:blur={() => (touchedFields.country = true)}
					error={errors.country}
				/>
			{/if}
		</div>
		<!-- Last Name -->
		<div class="flex flex-col space-y-[10px] w-[100%]">
			<span class="text-lg font-semibold"> {shortColumnName_2} </span>
			{#if shortColumnName_2 === 'Last Name'}
				<Input
					class="w-[100%] h-[35px] text-lg bg-[#f8fbf6]"
					bind:value={shortColumnPrefilled_2}
					on:blur={() => (touchedFields.lastName = true)}
					error={errors.lastName}
				/>
			{:else}
				<Input
					class="w-[100%] h-[35px] text-lg bg-[#f8fbf6]"
					bind:value={shortColumnPrefilled_2}
					on:blur={() => (touchedFields.state = true)}
					error={errors.state}
				/>
			{/if}
		</div>
	</div>
	<!-- Email Address -->
	<div class="flex flex-col space-y-[10px]">
		<span class="text-lg font-semibold"> {longColumnName} </span>
		{#if longColumnName === 'Email Address'}
			<Input
				class="w-[%100] h-[35px] text-lg bg-[#f8fbf6]"
				bind:value={longColumnPrefilled}
				on:blur={() => (touchedFields.email = true)}
				error={errors.email}
			/>
		{:else}
			<Input
				class="w-[%100] h-[35px] text-lg bg-[#f8fbf6]"
				bind:value={longColumnPrefilled}
				on:blur={() => (touchedFields.address = true)}
				error={errors.address}
			/>
		{/if}
	</div>
</div>
