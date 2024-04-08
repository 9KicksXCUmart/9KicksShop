<script lang="ts">
	// export let data: data;
	async function getOrderSummary() {
		const login = {
		
		};
		const response = await fetch(`v1/auth/login`, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(login)
		});
		const result = await response.json();
		document.cookie = `jwt=${result.token};SameSite=None;Secure`;
		return result.data;
	}
</script>

<button
	on:click={() => {
		getOrderSummary();
	}}
>
	Testing Login
</button>
