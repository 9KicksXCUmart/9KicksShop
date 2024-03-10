<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let open: boolean;
	const close = () => {
		open = false;
	};

	let fpOpen: boolean = false;
	const closeAll = () => {
		open = false;
		fpOpen = false;
	};
</script>

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
			<div class="flex justify-end">
				<Dialog.Root bind:fpOpen>
					<Dialog.Trigger>
						<button><p class="underline text-blue-600 text-sm">Forgot Password</p></button>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Forgot Password</Dialog.Title>
						</Dialog.Header>
						<div class="grid py-4">
							<div class="grid grid-cols-4 items-center">
								<Label for="email" class="text-center">Email</Label>
								<Input id="email" value="" class="col-span-3" />
							</div>
						</div>
						<Dialog.Footer class="sm:justify-end">
							<Button href="/account/create" type="submit" on:click={closeAll}
								>SEND RESET LINK</Button
							>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
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
