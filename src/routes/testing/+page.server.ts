import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const jwtToken = cookies.get('jwt');
	async function getOrderSummary() {
		const login = {
			"email": "locolin99@gmail.com",
			"password": "colin123"
		}
		const response = await fetch(`https://go.9kicks.shop/v1/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			},
			credentials: "include",
			body: JSON.stringify(login)
		});
		const result = await response.json();
		return result.data;
	}
	return {
		orderSummaryData: await getOrderSummary(),
		jwtToken
	};
}) satisfies PageServerLoad;
