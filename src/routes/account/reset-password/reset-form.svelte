<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { createEventDispatcher } from 'svelte';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	export let isLoading: boolean;

	const dispatch = createEventDispatcher();

	function resetPassword() {
		dispatch('resetPassword', {
			newPassword: $formData.newPassword
		});
	}

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form class="max-w-lg w-3/4 sm:w-full" method="POST" use:enhance>
	<div class="flex flex-col gap-4">
		<!--		<Form.Field {form} name="password">-->
		<!--			<Form.Control let:attrs>-->
		<!--				<Form.Label>Password</Form.Label>-->
		<!--				<Input {...attrs} bind:value={$formData.password} class="bg-gray-100" />-->
		<!--			</Form.Control>-->
		<!--			<Form.FieldErrors />-->
		<!--		</Form.Field>-->
		<Form.Field {form} name="newPassword">
			<Form.Control let:attrs>
				<Form.Label>New Password</Form.Label>
				<Input {...attrs} bind:value={$formData.newPassword} type="password" class="bg-gray-100" />
			</Form.Control>
			<Form.Description>The length of password must be at least 8</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="confirmNewPassword">
			<Form.Control let:attrs>
				<Form.Label>Confirm New Password</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.confirmNewPassword}
					type="password"
					class="bg-gray-100"
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		{#if isLoading}
			<div class="flex flex-col items-end my-4">
				<LoadingCircle size="30" />
			</div>
		{:else}
			<button class="max-w-xl my-4 sm:flex sm:justify-end" on:click={resetPassword}>
				<Form.Button class="w-full sm:w-auto text-black bg-[#ebffdb] hover:bg-[#e6f8d8]"
					>Done</Form.Button
				>
			</button>
		{/if}
	</div>
</form>
