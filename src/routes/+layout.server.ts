import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, cookies }) => {
	const jwtToken = cookies.get('jwt');
	return {
		isLoginedIn: locals.isLogin,
		user: locals.userName,
		jwtToken
	};
}) satisfies LayoutServerLoad;
