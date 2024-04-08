<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { UserRound } from 'lucide-svelte';

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
		<div class="flex items-center transition hover:opacity-50 hover:scale-105 duration-300">
			<UserRound strokeWidth={1.75} />
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
							<Button
								href="/account/create"
								class="rounded-none bg-[#D3FFD8] text-black"
								type="submit"
								on:click={closeAll}>Send Reset Link</Button
							>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
		<Dialog.Footer class="sm:justify-between">
			<Button
				href="/account/create"
				on:click={close}
				class="rounded-none bg-[#D3FFD8] text-black my-2 sm:my-0">Create an account</Button
			>
			<Button class="rounded-none bg-[#ECECEC] text-black" type="submit">Sign in</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
