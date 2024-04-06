import type { PageServerLoad } from './$types';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export const load = (async ({ cookies }) => {
	const jwtToken = cookies.get('jwt');
	async function getOrderSummary() {
		const response = await fetch(`${PUBLIC_BACKEND_URL}/api/v1/payment/order-summary`, {
			method: 'GET',

			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			}
		});
		const result = await response.json();
		return result.data;
	}

	return {
		orderSummaryData: await getOrderSummary()
	};
}) satisfies PageServerLoad;
