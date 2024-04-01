<script>
	export let text = '';

	export let id = 'undefined';
	export let scale = '1';

	let styling = `transform: scale(${scale})`;
</script>

<!-- RightArrowButton -->
<button {id}>
	<div
		class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] transition duration-200 bg-[#ececec] hover:bg-[#a7a6a4] -space-x-[5px] hover:space-x-[5px]"
		style={styling}
	>
		<span class="font-semibold text-lg text-black group-hover:text-white"> {text} </span>
		<svg
			class="flex place-items-center group-hover:stroke-white"
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			stroke-width="1.2"
			stroke-linecap="square"
			stroke-linejoin="arcs"><path d="M9 18l6-6-6-6" /></svg
		>
	</div>
</button>
