import type { PageServerLoad } from './$types';
import { PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';

export const load = (async ({ params, cookies }) => {
	const jwtToken = cookies.get('jwt');
	async function summarizePayment() {
		const response = await fetch(
			`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/payment/summarize-payment?token=${params.tokenId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwtToken}`
				}
			}
		);
		const result = await response.json();
		return result.data;
	}

	async function getOrderSummary() {
		const response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/payment/order-summary?`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			}
		});
		const result = await response.json();
		return result.data;
	}

	async function getShoppingCartItems() {
		const response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/shopping-cart?`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			}
		});
		const result = await response.json();
		return result.data.shoppingCartItemDetail;
	}
	return {
		paymentDetail: await summarizePayment(),
		orderSummaryDetail: await getOrderSummary(),
		purchaseItemDetails: await getShoppingCartItems(),
		jwtToken
	};
}) satisfies PageServerLoad;
