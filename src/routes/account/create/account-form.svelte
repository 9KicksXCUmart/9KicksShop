<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { PUBLIC_GO_BACKEND_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';
	import { emailStore } from '$store/createAccountStore';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	let isLoading: boolean = false;
	let failedMessage: string = '';

	// $formData.password = "colin123"
	// $formData.email = "bcheng8798@gmail.com"

	async function signUp() {
		isLoading = true;
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($formData)
		});
		const result = await response.json();
		isLoading = false;
		if (result.success) {
			emailStore.set($formData.email);
			await goto('/account/create/almost-done');
		} else {
			failedMessage = result.message;
		}
		return result.data;
	}
</script>

<form class="max-w-xl" method="POST" use:enhance>
	<div class="flex flex-col sm:grid sm:grid-cols-2 gap-4">
		<Form.Field {form} name="firstName">
			<Form.Control let:attrs>
				<Form.Label>First name</Form.Label>
				<Input {...attrs} bind:value={$formData.firstName} class="bg-gray-50" />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="lastName">
			<Form.Control let:attrs>
				<Form.Label>Last name</Form.Label>
				<Input {...attrs} bind:value={$formData.lastName} class="bg-gray-50" />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email Address</Form.Label>
				<Input {...attrs} bind:value={$formData.email} class="bg-gray-50" />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} bind:value={$formData.password} type="password" class="bg-gray-50" />
			</Form.Control>
			<Form.Description>The length of password must be at least 8</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
	</div>
	<div class="max-w-xl my-4 sm:flex sm:justify-end flex items-center">
		{#if !isLoading}
			<div class="flex flex-col items-end gap-2">
				{#if failedMessage !== ''}
					<div class="text-red-500">
						{failedMessage}
					</div>
				{/if}
				<button on:click={() => signUp()}>
					<Form.Button class="w-full sm:w-auto bg-[#ECECEC] hover:bg-[#d4d4d4] text-gray-500"
						>Continue</Form.Button
					>
				</button>
			</div>
		{:else}
			<LoadingCircle size="30" />
		{/if}
	</div>
</form>
