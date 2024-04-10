<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { emailStore } from '$store/createAccountStore';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	let isLoading = false;
	let sentMessage: string;

	async function resendLink() {
		isLoading = true;
		const response = await fetch(
			`${PUBLIC_GO_BACKEND_URL}/v1/auth/resend-email?` +
				new URLSearchParams({ email: $emailStore.toString() }).toString(),
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const result = await response.json();
		isLoading = false;
		if (result.success) {
			sentMessage = result.message;
		}
		return result.data;
	}
</script>

<div class="flex flex-col items-center justify-center gap-5 my-5">
	<div class="flex justify-start">
		<div class="text-3xl font-bold">Verify Account</div>
	</div>
	<div class="flex flex-col gap-4 w-96">
		<p class="text-gray-500">
			Almost there! Check your email for instructions to verify and activate your new account.
		</p>
		<p class="text-lg font-semibold">Didn't get an email?</p>
		<p class="text-gray-500">
			Make sure to check your spam or promotion folder. Please note, it may take up to 2-3 minutes
			for it to arrive.
		</p>
		{#if !isLoading}
			<Button
				class="bg-white text-black border-2 border-black hover:bg-gray-100"
				on:click={() => {
					resendLink();
				}}
				>RESEND LINK
			</Button>
			{#if sentMessage !== undefined}
				<div class="text-green-500">{sentMessage}</div>
			{/if}
		{:else}
			<div class="flex flex-col items-center w-full">
				<LoadingCircle />
			</div>
		{/if}
	</div>
</div>
