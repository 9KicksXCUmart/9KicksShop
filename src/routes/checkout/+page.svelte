<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { Elements, CardNumber, CardExpiry, CardCvc, Address } from 'svelte-stripe';
	import { paymentMethodId } from '../../store/paymentStore';

	let stripe: any = null;
	let error: any = null;
	let cardElements: any;
	let cardElement: any;
	let name: any;
	let processing: boolean = false;

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});

	async function submit() {
		// avoid processing duplicates
		if (processing) return;
		processing = true;
		await cardElements.submit();
		const result = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
			billing_details: {
				name: 'test'
			}
		});
		//TODO: add handleOrderInfo api
		if (result.error) {
			// payment failed, notify user
			error = result.error;
			processing = false;
		} else {
			paymentMethodId.set(result.paymentMethod.id);
			goto('/order_confirm');
		}
	}
</script>

{#if error}
	<p class="error">{error.message} Please try again.</p>
{/if}
<h1>Order Check Out</h1>
<Elements {stripe} bind:elements={cardElements}>
	<form on:submit|preventDefault={submit}>
		<input name="name" bind:value={name} placeholder="Your name" disabled={processing} />
		<CardNumber bind:element={cardElement} classes={{ base: 'input' }} />
		<div class="row">
			<CardExpiry classes={{ base: 'input' }} />
			<CardCvc classes={{ base: 'input' }} />
		</div>
		<button disabled={processing}> Pay </button>
	</form>
</Elements>

<style>
	.error {
		color: tomato;
		margin: 2rem 0 0;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 2rem 0;
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: 5px;
	}

	input,
	:global(.input) {
		border: solid 1px var(--gray-color);
		padding: 1rem;
		border-radius: 5px;
		background: white;
	}

	.row :global(.input) {
		width: 20%;
	}

	button {
		padding: 1rem;
		border-radius: 5px;
		border: solid 1px #ccc;
		color: black;
		background: var(--link-color);
		font-size: 1.2rem;
		margin: 1rem 0;
	}
</style>
