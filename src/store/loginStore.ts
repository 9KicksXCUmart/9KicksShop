import { writable } from 'svelte/store';

export const loggedOut = writable(false);
export const loggedIn = writable(false);
export const userFirstName = writable('');
