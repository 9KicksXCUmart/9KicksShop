<script lang="ts">
	import Logo from '$lib/client/images/logo.png';
	import MobileLogo from '$lib/client/images/mobile_logo.png';
	import { Input } from '$lib/components/ui/input';
	import SignInDialog from './account-dialog/SignInDialog.svelte';
	import { UserRound } from 'lucide-svelte';
	import { loggedOut, loggedIn, userFirstName } from '$store/loginStore';
	import { PUBLIC_GO_BACKEND_URL, PUBLIC_KOTLIN_BACKEND_URL } from '$env/static/public';
	import { ShoppingBag, X } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	export let isLogin: boolean;
	export let jwtToken: string;
	export let user: string;
	let SignInOpen = false;
	let triggerLogin = false;

	async function validateToken() {
		const response = await fetch(`${PUBLIC_GO_BACKEND_URL}/v1/auth/validate-token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwtToken}`
			}
		});
		const result = await response.json();
		return result.success;
	}

	async function getUserFirstName(jwtToken: string) {
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

	function logout() {
		$loggedOut = true;
		triggerLogin = false;
		document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		goto('/');
	}
	function handleLogin() {
		triggerLogin = true;
	}

	$: if (user) {
		userFirstName.set('');
		triggerLogin = false;
	}
</script>

<!-- Top NavBar -->
<nav class="flex justify-center bg-[#f8fbf6]">
	<div class="flex items-center justify-between px-[17%] py-[1%] w-full">
		<a href="/"
			><img
				src={Logo}
				alt="9Kicks"
				class="h-[73px] w-[214px] min-h-[73px] min-w-[214px] hidden sm:flex"
			/><img src={MobileLogo} alt="9Kicks" class="h-[30px] sm:hidden flex" /></a
		>
		<form class="w-full ml-8 mr-5">
			<div
				class="relative flex flex-row items-center justify-between text-gray-400 focus-within:text-gray-600"
			>
				<button type="submit" class="absolute">
					<svg
						class="h-4 w-4 ml-3 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 56.966 56.966"
						style="enable-background:new 0 0 56.966 56.966;"
						xml:space="preserve"
						width="512px"
						height="512px"
					>
						<path
							d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
						/>
					</svg>
				</button>
				<Input
					placeholder="Search"
					class="pl-10 pr-3 font-semibold placeholder-gray-500 text-black"
				/>
			</div>
		</form>
		{#if (isLogin && !$loggedOut) || triggerLogin}
			<div class="flex flex-col items-end">
				<div class="flex flex-row gap-1">
					<a href="/account-summary">
						<UserRound
							class="transition hover:opacity-50 hover:scale-105 duration-300 cursor-pointer"
							strokeWidth={1.75}
						/>
					</a>
					{#if user === ''}
						<div class="w-max font-semibold">Hello,{$userFirstName}</div>
					{:else}
						<div class="w-max font-semibold">Hello,{user}</div>
					{/if}
				</div>
				<button
					class="whitespace-nowrap pl-2 pr-1 font-normal hover:opacity-50 duration-300"
					on:click={() => {
						logout();
					}}>Logout</button
				>
			</div>
			<a href="/shopping-cart" class="duration-200 pl-5">
				<ShoppingBag strokeWidth={1.75} class="hover:opacity-50 hover:scale-105 duration-300" />
			</a>
		{:else}
			<SignInDialog open={SignInOpen} on:isLogin={handleLogin} />
			<div class="duration-200 pl-5">
				<X strokeWidth={1.75} class="absolute text-red-400" />
				<ShoppingBag strokeWidth={1.75} />
			</div>
		{/if}
	</div>
</nav>
