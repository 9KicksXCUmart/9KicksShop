<script>
	import LowerNavBar from '$lib/components/layout/LowerNavBar.svelte';
	import UpperNavBar from '$lib/components/layout/UpperNavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';
</script>

<div class="min-h-screen">
	<UpperNavBar />
	<LowerNavBar />
	<slot />
</div>
<Footer />
