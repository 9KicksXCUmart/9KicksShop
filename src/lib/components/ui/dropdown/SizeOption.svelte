<script>
	export let menuItems;
	export let selectedSize = 10.0;

	let category = 'Size';
	let buttonText = 'US 10.0';
	let menuOpen = false;

	const updateButtonText = (newText) => {
		selectedSize = newText;
		menuOpen = false;
		return (buttonText = `US ${newText}`);
	};
</script>

<!-- Dropdown Menu-->
<div class="relative">
	<!-- Control Button -->
	<button id="menu-button" type="button" on:click={() => (menuOpen = !menuOpen)} {menuOpen}>
		<div
			class="flex flex-row justify-between items-center px-[20px] py-[10px] w-[349px] h-[53px] bg-[#ececec]"
		>
			<span style="font-size:25px"> {category} </span>
			<div class="flex flex-row">
				<span class="text-xl"> {buttonText} </span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#000000"
					stroke-width="1.5"
					stroke-linecap="square"
					stroke-linejoin="arcs"
					aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg
				>
			</div>
		</div>
	</button>

	<div
		class:show={menuOpen}
		class="absolute hidden focus:outline-none max-h-[159px] overflow-scroll"
		role="menu"
		tabindex="-1"
	>
		<div>
			{#each menuItems as { size, quantity }}
				<button id="menu-button" type="button" on:click={updateButtonText(size)}>
					<div
						class="flex flex-row block justify-between items-center px-[20px] py-[10px] w-[349px] h-[53px] bg-[#ececec] hover:bg-[#a6a6a6]"
					>
						<span class="text-xl"> US {size} </span>
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
