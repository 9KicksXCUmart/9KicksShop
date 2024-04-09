<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { UserRound } from 'lucide-svelte';
	import { PUBLIC_GO_BACKEND_URL, PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';
	import { loggedIn, userFirstName } from '$store/loginStore';
	import { goto } from '$app/navigation';

	export let open: boolean;
	const close = () => {
		open = false;
		isFailedLogin = false;
	};

	let fpOpen: boolean = false;
	const closeAll = () => {
		open = false;
		fpOpen = false;
	};

	let emailInput: string = '';
	let passwordInput: string = '';
	let isLoadingSignIn: boolean = false;
	let forgotPasswordEmail: string;

	let isFailedLogin: boolean;
	let failedMessage: string;

	async function signIn() {
		isLoadingSignIn = true;
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: emailInput, password: passwordInput })
		});
		const result = await response.json();
		if (result.success) {
			document.cookie = `jwt=${result.token};SameSite=None;Secure`;
			const firstName = await getUserFirstName(result.token);
			loggedIn.set(true);
			userFirstName.set(firstName);
			close();
		} else {
			isFailedLogin = true;
			failedMessage = result.message;
		}
		isLoadingSignIn = false;
		return result.data;
	}

	async function getUserFirstName(jwtToken: string) {
		const response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/account-summary`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			}
		});
		const result = await response.json();
		return result.data.firstName;
	}

	async function forgotPassword() {
		const response = await fetch(
			`${PUBLIC_GO_BACKEND_URL}/v1/auth/forgot-password?` +
				new URLSearchParams({ email: forgotPasswordEmail.toString() }).toString(),
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const result = await response.json();
		console.log(result);
		return result.data;
	}

	async function handleForgotPassword() {
		await forgotPassword();
		closeAll();
		// await goto("/account/reset-password")
	}
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
				<Input id="email" bind:value={emailInput} class="col-span-3 bg-gray-100" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="password" class="text-right">Password</Label>
				<Input
					type="password"
					id="password"
					bind:value={passwordInput}
					class="col-span-3 bg-gray-100"
				/>
			</div>
			{#if isFailedLogin}
				<div class="grid grid-cols-4 items-center gap-4 text-red-500">
					<div></div>
					<div class="w-max">{failedMessage}</div>
				</div>
			{/if}

			<div class="flex justify-end">
				<Dialog.Root bind:fpOpen>
					<Dialog.Trigger>
						<button class="w-max group text-sky-600 transition duration-300 cursor-pointer">
							Forgot Password
							<span
								class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
							></span>
						</button>
					</Dialog.Trigger>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Forgot Password</Dialog.Title>
						</Dialog.Header>
						<div class="grid py-4">
							<div class="grid grid-cols-4 items-center">
								<Label for="email" class="text-center">Email</Label>
								<Input id="email" bind:value={forgotPasswordEmail} class="col-span-3 bg-gray-100" />
							</div>
						</div>
						<Dialog.Footer class="sm:justify-end">
							<Button
								class="rounded-none bg-[#ebffdb] text-black hover:bg-[#e6f8d8]"
								type="submit"
								on:click={() => {
									handleForgotPassword();
								}}>Send Reset Link</Button
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
				class="rounded-none bg-[#ebffdb] text-black my-2 sm:my-0 hover:bg-[#e6f8d8]"
				>Create an account</Button
			>
			<div class="flex items-center">
				{#if isLoadingSignIn}
					<LoadingCircle size="30" />
				{:else}
					<Button
						class="rounded-none bg-[#ECECEC] text-black hover:bg-[#d4d4d4]"
						type="submit"
						on:click={() => {
							signIn();
						}}
						>Sign in
					</Button>
				{/if}
			</div>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<style>
</style>
