<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form class="max-w-xl" method="POST" use:enhance>
	<div class="flex flex-col gap-4">
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="newPassword">
			<Form.Control let:attrs>
				<Form.Label>New Password</Form.Label>
				<Input {...attrs} bind:value={$formData.newPassword} />
			</Form.Control>
			<Form.Description>The length of password must be at least 8</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="confirmNewPassword">
			<Form.Control let:attrs>
				<Form.Label>Confirm New Password</Form.Label>
				<Input {...attrs} bind:value={$formData.confirmNewPassword} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<div class="max-w-xl my-4 sm:flex sm:justify-end">
			<Form.Button class="w-full sm:w-auto">Done</Form.Button>
		</div>
	</div>
</form>
