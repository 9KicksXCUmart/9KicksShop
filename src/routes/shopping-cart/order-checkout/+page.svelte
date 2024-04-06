<script lang="ts">
	export let data;
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import InputPanel from '$lib/components/ui/input/InputPanel_2S1L.svelte';
	import DeliveryOptionButton from '$lib/components/ui/button/DeliveryOptionButton.svelte';
	import LeftArrowButton from '$lib/components/ui/button/LeftArrowButton.svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let firstName: string;
	let lastName: string;
	let email: string;
	let country: string;
	let district: string;
	let address: string;
	let deliverOpt: string = 'Normal Delivery';

	let stripe: any = null;
	let elements: any;

	const paymentAppearance = {
		variables: {
			fontFamily: ' "Gill Sans", sans-serif',
			fontLineHeight: '1.5',
			colorBackground: '#f8fbf6'
		},
		rules: {
			'.Input': {
				padding: '0.75em 4.75em',
				borderRadius: '0px',
				lineHeight: '10px'
			},
			'.Label': {
				fontWeight: '600',
				fontSize: '1.125em'
			}
		}
	};

	const paymentOptions = {
		mode: 'payment',
		amount: data.orderSummaryData.actualPrice,
		currency: 'usd',
		paymentMethodCreation: 'manual',
		locale: 'en',
		appearance: paymentAppearance
	};

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
		elements = stripe.elements(paymentOptions);
		const paymentElement = elements.create('payment', {
			fields: {
				billingDetails: {
					address: {
						country: 'never'
					}
				}
			},
			layout: {
				type: 'tabs',
				defaultCollapsed: false,
				radios: false,
				spacedAccordionItems: false
			}
		});
		paymentElement.mount('#payment-element');
	});

	async function submit() {
		if (deliverOpt === 'Express Delivery')
			await elements.update({ amount: data.orderSummaryData.actualPrice + 15 });
		await elements.submit();
		const { error, confirmationToken } = await stripe.createConfirmationToken({
			elements,
			params: {
				payment_method_data: {
					billing_details: {
						address: {
							country: 'HK',
							state: district,
							line1: address,
							line2: deliverOpt
						},
						name: firstName + ' ' + lastName,
						email: email
					}
				}
			}
		});
		if (confirmationToken) {
			goto(`/shopping-cart/order-checkout/${confirmationToken.id}`);
		}
	}

	function onChange(event: any) {
		deliverOpt = event.detail.value;
	}

	function handleBackPage() {
		goto('/shopping-cart');
	}
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Order Checkout" />
		<!-- Return to Previous Page-->
		<div class="flex w-full h-fit px-[17%]">
			<div class="flex flex-row justify-start w-full -py-[30px]">
				<LeftArrowButton buttonType="Previous Page" on:handleBackPage={handleBackPage} />
			</div>
		</div>
		<div
			class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]"
		>
			<!-- Checkout Info Panel -->
			<div class="flex flex-col space-y-[15px] w-[60%] h-fit">
				<div class="flex flex-col space-y-[20px] w-full">
					<!-- Personal Information -->
					<InputPanel
						panelName="Personal Information"
						shortColumnName_1="First Name"
						bind:shortColumnPrefilled_1={firstName}
						shortColumnName_2="Last Name"
						bind:shortColumnPrefilled_2={lastName}
						longColumnName="Email Address"
						bind:longColumnPrefilled={email}
					/>
					<hr />
					<!-- Shipping Information -->
					<InputPanel
						panelName="Shipping Information"
						shortColumnName_1="Country"
						bind:shortColumnPrefilled_1={country}
						shortColumnName_2="State/District"
						bind:shortColumnPrefilled_2={district}
						longColumnName="Street Address"
						bind:longColumnPrefilled={address}
					/>
					<hr />

					<!-- Payment Information -->
					<div class="flex flex-col space-y-[15px]">
						<span class="text-3xl font-bold"> Payment Method </span>
						<!-- Card Number -->
						<div class="flex flex-col space-y-[10px]">
							<div id="payment-element">
								<!-- Elements will create form elements here -->
							</div>
						</div>
						<div class="flex flex-row space-x-[60px]"></div>
					</div>
					<hr />

					<!-- Delivery Option -->
					<div class="flex flex-col space-y-[15px]">
						<span class="text-3xl font-bold"> Delivery Option </span>
						<div class="flex flex-row py-[11px] space-x-[22px]">
							<DeliveryOptionButton on:changeValue={onChange} />
						</div>
					</div>
					<!-- spacer -->
					<div class="h-[60px]"></div>
				</div>
			</div>
			<!-- Summary -->
			{#if deliverOpt === 'Express Delivery'}
				<SummaryPanel
					totalItemPrice={data.orderSummaryData.totalPrice}
					totalPrice={data.orderSummaryData.actualPrice + 15}
					itemCount={data.orderSummaryData.itemCount}
					shippingFee={data.orderSummaryData.shippingFee + 15}
					discount={data.orderSummaryData.discount}
					buttonType="confirm"
					on:createConfirmToken={submit}
				/>
			{:else}
				<SummaryPanel
					totalItemPrice={data.orderSummaryData.totalPrice}
					totalPrice={data.orderSummaryData.actualPrice}
					itemCount={data.orderSummaryData.itemCount}
					shippingFee={data.orderSummaryData.shippingFee}
					discount={data.orderSummaryData.discount}
					buttonType="confirm"
					on:createConfirmToken={submit}
				/>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
