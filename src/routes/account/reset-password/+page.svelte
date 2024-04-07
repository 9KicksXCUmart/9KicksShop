<script lang="ts">
	import type { PageData } from './$types';
	import ResetForm from './reset-form.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center gap-5 my-5">
	<div class="flex justify-start">
		<div class="text-3xl font-bold">Reset Password</div>
	</div>
	<div class="flex justify-center mt-4 w-full">
		<ResetForm data={data.form} />
	</div>
</div>
