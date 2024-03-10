<script lang="ts">
	import { Button } from '$lib/components/ui/button';
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
			Make sure to check your spam or promotion folder. Plese note, it may take up to 2-3 minutes
			for it to arrive.
		</p>
		<Button class="bg-white text-black border-2 border-black hover:bg-gray-100">RESEND LINK</Button>
	</div>
</div>
