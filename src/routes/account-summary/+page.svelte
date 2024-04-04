<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import OrderHistoryCard from '$lib/components/ui/account-summary/OrderHistoryCard.svelte';
	import SummaryCard from '$lib/components/ui/account-summary/SummaryCard.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import type { User } from '$lib/model/User';
	import type { OrderHistoryItem } from '$lib/model/OrderHistoryItem';

	export let data: PageData;

	data.jwtToken =
		'';

	let userProfile: User;
	let orderHistory = [] as OrderHistoryItem[];

	onMount(async () => {
		userProfile = await getUserProfileDetails();
		orderHistory = await getOrderHistory();
	});

	async function getUserProfileDetails() {
		const response = await fetch(`${PUBLIC_BACKEND_URL}/api/v1/account-summary`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${data.jwtToken}`
			},
			credentials: 'include'
		});
		const result = await response.json();
		return result.data;
	}

	async function getOrderHistory() {
		const response = await fetch(`${PUBLIC_BACKEND_URL}/api/v1/account-summary/order-history`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${data.jwtToken}`
			},
			credentials: 'include'
		});
		const result = await response.json();
		return result.data;
	}

	async function updateUserProfileDetails(userUpdateDTO: any) {
		const response = await fetch(`${PUBLIC_BACKEND_URL}/api/v1/update-profile`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${data.jwtToken}`
			},
			credentials: 'include',
			body: JSON.stringify(userUpdateDTO)
		});
		const result = await response.json();
		return result.data;
	}

	function routeToOrderDetail(e: CustomEvent<{ orderId: string; replaceState: boolean }>) {
		goto(`account-summary/${e.detail.orderId}`, { replaceState: e.detail.replaceState });
	}

</script>

<div>
	<TextBanner text="Account Summary" />
	<div class="flex flex-col place-items-center w-full h-fit px-[17%]">
		<div class="flex flex-col justify-center items-center gap-5 flex-grow self-stretch mb-5">
			{#if userProfile}
				<SummaryCard
					isEditable={true}
					cardTitle="Personal Info"
					cardItemMap={new Map([
						['First Name', userProfile.firstName],
						['Last Name', userProfile.lastName],
						['Email Addresss', userProfile.email],
						['Password', '****']
					])}
				/>
				<SummaryCard
					isEditable={true}
					cardTitle="Shipping Info"
					cardItemMap={new Map([
						['Street Address', userProfile.shippingAddress.streetAddress],
						['District', userProfile.shippingAddress.district]
					])}
				/>
				<SummaryCard
					isEditable={true}
					cardTitle="Payment Method"
					cardItemMap={new Map([['Card Number', '***']])}
				/>

				<OrderHistoryCard
					on:routeToOrderDetail={routeToOrderDetail}
					cardTitle="Order Status"
					subTitleList={['Order No.', 'Order Date', 'Order Status', 'Total Price']}
					orderList={orderHistory}
				/>
			{/if}
		</div>
	</div>
</div>
