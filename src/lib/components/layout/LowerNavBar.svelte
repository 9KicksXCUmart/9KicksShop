<script lang="ts">
	import { ShoppingBag, X } from 'lucide-svelte';
	import { loggedIn } from '$store/loginStore';
	import { categoryStore } from '$store/searchKeywordStore.js';
	import { goto } from '$app/navigation';

	function handleOnClick(keyword: string) {
		categoryStore.set(keyword);
		goto('/browsing');
	}
</script>

<!-- Bottom NavBar -->
<nav class="flex justify-center bg-[#f8fbf6]">
	<div class="flex items-center justify-between text-lg px-[17%] pb-[0.5%] w-full">
		<ul class="flex flex-row items-center justify-center font-semibold gap-5">
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<a href="/browsing">New Arrivals</a>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button
						on:click={() => {
							handleOnClick("Men's");
						}}>Men's</button
					>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button
						on:click={() => {
							handleOnClick("Women's");
						}}>Women's</button
					>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button
						on:click={() => {
							handleOnClick("Kid's");
						}}>Kid's</button
					>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
		</ul>

		{#if $loggedIn}
			<a href="/shopping-cart" class="duration-200">
				<ShoppingBag strokeWidth={1.75} class="hover:opacity-50 hover:scale-105 duration-300" />
			</a>
		{:else}
			<div class="duration-200">
				<X strokeWidth={1.75} class="absolute text-red-400" />
				<ShoppingBag strokeWidth={1.75} />
			</div>
		{/if}
	</div>
</nav>
