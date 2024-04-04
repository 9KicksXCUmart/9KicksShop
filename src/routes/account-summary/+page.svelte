<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import OrderHistoryCard from '$lib/components/ui/account-summary/OrderHistoryCard.svelte';
	import SummaryCard from '$lib/components/ui/account-summary/SummaryCard.svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import type { User } from '$lib/model/User';
	import type { OrderHistoryItem } from '$lib/model/OrderHistoryItem';
	import type { UpdateValueMap } from '$lib/model/UpdateValueMap';
	import { Circle } from 'svelte-loading-spinners';
	export let data: PageData;

	// data.jwtToken =
	// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIyNTA3MTMsImVtYWlsIjoibG9jb2xpbjk5QGdtYWlsLmNvbSIsInVzZXJJRCI6ImM3YWNlNDdhLWFkZjktNDE4Mi05YWRmLTk0YTI0YWE0YjRkYyJ9.KoLgDL0uqyJd6UrV1TCAKvT8pF9MAV-ey0r8NWEoFwE';

	let userProfile: User;
	let orderHistory = [] as OrderHistoryItem[];
	let isLoading = false;

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
			}
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
			}
		});
		const result = await response.json();
		return result.data;
	}

	async function updateUserProfileDetails(userUpdateDTO: any) {
		const response = await fetch(`${PUBLIC_BACKEND_URL}/api/v1/account-summary/update-profile`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${data.jwtToken}`
			},
			body: JSON.stringify(userUpdateDTO)
		});
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
			// creditCardNumber: updateValue[],
			// creditCardType: updateValue[]
		};
		removeEmptyFields(userUpdateDTO);
		if(Object.entries(userUpdateDTO).length > 0){
			await updateUserProfileDetails(userUpdateDTO);
		}
	}

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
		<div class="flex flex-col justify-center items-center gap-5 flex-grow self-stretch mb-5">
			{#if userProfile}
				<SummaryCard
					isLoading={isLoading}
					on:updateProfile={handleUpdateProfile}
					isEditable={true}
					cardTitle="Personal Info"
					cardItemMap={new Map([
						['First Name', userProfile.firstName],
						['Last Name', userProfile.lastName],
						['Email Address', userProfile.email],
						['Password ', '****']
					])}
				/>
				<SummaryCard
				isLoading={isLoading}
				
					on:updateProfile={handleUpdateProfile}
					isEditable={true}
					cardTitle="Shipping Info"
					cardItemMap={new Map([
						['Street Address', userProfile.shippingAddress.streetAddress],
						['District ', userProfile.shippingAddress.district]
					])}
				/>
				<SummaryCard
				isLoading={isLoading}

					on:updateProfile={handleUpdateProfile}
					isEditable={true}
					cardTitle="Payment Method"
					cardItemMap={new Map([
						['Card Type', 'Master'],
						['Card Number', '***']
					])}
				/>

				<OrderHistoryCard
					on:routeToOrderDetail={routeToOrderDetail}
					cardTitle="Order Status"
					subTitleList={['Order No.', 'Order Date', 'Order Status', 'Total Price']}
					orderList={orderHistory}
				/>
			{:else}
				<Circle size="40" color="#d2e8c3" unit="px" duration="1s" />
			{/if}
		</div>
	</div>
</div>
