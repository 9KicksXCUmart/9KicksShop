import type { Handle } from '@sveltejs/kit';
import { PUBLIC_KOTLIN_BACKEND_URL, PUBLIC_GO_BACKEND_URL } from '$env/static/public';

async function getUserFirstName(jwtToken: string | undefined) {
	const response = await fetch(`${PUBLIC_KOTLIN_BACKEND_URL}/api/v1/account-summary`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwtToken}`
		}
	});
	const result = await response.json();
	return result.data.firstName;
}

export const handle: Handle = async ({ event, resolve }) => {
	const session: string | undefined = event.cookies.get('jwt');
	let currentUser: string;
	if (session) {
		currentUser = await getUserFirstName(session);
		event.locals.isLogin = true;
		event.locals.userName = currentUser;
	} else {
		event.locals.isLogin = false;
		event.locals.userName = '';
	}
	return resolve(event);
};
