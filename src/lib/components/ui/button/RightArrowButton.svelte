<script lang="ts">
	export let id = 'undefined';
	export let scale = '1';
	export let buttonType: string;
	import { createEventDispatcher } from 'svelte';

	let styling = `transform: scale(${scale})`;

	const dispatch = createEventDispatcher();

	const handleCheckOut = () => {
		dispatch('processCheckOut');
	};

	const handleConfirm = () => {
		dispatch('createConfirmToken');
	};

	const handlePlaceOrder = () => {
		dispatch('handlePlaceOrder');
	};

	const handleGoHomePage = () => {
		dispatch('handleGoHomePage');
	};
</script>

<!-- RightArrowButton -->
{#if buttonType === 'checkout'}
	<button {id} on:click={handleCheckOut}>
		<div
			class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] button hover:space-x-[20px]"
		>
			<!--		<div-->
			<!--			class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] transition duration-200 bg-[#ececec] hover:bg-[#a7a6a4] -space-x-[5px] hover:space-x-[5px]"-->
			<!--			style={styling}-->
			<!--		>-->
			<span class="font-semibold text-lg text-black"> {buttonType} </span>
			<!--			<span class="font-semibold text-lg text-black group-hover:text-white"> {buttonType} </span>-->
			<svg
				class="flex place-items-center arrow"
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
			<!--		</div>-->
		</div>
	</button>
{:else if buttonType === 'confirm'}
	<button {id} on:click={handleConfirm}>
		<div
			class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] transition duration-200 bg-[#ececec] hover:bg-[#a7a6a4] -space-x-[5px] hover:space-x-[5px]"
			style={styling}
		>
			<span class="font-semibold text-lg text-black group-hover:text-white"> {buttonType} </span>
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
{:else if buttonType === 'Place Order'}
	<button {id} on:click={handlePlaceOrder}>
		<div
			class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] transition duration-200 bg-[#ececec] hover:bg-[#a7a6a4] -space-x-[5px] hover:space-x-[5px]"
			style={styling}
		>
			<span class="font-semibold text-lg text-black group-hover:text-white"> {buttonType} </span>
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
{:else}
	<button {id} on:click={handleGoHomePage}>
		<div
			class="w-[200px] h-[60px] group flex flex-row place-content-center items-center px-[5px] transition duration-200 bg-[#ececec] hover:bg-[#a7a6a4] -space-x-[5px] hover:space-x-[5px]"
			style={styling}
		>
			<span class="font-semibold text-lg text-black group-hover:text-white"> {buttonType} </span>
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
{/if}

<style>
	.button {
		transition: 0.5s;
		background-color: #ececec;
	}
	.button:hover {
		transition: 0.25s;
		background-color: #e1e1e1;
	}
	.arrow {
		transition: 0.5s;
	}
	.arrow:hover {
		transition: 0.25s;
	}
</style>
