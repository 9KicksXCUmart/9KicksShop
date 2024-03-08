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
	<div class="flex flex-col sm:grid sm:grid-cols-2 gap-4">
		<Form.Field {form} name="firstName">
			<Form.Control let:attrs>
				<Form.Label>First name</Form.Label>
				<Input {...attrs} bind:value={$formData.firstName} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="lastName">
			<Form.Control let:attrs>
				<Form.Label>Last name</Form.Label>
				<Input {...attrs} bind:value={$formData.lastName} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email Address</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.Description>The length of password must be at least 8</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
	</div>
	<div class="max-w-xl my-4 sm:flex sm:justify-end">
		<Form.Button class="w-full sm:w-auto">Continue</Form.Button>
	</div>
</form>
