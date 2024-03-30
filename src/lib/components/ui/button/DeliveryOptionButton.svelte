<script>
	export let id = 'undefined';
	export let color;
	export let buttonName;
	export let buttonCaption;

	let styling = `background: ${color}`;
</script>

<button {id} class="w-[170px] h-[70px]">
	<div class="flex flex-col p-[11px] space-y-[10px] rounded-md" style={styling}>
		<span class="text-lg font-bold whitespace-nowrap"> {buttonName} </span>
		<span class="text-sm text-[#7d7d7d]"> {buttonCaption} </span>
	</div>
</button>
