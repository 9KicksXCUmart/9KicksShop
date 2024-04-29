<script lang="ts">
	import type { PageData } from './$types';
	import ResetForm from './reset-form.svelte';
	import { page } from '$app/stores';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { goto } from '$app/navigation';

	$: token = $page.url.searchParams.get('token');
	$: email = $page.url.searchParams.get('email');
	export let data: PageData;

	let isResetFailed: boolean;
	let failedMessage = '';
	let isLoading = false;
	let countDown: number;

	async function resetPassword(newPassword: string) {
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/auth/reset-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				token: token,
				newPassword: newPassword
			})
		});
		const result = await response.json();
		if (result.success) {
			isResetFailed = false;
		} else {
			isResetFailed = true;
			failedMessage = result.message;
		}
		return result;
	}

	async function handleResetPassword(e: CustomEvent<{ newPassword: string }>) {
		isLoading = true;
		const result = await resetPassword(e.detail.newPassword);
		isLoading = false;

		// if success, count down 3 seconds to redirect back to home page
		if (result.success) {
			countDown = 3;
			const intervalId = setInterval(() => {
				countDown -= 1;
				if (countDown == 0) {
					clearInterval(intervalId);
					goto('/');
				}
			}, 1000);
		}
	}
</script>

<div class="flex flex-col items-center justify-center gap-5 my-5">
	<div class="flex flex-col justify-start items-center">
		<div class="text-3xl font-bold">Reset Password</div>
		{#if isResetFailed}
			<div class="pt-5 text-red-500">
				{failedMessage}
			</div>
		{/if}
	</div>

	{#if isResetFailed || isResetFailed === undefined}
		<div class="flex justify-center mt-4 w-full">
			<ResetForm {isLoading} data={data.form} on:resetPassword={handleResetPassword} />
		</div>
	{/if}

	{#if countDown !== undefined}
		<div class="flex flex-col gap-5 items-center">
			<div class="text-xl text-green-600">Password Changed Successfully!</div>
			<div class="text-2xl">Redirect to Home Page in {countDown}...</div>
		</div>
	{/if}
</div>
