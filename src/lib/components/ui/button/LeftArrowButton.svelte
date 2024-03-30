<script>
	export let text='undefined';
	export let id='undefined';
	export let scale='1';

	let styling=`transform: scale(${scale})`;
</script>

<!-- LeftArrowButton -->
<button id={id} style={styling}> 
	<div class="group flex flex-row place-content-center items-center transition duration-200" style={styling}>
		<svg class="flex place-items-center group-hover:stroke-grey" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="arcs"><path d="M15 18l-6-6 6-6"/></svg>
		<span class="font-bold text-lg text-black group-hover:text-grey"> {text} </span>
	</div>
</button>
