<script>
	import Logo from '$lib/client/images/logo.png';

	const pieces = [
		{
			id: 1,
			name: 'Moon'
		},
		{
			id: 2,
			name: 'Sun'
		},
		{
			id: 3,
			name: 'Earth'
		}
	];
</script>

<!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->

<nav class="container mx-auto px-4 py-4 flex items-center justify-between bg-stone-400 max-w-full">
	<a href="/"
		><img src={Logo} alt="9Kicks" class="h-[70px] hidden sm:flex" /><img
			src={Logo}
			alt="9Kicks"
			class="h-[30px] sm:hidden flex"
		/></a
	>

	<ul class="flex flex-row items-center justify-center font-semibold">
		<li class="relative px-3 py-2">
			<button class="hover:opacity-50">New Arrivals</button>
		</li>
		<li class="relative px-3 py-2">
			<button class="hover:opacity-50">Men's</button>
		</li>
		<li class="relative px-3 py-2">
			<button class="hover:opacity-50">Women's</button>
		</li>
		<li class="relative px-3 py-2">
			<button class="hover:opacity-50">Kids'</button>
		</li>
		<li class="relative px-3 py-2">
			<button class="hover:opacity-50">Brands</button>
		</li>
	</ul>

	<ul class="flex items-center justify-center font-semibold">
		<li class="relative">
			<button>Sign in</button>
		</li>
	</ul>
</nav>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
