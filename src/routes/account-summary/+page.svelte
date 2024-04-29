<script lang="ts">
	import { PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import OrderHistoryCard from '$lib/components/ui/account-summary/OrderHistoryCard.svelte';
	import SummaryCard from '$lib/components/ui/account-summary/SummaryCard.svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import type { User } from '$lib/model/User';
	import type { OrderHistoryItem } from '$lib/model/OrderHistoryItem';
	import type { UpdateValueMap } from '$lib/model/UpdateValueMap';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import LoadingCircle from '$lib/components/ui/loading/LoadingCircle.svelte';

	export let data: PageData;

	let userProfile: User;
	let orderHistory = [] as OrderHistoryItem[];
	let isLoading = false;

	let isLoaded = false;

	// get user details and order history from API on load
	onMount(async () => {
		const result = await Promise.all([getUserProfileDetails(), getOrderHistory()]);
		userProfile = result[0];
		orderHistory = result[1];
		isLoaded = true;
	});

	async function getUserProfileDetails() {
		const response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/account-summary`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${data.jwtToken}`
			}
		});
		const result = await response.json();
		return result.data;
	}

	async function getOrderHistory() {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/account-summary/order-history`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				}
			}
		);
		const result = await response.json();
		return result.data;
	}

	async function updateUserProfileDetails(userUpdateDTO: any) {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/account-summary/update-profile`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				},
				body: JSON.stringify(userUpdateDTO)
			}
		);
		isLoading = true;
		const result = await response.json();
		userProfile = await getUserProfileDetails();
		isLoading = false;
		return result.data;
	}

	async function handleUpdateProfile(e: CustomEvent<UpdateValueMap>) {
		const updateValue = e.detail;
		const userUpdateDTO = {
			email: updateValue['Email Address'],
			password: updateValue['Password '],
			firstName: updateValue['First Name'],
			lastName: updateValue['Last Name'],
			shippingAddress: {
				streetAddress: updateValue['Street Address'],
				district: updateValue['District ']
			}
		};
		removeEmptyFields(userUpdateDTO);
		if (Object.entries(userUpdateDTO).length > 0) {
			await updateUserProfileDetails(userUpdateDTO);
		}
	}

	// helper function to remove fields of object from use update DTO if the value of the key-value pair is empty
	function removeEmptyFields(obj: any) {
		Object.keys(obj).forEach((key) => {
			if (obj[key] === '') {
				delete obj[key];
			} else if (typeof obj[key] === 'object') {
				removeEmptyFields(obj[key]);
				if (Object.keys(obj[key]).length === 0) {
					delete obj[key];
				}
			}
		});
	}

	function routeToOrderDetail(e: CustomEvent<{ orderId: string; replaceState: boolean }>) {
		goto(`account-summary/${e.detail.orderId}`, { replaceState: e.detail.replaceState });
	}
</script>

<div>
	<TextBanner text="Account Summary" />
	<div class="flex flex-col place-items-center w-full h-fit px-[17%]">
		{#if isLoaded}
			<div class="flex flex-col justify-center items-center gap-5 flex-grow self-stretch mb-5">
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<SummaryCard
							{isLoading}
							on:updateProfile={handleUpdateProfile}
							isEditable={true}
							cardTitle="Personal Info"
							cardItemMap={new Map([
								['First Name', userProfile.firstName],
								['Last Name', userProfile.lastName],
								['Email Address', userProfile.email],
								['Password ', '***']
							])}
						/>
					</div>
				</Motion>
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.25, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<SummaryCard
							{isLoading}
							on:updateProfile={handleUpdateProfile}
							isEditable={true}
							cardTitle="Shipping Info"
							cardItemMap={new Map([
								['Street Address', userProfile.shippingAddress.streetAddress],
								['District ', userProfile.shippingAddress.district]
							])}
						/>
					</div>
				</Motion>

				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<SummaryCard
							{isLoading}
							on:updateProfile={handleUpdateProfile}
							isEditable={true}
							cardTitle="Payment Method"
							cardItemMap={new Map([
								['Card Type', 'Visa'],
								['Card Number', '**** 4242']
							])}
						/>
					</div>
				</Motion>
				<Motion
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.75, duration: 1, ease: 'easeInOut' }}
					let:motion
				>
					<div class="w-full" use:motion>
						<OrderHistoryCard
							on:routeToOrderDetail={routeToOrderDetail}
							cardTitle="Order Status"
							subTitleList={['Order No.', 'Order Date', 'Order Status', 'Total Price']}
							orderList={orderHistory}
						/>
					</div>
				</Motion>
			</div>
		{:else}
			<LoadingCircle />
		{/if}
	</div>
</div>
