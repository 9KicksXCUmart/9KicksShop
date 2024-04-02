<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import SummaryCard from '$lib/components/ui/account-summary/SummaryCard.svelte';

	const authToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIwNTQ5NDcsImVtYWlsIjoibG9jb2xpbjk5QGdtYWlsLmNvbSIsInVzZXJJRCI6ImM3YWNlNDdhLWFkZjktNDE4Mi05YWRmLTk0YTI0YWE0YjRkYyJ9.yDG9b-mMnlZUofawo5x5dndR0o6l6nu20KpZjKGfeK4';

	type User = {
		email: string;
		firstName: string;
		isVerified: boolean;
		lastName: string;
		password: string;
		shippingAddress: {
			district: string;
			streetAddress: string;
		};
	};

	type OrderHistoryItem = {
		orderId: string;
		orderStatus: string;
		deliveryStatus: string;
		orderDate: string;
		totalPrice: number;
	};

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
				Authorization: `Bearer ${authToken}`
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
				Authorization: `Bearer ${authToken}`
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
				Authorization: `Bearer ${authToken}`
			},
			credentials: 'include',
			body: JSON.stringify(userUpdateDTO)
		});
		const result = await response.json();
		return result.data;
	}
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Account Summary" />
		{#if userProfile}
			<SummaryCard
				cardTitle="Personal Info"
				cardItemMap={new Map([
					['First Name', userProfile.firstName],
					['Last Name', userProfile.lastName],
					['Email Addresss', userProfile.email],
					['Password', '****']
				])}
			/>
			<SummaryCard
				cardTitle="Shipping Info"
				cardItemMap={new Map([
					['Street Address', userProfile.shippingAddress.streetAddress],
					['District', userProfile.shippingAddress.district]
				])}
			/>
			<SummaryCard cardTitle="Payment Method" cardItemMap={new Map([['Card Number', '***']])} />
		{/if}
		<div>
			<div>Order Status</div>
			{#each Object.entries(orderHistory) as [id, orderDetail]}
				<div>
					<div>{orderDetail.orderId}</div>
					<div>{orderDetail.orderStatus}</div>
					<div>{orderDetail.orderDate}</div>
					<div>{orderDetail.totalPrice}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
