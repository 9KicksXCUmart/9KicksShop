<script>
	import Input from '$lib/components/ui/input/input.svelte';

	export let id='undefined';
	export let panelName;
	export let shortColumnName_1;
	export let shortColumnName_2;
	export let longColumnName;
	export let shortColumnPrefilled_1;
	export let shortColumnPrefilled_2;
	export let longColumnPrefilled;
</script>

<!-- Input Panel -->
<div id={id} class="flex flex-col space-y-[15px]">
	<span class="text-3xl font-bold"> {panelName} </span>
	<div class="flex flex-row space-x-[60px]">
		<!-- Short Column 1 -->
		<div class="flex flex-col space-y-[10px]">
			<span class="text-lg font-semibold"> {shortColumnName_1} </span>
			<Input class="w-[250px] h-[35px] text-lg bg-[#f8fbf6]" value={shortColumnPrefilled_1}/>
		</div>
		<!-- Last Name -->
		<div class="flex flex-col space-y-[10px]">
			<span class="text-lg font-semibold"> {shortColumnName_2} </span>
			<Input class="w-[250px] h-[35px] text-lg bg-[#f8fbf6]" value={shortColumnPrefilled_2}/>
		</div>
	</div>
	<!-- Email Address -->
	<div class="flex flex-col space-y-[10px]">
		<span class="text-lg font-semibold"> {longColumnName} </span>
		<Input class="w-[600px] h-[35px] text-lg bg-[#f8fbf6]" value={longColumnPrefilled}/>
	</div>
</div>
