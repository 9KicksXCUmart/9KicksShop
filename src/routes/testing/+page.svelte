<script lang="ts">
	// export let data: data;
	async function getOrderSummary() {
		const login = {
			email: 'locolin99@gmail.com',
			password: 'colin123'
		};
		const response = await fetch(`http://localhost:9000/v1/auth/login`, {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(login)
		});
		const result = await response.json();
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
