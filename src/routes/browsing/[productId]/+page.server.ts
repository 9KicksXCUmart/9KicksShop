import type { PageServerLoad } from './$types';

//get auth token, if any
export const load = (async ({ cookies }) => {
	const jwtToken = cookies.get('jwt');
	return {
		jwtToken
	};
}) satisfies PageServerLoad;
