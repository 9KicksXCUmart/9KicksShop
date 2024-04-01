<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { paymentMethodId } from '../../store/paymentStore';

	let stripe: any = null;
	let data: any = null;
	let clientSecret: any;
	let paymentMethodToken: any;

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
		paymentMethodId.subscribe((id) => (paymentMethodToken = id));
		data = await summarizePayment();
		clientSecret = data.clientSecret;
	});
	async function summarizePayment() {
		const response = await fetch('http://localhost:8080/api/v1/payment/summarize-payment', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ paymentMethodId: paymentMethodToken, totalPrice: 100 })
		});
		const result = await response.json();
		return result.data;
	}

	async function submit() {
		// confirm payment with stripe
		const result = await stripe.confirmCardPayment(clientSecret);
		if (result.error) {
		} else {
			// call backend to process the createOrder and ClearShoppingCart
			goto('order_success');
		}
	}
</script>

{#if clientSecret}
	<p>{data.brand}</p>
	<p>{data.exp_month}</p>
	<p>{data.exp_year}</p>
	<p>{data.last4}</p>
	<button on:click={() => submit()}>Confirm</button>
{/if}

<style>
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
