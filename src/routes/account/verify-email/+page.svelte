<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';


	$: token = $page.url.searchParams.get('token');
	$: email = $page.url.searchParams.get('email');
	let countDown: number;
	let isLoading: boolean = true;
	let isVerified: boolean;
	let failedMessage: string;

	onMount(() => {
			handleVerifyEmail()
		}
	);

	async function handleVerifyEmail() {
		isLoading = true;
		const result = await verifyEmail();
		isLoading = false;
		console.log(result.success)
		isVerified = result.success;
		failedMessage = result.message;

		if (isVerified) {
			countDown = 3;
			const intervalId = setInterval(() => {
				console.log(countDown);
				countDown -= 1;
				if (countDown == 0) {
					clearInterval(intervalId);
					goto('/');
				}
			}, 1000);
		}
	}

	async function verifyEmail() {
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/auth/verify-email`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				token: token
			})
		});
		return await response.json();
	}

</script>

<div class="flex flex-col items-center justify-center gap-5 my-5">
	<div class="flex flex-col justify-start items-center">
		<div class="text-3xl font-bold">Verify Email</div>
	</div>

	{#if isLoading}
		<div>Verifying Email...</div>
		<LoadingCircle />
	{:else}
		{#if isVerified === true}
			<div class="flex flex-col gap-5 items-center">
				<div class="text-xl text-green-600">Email Successfully Verified!</div>
				<div class="text-2xl">Redirect to Home Page in {countDown}...</div>
			</div>
		{:else if isVerified === false }
			{#if failedMessage}
				<div class="pt-5 text-2xl text-red-500">
					{failedMessage}
				</div>
			{/if}
		{/if}
	{/if}

</div>