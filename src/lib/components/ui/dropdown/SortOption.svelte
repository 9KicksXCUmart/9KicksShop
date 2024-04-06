<script>
	export let menuItems;

	let menuOpen = false;
	let buttonText = 'Default';

	const updateButtonText = (newText) => {
		return (buttonText = newText);
	};
</script>

<!-- Dropdown Menu-->
<div class="relative">
	<!-- Control Button -->
	<button id="menu-button" type="button" on:click={() => (menuOpen = !menuOpen)} {menuOpen}>
		<div
			class="flex flex-row justify-between items-center px-[10px] w-[210px] h-[45px] bg-[#ececec]"
		>
			<span class="text-sm font-bold"> {buttonText} </span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="square"
				stroke-linejoin="arcs"
				aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg
			>
		</div>
	</button>

	<div class:show={menuOpen} class="absolute hidden focus:outline-none" role="menu" tabindex="-1">
		<div>
			{#each menuItems as item}
				<button id="menu-button" type="button" on:click={updateButtonText(item)}>
					<div
						class="flex flex-row block justify-between items-center px-[10px] w-[210px] h-[45px] bg-[#ececec]"
					>
						<span class="text-sm"> {item} </span>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.show {
		display: block;
	}
</style>
