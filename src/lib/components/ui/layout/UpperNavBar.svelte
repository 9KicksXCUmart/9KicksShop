<script>
	import Logo from '$lib/client/images/logo.png';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	let open = false;
	const close = () => {
		open = false;
	};
</script>

<!-- Top NavBar -->
<nav class="flex items-center justify-between font-roboto bg-fgray px-2 py-3">
	<a href="/"
		><img src={Logo} alt="9Kicks" class="h-[50px] hidden sm:flex" /><img
			src={Logo}
			alt="9Kicks"
			class="h-[30px] sm:hidden flex"
		/></a
	>

	<form class="w-full ml-8 mr-5">
		<div
			class="relative flex flex-row items-center justify-between text-gray-400 focus-within:text-gray-600"
		>
			<button type="submit" class="absolute">
				<svg
					class="h-4 w-4 ml-3 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 56.966 56.966"
					style="enable-background:new 0 0 56.966 56.966;"
					xml:space="preserve"
					width="512px"
					height="512px"
				>
					<path
						d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
					/>
				</svg>
			</button>
			<Input
				placeholder="Search"
				class="pl-10 pr-3 font-semibold placeholder-gray-500 text-black"
			/>
		</div>
	</form>

	<Dialog.Root bind:open>
		<Dialog.Trigger>
			<div
				class="flex items-center transition duration-150 border-b-4 border-transparent hover:border-black"
			>
				<svg
					class="w-5 h-5 fill-current"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					width="200"
					height="200"
					><path
						d="M512 566.613c138.809 0 251.449-112.64 251.449-251.449 0-138.808-112.64-251.448-251.449-251.448s-251.449 112.64-251.449 251.448c0 138.81 112.64 251.45 251.449 251.45z m0-446.009c106.951 0 194.56 87.61 194.56 194.56S618.951 509.724 512 509.724s-194.56-87.608-194.56-194.56 87.609-194.56 194.56-194.56z m357.262 577.992c-86.47-52.338-207.075-78.507-357.262-78.507s-270.791 26.169-357.262 78.507c-50.062 29.582-80.782 84.195-80.782 141.084v94.436c0 15.928 12.515 28.444 28.444 28.444h819.2c15.929 0 28.444-12.516 28.444-28.444V839.68c0-56.889-30.72-111.502-80.782-141.084z m23.894 207.075H130.844V839.68c0-37.547 20.48-72.818 52.338-93.298C260.552 699.733 372.053 675.84 512 675.84c139.947 0 250.311 23.893 328.818 70.542 32.995 19.342 52.338 54.614 52.338 93.298v65.991z"
					></path></svg
				>

				<button class="whitespace-nowrap pl-2 pr-1 font-semibold">Sign in</button>
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Sign in</Dialog.Title>
				<Dialog.Description>Welcome back to 9Kicks</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="email" class="text-right">Email</Label>
					<Input id="email" value="" class="col-span-3" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="password" class="text-right">Password</Label>
					<Input id="password" value="" class="col-span-3" />
				</div>
			</div>
			<Dialog.Footer class="sm:justify-between">
				<Button href="/account/create" on:click={close} class="bg-dark_cyan text-fgray my-2 sm:my-0"
					>Create an account</Button
				>
				<Button type="submit">Sign in</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</nav>
