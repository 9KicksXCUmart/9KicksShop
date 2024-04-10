import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const jwtToken = cookies.get('jwt');
	return {
		jwtToken
	};
}) satisfies LayoutServerLoad;
