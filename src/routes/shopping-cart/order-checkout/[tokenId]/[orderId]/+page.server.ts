import type { PageServerLoad } from './$types';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export const load = (async ({ params, cookies }) => {
	const jwtToken = cookies.get('jwt');
	async function displayOrderDetails() {
		const response = await fetch(
			`${PUBLIC_BACKEND_URL}/api/v1/account-summary/order-details?orderId=${params.orderId}`,
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
	return {
		orderDetailData: await displayOrderDetails(),
		jwtToken
	};
}) satisfies PageServerLoad;
