<script>
	import { ShoppingBag } from 'lucide-svelte';
</script>

<!-- Bottom NavBar -->
<nav class="flex justify-center bg-[#f8fbf6]">
	<div class="flex items-center justify-between text-lg px-[17%] pb-[0.5%] w-full">
		<ul class="flex flex-row items-center justify-center font-semibold gap-5">
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button>New Arrivals</button>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button>Mens'</button>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button>Womens'</button>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
			<li class="relative pr-3 py-2">
				<div class="w-max group transition duration-300 cursor-pointer">
					<button>Kids'</button>
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.15rem] bg-black"
					></span>
				</div>
			</li>
		</ul>
		<a href="/shopping-cart" class="duration-200">
			<ShoppingBag strokeWidth={1.75} class="hover:opacity-50 hover:scale-105 duration-300" />
		</a>
	</div>
</nav>
