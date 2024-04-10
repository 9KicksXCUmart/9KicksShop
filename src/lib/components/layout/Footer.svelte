<script>
	import { Instagram, Mail } from 'lucide-svelte';
</script>

<footer class="bg-[#f8fbf6] text-black py-6 h-[10rem]">
	<div class="container mx-auto flex flex-wrap justify-center">
		<!-- Navigation -->
		<div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
			<div class="flex flex-col justify-start items-center">
				<div class="text-left">
					<div class="font-semibold mb-2 text-lg">Navigation</div>

					<div class="w-max group transition duration-300 cursor-pointer">
						<a href="/" class="text-sm">Home</a>
						<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.1rem] bg-black"
						></span>
					</div>
					<div class="w-max group transition duration-300 cursor-pointer">
						<a href="/browsing" class="text-sm">Products</a>
						<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.1rem] bg-black"
						></span>
					</div>
					<div class="w-max group transition duration-300 cursor-pointer">
						<a href="/account-summary" class="text-sm">Account</a>
						<span
							class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.1rem] bg-black"
						></span>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact Information -->
		<div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
			<div class="flex flex-col justify-start items-center">
				<div class="text-left">
					<h3 class="font-semibold mb-2 text-lg">Contact Us</h3>
					<div
						class="flex flex-row items-center gap-2 hover:text-neutral-500 duration-300 cursor-pointer"
					>
						<Mail size={18} strokeWidth={1.75} />
						<p>9kicks-shop@gmail.com</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Social Media Links -->
		<div class="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
			<div class="flex flex-col justify-start items-center">
				<div class="text-left">
					<h3 class=" font-semibold mb-2 text-lg">Connect With Us</h3>
					<div class="flex space-x-4">
						<a
							href="https://www.instagram.com"
							class="text-neutral-800 hover:text-neutral-500 duration-300"
						>
							<Instagram class="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.hover-underline-animation {
		display: inline-block;
		position: relative;
		color: #585858;
	}

	.hover-underline-animation:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 0.1rem;
		bottom: 0;
		left: 0;
		background-color: #585858;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
