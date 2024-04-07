<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let selected = 'Normal Delivery';
	const dispatch = createEventDispatcher();

	function onChange(event: any) {
		selected = event.currentTarget.value;
		dispatch('changeValue', { value: selected });
	}
</script>

<input
	class="hidden"
	id="Normal Delivery"
	type="radio"
	name="radio"
	checked={selected === 'Normal Delivery'}
	value="Normal Delivery"
	on:change={onChange}
/>
<label for="Normal Delivery" class="flex flex-col p-[11px] space-y-[10px] rounded-md bg-[#e7e7e7]">
	<span class="text-lg font-bold whitespace-nowrap"> Normal Delivery </span>
	<span class="text-sm text-[#7d7d7d]">7 to 14 working days</span>
</label>

<input
	class="hidden"
	id="Express Delivery"
	type="radio"
	name="radio"
	checked={selected === 'Express Delivery'}
	value="Express Delivery"
	on:change={onChange}
/>
<label for="Express Delivery" class="flex flex-col p-[11px] space-y-[10px] rounded-md bg-[#e7e7e7]">
	<span class="text-lg font-bold whitespace-nowrap">Express Delivery </span>
	<span class="text-sm text-[#7d7d7d]"> 2 to 3 working days </span>
</label>

<style>
	input[type='radio']:checked + label {
		background-color: #d3ffd8;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
</style>
