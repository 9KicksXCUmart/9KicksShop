<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import type { OrderDetail } from '$lib/model/OrderDetail';
	import SummaryCard from '$lib/components/ui/account-summary/SummaryCard.svelte';
	import OrderProductList from '$lib/components/ui/account-summary/OrderProductList.svelte';
	import { Circle } from 'svelte-loading-spinners';
	
	const orderId: string = $page.params.orderId;
	export let data: PageData;

	// data.jwtToken =
	// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIyMzEwMzAsImVtYWlsIjoibG9jb2xpbjk5QGdtYWlsLmNvbSIsInVzZXJJRCI6ImM3YWNlNDdhLWFkZjktNDE4Mi05YWRmLTk0YTI0YWE0YjRkYyJ9.kIKEqeC6T579RwDcBYXsHZoEFfwA4UEjbhL0HBfCPTI';

	let orderDetails: OrderDetail;

	let testingProductDetail = {
		'c16def29-9c70-4475-8ef5-95a60cc2a8a6': {
			productId: 'PRODUCT#d0dfc9f3-8dfc-4c26-aa6a-6f81b4a7d52c',
			price: 210.0,
			quantity: 1,
			productImage:
				'https://images.footlocker.com/is/image/EBFL2/24453004?wid=267&hei=267&fmt=png-alpha',
			size: '10.0',
			productName: 'Nike Air Vapormax Plus',
			productCategory: "Men's"
		},
		'860401d1-5d91-465e-a290-f3880e70368f': {
			productId: 'PRODUCT#d0dfc9f3-8dfc-4c26-aa6a-6f81b4a7d52c',
			price: 210.0,
			quantity: 1,
			productImage:
				'https://images.footlocker.com/is/image/EBFL2/BBW550BB?wid=267&hei=267&fmt=png-alpha',
			size: '10.0',
			productName: 'Nike Air Vapormax Plus',
			productCategory: "Men's"
		}
	};

	onMount(async () => {
		orderDetails = await getOrderDetails();
	});

	async function getOrderDetails() {
		const response = await fetch(
			`${PUBLIC_BACKEND_URL}/api/v1/account-summary/order-details?` +
				new URLSearchParams({ orderId: orderId }).toString(),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.jwtToken}`
				}
			}
		);
		const result = await response.json();
		console.log(result);
		return result.data;
	}
</script>

<div>
	<div class="flex items-center w-full h-fit px-[17%] py-[1%] gap-4 justify-between">
		<div class="flex flex-row gap-4">
			<div class="text-black text-center text-3xl font-bold leading-normal">Order Detail</div>
			<div class="text-black text-center text-3xl font-extralight leading-normal">#{orderId}</div>
		</div>
		{#if orderDetails}
			<div class="text-gray-500 text-center text-3xl font-light leading-normal">
				{orderDetails.orderStatus}
			</div>
		{/if}
	</div>

	<div class="flex flex-col place-items-center w-full h-fit px-[17%]">
		<div class="flex flex-col justify-center items-center gap-5 flex-grow self-stretch mb-5">
			{#if orderDetails}
				<SummaryCard
					isLoading={false}
					isEditable={false}
					cardTitle=""
					cardItemMap={new Map([
						['Order No.', orderDetails.orderId.replace('ORDER', '')],
						['Order Date', orderDetails.orderDate.replace('T', ' ')],
						['Delivery Status', orderDetails.deliveryStatus],
						['Total Price', orderDetails.totalPrice]
					])}
				/>
				<SummaryCard
					isLoading={false}
					isEditable={false}
					cardTitle="Delivery Info"
					cardItemMap={new Map([
						['Street Address', orderDetails.shippingAddress.streetAddress],
						['District', orderDetails.shippingAddress.district]
					])}
				/>
				<!-- <OrderProductList products={orderDetails.orderItemDetail} /> -->
				<OrderProductList products={testingProductDetail} />
			{:else}
				<Circle size="40" color="#d2e8c3" unit="px" duration="1s" />
			{/if}
		</div>
	</div>
</div>
