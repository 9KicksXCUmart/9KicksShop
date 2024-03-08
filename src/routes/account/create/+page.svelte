<script lang="ts">
	import type { PageData } from './$types';
	import AccountForm from './account-form.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center gap-5 my-5">
	<div class="flex justify-start">
		<div class="text-2xl font-semibold">Create your 9Kicks account</div>
	</div>
	<div class="mt-4">
		<AccountForm data={data.form} />
	</div>
</div>
