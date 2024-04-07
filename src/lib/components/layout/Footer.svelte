<script>
	import { Instagram } from 'lucide-svelte';
</script>

<footer class="bg-fgray text-black py-6 min-h-dvh">
	<div class="container mx-auto flex flex-wrap justify-center">
		<!-- Navigation -->
		<div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
			<div class="flex flex-col justify-start items-center">
				<div class="text-left">
					<div class="font-semibold mb-2">Navigation</div>
					<div><a href="/" class="hover:text-neutral-300 text-sm">Home</a></div>
					<div><a href="/products" class="hover:text-neutral-300 text-sm">Products</a></div>
				</div>
			</div>
		</div>

		<!-- Contact Information -->
		<div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
			<div class="flex flex-col justify-start items-center">
				<div class="text-left">
					<h3 class="font-semibold mb-2">Contact Us</h3>
					<p>Email: 9kicks-shop@gmail.com</p>
				</div>
			</div>
		</div>

		<!-- Social Media Links -->
		<div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
			<div class="flex flex-col justify-start items-center">
				<div class="text-left">
					<h3 class=" font-semibold mb-2">Connect With Us</h3>
					<div class="flex space-x-4">
						<a href="https://www.instagram.com" class="text-neutral-800 hover:text-neutral-300">
							<Instagram class="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
