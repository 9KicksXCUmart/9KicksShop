<script lang="ts">
	export let buttonType: string;
	export let id = 'undefined';
	export let scale = '1';
	let styling = `transform: scale(${scale})`;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const handleBackPage = () => {
		dispatch('handleBackPage');
	};
</script>

<!-- LeftArrowButton -->
<button {id} style={styling} on:click={handleBackPage}>
	<div
		class="group flex flex-row place-content-center items-center transition duration-300 gap-2"
		style={styling}
	>
		<svg
			class="flex place-items-center group-hover:stroke-grey group-hover:translate-x-[-1rem] duration-200"
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			stroke-width="1.5"
			stroke-linecap="square"
			stroke-linejoin="arcs"><path d="M15 18l-6-6 6-6" /></svg
		>
		<span class="font-bold text-lg text-black group-hover:text-grey"> {buttonType} </span>
	</div>
</button>
