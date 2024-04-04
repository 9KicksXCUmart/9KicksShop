<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<button on:click={handleClick}>
	<svg
		class="feather feather-edit cursor-pointer edit-button"
		fill="none"
		height="20"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2.5"
		viewBox="0 0 24 24"
		width="24"
		font-weight="bold"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
		<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
	</svg>
</button>

<style>
	.edit-button {
		transition: 0.3s ease-in-out;
	}
	.edit-button:hover {
		stroke: #3b82f6;
		transition: 0.3s ease-in-out;
	}
</style>
